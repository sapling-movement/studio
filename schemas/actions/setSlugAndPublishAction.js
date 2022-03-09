import { useState, useEffect } from 'react';
import { useDocumentOperation } from '@sanity/react-hooks';
import sanityClient from 'part:@sanity/base/client';
import slugify from '@sindresorhus/slugify';

export default function SetSlugAndPublishAction(props) {
  const { patch, publish } = useDocumentOperation(props.id, props.type);
  const [ isPublishing, setIsPublishing ] = useState(false);

  useEffect(() => {
    // if the isPublishing state was set to true and the draft has changed
    // to become `null` the document has been published
    if(isPublishing && !props.draft) {
      setIsPublishing(false);
    }
  }, [props.draft]);

  return {
    disabled: publish.disabled,
    label: isPublishing ? 'Publishing…' : 'Publish',
    onHandle: async () => {
      setIsPublishing(true);

      const client = sanityClient.withConfig({apiVersion: `2022-01-10`});

      let slug = slugify(props.draft.pageBase.title);

      if(props.draft.pageBase.parent) {
        const query = `*[_id == $ref][0]{"parentName": pageBase.title}`;
        const params = { ref: props.draft.pageBase.parent._ref };
        const { parentName } = await client.fetch(query, params);
        slug = `${slugify(parentName)}/${slug}`;
      }

      patch.execute([
        {
          set: {
            'pageBase.slug': {
              _type: 'slug',
              current: slug
            }
          }
        }
      ]);

      publish.execute();

      props.onComplete();

    }
  }
}

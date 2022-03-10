import { useState, useEffect } from 'react';
import { useDocumentOperation } from '@sanity/react-hooks';
import sanityClient from 'part:@sanity/base/client';
import slugify from '@sindresorhus/slugify';

const pathLangPrefixes = {
  de: '',
  en: '/en'
}

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

      const base = props.draft.pageBase;

      let slug = slugify(base.slugBase?.current ?? '');

      const query = `*[_id == $ref][0]{"parentSlug": pageBase.slugBase.current}`;

      if(base.inheritedParent || base.parent) {

        const params = { ref: base.inheritedParent?._ref ?? base.parent?._ref };
        const { parentSlug } = await client.fetch(query, params);
        slug = `${parentSlug}/${slug}`;

      }

      slug = `${pathLangPrefixes[props.draft?.__lang ?? 'de']}/${slug}`

      patch.execute([
        {
          set: {
            'pageBase.fullSlug': slug
          }
        }
      ]);

      publish.execute();

      props.onComplete();

    }
  }
}

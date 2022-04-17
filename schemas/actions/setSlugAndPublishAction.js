import { useState, useEffect } from 'react';
import { useDocumentOperation } from '@sanity/react-hooks';
import sanityClient from 'part:@sanity/base/client';
import slugify from '@sindresorhus/slugify';
import { updateIntlFieldsForDocument } from 'sanity-plugin-intl-input/lib/utils';

const pathLangPrefixes = {
  de: '',
  en: '/en'
}

/**
 * Todos:
 * - INTL Fields do not get generated automatically
 * - hardcoded parents do not use translated docs (only use slug of default language)
 */

export default function SetSlugAndPublishAction({ id, type, draft, onComplete }) {
  const { patch, publish } = useDocumentOperation(id, type);
  const [ isPublishing, setIsPublishing ] = useState(false);

  useEffect(() => {
    // if the isPublishing state was set to true and the draft has changed
    // to become `null` the document has been published
    if(isPublishing && !draft) {
      setIsPublishing(false);
    }
  }, [draft]);

  return {
    disabled: publish.disabled,
    label: isPublishing ? 'Publishing…' : 'Publish',
    onHandle: async () => {
      setIsPublishing(true);

      if (['modularPage', 'blogPost', 'category'].includes(draft._type)) {
        const client = sanityClient.withConfig({apiVersion: `2022-01-10`});
  
        const base = draft.pageBase;
  
        let slug = slugify(base.slugBase?.current ?? '');
  
        const query = `*[_id == $ref][0]{"parentSlug": pageBase.slugBase.current}`;
  
        if(base.inheritedParent || base.parent) {
  
          const params = { ref: base.inheritedParent?._ref ?? base.parent?._ref };
          const { parentSlug } = await client.fetch(query, params);
          slug = `${parentSlug}/${slug}`;
  
        }
  
        slug = `${pathLangPrefixes[draft?.__lang ?? 'de']}/${slug}`
  
        patch.execute([
          {
            set: {
              'pageBase.fullSlug': slug
            }
          }
        ]);
      }

      publish.execute();
      // the patch/set creates a new version of the document, so the ID is outdated
      // await updateIntlFieldsForDocument(id, type);
      

      /**
       * Todo: query for latest revision id
       * 1. Get Document ID
       * 2. Get Latest Revision ID -> Query https://b5y7zctp.api.sanity.io/v2022-03-10/data/history/production/documents/drafts.3978c05e-c447-4fc5-94fe-3e6867d23a90?time=2022-03-11T10:20:00Z
       */

      if (onComplete) onComplete();

    }
  }
}

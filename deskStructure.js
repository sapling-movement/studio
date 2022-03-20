import S from '@sanity/desk-tool/structure-builder';
import * as Structure from 'sanity-plugin-intl-input/lib/structure';
import Iframe from 'sanity-plugin-iframe-pane';

// or manual implementation to use with your own custom desk structure
export const getDefaultDocumentNode = ({schemaType}) => {
  if (schemaType === ('modularPage' || 'blogPost')) {
    return S.document().views([
      S.view.form(),
      S.view
        .component(Iframe)
        .options({
          url: (doc) => {
            const base = process.env.SANITY_ACTIVE_ENV === 'production'
              ? 'https://www.sapling-movement.com'
              : 'http://localhost:8888'
            return `${base}/preview/${doc._id}/`;
          },
          reload: {
            button: true,
          },
        })
        .title('Preview'),
      Structure.getDocumentNodeViewsForSchemaType(schemaType)[1]
    ])
  }
  return S.document();
};

export default () => {
  const items = Structure.getFilteredDocumentTypeListItems();
  return S.list()
    .id('__root__')
    .title('Content')
    .items(items);
};

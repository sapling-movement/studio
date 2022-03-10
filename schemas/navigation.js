export default {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  i18n: true,
  fields: [
    {
      name: 'item',
      title: 'Item',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'modularPage' }],
          options: {
            filter: ({ document }) => {
              return {
                filter: '__lang == $lang',
                params: {
                  lang: document.__lang
                }
              }
            }
          }
        }
      ]
    }
  ]
}

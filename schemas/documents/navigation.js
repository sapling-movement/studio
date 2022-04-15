export default {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  i18n: true,
  fields: [
    {
      name: 'items',
      title: 'Items',
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
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: 'Navigation'
      }
    }
  },
}

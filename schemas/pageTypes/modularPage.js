export default {
  name: 'modularPage',
  title: 'Modular Page',
  type: 'document',
  i18n: true,
  fields: [
    {
      name: 'pageBase',
      title: 'Page base',
      type: 'pageBase',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          name: 'heroSection',
          type: 'heroSection',
        },
        {
          name: 'portableText',
          type: 'portableText',
        },
        {
          name: 'articleList',
          type: 'articleList',
        },
        {
          name: 'vectorText',
          type: 'vectorText'
        }
      ],
    },
  ],
  preview: {
    select: {
      title: 'pageBase.title'
    }
  }
}

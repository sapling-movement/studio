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
          title: 'Hero section',
          type: 'heroSection',
        },
        {
          name: 'portableText',
          title: 'Portable text',
          type: 'portableText',
        },
        {
          name: 'articleList',
          title: 'Article list',
          type: 'articleList',
        },
        // {
        //   type: 'object',
        //   fields: [
        //     {
        //       name: 'text',
        //       title: 'Text',
        //       type: 'array',
        //       of: [
        //         { type: 'block' },
        //         { type: 'imageWithCaption' }
        //       ],
        //     }
        //   ]
        // }
      ],
    },
    // {
    //   name: 'text',
    //   title: 'Text',
    //   type: 'array',
    //   of: [
    //     { type: 'block' },
    //     { type: 'imageWithCaption' }
    //   ],
    // },
  ],
  preview: {
    select: {
      title: 'pageBase.title'
    }
  }
}

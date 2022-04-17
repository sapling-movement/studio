export default {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  i18n: true,
  fields: [
    {
      name: 'pageBase',
      title: 'Page base',
      type: 'pageBase',
    },
    {
      name: 'portableText',
      type: 'portableText',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'category' }],
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
      ],
    },
    // {
    //   name: 'categories',
    //   title: 'Categories',
    //   type: 'reference',
    //   to: [{ type: 'category' }],
    //   options: {
    //     filter: ({ document }) => {
    //       return {
    //         filter: '__lang == $lang',
    //         params: {
    //           lang: document.__lang
    //         }
    //       }
    //     }
    //   }
    // },
  ],
  preview: {
    select: {
      title: 'pageBase.title'
    }
  },
  initialValue: {
    __lang: 'de',
    pageBase: {
      inheritedParent: {
        _type: 'reference',
        _ref: '2b6cf97f-7708-48f5-a544-e0d78c1fc34e'
      }
    }
  }
}

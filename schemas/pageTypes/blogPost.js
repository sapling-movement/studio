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
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'imageWithCaption' }
      ],
    },
    {
      name: 'portableText',
      type: 'portableText',
    },
  ],
  preview: {
    select: {
      title: 'pageBase.title'
    }
  },
  initialValue: {
    pageBase: {
      inheritedParent: {
        _type: 'reference',
        _ref: '2b6cf97f-7708-48f5-a544-e0d78c1fc34e'
      }
    }
  }
}

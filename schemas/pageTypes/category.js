export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  i18n: true,
  fields: [
    {
      name: 'pageBase',
      title: 'Page base',
      type: 'pageBase',
    },
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

export default {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
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
      of: [{ type: 'block' }],
    },
  ],
  preview: {
    select: {
      title: 'pageBase.title'
    }
  }
}

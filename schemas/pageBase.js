export default {
  name: 'pageBase',
  title: 'Page base',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'pageBase.title'
      }
    },
    {
      name: 'parent',
      title: 'Parent',
      type: 'reference',
      to: [
        { type: 'modularPage' },
      ],
    },
  ],
}

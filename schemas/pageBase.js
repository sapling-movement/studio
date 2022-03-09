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
      name: 'slugBase',
      title: 'Slug base',
      type: 'slug',
      options: {
        source: 'pageBase.title'
      }
    },
    {
      name: 'fullSlug',
      title: 'Full slug',
      type: 'string',
      readOnly: true
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

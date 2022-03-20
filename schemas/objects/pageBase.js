export default {
  name: 'pageBase',
  title: 'Page base',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'h1Title',
      title: 'H1 title',
      description: 'Use this to override the regular title in the H1 on the page.',
      type: 'string'
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
      name: 'inheritedParent',
      title: 'Inherited parent',
      type: 'reference',
      hidden: true,
      to: [
        { type: 'modularPage' }
      ]
    },
    {
      name: 'parent',
      title: 'Parent',
      type: 'reference',
      hidden: ({ document }) => document?.pageBase?.inheritedParent !== undefined,
      to: [
        { type: 'modularPage' },
      ],
    },
  ],
}

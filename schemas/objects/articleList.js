export default {
  name: 'articleList',
  title: 'Article list',
  type: 'object',
  fields: [
    {
      name: 'loadAll',
      title: 'Load all',
      type: 'boolean',
      description: 'This overrides all other settings and renders all articles.'
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },
  ],
  preview: {
    select: {
      tags: 'tags',
      all: 'loadAll'
    },
    prepare(selection) {
      const { tags, all } = selection;
      const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });
      let title = all
        ? 'All Articles'
        : `Articles with tags: ${formatter.format(tags.map(tag => `"${tag}"`))}`;
      return {
        title
      }
    }
  }
}

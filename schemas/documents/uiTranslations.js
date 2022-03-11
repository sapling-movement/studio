export default {
  name: 'uiTranslations',
  title: 'UI translations',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'translations',
      title: 'Translations',
      type: 'array',
      of: [{type: 'translation'}],
    },
  ],
}

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
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'imageWithCaption' }
      ],
    },
  ],
  preview: {
    select: {
      title: 'pageBase.title'
    }
  }
}

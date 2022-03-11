export default {
  name: 'portableText',
  title: 'Portable text',
  type: 'object',
  fields: [
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
}
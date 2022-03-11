export default {
  name: 'imageWithCaption',
  title: 'Image with caption',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alt caption',
          type: 'string',
        },
      ]
    },
  ],
}

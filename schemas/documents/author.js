export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'firstName',
      title: 'First name',
      type: 'string',
    },
    {
      name: 'lastName',
      title: 'Last name',
      type: 'string',
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' }
          ],
          lists: [],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' }
            ],
          }
        }
      ]
    },
  ],
}

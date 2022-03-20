export default {
  name: 'heroSection',
  title: 'Hero section',
  type: 'object',
  fields: [
    {
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          {title: 'Left aligned', value: 'leftAligned'},
          {title: 'Centered', value: 'centered'},
          {title: 'Right aligned', value: 'rightAligned'},
        ],
        layout: 'radio'
      },
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'overlay',
      title: 'Overlay',
      type: 'image'
    },
    {
      name: 'backgroundImage',
      title: 'Background image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
  ],
  initialValue: {
    layout: 'leftAligned'
  },
  preview: {
    select: {
      title: 'title',
      media: 'backgroundImage'
    }
  }
}
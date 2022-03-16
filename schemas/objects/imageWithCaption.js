import React from 'react';
import ImagePreview from '../../components/imagePreview';

export default {
  name: 'imageWithCaption',
  title: 'Image with caption',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt description',
          type: 'string',
        },
        {
          name: 'caption',
          title: 'Caption',
          type: 'string',
        },
        {
          name: 'altAsCaption',
          title: 'Alt as caption',
          type: 'boolean',
          description: 'If activated, the value for the alt tag will be rendered as the image caption.'
        },
        {
          name: 'aspectRatio',
          title: 'Aspect ratio',
          type: 'string',
          description: 'Use format `16x9`'
        },
      ]
    },
  ],
  preview: {
    select: {
      imageUrl: 'image.asset.url'
    },
    component: ImagePreview
  }
}

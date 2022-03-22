import { FiLink, FiExternalLink } from 'react-icons/fi'

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
        {
          type: 'block',
          marks: {
            annotations: [
              {
                title: 'Internal link',
                name: 'internalLink',
                type: 'object',
                blockEditor: {
                  icon: FiLink
                },
                fields: [
                  {
                    name: 'reference',
                    type: 'reference',
                    to: [
                      { type: 'modularPage' },
                      { type: 'blogPost' }
                    ],
                    options: {
                      filter: ({ document }) => {
                        return {
                          filter: '__lang == $lang',
                          params: {
                            lang: document.__lang
                          }
                        }
                      }
                    }
                  }
                ]
              },
              {
                title: 'External link',
                name: 'externalLink',
                type: 'object',
                blockEditor: {
                  icon: FiExternalLink
                },
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                    validation: Rule => Rule.uri({allowRelative: false, scheme: ['https', 'http', 'mailto', 'tel']})
                  },
                ]
              }
            ]
          }
        },
        { type: 'imageWithCaption' }
      ],
    },
  ],
}
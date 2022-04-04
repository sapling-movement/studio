import toPlainText from "../../utils/toPlainText";

export default {
  name: 'vectorText',
  title: 'Vector text',
  type: 'object',
  fields: [
    {
      name: 'vectorIcon',
      title: 'Vector icon',
      type: 'image',
    },
    {
      name: 'portableText',
      type: 'portableText',
    },
  ],
  preview: {
    select: {
      portableText: 'portableText',
      media: 'vectorIcon'
    },
    prepare(value) {
      const {portableText, media} = value;
      const title = portableText.text ? toPlainText(portableText.text, 1) : 'Kein Titel.';
      return {
        title,
        media
      }
    }
  }
}

import React from 'react'

export default class ImagePreview extends React.Component {
  render() {
    const {value} = this.props
    if (value && value.imageUrl) {
      return (
        <img
          src={`${value.imageUrl}?w=720`}
          style={{
            borderRadius: '4px',
            display: 'flex',
            height: 'auto',
            width: '100%',
          }}
        />
      )
    } else {
      return <span>No asset selected</span>
    }
  }
}
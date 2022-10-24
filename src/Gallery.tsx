import { Col, Image, Row } from 'antd'
import React, { Fragment } from 'react'
require('./style/gallery.css')

export default function Gallery() {
  let items = []
  for (let i = 1; i < 16; i++) {
    items.push(`images/gallery-${i}.JPG`)
  }
  let itemList = items.map(item => {
    return (
      <Col span={8}>
        <Image className="galleryImage" src={item} />
      </Col>
    )
  })

  return (
    <Fragment>
      <div className="center">
        <p className="textBig">Our</p>
        <p className="textCurly">Gallery </p>
      </div>
      {/* Video */}
      <div className="video">
        <iframe
          width="90%"
          height="100%"
          src="https://www.youtube.com/embed/GRonxog5mbw?autoplay=1&loop=1&playlist=GRonxog5mbw"
          frameBorder="0"
          allowFullScreen></iframe>
      </div>
      {/* Photos */}
      <Row className="galleryRow">
        <Image.PreviewGroup>{itemList}</Image.PreviewGroup>
      </Row>

      {/* IG Filter */}
    </Fragment>
  )
}

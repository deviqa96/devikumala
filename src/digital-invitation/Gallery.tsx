import { Button, Col, Image, Row } from 'antd'
import React, { Fragment, useEffect, useState } from 'react'
import { useWindowSize } from '../Util'
import { InstagramOutlined, FacebookOutlined } from '@ant-design/icons'
require('../style/digital-invitation/gallery.css')

const videoLink= "https://drive.google.com/uc?export=view&id=1HInz-fMQESLVZ6cVeT9bpMcflDFgmm5p"
export default function Gallery() {
  let items :any = []
  let idDrive :any = [
    '1msAyadlq_iSEbYV05iLrIRNtyPBJYP4s',
    '1dSRfCiTV4ihRWFn1BKMWv9wBbwy1-dbJ',
    '1mNjlaaDHIfsuvS5LwwwBIxrY2tn9nWYY',
    '1Uq03M-exyckSG8ipaMk4dHoeqXYvagnK',
    '1Lm4KxMlgB7epit-a2G6zme-xMARtd2Kp',
    '1Fx_0sif8bq1htCZfloau900Z6V7TICwY',
    '1rXoyjuLuqGhgTwp9TfdUrj1M84nvkBg8',
    '1kdmaI5kUJHn6KLNVzfSChvLIGqQXljlK',
    '1ZdE9u0wFO4HaIpXYhl88uajdDBqHEAvH',
    '16EXFSf0xFXzBsoHXAjVmpWPZWXccbDT1',
    '11kCZNtmsJ7RaWAt8qip8JEW2aduzy5Af',
    '1qU_sGBgxoYi8qbMztindV0yY0hvRcP5j',
    '12vMzNQTd9MCTcCovWSWYYhKi2YZck5PL',
    '12vMzNQTd9MCTcCovWSWYYhKi2YZck5PL',
    '12vMzNQTd9MCTcCovWSWYYhKi2YZck5PL',
  ]
  for (let i = 0; i < idDrive.length; i++) {
    // items.push(`https://drive.google.com/uc?export=view&id=${idDrive[i]}`)
    items.push(`digital-invitation/images/gallery-${i+1}.jpg`)
  }
  let itemList = items.map((item :any, index:any) => {
    return (
      <Col span={8} style={index < 3 ? {backgroundColor: '#110b0c'} : index < 6 ? {backgroundColor: '#bc0001'} : {backgroundColor: '#ECD4D3'}}>
        <Image
          className="galleryImage"
          src={item}
          fallback="data:image/png;base64,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"
        />
      </Col>
    )
  })

  const size = useWindowSize()
  const [width, setWidth] = useState('320')
  const [height, setHeight] = useState('180')

  useEffect(() => {
    setWidth(size.width <= 640 ? '320' : '640')
    setHeight(size.width <= 640 ? '180' : '360')
  }, [size])

  return (
    <Fragment>
      <div className="center">
        <p className="textBig">Our</p>
        <p className="textCurly">Gallery </p>
      </div>
      {/* Video */}
      <div className="video">
        {/* <iframe
          width="90%"
          height="100%"
          src="https://www.youtube.com/embed/GRonxog5mbw?autoplay=1&loop=1&playlist=GRonxog5mbw"
          frameBorder="0" 
          allowFullScreen></iframe> */}
        <video width={width} height={height} autoPlay loop muted controls webkit-playsinline playsInline>
          <source
            src={videoLink}
            type="video/mp4"></source>
        </video>
      </div>
      {/* Photos */}
      <Row className="galleryRow" >
        <Image.PreviewGroup>{itemList}</Image.PreviewGroup>
      </Row>

      {/* IG Filter */}
      <Row gutter={20} className="coupleHeader center">
        <p className="titleFilter">Instagram & Facebook Filter </p>
        <p className="center"> Share our wedding moments in Instagram or facebook by clicking the button below:</p>
        <Col lg={12} md={12} sm={24} xs={24} className="center">
          <Button block className="buttonIgFilter" href="https://www.instagram.com/ar/3268829150024579/" target="blank">
            <InstagramOutlined /> Use Instagram Filter
          </Button>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24} className="center">
          <Button
            block
            className="buttonIgFilter"
            href="https://www.facebook.com/fbcameraeffects/tryit/3268829150024579/"
            target="blank">
            <FacebookOutlined /> Use Facebook Filter
          </Button>
        </Col>
      </Row>
    </Fragment>
  )
}

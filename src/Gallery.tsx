import { Button, Col, Image, Row } from 'antd'
import React, { Fragment, useEffect, useState } from 'react'
import { useWindowSize } from './Util'
import { InstagramOutlined, FacebookOutlined } from '@ant-design/icons'
require('./style/gallery.css')

export default function Gallery() {
  let items = []
  let idDrive = [
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
    items.push(`https://drive.google.com/uc?export=view&id=${idDrive[i]}`)
  }
  let itemList = items.map(item => {
    return (
      <Col span={8}>
        <Image className="galleryImage" src={item} />
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
            src="https://drive.google.com/uc?export=view&id=1HInz-fMQESLVZ6cVeT9bpMcflDFgmm5p"
            type="video/mp4"></source>
        </video>
      </div>
      {/* Photos */}
      <Row className="galleryRow">
        <Image.PreviewGroup>{itemList}</Image.PreviewGroup>
      </Row>

      {/* IG Filter */}
      <Row className="coupleHeader center">
        <p className="titleFilter">Instagram & Facebook Filter </p>
        <p className="center"> Share our wedding moments in Instagram or facebook by clicking the icon below:</p>
        <Col lg={12} md={12} sm={24} xs={24} className="center">
          <Button block className="buttonIgFilter">
            <InstagramOutlined /> Use Instagram Filter
          </Button>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24} className="center">
          <Button block className="buttonIgFilter">
            <FacebookOutlined /> Use Facebook Filter
          </Button>
        </Col>
      </Row>
    </Fragment>
  )
}

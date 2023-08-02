import { Button, Col, Row } from 'antd'
import React, { Fragment } from 'react'
import { InstagramOutlined, FacebookOutlined } from '@ant-design/icons'

export default function ExternalLinks() {
  return (
    <Fragment>
      <div className="externalLink">
        <Row gutter={20} className=" transbox center">
          <p className="titleFilter">Instagram & Facebook Filter </p>
          <p className="center"> Share our wedding moments in Instagram or Facebook by clicking the button below:</p>
          <Col lg={12} md={12} sm={24} xs={24} className="center">
            <Button block className="buttonIgFilter" href='https://www.instagram.com/ar/3268829150024579/' target='blank'>
              <InstagramOutlined /> Use Instagram Filter
            </Button>
          </Col>
          <Col lg={12} md={12} sm={24} xs={24} className="center">
            <Button block className="buttonIgFilter" href='https://www.facebook.com/fbcameraeffects/tryit/3268829150024579/' target='blank'>
              <FacebookOutlined /> Use Facebook Filter
            </Button>
          </Col>
        </Row>
        <div className="bottom center">
          © 2022 Copyright Byvidé
        </div>
      </div>
    </Fragment>
  )
}

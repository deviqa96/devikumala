import { Button, Col, Row } from 'antd'
import React, { Fragment } from 'react'
import { InstagramOutlined, FacebookOutlined } from '@ant-design/icons'

export default function ExternalLinks() {
  return (
    <Fragment>
      <div className="externalLink">
        <Row className=" transbox center">
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
      </div>
    </Fragment>
  )
}

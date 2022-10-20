import React, { Fragment } from 'react'
import { Row, Col, Button, Popover, Image, Tooltip, Card } from 'antd'
import { CopyOutlined, QrcodeOutlined } from '@ant-design/icons'

require('./style/rsvp.css')
export default function RsvpGift() {
  function copy(copyText: string) {
    return copyText
  }

  return (
    <Fragment>
      <div className="center">
        <p className="textBig">Wedding</p>
        <p className="textCurly">Gift </p>
      </div>
      <Row className="coupleHeader">
        <p className="center"> We are happy to receive your congratulary gifts through our account below. </p>
      </Row>
      <Row justify='center' style={{backgroundColor:'#F3F7FA'}}>
        <Col span={12} lg={8} md={10} sm={12} xs={24} className="cardCol">
          <Card size="small" className="accountCard">
            <p className="accountLogo"><Image src="https://www.bca.co.id/-/media/Feature/Card/List-Card/Tentang-BCA/Brand-Assets/Logo-BCA/Logo-BCA_Biru.png"  />
            </p>
            <Popover
              content={
                <Image
                  height="400px"
                  src="https://drive.google.com/uc?export=view&id=1OWxjthyH4XPHwrI6mEbaXGU3OxMqU1a9"
                />
              }
              trigger="click">
              <QrcodeOutlined className="qrIcon" />
            </Popover>
            <div className="accountNumber">
              0692290559{' '}
              <Tooltip placement="top" title={'Copied to clipboard'} trigger="click">
                <Button type="text"  onClick={() => copy('0692290559')} icon={<CopyOutlined />} />
              </Tooltip>
            </div>
            <p className="accountName">Charles Darvin</p>
          </Card>
        </Col>

        <Col span={12} lg={8} md={10} sm={12} xs={24} className="cardCol">
          <Card size="small" className="accountCard">
            <p className="accountLogo"><Image src="https://www.bca.co.id/-/media/Feature/Card/List-Card/Tentang-BCA/Brand-Assets/Logo-BCA/Logo-BCA_Biru.png"  />
            </p>
            <Popover
              content={
                <Image
                  height="400px"
                  src="https://drive.google.com/uc?export=view&id=1NfKgBRSwZX_U_3hS1fl740fTkqGyD9jn"
                />
              }
              trigger="click">
              <QrcodeOutlined className="qrIcon" />
            </Popover>
            <div className="accountNumber">
            5271364114{' '}
              <Tooltip placement="top" title={'Copied to clipboard'} trigger="click">
                <Button type="text" onClick={() => copy('5271364114')} icon={<CopyOutlined />} />
              </Tooltip>
            </div>
            <p className="accountName">Devi Kumala</p>
          </Card>
        </Col>

      </Row>
      <Row className='rsvpForm'>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSd5NbEe5K9fyGFp-7aHxNU3DugcZLO-sGjDgoB2IIk7vkXYAQ/viewform?embedded=true"
          width="100%"
          height="750px"
          frameBorder={0}
          scrolling={'no'}
          marginHeight={0}
          marginWidth={0}></iframe>
      </Row>
    </Fragment>
  )
}

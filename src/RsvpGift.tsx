import React, { Fragment,  useEffect,  useState } from 'react'
import { Row, Col, Button, Image, Tooltip, Card, } from 'antd'
import { CopyOutlined } from '@ant-design/icons'
import {useWindowSize} from './Util'

require('./style/rsvp.css')

export default function RsvpGift() {
  const size = useWindowSize()
  const [height, setHeight] = useState('1000px')

  useEffect(() => {
    setHeight(size.width <= 640 ? '1000px' : '1200px')
  }, [size])

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
        <p className="center"> We are happy to receive your congratulary gifts at the wedding venue or online through our account below </p>
      </Row>
      <Row justify="center" style={{ backgroundColor: '#F3F7FA' }}>
        <Col span={12} lg={8} md={10} sm={12} xs={24} className="cardCol">
          <Card size="small" className="accountCard">
            <p className="accountLogo">
              <Image
                preview={false}
                src="https://www.bca.co.id/-/media/Feature/Card/List-Card/Tentang-BCA/Brand-Assets/Logo-BCA/Logo-BCA_Biru.png"
              />
            </p>
            <div className="accountNumber">
              0692290559{' '}
              <Tooltip placement="top" title={'Copied to clipboard'} trigger="click">
                <Button type="text" onClick={() => copy('0692290559')} icon={<CopyOutlined />} />
              </Tooltip>
            </div>
            <p className="accountName">Charles Darvin</p>
          </Card>
        </Col>

        <Col span={12} lg={8} md={10} sm={12} xs={24} className="cardCol">
          <Card size="small" className="accountCard">
            <p className="accountLogo">
              <Image
                preview={false}
                src="https://www.bca.co.id/-/media/Feature/Card/List-Card/Tentang-BCA/Brand-Assets/Logo-BCA/Logo-BCA_Biru.png"
              />
            </p>
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
      <Row className="rsvpForm">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSd5NbEe5K9fyGFp-7aHxNU3DugcZLO-sGjDgoB2IIk7vkXYAQ/viewform?embedded=true"
          width="100%"
          height={height}
          frameBorder={0}
          scrolling={'no'}
          marginHeight={0}
          marginWidth={0}></iframe>
      </Row>
    </Fragment>
  )
}

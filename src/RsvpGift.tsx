import React, { Fragment,  useState } from 'react'
import { Row, Col, Button, Image, Tooltip, Card, Modal } from 'antd'
import { CopyOutlined, QrcodeOutlined } from '@ant-design/icons'

require('./style/rsvp.css')

export default function RsvpGift() {

  const [height, setHeight] = useState(window.innerWidth < 600 ? '860px' : '1000px')
  console.log(height)

  function copy(copyText: string) {
    return copyText
  }
  function resizeIframe(obj: any) {
    console.log(obj)

    setHeight(obj.contentWindow.document.documentElement.scrollHeight + 'px')
  }

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [qrImage, setQrImage] = useState('')

  const showModal = (img: any) => {
    setQrImage(img)
    setIsModalOpen(true)
  }
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Fragment>
      <Modal title="BCA QR Code" open={isModalOpen} footer={null} onCancel={handleCancel} style={{margin: 'auto', textAlign : 'center'}}>
        <Image preview={false} height="400px"  src={qrImage} />
      </Modal>

      <div className="center">
        <p className="textBig">Wedding</p>
        <p className="textCurly">Gift </p>
      </div>
      <Row className="coupleHeader">
        <p className="center"> We are happy to receive your congratulary gifts through our account below. </p>
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

            <QrcodeOutlined className="qrIcon" onClick={() => showModal('images/BCAQR-MBCA-CHARLES.jpg')} />

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
            <QrcodeOutlined className="qrIcon" onClick={() => showModal('images/BCAQR-MBCA-DEVI.jpg')} />
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
          onLoad={resizeIframe}
          marginHeight={0}
          marginWidth={0}></iframe>
      </Row>
    </Fragment>
  )
}

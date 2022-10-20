import React, { Fragment, useState } from 'react'
import { Col,  Row } from 'antd'
import { InstagramOutlined } from '@ant-design/icons'
import { useTransition, animated } from '@react-spring/web'

require('./style/couple.css')
const groomSlides = ['the-groom-one.JPG', 'the-groom-two.JPG', 'the-groom-three.JPG']
const brideSlides = ['the-bride-one.JPG', 'the-bride-two.JPG', 'the-bride-three.JPG']

export default function Couple() {
  const [brideIndex, setBrideIndex] = useState<any>(0)
  const brideTransitions = useTransition(brideIndex, {
    key: brideIndex,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 3000 },
    onRest: (_a: any, _b: any, item: any) => {
      if (brideIndex === item) {
        setBrideIndex((state: any) => (state + 1) % brideSlides.length)
      }
    },
    exitBeforeEnter: true,
  })
  return (
    <Fragment>
      <Row className="coupleHeader">
        <p className="center">We are gladly to invite you to our special moments</p>
      </Row>
      <div className="center">
        <p className="textBig">The</p>
        <p className="textCurly">Couple </p>
      </div>
      <Row>
        <Col className="groomImage" lg={8} md={8} sm={18} xs={18}>
          <div>
            {brideTransitions((style,i) => (
              <animated.div
                className='coupleImgBg'
                style={{
                  ...style,
                  // backgroundImage: `url(https://images.unsplash.com/${brideSlides[i]}?w=1920&q=80&auto=format&fit=crop)`,
                  backgroundImage: `url(images/${groomSlides[i]})`
                }}
              />
            ))}
          </div>
        </Col>
        <Col lg={4} md={4} sm={6} xs={6}>
          <p className="groom">Groom</p>
          <p className="theGroom">The</p>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <h4 className="nameGroom">
            <strong>Charles</strong>
          </h4>

          <p className="detailGroom">
            <a href="https://www.instagram.com/charlessdarvinn/?hl=en" rel="nofollow" target="_blank">
              <InstagramOutlined /> charlessdarvinn
            </a><br />
            Charles Darvin, S.T <br /> Son of MR. TJENG GIM HOK & MRS. KHE CHIU HONG
          </p>
        </Col>
      </Row>
      <Row className="hashtag">
        <Col span={24}>
          <p>#DEVendLESslove</p>
        </Col>
      </Row>
      <Row>
        <Col lg={4} md={4} sm={6} xs={6}>
          <p className="bride">Bride</p>
          <p className="theBride">The</p>
        </Col>
        <Col className="brideImage" lg={8} md={8} sm={18} xs={18}>
          {/* <Image src="https://drive.google.com/uc?export=view&id=1risFuRnvF3gBWsJ7t2tc8VmDqNr6zvZK" /> */}
          <div>
            {brideTransitions((style,i) => (
              <animated.div
                className='coupleImgBg'
                style={{
                  ...style,
                  // backgroundImage: `url(https://images.unsplash.com/${brideSlides[i]}?w=1920&q=80&auto=format&fit=crop)`,
                  backgroundImage: `url(images/${brideSlides[i]})`
                }}
              />
            ))}
          </div>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <h4 className="nameBride">
            <strong>Devi</strong>
          </h4>

          <p className="detailBride">
            <a href="https://www.instagram.com/devieqa/?hl=en" rel="nofollow" target="_blank">
              <InstagramOutlined /> devieqa
            </a><br />
            Devi Kumala, S.Kom <br /> Daughter of MR. PHAN KIM CHUN & MRS. KO MIAW KHIUK 
          </p>
        </Col>
      </Row>
    </Fragment>
  )
}

import React, { Fragment, useState } from 'react'
import { Col,  Row } from 'antd'
import { InstagramOutlined } from '@ant-design/icons'
import { useTransition, animated } from '@react-spring/web'

require('./style/couple.css')
const groomSlides = ['18_3D3L0shb-VTm7XDU6OUqWi8RfrLeJz', '1jsHd1SktbJ6qcc5oEhirOlrLV1fROghz', '1yqm3iPNM04BVs9SJ3jH9r-1_gwWk_Xk-'];
const brideSlides = ['1fUxFwwCX7T5KBHPgnXbDQfxVay1QMo5j', '1Tf4McZor26aFsh7BJnEk44oFcgGXGNG2', '1Tf4McZor26aFsh7BJnEk44oFcgGXGNG2'];

export default function Couple() {
  const [brideIndex, setBrideIndex] = useState<any>(0)
  const brideTransitions = useTransition(brideIndex, {
    key: brideIndex,
    from: { x: 0, opacity: 0.2 },
    enter: { x: 0, opacity: 1 },
    leave: { x: 0 , opacity: 1 },
    config: { duration: 3000 },
    onRest: (_a: any, _b: any, item: any) => {
      if (brideIndex === item) {
        setBrideIndex((state: any) => (state + 1) % brideSlides.length)
      }
    },
    exitBeforeEnter: true,
  })
  const [groomIndex, setGroomIndex] = useState<any>(0)
  const groomTransitions = useTransition(brideIndex, {
    key: groomIndex,
    from: { x: 0, opacity: 0.2 },
    enter: { x: 0, opacity: 1 },
    leave: { x: 0 , opacity: 1 },
    config: { duration: 3000 },
    onRest: (_a: any, _b: any, item: any) => {
      if (groomIndex === item) {
        setGroomIndex((state: any) => (state + 1) % groomSlides.length)
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
            {groomTransitions((style,i) => (
              <animated.div
                className='coupleImgBg'
                style={{
                  ...style,
                  // backgroundImage: `url(https://images.unsplash.com/${brideSlides[i]}?w=1920&q=80&auto=format&fit=crop)`,
                  backgroundImage: `url(https://drive.google.com/uc?export=view&id=${groomSlides[i]})`
                }}
              />
            ))}
          </div>
        </Col>
        <Col lg={4} md={4} sm={6} xs={6}>
          <p className="groom">Groom</p>
          <p className="theGroom">The</p>
        </Col>
        <Col className='divGroom' lg={12} md={12} sm={24} xs={24}>
          <h4 className="nameGroom">
            <strong>C H A R L E S</strong>
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
          <a href='https://www.instagram.com/explore/tags/devendlesslove' rel="nofollow" target="_blank">#DEVendLESslove </a>
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
                  backgroundImage: `url(https://drive.google.com/uc?export=view&id=${brideSlides[i]})`
                }}
              />
            ))}
          </div>
        </Col>
        <Col className='divBride'  lg={12} md={12} sm={24} xs={24}>
          <h4 className="nameBride">
            <strong>D E V I</strong>
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

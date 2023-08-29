import React, { Fragment, useRef, useState } from 'react'
import { Row, Col, Button, Card, Image } from 'antd'
import { EnvironmentOutlined } from '@ant-design/icons'
import { useSpring, animated, useTransition } from '@react-spring/web'
import { useIntersectionObserver } from '../routes/Component/Util'
require('../style/digital-invitation/main.css')
require('../style/digital-invitation/schedule.css')

export default function Schedule() {
  const triggerRef = useRef<any>()
  const triggerRef2 = useRef<any>()
  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: true,
  })
  const dataRef2 = useIntersectionObserver(triggerRef2, {
    freezeOnceVisible: true,
  })
  const { numberDate } = useSpring<any>({
    from: { numberDate: dataRef?.isIntersecting ? 0 : 8 },
    to: { numberDate: dataRef?.isIntersecting ? 8 : 0 },
    delay: 100,
    config: { duration: 1000 },
  })
  const { numberDate2 } = useSpring<any>({
    from: { numberDate2: dataRef2?.isIntersecting ? 0 : 8 },
    to: { numberDate2: dataRef2?.isIntersecting ? 8 : 0 },
    delay: 100,
    config: { duration: 1000 },
  })

  const receptionSlides = [
    'images/reception-1.jpg',
    'images/reception-2.jpg',
    'images/reception-3.jpg',
    // 'https://drive.google.com/uc?export=view&id=1WAI0djxb8NWpnwRvBvou0SMHSTh_B-PQ',
    // 'https://drive.google.com/uc?export=view&id=1KmSJDS-5OQfFMCcPC1cft9uJyS1LTx7E',
    // 'https://drive.google.com/uc?export=view&id=12fqFFd5AVtBZhSsMy5Wp1sKB1ZF684jK',
  ]
  const [brideIndex, setBrideIndex] = useState<any>(0)
  const brideTransitions = useTransition(brideIndex, {
    key: brideIndex,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 1 },
    config: { duration: 3000 },
    onRest: (_a: any, _b: any, item: any) => {
      if (brideIndex === item) {
        setBrideIndex((state: any) => (state + 1) % receptionSlides.length)
      }
    },
    exitBeforeEnter: true,
  })

  return (
    <Fragment>
      <div className="center">
        <p className="textBig">THE</p>
        <p className="textCurly">Wedding </p>
      </div>
      <Row className="bgBold" justify="center" align="middle">
        <Col lg={12} md={12} sm={24} xs={24} className="cardCol">
          <Card className="scheduleCard">
            <div className="ring">
              <Image
                preview={false}
                src="https://adelle-space.sgp1.digitaloceanspaces.com/app/public/adelle/lib/pro/img/2021/09/sw1707009-r-embrace-angle-2-1630484984.jpg"
                fallback="data:image/png;base64,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"
              />
            </div>
            <h5 className="scheduleTitle"> H O L Y &nbsp;&nbsp; M A T R I M O N Y </h5>
            <Row justify="center" align="middle">
              <Col className="right" span={10}>
                <p>Sunday</p>
              </Col>
              <Col ref={triggerRef} span={4}>
                <p className="scheduleDate">
                  {' '}
                  0<animated.span>{numberDate.to((n: any) => n.toFixed(0))}</animated.span>{' '}
                </p>
              </Col>
              <Col className="left" span={10}>
                <p>January </p>
              </Col>
            </Row>
            <p>2023</p>
            <h3> 11.00 AM</h3>
            <p>The Vida Ballroom</p>
            <Button href="https://g.page/TheVidaBallroom?share" target="_blank">
              <EnvironmentOutlined /> View Maps
            </Button>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24} className="cardCol">
          <Card className="scheduleCard">
            <div className="reception">
              {brideTransitions((style, i) => (
                <animated.div
                  className="receptionImgBg"
                  style={{
                    ...style,
                    backgroundImage: `url(${receptionSlides[i]})`,
                  }}
                />
              ))}
            </div>

            <h5 className="scheduleTitle">R E C E P T I O N</h5>
            <Row justify="center" align="middle">
              <Col className="right" span={10}>
                <p>Sunday</p>
              </Col>
              <Col ref={triggerRef2} span={4}>
                <p className="scheduleDate">
                  {' '}
                  0<animated.span>{numberDate2.to((n: any) => n.toFixed(0))}</animated.span>{' '}
                </p>
              </Col>
              <Col className="left" span={10}>
                <p>January </p>
              </Col>
            </Row>
            <p>2023</p>
            <h3> 06.00 PM </h3>
            <p>The Vida Ballroom</p>
            <Button href="https://g.page/TheVidaBallroom?share" target="_blank">
              <EnvironmentOutlined /> View Maps
            </Button>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

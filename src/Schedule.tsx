import React, { Fragment, useRef, useState } from 'react'
import { Row, Col, Button, Card, Image } from 'antd'
import { EnvironmentOutlined } from '@ant-design/icons'
import { useSpring, animated, useTransition } from '@react-spring/web'
import { useIntersectionObserver } from './Util'
require('./style/schedule.css')

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

  const receptionSlides = ['reception-1.JPG', 'reception-2.JPG', 'reception-3.JPG']
  const [brideIndex, setBrideIndex] = useState<any>(0)
  const brideTransitions = useTransition(brideIndex, {
    key: brideIndex,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: {  opacity: 1 },
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
      <Row className='bgBold' justify="center" align="middle">
        <Col lg={12} md={12} sm={24} xs={24} className="cardCol">
          <Card className="scheduleCard">
            <div className="ring">
              <Image preview={false} src="https://adelle-space.sgp1.digitaloceanspaces.com/app/public/adelle/lib/pro/img/2021/09/sw1707009-r-embrace-angle-2-1630484984.jpg" />
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
            {brideTransitions((style,i) => (
              <animated.div
                className='receptionImgBg'
                style={{
                  ...style,
                  // backgroundImage: `url(https://images.unsplash.com/${brideSlides[i]}?w=1920&q=80&auto=format&fit=crop)`,
                  backgroundImage: `url(images/${receptionSlides[i]})`
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

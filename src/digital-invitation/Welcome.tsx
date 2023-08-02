import React, { Fragment, useState } from 'react'
import { Button, Col, Row } from 'antd'
import { CalendarOutlined,UpOutlined } from '@ant-design/icons'
import { useSpring, animated } from '@react-spring/web'

export default function Welcome() {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  var countDownDate = new Date('Jan 8, 2023 18:00:00').getTime()
  var x = setInterval(function () {
    var now = new Date().getTime()
    var distance = countDownDate - now
    setDays(Math.floor(distance / (1000 * 60 * 60 * 24)))
    setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
    setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
    setSeconds(Math.floor((distance % (1000 * 60)) / 1000))

    if (distance < 0) {
      clearInterval(x)
      setDays(0)
      setHours(0)
      setMinutes(0)
      setSeconds(0)
    }
  }, 100)

  const { numberDays } = useSpring<any>({
    from: { numberDays: days > 10 ? days-10 : 0 },
    numberDays: days,
    config: { duration: 1000 },
  })
  const { numberHours } = useSpring<any>({
    from: { numberHours: hours > 10 ? hours-10 : 0 },
    numberHours: hours,
    config: { duration: 1000 },
  })
  const { numberMinutes } = useSpring<any>({
    from: { numberMinutes: minutes > 10 ? minutes-10 : 0 },
    numberMinutes: minutes,
    config: { duration: 1000 },
  })
  const { numberSeconds } = useSpring<any>({
    from: { numberSeconds: seconds > 10 ? seconds-10 : 0 },
    numberSeconds: seconds,
    config: { duration: 1000 },
  })

  const { numberDate } = useSpring<any>({
    from: { numberDate: 0 },
    numberDate: 8,
    delay: 100,
    config: { duration: 1000 },
  })
  const { numberMonth } = useSpring<any>({
    from: { numberMonth: 0 },
    numberMonth: 1,
    delay: 100,
    config: { duration: 1000 },
  })
  const { numberYear } = useSpring<any>({
    from: { numberYear: 13 },
    numberYear: 23,
    delay: 100,
    config: { duration: 1000 },
  })

  const swipeUpStyle = useSpring({
    loop: { reverse: true },
    from: { y: 30 },
    to: { y: 0 },
    config: { duration: 1000 },
    delay: 1500
  })

  return (
    <Fragment>
      <div className="fullPage center">
        <div>
          <p className="weddingOf">THE WEDDING OF</p>
          <p className="charlesAndDevi">Charles & Devi </p>
        </div>
        <Row className="welcomeRow bottomDiv">
          <Col lg={12} md={12} sm={12} xs={12}>
            <Row>
              <Col lg={6} md={6} sm={12} xs={12}>
                <p className="countdown">
                  <animated.span>{numberDays.to((n: any) => n.toFixed(0))}</animated.span>
                </p>
                <p className="countdownSuffix">days</p>
              </Col>
              <Col lg={6} md={6} sm={12} xs={12}>
                <p className="countdown">
                  <animated.span>{numberHours.to((n: any) => n.toFixed(0))}</animated.span>
                </p>
                <p className="countdownSuffix">hours</p>
              </Col>
              <Col lg={6} md={6} sm={12} xs={12}>
                <p className="countdown">
                  <animated.span>{numberMinutes.to((n: any) => n.toFixed(0))}</animated.span>
                </p>
                <p className="countdownSuffix">minutes</p>
              </Col>
              <Col lg={6} md={6} sm={12} xs={12}>
                <p className="countdown">
                  <animated.span>{numberSeconds.to((n: any) => n.toFixed(0))}</animated.span>
                </p>
                <p className="countdownSuffix">seconds</p>
              </Col>
            </Row>
          </Col>
          <Col span={12} className="welcomeDateDiv">
            <Row>
              <Col lg={12} md={12} sm={24} xs={24}>
                <p className="welcomeDate">
                  0<animated.span>{numberDate.to((n: any) => n.toFixed(0))}</animated.span> . 0
                  <animated.span>{numberMonth.to((n: any) => n.toFixed(0))}</animated.span> .{' '}
                  <animated.span>{numberYear.to((n: any) => n.toFixed(0))}</animated.span>
                </p>
              </Col>
              <Col style={window.innerWidth >= 600 ? {textAlign : 'left'}  : {}} lg={12} md={12} sm={24} xs={24}>
                <Button
                  className="saveTheDate"
                  style={{color:'white'}} 
                  icon={<CalendarOutlined />}
                  target={'_blank'}
                  href={
                    'https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=NjFnajRwaGw2dGo2NmI5bGNnc21hYjlrNnRpbWNiYjI3NWlqZ2JiNGM1aWplcDFtNjloamFwajQ2ZyBkZXYxZS5rdW05NkBt&amp;tmsrc=dev1e.kum96%40gmail.com'
                  }>
                  Save the date
                </Button>
              </Col>
            </Row>
          </Col>
          <Col span={24} style={{ marginTop: '30px' }}>
            {/* <p>No longer two but one</p> */}
            <animated.p
              style={{
                ...swipeUpStyle,
              }}>
              Swipe Up <br/><UpOutlined />
            </animated.p>
          </Col>
        </Row>
      </div>
    </Fragment>
  )
}

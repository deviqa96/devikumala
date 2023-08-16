import React, { Fragment, useEffect, useState } from 'react'
import { BackTop, Button, Layout } from 'antd'
import { PauseOutlined, SoundOutlined } from '@ant-design/icons'
import Welcome from './Welcome'
import Deck from './OurStory'
import { Content } from 'antd/lib/layout/layout'
import Couple from './Couple'
import Schedule from './Schedule'
import { useParams } from 'react-router-dom'
import Gallery from './Gallery'
import RsvpGift from './RsvpGift'
import Ending from './Ending'
import { useSpring, animated } from '@react-spring/web'
require('../style/digital-invitation/main.css')

export default function Invitation() {
  const params = useParams()
  const guestName = params.guestName || 'Guest'
  const [audio] = useState(new Audio('https://drive.google.com/uc?export=view&id=1GF0EMNLmU3izhtXiOEbRbDd5MrKzj8ls'))
  const [playing, setPlaying] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  // const [isGoogleConnected, setIsGoogleConnected] = useState(0)

  useEffect(() => {
    playing ? audio.play() : audio.pause()
  }, [playing])

  useEffect(() => {
    // fetch('https://drive.google.com/', { mode: 'no-cors' })
    //   .then(response => {
    //     console.log(response)
    //     setIsGoogleConnected(1)
    //   })
    //   .catch(err => {
    //     console.log(err.message)
    //     setIsGoogleConnected(-1)
    //   })

    audio.addEventListener('ended', () => setPlaying(false))
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false))
    }
  }, [])

  function toggle() {
    setPlaying(!playing)
  }

  function viewInvitation() {
    setIsOpen(true)
    setPlaying(true)
  }
  const [buttonAnimateState, toggleButtonAnimate] = useState(true)
  const { buttonAnimate } = useSpring({
    from: { buttonAnimate: 0 },
    buttonAnimate: buttonAnimateState ? 1 : 0,
    delay: 500,
    config: { duration: 1000 },
  })

  return (
    <Fragment>
      <Layout>
        <Content>
          {!isOpen ? (
            <Fragment>
              <div className="cover fullPage center">
                <div>
                  <p className="weddingOf">THE WEDDING OF</p>
                  <p className="charlesAndDevi">Charles & Devi </p>
                </div>
                <div className="bottomDiv">
                  <p>Dear,</p>
                  <p>
                    <strong>{guestName}</strong>
                  </p>
                  {/* {isGoogleConnected === -1 ? (
                    <div>Please use non-office network such as (O)VPN to open the invitation.</div>
                  ) : isGoogleConnected === 1 ? ( */}
                    <div onClick={() => toggleButtonAnimate(!buttonAnimateState)}>
                      <animated.div
                        style={{
                          opacity: buttonAnimate.to({ range: [0, 1], output: [0.5, 1] }),
                          scale: buttonAnimate.to({
                            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                            output: [1, 0.9, 0.8, 0.7, 0.8, 0.9, 0.8, 0.9, 1],
                          }),
                        }}>
                        <Button shape="round" color="white" style={{ color: 'white' }} onClick={viewInvitation}>
                          View Invitation
                        </Button>
                      </animated.div>
                    </div>
                  {/* ) : (
                    <div>Checking your connection...</div>
                  )} */}
                </div>
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <BackTop />
              <Button
                id="musicButton"
                icon={playing === true ? <PauseOutlined /> : <SoundOutlined />}
                onClick={toggle}
              />
              <Welcome />
              <Couple />
              <Schedule />
              <Gallery />
              <Deck />
              <RsvpGift />
              <Ending />
            </Fragment>
          )}
        </Content>
      </Layout>
    </Fragment>
  )
}

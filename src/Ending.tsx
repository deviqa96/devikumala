import { Image } from 'antd'
import React, { Fragment } from 'react'

export default function Ending() {
  return (
    <Fragment>
      {/* Protocol */}
      <div className="protocol center">
        <h2>Health Protocol</h2>
        <p>It’s important to us that everyone stays safe, please follow Covid-19 Health Protocol on the Wedding day.</p>
        <Image preview={false} src="protocol.png" />
      </div>

      
      {/* Thank you */}
      <div className="thankyou center" style={{backgroundImage: "url('images/thankyou.JPG')"}}>
        <h2 className="charlesAndDevi">Thank You</h2>
      </div>
      {/* Copyright */}
      <div className="copyright center">
        © 2022 Copyright by{' '}
        <a href="https://id.linkedin.com/in/devi-kumala-b0459010b" target="_blank">
          Devi Kumala
        </a>
      </div>
    </Fragment>
  )
}

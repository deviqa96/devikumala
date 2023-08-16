import { Col, Image, Row, Space } from 'antd'
import React, { Fragment, } from 'react'


export default function About() {

    return (
        <Fragment>
            <Row>
                <Col order={1} xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                    <Space direction="vertical" size={'small'} className='homeSummary'>
                        <span style={{ fontStyle: 'italic', color: 'grey', fontSize: '12px' }}>Tok tok tok,</span>
                        <p style={{ fontFamily: 'Bogart', fontSize: '60px', margin: '0', fontWeight: 'lighter' }}>Hello,</p>
                        <p >
                            Selamat datang di halaman saya, Nama saya
                            <span style={{ fontWeight: 'bolder', color: '#f33a6a' }}> DEVI KUMALA</span>.<br />
                            Saya bekerja sebagai Software Engineer sejak 2018 di Jakarta dan Tangerang, Indonesia. Saya mendalami Website Development, Graphic Design dan Budget Planner.
                            Saya menyukai membuat DIY digital product (Do it yourself atau buatan sendiri) seperti website, undangan, logo, desain souvenir dan filter Instagram.
                            Semoga halaman ini dapat membantu anda.
                        </p>
                    </Space>
                </Col>

                <Col order={2} xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                    <div>
                        <h1 className='homeSectionName'><span style={{ color: '#f33a6a' }}>DEVI</span><br /><span>KUMALA</span></h1>
                        <Image
                            className="deviProfile"
                            src={"/images/profil-devi-kumala.png"}
                            alt={"foto profil devi kumala"}
                            width={'90%'}
                            preview={false} style={{ marginLeft: '0px', marginTop: '10vh' }}
                        />
                    </div>
                </Col>
            </Row>
        </Fragment>
    )
}
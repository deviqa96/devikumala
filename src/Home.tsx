import { Col, Row, Space } from 'antd'
import React, { Fragment, } from 'react'


export default function Home() {

    return (
        <Fragment>
            <div className='paddingContent' >
                <section className="homeSection">
                    <Row>
                        <Col order={1} xxl={16} xl={16} lg={14} md={12} sm={24} xs={24}>
                            <Space direction="vertical" size={'small'} style={{ marginTop: '10vh' }}>
                                <span style={{ fontStyle: 'italic', color: 'grey', fontSize: '12px' }}>Knock knock knock,</span>
                                <h1 style={{ fontFamily: 'Bogart', fontSize: '60px', margin: '0' }}>Hello</h1>
                                <p>Welcome to my homepage, My name is <span style={{ fontWeight: 'bolder', color: '#f33a6a' }}>DEVI KUMALA</span></p>
                                <p>I'm a Software Engineer in one of Multi National Company for 5 years</p>
                            </Space>
                        </Col>

                        <Col order={2} xxl={8} xl={8} lg={10} md={12} sm={24} xs={24}>test</Col>
                    </Row>
                </section>
                <div className='homeCircle '></div>

                <section className="homeSection">
                    <h1 className="homeSectionTitle">What can I do for you.</h1>
                </section>
                <section className="homeSection">
                    <h1 className="homeSectionTitle">What projects I have done.</h1>
                </section>
                <section className="homeSection">
                    <h1 className="homeSectionTitle">Why you should use my service.</h1>
                </section>
                <section className="homeSection">
                    <h1 className="homeSectionTitle">Feel free to contact me anytime.</h1>
                </section>
            </div>
        </Fragment >
    )
}
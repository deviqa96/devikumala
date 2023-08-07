import { Card, Col, Image, Row, Space } from 'antd'
import React, { Fragment, } from 'react'


export default function Home() {

    return (
        <Fragment>
            <div className='paddingContent' >
                <section id="about" className="homeSection">
                    <Row>
                        <Col order={1} xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                            <Space direction="vertical" size={'small'} className='homeSummary'>
                                <span style={{ fontStyle: 'italic', color: 'grey', fontSize: '12px' }}>Knock knock knock,</span>
                                <p style={{ fontFamily: 'Bogart', fontSize: '60px', margin: '0', fontWeight: 'lighter' }}>Hello,</p>
                                <p >
                                    Welcome to my homepage, My name is
                                    <span style={{ fontWeight: 'bolder', color: '#f33a6a' }}> DEVI KUMALA</span>.<br />
                                    I'm a Software Engineer for 5 years. I passion in Website Development, Digital Design and Budget Planner.
                                    I like to create cheaper DIY digital product like website, invitation, logo, souvenir design and Instagram filter.
                                    In this website I will share my own projects that may help you.
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
                </section>
                <div className='homeCircle '></div>

                <section id="chapter" className="homeSection">
                    <h2 className="homeSectionTitle">Chapter of My Life</h2>
                    <Row gutter={20} justify="space-evenly" style={{ marginTop: '10vh', marginLeft: '10%', marginRight: '10%' }}>
                        <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24} style={{ marginBottom: '10vh'}}>
                            <Card className='homecard' style={{backgroundColor:'#ffb8b1'}}>
                            <Image
                                    src={"/images/working-brief-case.svg"}
                                    alt={"working brief case"}
                                    width={'90%'}
                                    preview={false} 
                                />
                            </Card>
                            <h3 style={{ fontWeight: 'bolder'}}>
                                Working
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione similique labore eligendi quos aliquam quasi, quibusdam repudiandae eos quod voluptatem dolorum fugit facilis adipisci tenetur iste consequuntur unde eaque optio.
                            </p>
                        </Col>
                        <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24} style={{ marginBottom: '10vh'}}>
                            <Card className='homecard' style={{backgroundColor:'#f2f2f2'}}>
                            <Image
                                    src={"/images/ring-engagement.svg"}
                                    alt={"ring engagement"}
                                    width={'90%'}
                                    preview={false} 
                                />
                            </Card>
                            <h3 style={{ fontWeight: 'bolder'}}>
                                Engagement
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione similique labore eligendi quos aliquam quasi, quibusdam repudiandae eos quod voluptatem dolorum fugit facilis adipisci tenetur iste consequuntur unde eaque optio.
                            </p>
                        </Col>
                        <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24} style={{ marginBottom: '10vh'}}>
                            <Card className='homecard' style={{backgroundColor:'#f33a6a'}}>
                            <Image
                                    src={"/images/pregnant.svg"}
                                    alt={"pregnant"}
                                    width={'90%'}
                                    preview={false} 
                                />
                            </Card>
                            <h3 style={{ fontWeight: 'bolder'}}>
                                Motherhood
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione similique labore eligendi quos aliquam quasi, quibusdam repudiandae eos quod voluptatem dolorum fugit facilis adipisci tenetur iste consequuntur unde eaque optio.
                            </p>
                        </Col>
                    </Row>

                </section>

                <section id="portfolio" className="homeSection">
                    <h2 className="homeSectionTitle">Portfolio</h2>
                </section>

                <section id="contact" className="homeSection">
                    <h2 className="homeSectionTitle">Contact Me</h2>
                </section>

                {/* <section className="homeSection">
                    <h2> className="homeSectionTitle">What can I do for you.</h2>
                </section>
                <section className="homeSection">
                    <h2> className="homeSectionTitle">What projects I have done.</h2>
                </section>
                <section className="homeSection">
                    <h2> className="homeSectionTitle">Why you should use my service.</h2>
                </section>
                <section className="homeSection">
                    <h2> className="homeSectionTitle">Feel free to contact me anytime.</h2>
                </section> */}
            </div>
        </Fragment >
    )
}
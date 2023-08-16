import { Card, Col, Image, Row } from 'antd'
import React, { Fragment, } from 'react'

export default function Blog() {

    return (
        <Fragment>
            <Row gutter={20} justify="space-evenly" style={{ marginTop: '10vh', marginLeft: '10%', marginRight: '10%' }}>
                <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24} style={{ marginBottom: '10vh' }}>
                    <Card className='homecard' style={{ backgroundColor: '#ffb8b1' }}>
                        <Image
                            src={"/images/working-brief-case.svg"}
                            alt={"working brief case"}
                            width={'70%'}
                            preview={false}
                        />
                    </Card>
                    <h3 style={{ fontWeight: 'bolder', textAlign: 'center' }}>
                        <a href='/blog/career' style={{ color: 'black' }}>Karir</a>
                    </h3>
                    <p>
                        I am working as Software Engineer and specialized in Website Development since 2018.
                        Understand to create a new website from scratch is my responsibility.
                        I have experience and skill as a front end developer, back end developer and data analyst.
                        Now Working with data analyst to create an effective data visualization on dashboard in my daily task.
                        You can see my certified skills in my <a href='https://www.linkedin.com/in/devi-kumala-b0459010b/' target='_blank'>LinkedIn</a>.
                    </p>
                </Col>
                <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24} style={{ marginBottom: '10vh' }}>
                    <Card className='homecard' style={{ backgroundColor: '#f2f2f2' }}>
                        <Image
                            src={"/images/ring-engagement.svg"}
                            alt={"ring engagement"}
                            width={'70%'}
                            preview={false}
                        />
                    </Card>
                    <h3 style={{ fontWeight: 'bolder', textAlign: 'center' }}>
                        <a href='/blog/engagement' style={{ color: 'black' }}>Pernikahan</a>
                    </h3>
                    <p>
                        Being engage is the biggest moment in my life, excited and delighted in many ways.
                        However engagement cost a lot of money, luckily I had been saving money since I started working.
                        This is when budgeting become my passion. I create a
                        <a href='/blog/engagement/'>Budget for wedding</a>,
                        <a href='/blog/engagement/'> Budget for newly wed house</a>,
                        <a href='/blog/engagement/'> Budget for DIY bridal shower decoration </a>, cheap DIY souvenir for
                        <a href='/blog/engagement/'> Sangjit souvenir</a>, and <a href=''>Bridemaid hampers</a>.
                    </p>
                </Col>
                <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24} style={{ marginBottom: '10vh' }}>
                    <Card className='homecard' style={{ backgroundColor: '#f33a6a' }}>
                        <Image
                            src={"/images/pregnant.svg"}
                            alt={"pregnant"}
                            width={'70%'}
                            preview={false}
                        />
                    </Card>
                    <h3 style={{ fontWeight: 'bolder', textAlign: 'center' }}>
                        <a href='/blog/motherhood/' style={{ color: 'black' }}>Ibu & Bayi</a>
                    </h3>
                    <p>
                        After getting married, I'm pregnant in a short time.
                        Be a mother is a big challenge for me, but thank you to my husband support, pregnancy is a wonderful unforgettable moment.
                        I'm so excited when I prepare <a href=''>Pregnancy must-to-have list </a>,
                        this <a href=''>Newborn need list </a>, and of course the <a href=''>One month baby souvenir</a>.

                    </p>
                </Col>
            </Row>
        </Fragment>
    )
}
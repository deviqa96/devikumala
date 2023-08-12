import { Button, Card, Col, Image, List, Row, Space } from 'antd'
import React, { Fragment, } from 'react'
import { MailOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';
import Meta from 'antd/lib/card/Meta';


export default function Home() {

    const contactData = [
        {
            avatar: (<MailOutlined />),
            title: 'devikumala.byvide@gmail.com',
            link: 'mailto:devikumala.byvide@gmail.com'
        },
        {
            avatar: (<LinkedinOutlined />),
            title: 'LinkedIn',
            link: 'https://www.linkedin.com/in/devi-kumala-b0459010b/'
        },
        {
            avatar: (<InstagramOutlined />),
            title: '@devieqa',
            link: 'https://www.instagram.com/devieqa/?hl=en'
        },
        {
            avatar: (<img src='/images/icon-shopee.svg' alt='icon shopee outline' width='14px' />),
            title: 'Byvidé Shopee Collection',
            link: 'https://mycollection.shop/byvide'
        }
    ]

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
                                    I'm a Software Engineer since 2018 based in Jakarta, Indonesia. I have passion in Website Development, Graphic Design and Budget Planner.
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

                <section id="journal" className="homeSection">
                    <h2 className="homeSectionTitle">My Journal</h2>
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
                                <a href='/journal/career' style={{ color: 'black' }}>Career</a>
                            </h3>
                            <p>
                                I am working as Software Engineer and specialized in Website Development since 2018.
                                Understand to create a new website from scratch is my responsibility.
                                I have experience and skill as a front end developer, back end developer and data analyst.
                                Now Working with data analyst to create an effective data visualization on dashboard in my daily task.
                                You can see my certified skills in my <a href='https://www.linkedin.com/in/devi-kumala-b0459010b/'>LinkedIn</a>.
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
                                <a href='/journal/engagement' style={{ color: 'black' }}>Engagement</a>
                            </h3>
                            <p>
                                Being engage is the biggest moment in my life, excited and delighted in many ways.
                                However engagement cost a lot of money, luckily I had been saving money since I started working.
                                This is when budgeting become my passion. I create a <a href=''>Budget for wedding</a>,
                                <a href=''> Budget for newly wed house</a>,
                                <a href=''> Budget for DIY bridal shower decoration </a>, cheap DIY souvenir for
                                <a href=''> Sangjit souvenir</a>, and <a href=''>Bridemaid hampers</a>.
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
                                <a href='/journal/motherhood' style={{ color: 'black' }}>Motherhood</a>
                            </h3>
                            <p>
                                After getting married, I'm pregnant in a short time.
                                Be a mother is a big challenge for me, but thank you to my husband support, pregnancy is a wonderful unforgettable moment.
                                I'm so excited when I prepare <a href=''>Pregnancy must-to-have list </a>,
                                this <a href=''>Newborn need list </a>, and of course the <a href=''>One month baby souvenir</a>.

                            </p>
                        </Col>
                    </Row>

                </section>

                <section id="portfolio" className="homeSection">
                    <h2 className="homeSectionTitle">Portfolio</h2>
                    <Row gutter={20} justify="space-evenly" style={{ marginTop: '10vh', marginLeft: '10%', marginRight: '10%' }}>
                        <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24} style={{ marginBottom: '10vh' }}>
                            <Card
                                hoverable
                                style={{ width: '100%' }}
                                cover={<img alt="portofolio Website digital invitation Byvide" src="images/portofolio-website-digital-invitation-byvide.jpg" />}
                            >
                                <Meta title="Website Development" description="Digital Invitation, Portfolio Website" />
                            </Card>
                        </Col>
                        <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24} style={{ marginBottom: '10vh' }}>
                            <Card
                                hoverable
                                style={{ width: '100%' }}
                                cover={<img alt="portofolio graphic design byvide" src="images/portofolio-graphic-design-byvide.jpg" />}
                            >
                                <Meta title="Graphic Design" description="Digital Invitation, Souvenir Design, Poster, Logo" />
                            </Card>
                        </Col>
                        <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24} style={{ marginBottom: '10vh' }}>
                            <Card
                                hoverable
                                style={{ width: '100%' }}
                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                                <Meta title="Budget Planner" description="Hampers Budget, Decor Budget, Wedding Budget" />
                            </Card>
                        </Col>
                    </Row>
                </section>

                <section id="contact" className="homeSection">
                    <h2 className="homeSectionTitle">Let's have a talk</h2>
                    <Row gutter={20} style={{ margin: '20px' }}>
                        <Col xxl={6} xl={6} lg={2} md={0} sm={0} xs={0} style={{ backgroundColor: '#f2f2f2', padding: '20px' }}></Col>
                        <Col xxl={6} xl={6} lg={10} md={12} sm={24} xs={24} style={{ backgroundColor: '#f2f2f2', padding: '20px' }}>
                            <List
                                itemLayout="horizontal"
                                dataSource={contactData}
                                renderItem={(item) => (
                                    <List.Item>
                                        <List.Item.Meta
                                            avatar={item.avatar}
                                            title={<a href={item.link} target='_blank'>{item.title}</a>}
                                        />
                                    </List.Item>
                                )}
                            />
                        </Col>
                        <Col xxl={6} xl={6} lg={10} md={12} sm={24} xs={24} style={{ backgroundColor: '#ffb8b1', padding: '32px' }}>
                            <p>
                                Talk with me, ask for help or anything through email by click the button below.
                            </p>
                            <Button style={{ backgroundColor: '#f2f2f2' }}>
                                <a href='https://mail.google.com/mail/?view=cm&fs=1&to=devikumala.byvide@gmail.com&su=Talk with Devi&body=Hi Devi, I reach you from Byvidé.com.' target='_blank'>Send</a>
                            </Button>
                        </Col>
                        <Col xxl={6} xl={6} lg={2} md={0} sm={0} xs={0} style={{ backgroundColor: '#ffb8b1', padding: '20px' }}></Col>
                    </Row>
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
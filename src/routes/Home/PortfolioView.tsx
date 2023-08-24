import { Card, Col, Row } from 'antd'
import Meta from 'antd/lib/card/Meta'
import React, { Fragment, } from 'react'


export default function PortfolioView() {

    return (
        <Fragment>
            <Row gutter={20} justify="space-evenly" style={{ marginTop: '20px', marginLeft: '10%', marginRight: '10%' }}>
                <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24} style={{ marginBottom: '10vh' }}>
                    <Card
                        className='portfolioCard'
                        onClick={() => window.location.replace('/portfolio/digitalproduct')}
                        hoverable
                        style={{ width: '100%' }}
                        cover={<img alt="portofolio Website digital invitation Byvide" src="images/portofolio-website-digital-invitation-byvide.jpg" />}
                    >
                        <Meta title="Website Development" description="Digital Invitation, Portfolio Website, Instagram Filter" />
                    </Card>
                </Col>
                <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24} style={{ marginBottom: '10vh' }}>
                    <Card
                        className='portfolioCard'
                        onClick={() => window.location.replace('/portfolio/graphicdesign')}
                        hoverable
                        style={{ width: '100%', }}
                        cover={<img alt="portofolio graphic design byvide" src="images/portofolio-graphic-design-byvide.jpg" style={{ padding: '50px 0' }} />}
                    >
                        <Meta title="Graphic Design" description="Digital Invitation, Souvenir Design, Poster, Logo" />
                    </Card>
                </Col>
                <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24} style={{ marginBottom: '10vh' }}>
                    <Card
                        className='portfolioCard'
                        onClick={() => window.location.replace('/portfolio/planner')}
                        hoverable
                        style={{ width: '100%' }}
                        cover={<img alt="example" src="images/baby-hampers-budget-plan.jpg" />}
                    >
                        <Meta title="Planner & Template" description="Hampers Budget, Decor Budget, Wedding Budget" />
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}
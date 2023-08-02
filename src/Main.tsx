import React, { Fragment, useState } from 'react'
import { Layout, Menu, Row, Col, Popover, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useWindowSize } from './Util'
import { Outlet  } from 'react-router-dom';
const { Header, Content, Footer } = Layout;

export default function Main() {
    const size = useWindowSize()

    const [menuCollapsed, setMenuCollapsed] = useState(true);
    const toggleCollapsed = () => {
        setMenuCollapsed(!menuCollapsed)
    }
    const items = [{ key: 'home', label: "Home" },
    { key: 'about', label: "About Me" },
    {
        key: 'service', label: "Services", children: [
            {
                label: 'Website Development',
                key: 'service#websitedevelopment',
            }, {
                label: 'Digital Design',
                key: 'service#digitaldesign',
            }, {
                label: 'Budget Planner',
                key: 'service#budgetplanner',
            }]
    },
    {
        key: 'story', label: "My Story", children: [
            {
                label: 'Working as Website Developer',
                key: 'story/work',
            }, {
                label: 'Engagement',
                key: 'story/engagement',
            }, {
                label: 'Wedding',
                key: 'story/wedding',
            }, {
                label: 'House',
                key: 'story/house',
            }, {
                label: 'Pregnancy',
                key: 'story/pregnancy',
            }, {
                label: 'Baby',
                key: 'story/baby',
            },]
    },
    { key: 'portfolio', label: "Portfolio" },
    { key: 'contact', label: "Contact Me" }]
    const menu = (<Menu
        defaultSelectedKeys={['home']}
        defaultOpenKeys={['home']}
        mode="inline"
        theme="light"
        inlineCollapsed={menuCollapsed}
        items={items}
    />)
    return (
        <Fragment>
            <Layout >
                <Header style={{ background: 'white', padding: '0 0 0 50px' }}>
                    <div className="menuCollapse" style={{ display: size.width > 768 ? 'none' : 'block' }}>
                        <Popover content={menu} trigger="click">
                            <Button onClick={toggleCollapsed}><MenuOutlined /></Button>
                        </Popover>

                    </div>
                    <Row>
                        <Col xxl={6} xl={6} lg={6} md={6} sm={24} xs={24}>
                            Byvidé
                        </Col>
                        <Col xxl={18} xl={18} lg={18} md={18} sm={0} xs={0} style={{ display: size.width <= 768 ? 'none' : 'flex' }} >
                            <Menu
                                theme="light"
                                mode="horizontal"
                                defaultSelectedKeys={['home']}
                                defaultOpenKeys={['home']}
                                items={items}
                                style={{ justifyContent: 'right', minWidth: '0px', flex: "auto", marginRight: '10%' }}
                                overflowedIndicator={<MenuOutlined />}
                                onClick={({ key }) => window.location.replace('/' + key)}
                            />
                        </Col>
                    </Row>
                </Header>
                <Content style={{ padding: '50px 50px' }}>

                    <div className="site-layout-content" >
                        Content
                        <Outlet/>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Byvidé.com created by Devi Kumala</Footer>
            </Layout>
        </Fragment>
    )
}
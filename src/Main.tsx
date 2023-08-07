import React, { Fragment, useState } from 'react'
import { Layout, Menu, Row, Col, Popover, Button, Image } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useWindowSize } from './Util'
import { Outlet } from 'react-router-dom';
const { Header, Content, Footer } = Layout;

export default function Main() {
    const size = useWindowSize()

    const [menuCollapsed, setMenuCollapsed] = useState(true);
    const toggleCollapsed = () => {
        setMenuCollapsed(!menuCollapsed)
    }
    const items = [{ key: '/', label: "Home" },
    { key: '/about', label: "About Me" },
    // {
    //     key: '/service', label: "Services", children: [
    //         {
    //             label: 'Website Development',
    //             key: '/service#websitedevelopment',
    //         }, {
    //             label: 'Digital Design',
    //             key: '/service#digitaldesign',
    //         }, {
    //             label: 'Budget Planner',
    //             key: '/service#budgetplanner',
    //         }]
    // },
    {
        key: '/chapter', label: "My Chapter", children: [
            {
                label: 'Working',
                key: '/chapter/work',
            }, {
                label: 'Engagement',
                key: '/chapter/engagement',
            }, {
                label: 'Wedding',
                key: '/chapter/wedding',
            }, {
                label: 'House',
                key: '/chapter/house',
            }, {
                label: 'Pregnancy',
                key: '/chapter/pregnancy',
            }, {
                label: 'Baby',
                key: '/chapter/baby',
            },]
    },
    { key: '/portfolio', label: "Portfolio" },
    { key: '/contact', label: "Contact Me" }]
    const menu = (<Menu
        defaultSelectedKeys={[window.location.pathname]}
        defaultOpenKeys={['/chapter']}
        mode="inline"
        theme="light"
        inlineCollapsed={menuCollapsed}
        items={items}
        onClick={({ key }) => window.location.replace(key)}
    />)
    return (
        <Fragment>
            <Layout style={{ fontFamily: 'Montserrat', height: 'auto', minHeight: '100%'}}>
                <Header //style={{ background: 'white', padding: '0 0 0 50px' }}
                    style={{
                        position: 'sticky',
                        top: 0,
                        zIndex: 10,
                        width: '100%',
                        //display: 'flex',
                        alignItems: 'center',
                        background: 'white',
                        padding: '0 0 0 0'
                    }}>
                    <div className="menuCollapse" style={{ display: size.width > 768 ? 'none' : 'block' }}>
                        <Popover content={menu} trigger="click">
                            <Button onClick={toggleCollapsed} style={{ border: 'none' }}><MenuOutlined /></Button>
                        </Popover>

                    </div>
                    <Row style={{ borderBottom:'2px solid #f33a6a'}}>
                        <Col xxl={6} xl={6} lg={6} md={6} sm={24} xs={24} onClick={() => window.location.replace('/')}>
                            <Image
                                className="byvideLogo"
                                src={"/images/logo-byvide.png"}
                                alt={"logo byvide"}
                                width={'30px'}
                                preview={false} style={{ marginLeft: '50px', cursor: 'pointer' }}
                            />
                            <span style={{ marginLeft: '65px', cursor: 'pointer' }}>Byvidé</span>
                        </Col>
                        <Col xxl={18} xl={18} lg={18} md={18} sm={0} xs={0} style={{ display: size.width <= 768 ? 'none' : 'flex' }} >
                            <Menu
                                theme="light"
                                mode="horizontal"
                                defaultSelectedKeys={[window.location.pathname]}
                                items={items}
                                style={{ justifyContent: 'right', minWidth: '0px', flex: "auto", marginRight: '10%' }}
                                overflowedIndicator={<MenuOutlined />}
                                onClick={({ key }) => window.location.replace(key)}
                            />
                        </Col>
                    </Row>
                </Header>
                <Content style={{ backgroundColor:'white'}} >
                    <Outlet />
                </Content>
                <Footer style={{ textAlign: 'center' }}>Byvidé.com created by Devi Kumala</Footer>
            </Layout>
        </Fragment>
    )
}
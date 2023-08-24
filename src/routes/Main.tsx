import React, { Fragment, useState } from 'react'
import { Layout, Menu, Row, Col, Popover, Button, Image, BackTop } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useWindowSize } from '../Util'
import { Outlet } from 'react-router-dom';
const { Header, Content, Footer } = Layout;

require('../style/main.css')

export default function Main() {
    const size = useWindowSize()

    const [menuCollapsed, setMenuCollapsed] = useState(true);
    const toggleCollapsed = () => {
        setMenuCollapsed(!menuCollapsed)
    }
    const items = [{ key: '/', label: "Beranda" },
    { key: '/tentang', label: "Tentang Saya" },
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
        key: '/blogs', label: "Blog", children: [
            {
                label: 'Karir',
                key: '/blogs/karir',
            }, {
                label: 'Pernikahan',
                key: '/blogs/pernikahan',
            }, {
                label: 'Ibu & Bayi',
                key: '/blogs/ibu-dan-bayi',
            }]
    },
    { key: '/portofolios', label: "Portofolio" },
    { key: '/kontak', label: "Hubungi Saya" }]
    const menu = (<Menu
        defaultSelectedKeys={[window.location.pathname]}
        defaultOpenKeys={['/blog']}
        mode="inline"
        theme="light"
        inlineCollapsed={menuCollapsed}
        items={items}
        onClick={({ key }) => window.location.replace(key)}
    />)
    return (
        <Fragment>
            <Layout className='overwriteAntdStyle' style={{ fontFamily: 'Montserrat', height: 'auto', minHeight: '100%' }}>
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
                        <Popover content={menu} trigger="click" placement='bottomRight'>
                            <Button onClick={toggleCollapsed} style={{ border: 'none' }}><MenuOutlined /></Button>
                        </Popover>

                    </div>
                    <Row style={{ borderBottom: '2px solid #f33a6a' }}>
                        <Col xxl={6} xl={6} lg={6} md={6} sm={24} xs={24} onClick={() => window.location.replace('/')}>
                            <Image
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
                <Content style={{ backgroundColor: 'white' }} >
                    <div className='paddingContent'>
                        <Outlet />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Version{process.env.REACT_APP_VERSION} Copyright @2023 Byvidé.com
                    <BackTop />
                </Footer>
            </Layout>
        </Fragment>
    )
}
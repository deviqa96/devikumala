import React, { Fragment, } from 'react'
import { MailOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';
import { Button, Col, List, Row } from 'antd';

export default function Contact() {


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
            <Row gutter={20} style={{ margin: '20px' }}>
                <Col xxl={6} xl={4} lg={2} md={0} sm={0} xs={0} style={{ backgroundColor: '#f2f2f2', padding: '20px', borderRadius: '10% 0 0 10%' }}></Col>
                <Col xxl={6} xl={8} lg={10} md={12} sm={24} xs={24} style={{ backgroundColor: '#f2f2f2', padding: '20px', wordBreak: 'break-all' }}>
                    <List
                        itemLayout="horizontal"
                        dataSource={contactData}
                        renderItem={(item) => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={item.avatar}
                                    title={<a href={item.link} style={{ fontSize: '16px' }} target='_blank'>{item.title}</a>}
                                />
                            </List.Item>
                        )}
                    />
                </Col>
                <Col xxl={6} xl={8} lg={10} md={12} sm={24} xs={24} style={{ backgroundColor: '#ffb8b1', padding: '32px' }}>
                    <p>
                        Sekedar ngobrol, minta bantuan atau apapun lewat email, klik tombol dibawah ya.
                    </p>
                    <Button style={{ backgroundColor: '#f2f2f2', border: 'none', borderRadius: '5px' }}>
                        <a href='https://mail.google.com/mail/?view=cm&fs=1&to=devikumala.byvide@gmail.com&su=Ngobrol dengan Devi&body=Halo Devi, Byvidé.com. ...' target='_blank'>
                            Kirim
                        </a>
                    </Button>
                </Col>
                <Col xxl={6} xl={4} lg={2} md={0} sm={0} xs={0} style={{ backgroundColor: '#ffb8b1', padding: '20px', borderRadius: '0 10% 10% 0' }}></Col>
            </Row>

        </Fragment>
    )
}
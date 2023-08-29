import { Col, Divider, Image, Row, Space, Tag, Typography } from 'antd';
import React, { Fragment, useEffect, useState, } from 'react'
import { useParams } from 'react-router-dom';
import { Interweave } from 'interweave';
import {
    FacebookOutlined,
    LinkedinOutlined,
    TwitterOutlined,
    LinkOutlined,
    WhatsAppOutlined
} from '@ant-design/icons';
import { getCategoryTitle, getDateString } from '../Component/Util';
import copy from 'copy-to-clipboard'

const { Title, Paragraph, Text } = Typography;

export default function BlogView() {
    let { param } = useParams();
    const [dataFetch, setDataFetch] = useState(false);
    const [article, setArticle] = useState<any>(null)

    useEffect(() => {
        async function getArticle() {
            const response = await fetch(`http://localhost:5000/article/${param}`);
            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                console.log(message);
                return;
            }
            const data = await response.json();
            if (data) {
                setArticle(data);
                setDataFetch(true);
            }
        }
        if (dataFetch === false) {
            getArticle();
        }

    }, [dataFetch]);

    function shareContent() {
        return (<>
            <Divider />
            <Row>
                <Col span={18}>
                    <Space size={[2, 0]} wrap>
                        {article.category.map(function (object: any,) {
                            return <Tag><a href={`/blogs/${object}`}>{getCategoryTitle(object)}</a></Tag>;
                        })}
                        <Text style={{ color: 'grey', fontSize: '14px' }}>Terbit {getDateString(article.published_at)}
                            {article.updated_at ?
                                (<><span style={{ margin: '0 5px' }}> • </span> Diperbarui {getDateString(article.updated_at)}</>)
                                : ''
                            }
                        </Text>
                    </Space>
                </Col>
                <Col span={6} >
                    <Space size={[2, 0]} wrap style={{ float: 'right' }}>
                        <Tag icon={<TwitterOutlined style={{ fontSize: '20px' }} />} color="#55acee" style={{ width: '30px', padding: '5px', cursor:'pointer' }}>
                            <a href={`https://twitter.com/share?text=${article.title}&url=${window.location.href}`}></a>
                        </Tag>
                        <Tag icon={<FacebookOutlined style={{ fontSize: '20px' }} />} color="#3b5999" style={{ width: '30px', padding: '5px', cursor:'pointer' }}>
                            <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}></a>
                        </Tag>
                        <Tag icon={<LinkedinOutlined style={{ fontSize: '20px' }} />} color="#55acee" style={{ width: '30px', padding: '5px', cursor:'pointer' }}>
                            <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${article.title}&summary=${article.subtitle}&source=byvide.com`}></a>
                        </Tag>
                        <Tag icon={<WhatsAppOutlined style={{ fontSize: '20px' }} />} color="#25d366" style={{ width: '30px', padding: '5px', cursor:'pointer' }}>
                            <a href={`whatsapp://send?text=${window.location.href}`}></a>
                        </Tag>
                        <Tag onClick={() => copy(window.location.href)} icon={<LinkOutlined style={{ fontSize: '20px' }} />} color="darkgrey" style={{ width: '30px', padding: '5px' }}>
                        </Tag>
                    </Space>
                </Col>
            </Row>
            <Divider />
        </>)
    }

    return (
        <Fragment>
            <Row>
                <Col xs={24} sm={24} md={{ span: 20, offset: 2 }} lg={{ span: 16, offset: 4 }} xl={{ span: 16, offset: 4 }} xxl={{ span: 16, offset: 4 }}  >
                    {article === null ?
                        <h1>Blog tidak ditemukan</h1> :
                        (
                            <Typography>
                                <Title style={{ marginBottom: '0' }}>{article.title}</Title>
                                <Paragraph>{article.subtitle}</Paragraph>

                                {shareContent()}
                                <div style={{ width: '80%', margin: 'auto', padding: '50px' }}>
                                    <Image
                                        src={article.thumbnail}></Image>
                                </div>
                                <Interweave content={article.content} />
                                <br/>
                                <Paragraph>
                                    {shareContent()}
                                </Paragraph>
                            </Typography>

                        )
                    }
                </Col>
            </Row>
        </Fragment>
    )
}
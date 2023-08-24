import { Col, Row, Space, Tag } from 'antd';
import React, { Fragment, useEffect, useState, } from 'react'
import { useParams } from 'react-router-dom';
import { Interweave } from 'interweave';
import {
    FacebookOutlined,
    LinkedinOutlined,
    TwitterOutlined,
    YoutubeOutlined,
} from '@ant-design/icons';

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

    return (
        <Fragment>
            {article === null ?
                <h1>Blog not found</h1> :
                (
                    <div>
                        <h1>{article.title}</h1>
                        <p>{article.subtitle}</p>
                        <Row>
                            <Col span={12}>
                                <Space size={[0, 8]} wrap>
                                    {article.category_blog.concat(article.category_portfolio).map(function (object: any,) {
                                        return <Tag><a href={`/blogs/${object}`}>{object}</a></Tag>;
                                    })}
                                </Space>
                            </Col>
                            <Col span={12}>
                                <Space size={[0, 8]} wrap>
                                    <Tag icon={<TwitterOutlined />} color="#55acee">

                                    </Tag>
                                    <Tag icon={<YoutubeOutlined />} color="#cd201f">

                                    </Tag>
                                    <Tag icon={<FacebookOutlined />} color="#3b5999">

                                    </Tag>
                                    <Tag icon={<LinkedinOutlined />} color="#55acee">

                                    </Tag>
                                </Space>
                            </Col>
                        </Row>

                        <Interweave content={article.content} />
                    </div>
                )
            }
        </Fragment>
    )
}
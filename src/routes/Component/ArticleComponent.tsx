import { Col, Divider, Image, Row, Space, Tag, Typography } from 'antd';
import { Interweave } from 'interweave';
import React, { Fragment, } from 'react'
import { Link } from 'react-router-dom';
import { getCategoryTitle, getDateString } from './Util';

const { Title, Paragraph, Text } = Typography;

export interface ArticleComponentProps {
    article?: any;
}

export default function ArticleComponent({ article }: ArticleComponentProps) {
    return (
        <Fragment>
            <div>
                <Typography>
                    <Link to={`/${article.type}/${article.article_id}`}>
                        <Row>
                            <Col xxl={4} xl={6} lg={6} md={8} sm={8} xs={24}>
                                <Image width={'100%'}
                                style={{padding:'20px 20px'}}
                                    preview={false}
                                    src={article.thumbnail}></Image>
                            </Col>
                            <Col xxl={20} xl={18} lg={18} md={16} sm={16} xs={24}>
                            <Title level={2}>{article.title}</Title>
                                <Paragraph>
                                    <Text>{article.subtitle} ~</Text>
                                    <Interweave content={(article.content.length >= 200 ? article.content.slice(0, 200) : article.content) + '...'} />
                                </Paragraph>
                                <Space size={[2,0]} wrap>
                                    {article.category.map(function (object: any,) {
                                        return <Tag><a href={`/blogs/${object}`}>{getCategoryTitle(object)}</a></Tag>;
                                    })}
                                    <Text style={{ color: 'grey', fontSize: '14px' }}><span style={{ margin: '0 5px' }}>•</span>{getDateString(article.published_at)}</Text>
                                </Space>
                            </Col>
                        </Row>

                        <Divider />
                    </Link>

                </Typography>
            </div>
        </Fragment>
    )
}
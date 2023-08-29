import React, { Fragment, useEffect, useState, } from 'react'
import { useParams } from 'react-router-dom';
import ArticleComponent from '../Component/ArticleComponent';
import { Breadcrumb, Col, Divider, Row, Space, Tag } from 'antd';
import { getCategoryTitle } from '../Component/Util';

export default function Blog() {
    let { param } = useParams();
    const [category, setCategory] = useState('');
    const [dataFetch, setDataFetch] = useState(false);
    const [article, setArticle] = useState<any>([]);
    const [categoryList, setCategoryList] = useState<any>([]);
    const [categoryListFetch, setCategoryListFetch] = useState(false);

    useEffect(() => {
        async function getArticle(category?: any) {
            const response = await fetch(`http://localhost:5000/article/blogs${category ? '/' + category : ''}`);
            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                console.log(message);
                return;
            }

            const data = await response.json();
            setArticle(data);
            setDataFetch(true);
        }
        async function getCategoryList() {
            const response = await fetch(`http://localhost:5000/category`);
            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                console.log(message);
                return;
            }

            const data = await response.json();
            setCategoryList(data);
            setCategoryListFetch(true);
        }
        if (categoryListFetch === false) {
            getCategoryList()
        }
        if (dataFetch === false) {
            if (param) {
                setCategory(param);
                getArticle(param);
            } else {
                setCategory('');
                getArticle();
            }
        }


    }, [dataFetch, categoryListFetch]);

    return (
        <Fragment>
            <Row>
                <Col xs={24} sm={24} md={{ span: 20, offset: 2 }} lg={{ span: 16, offset: 4 }} xl={{ span: 16, offset: 4 }} xxl={{ span: 16, offset: 4 }}  >
                    <div>
                        <Breadcrumb style={{marginBottom: '20px'}}>
                            <Breadcrumb.Item><a href="/">Home</a></Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <a href="/blogs">Blog</a>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>{getCategoryTitle(category)}</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div>
                        <p>Filter by category :{'   '}
                        
                        <Space size={[2,0]} wrap>
                        {categoryList.map(function (object: any,) {
                            return <Tag><a href={`/blogs/${object.category_id}`}>{object.title}</a></Tag>
                        })}
                        </Space>
                        </p> 
                    </div>
                    <Divider/>
                    <div>
                        {article.length === 0 ?
                            <h1>Blog tidak ditemukan</h1> :
                            (
                                <div>
                                    {
                                        article.map(function (object: any) {
                                            return <ArticleComponent article={object}></ArticleComponent>;
                                        })
                                    }
                                </div>
                            )
                        }
                    </div>
                </Col>
            </Row>
        </Fragment>
    )
}
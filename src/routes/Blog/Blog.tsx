import React, { Fragment, useEffect, useState, } from 'react'
import { useParams } from 'react-router-dom';

const categoryList = ['karir', 'pernikahan', 'ibu-dan-bayi'];
export default function Blog() {
    let { param } = useParams();
    const [category, setCategory] = useState('')
    const [dataFetch, setDataFetch] = useState(false);
    const [article, setArticle] = useState<any>([])


    useEffect(() => {
        async function getArticle() {
            const response = await fetch(`http://localhost:5000/article`);
            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                console.log(message);
                return;
            }

            const data = await response.json();
            setArticle(data);
            setDataFetch(true);
        }
        if (dataFetch === false) {
            if (param && categoryList.indexOf(param) >= 0) {
                setCategory(param);
            } else {
                setCategory('All');
            }
            getArticle();
        }

    }, [dataFetch]);

    console.log(article)


    return (
        <Fragment>
            <h1>This is {category}</h1>

        </Fragment>
    )
}
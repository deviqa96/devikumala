import React, { Fragment, } from 'react'
// import HomePortfolio from './Portfolio';
import { useParams } from 'react-router-dom';


export default function Portfolio() {

    let { category } = useParams();
    return (
        <Fragment>
            {/* <HomePortfolio /> */}
            <h1>{category}</h1>
        </Fragment>
    )
}
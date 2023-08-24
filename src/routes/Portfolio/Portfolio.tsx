import React, { Fragment, } from 'react'
// import HomePortfolio from './Portfolio';
import { useParams } from 'react-router-dom';


export default function Portfolio() {

    let { param } = useParams();
    return (
        <Fragment>
            {/* <HomePortfolio /> */}
            <h1>{param}</h1>
        </Fragment>
    )
}
import React from 'react';
import { Layout } from '../../components';
// import Carousel from "react-multi-carousel"; 
// const responsive = {
//     superLargeDesktop: {
//         // the naming can be any, depends on you.
//         breakpoint: { max: 4000, min: 3000 },
//         items: 1
//     },
//     desktop: {
//         breakpoint: { max: 3000, min: 1024 },
//         items: 1
//     },
//     tablet: {
//         breakpoint: { max: 1024, min: 464 },
//         items: 1
//     },
//     mobile: {
//         breakpoint: { max: 464, min: 0 },
//         items: 1
//     }
// };

export const Home = () => {
    return (
        <Layout>
            <h1>HEllo</h1>
            {/* <Carousel responsive={responsive}>
                <div style={{ marginTop: 1000 }} ><h1>
                    Hello</h1></div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
            </Carousel>; */}
            <h1>Home</h1>
        </Layout>
    );
};

import React from 'react';
import ReactDOM from 'react-dom';

import LazyLoadImage from './LazyLoadImage'

ReactDOM.render(<>
    <div style={{ height: '750px' }} />
    <LazyLoadImage
        alt='penguins'
        placeholderSrc="http://res.cloudinary.com/christekh/image/upload/c_scale,h_3,w_5/v1505391130/wynand-van-poortvliet-364366_gsvyby.jpg"
        src="http://res.cloudinary.com/christekh/image/upload/c_scale,h_300,w_500/v1505391130/wynand-van-poortvliet-364366_gsvyby.jpg"
        width='500px'
        height='300px'
    />
    <LazyLoadImage
        alt='skyline'
        // placeholderSrc="http://res.cloudinary.com/christekh/image/upload/c_scale,h_3,w_5/v1505390701/jason-wong-305496_odp5k1.jpg"
        src="http://res.cloudinary.com/christekh/image/upload/c_scale,h_300,w_500/v1505390701/jason-wong-305496_odp5k1.jpg"
        width='500px'
        height='300px'
    />
    <LazyLoadImage
        alt='kitten'
        placeholderSrc="http://res.cloudinary.com/christekh/image/upload/c_scale,h_3,w_5/v1499705400/fi7mytperytdqt9hdcvx.jpg"
        src="http://res.cloudinary.com/christekh/image/upload/c_scale,h_300,w_500/v1499705400/fi7mytperytdqt9hdcvx.jpg"
        width='500px'
        height='300px'
    />
    <LazyLoadImage
        alt='couple'
        placeholderSrc="http://res.cloudinary.com/christekh/image/upload/c_scale,h_3,w_5/v1477419989/bicycle_jzfmtj.jpg"
        src="http://res.cloudinary.com/christekh/image/upload/c_scale,h_300,w_500/v1477419989/bicycle_jzfmtj.jpg"
        width='500px'
        height='300px'
    />
</>, document.getElementById('root'));

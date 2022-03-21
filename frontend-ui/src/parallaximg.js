import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

const Parallaximg =(props)=>{
    return(
        <ParallaxBanner
        layers={[{image:props.imgsrc,amount:0.6}]}
        style={{height:props.height}}
        >
            <div>{props.children}</div>
        </ParallaxBanner>
    )
}
export default Parallaximg
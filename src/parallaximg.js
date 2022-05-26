import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

const Parallaximg =(props)=>{/*This  Function is responsible for creating a parallax effect in the background */
    /*AUTHOR NAME: Fawad J.Fateh
      DATE OF GENERATION: 15/5/2022
      DATE OF LAST REVISION: 16/5/2022
      VERSION: 1.1 */
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
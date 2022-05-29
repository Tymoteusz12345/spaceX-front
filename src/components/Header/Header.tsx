import React from 'react';
import './Headers.css';
import arrow from './images/right-arrow.png';
import logo from './images/SpaceX-Logo.png';

export const Header = (props: any) => {
    return (
        <>
            <header>
                <div className="arrow arrow_container_1">
                    <img onClick={event => {
                        props.logicFfNumbersFunc(-1)
                    }}
                     src={arrow} alt=""/>
                </div>
                <div className="img_container">
                    <img src={logo} alt=""/>
                </div>
                <div  className="arrow arrow_container_2">
                    <img onClick={event => {
                        props.logicFfNumbersFunc(1)
                    }} src={arrow} alt=""/>
                </div>

            </header>

        </>
    )
}


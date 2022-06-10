import React from 'react';
import './Headers.scss';
import arrow from './images/arrow.png';
import logo from './images/spacex-logo.png';

export const Header = (props: any) => {
    return (
        <>
            <header>
                <div className="arrow arrow_container_1">
                    <img className={props.number !== 0 ? "avalibility" : "standard-opacity"} onClick={e => {
                    if (props.number !== 0) {
                        props.logicFfNumbersFunc(-1)
                    } else return
                }
            }
                     src={arrow} alt=""/>
                </div>
                <div className="img_container">
                    <img src={logo} alt=""/>
                </div>
                <div  className="arrow arrow_container_2">
                    <img className={props.number !== (props.numberOfLaunches - 1) ? "avalibility" : "standard-opacity"} onClick={e => {

                        if(props.number !== (props.numberOfLaunches - 1)){
                            props.logicFfNumbersFunc(1)
                        } else return
                    }} src={arrow} alt=""/>
                </div>

            </header>

        </>
    )
}


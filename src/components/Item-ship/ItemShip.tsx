import React from "react";
import './ItemShip.css'

export const ItemShip = (props: any) => {
    // console.log(props.data)
    return (
        <>
            <div className="item">
                <img src={props.data.image} alt=""/>
                <div className="text-container">
                    <h2>{props.data.name}</h2>
                    <div className="container-inside-port">
                        <div className="left-p">Home port</div>
                        <div className="right-p">{props.data.home_port}</div>
                    </div>
                    <div className="container-inside-weight">
                        <div className="left-p">Weight</div>
                        <div className="right-p">{(props.data.weight_kg ? props.data.weight_kg : "unknown")}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

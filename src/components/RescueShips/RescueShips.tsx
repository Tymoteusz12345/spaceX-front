import React, {useContext} from 'react';
import './RescueShips.css';
import {ItemShip} from "../Item-ship/ItemShip";

export const RescueShips = (props: any) => {
    // console.log(props.newData, 'i m in RescueShips Component')
    return (
        <>
            <div className="container_ships">
                <p>rescue ships</p>
                <div className="img_container_ships">
                    {
                        props.newData.ships.map((ship:any, index: number) => {

                          return <ItemShip key={index} data={ship}/>
                        })

                    }

                </div>
            </div>
        </>
    )
}

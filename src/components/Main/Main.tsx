import React, {useContext} from 'react';
import './Main.css';
import {Link} from "react-router-dom";
import {storeDataProvider} from "../../contexts/store.data.provider";

export const Main = (props: any) => {
    // console.log(props.newData, 'i m in main component')
    if(props.newData.length === 0){
        return <h2>loading...</h2>
    }
    return (
        <>
            <div className="container">
                <div className="mission_rocket_learnmore_container">
                    <div className="box_mission">
                        <p className="mission_describe"><small>Mission</small></p>
                        <p className="mission">{props.newData.mission_name}</p>
                    </div>
                   <div className="box_rocket">
                       <p className="rocket_describe">Rocket</p>
                       <p>{props.newData.rocket.rocket_name}</p><span>Recovered</span>

                   </div>
                   <Link to={props.newData.links.video_link}>
                       <button className="learn_more">
                           Learn more
                       </button>
                   </Link>
                </div>
                <div className="launch_date_launch_site_container">
                    <div className="box_launch_date">
                        <p className="launch_date">Launch Date</p>
                        <p className="launch_site">{
                            ((props.newData.launch_date_local).slice(0,10))

                        }</p>
                    </div>
                    <div className="box_launch_site">
                        <p className="launch_site">Launch Site</p>
                        <p className="launch_site">{props.newData.launch_site.site_name}</p>
                    </div>
                </div>
                <div className="launch_container">

                </div>
            </div>
        </>
    )
}

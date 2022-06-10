import React from 'react';
import './Main.scss';
export const Main = (props: any) => {
    if(props.newData.length === 0){
        return <h2>loading...</h2>
    }
    return (
        <>
            <div className="container">
                <div className="mission_rocket_learnmore_container">
                    <div className="box_mission">
                        <p className="mission_describe"><p className="small">Mission</p></p>
                        <p className="mission">{props.newData.mission_name}</p>
                    </div>
                   <div className="box_rocket">
                       <p className="small rocket_describe">Rocket</p>
                       <div className="box_rocket-new">
                           <p>{props.newData.rocket.rocket_name}</p><span>Recovered</span>
                       </div>


                   </div>
                       <a href={props.newData.links.video_link} className="learn_more">
                           Learn more
                       </a>
                </div>
                <div className="launch_date_launch_site_container">
                    <div className="box_launch_date">
                        <p className="small launch_date">Launch Date</p>
                        <p className="launch_site">{
                            ((props.newData.launch_date_local).slice(0,10))

                        }</p>
                    </div>
                    <div className="box_launch_site">
                        <p className="small launch_site">Launch Site</p>
                        <p className="launch_desc">{props.newData.launch_site.site_name}</p>
                        <p className="launch_desc_show">{props.newData.launch_site.site_name_long}</p>
                    </div>
                </div>
                <div className="launch_container">

                </div>
            </div>
        </>
    )
}

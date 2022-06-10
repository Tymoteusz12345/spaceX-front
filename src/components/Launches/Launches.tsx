import React, {useEffect, useState} from 'react';
import { useQuery, gql } from "@apollo/client";
import {Header} from "../Header/Header";
import {Main} from '../Main/Main';
import {RescueShips} from "../RescueShips/RescueShips";
import {Spinner} from "../../common/spinner/Spinner";

const limitOfLaunches = 5;

export const Launches = () => {
    const FILMS_QUERY = gql`
 {
  launchesPast(limit: ${limitOfLaunches}) {
    mission_name
    launch_date_local
    launch_site {
      site_name_long
      site_name
    }
    links {
      article_link
      video_link
    }
    rocket {
      rocket_name
    }
    ships {
      name
      home_port
      image
      weight_kg
    }
  }
}`;

    const { data, loading, error } = useQuery(FILMS_QUERY);
    const [newData, setNewData] = useState<any>(undefined)
    const [number, setNumber] = useState(0);
    const [numberOfLaunches,setNumberOfLaunches] = useState(undefined);

    useEffect(() => {
        if(data){
            const {launchesPast} = data;
            const dataToArray =  launchesPast.map((launch: any) => launch);
            setNewData(dataToArray[number]);
            setNumberOfLaunches(launchesPast.length);
        }
        console.log('render')
    },[data,number])

    const logicFfNumbersFunc = (direction: number) => {
        const oldValue = number;
        if(direction === 1) {
            if (oldValue === 4) {
                setNumber(0)
            } else {
                setNumber(prev => ++prev)
            }
        }
        else if(direction === -1){
           if(oldValue === 0){
               setNumber(4)
           } else {
               setNumber(prev => --prev)
           }

        }
        return
    }
    return (
            <>
                {
                    newData === undefined ?
                        <Spinner />
                            : <>
                            <Header numberOfLaunches={numberOfLaunches} logicFfNumbersFunc={(value: number) => logicFfNumbersFunc(value)} number={number}/>
                            <Main newData={newData}/>
                            <RescueShips newData={newData}/>
                            </>
                }
            </>
        )
}

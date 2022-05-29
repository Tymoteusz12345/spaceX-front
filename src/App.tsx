import React, {useContext, useEffect, useMemo, useState} from 'react';
import './App.css';
import { useQuery, gql } from "@apollo/client";
import {Header} from "./components/Header/Header";
import {Main} from './components/Main/Main';
import {RescueShips} from "./components/RescueShips/RescueShips";
import {storeDataProvider} from "./contexts/store.data.provider";
import {FetchedContext} from "./components/contexts/Fetched.context";

export const App = () => {
    const FILMS_QUERY = gql`
 {
  launchesPast(limit: 5) {
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

    useEffect(() => {
        if(data){
            const {launchesPast} = data;
            const dataToArray =  launchesPast.map((launch: any) => launch);
            setNewData(dataToArray[number])
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

    console.log('loading', loading)
    console.log('data', data)
    console.log('new data' ,newData)

    if(!data) {
        return <h2>loading...</h2>
    }

    return (
            <>
                {
                    newData === undefined ?
                        <h1>loading...</h1>
                            : <>
                            <Header logicFfNumbersFunc={(value: number) => logicFfNumbersFunc(value)} changeNumber={(value: number) => setNumber(value)}/>
                            <Main newData={newData}/>
                            <RescueShips newData={newData}/>
                            </>
                }
            </>
        )
}

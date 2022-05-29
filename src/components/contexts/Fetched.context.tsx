import {createContext} from "react";

export const FetchedContext = createContext({
    fetchedData: {},
    setFetchedData: (s: any) => {}
});

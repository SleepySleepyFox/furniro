import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

const RouteHistoryContext = createContext<string[]>([]);

export function RoutteHistoryProvider(children : React.ReactNode){
    const [history, setHistory] = useState()
    const route = useRouter()
    return(
        <div>
            {children}
        </div>
    )
}
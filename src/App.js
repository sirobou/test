
import {React,useState,useEffect} from 'react';
import { BrowserRouter,Route,Link,Switch } from "react-router-dom"
import {Food} from "./page/food"
import{Main} from "./page/main"
import{Hobby} from "./page/hobby"
import{Notfound}from "./page/notfound"
import "./index.css"

export const App = () => {
    return(
        <BrowserRouter>
           
            <ul >      
                <li>
                    <Link exact to="/">main</Link>
                </li>
                <li>
                    <Link to="/Food">food</Link>
                </li>
                <li>
                    <Link to="/Hobby">hobby</Link>
                </li>
            </ul>
        
            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>
                <Route path="/Food">
                    <Food />
                </Route>
                <Route path="/Hobby">
                    <Hobby />
                </Route>
                <Route>
                    <Notfound />
                </Route>
            </Switch>   
                
            </BrowserRouter>
    )
}


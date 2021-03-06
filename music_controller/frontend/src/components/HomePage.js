import React, { Component } from 'react'
import RoomJoinPage from "./RoomJoinPage"
import CreateRoomPage from "./CreateRoomPage"
import {BrowserRouter as Router , Route, Link, Redirect, Switch} from "react-router-dom";
import Room from './Room';




export default class HomePage extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return(
            <Router>
                <Switch>
                    <Route exact path="/"><p>This is home page</p></Route>
                    <Route path="/join" component={RoomJoinPage}></Route>
                    <Route path="/create" component={CreateRoomPage}></Route>
                    <Route path="/room/:roomCode" component={Room}></Route>
                </Switch>
            </Router>
        )
    }
}

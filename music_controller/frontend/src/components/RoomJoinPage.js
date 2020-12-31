import React, { Component } from 'react'
import { Button,Grid,Typography,TextField,FormHelperText, FormControl,Radio,RadioGroup,FormControlLabel } from "@material-ui/core"
import {Link} from "react-dom"


export default class RoomJoinPage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            roomCode: "",
            error: "",
        }
        this.handleTextFieldChange=this.handleTextFieldChange.bind(this);
        this.roomButtonPressed=this.roomButtonPressed.bind(this);
    }

    handleTextFieldChange(e){
        this.setState({
            roomCode:e.target.value
        })
    }

    roomButtonPressed(e){
        console.log(this.state.roomCode);
        const requestOptions={
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                code:this.state.roomCode
            })
        };
        fetch('/api/join-room',requestOptions)
        .then((response) => {
            if(response.ok){
                this.props.history.push(`/room/${this.state.roomCode}`);
            }
            else{
                this.setState({error:"Room not found"});
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <Grid container spacing={1}>
                    <Grid item xs={12} align="center">
                        <Typography variant="h4" component="h4">
                            Join a room
                        </Typography>
                    </Grid>
                    <Grid item xs={12} align="center">
                        <TextField
                            onChange={this.handleTextFieldChange}
                            error={this.state.error}
                            label="code"
                            placeholder="Enter a Room Code"
                            value={this.state.roomCode}
                            helperText={this.state.error}
                            variant="outlined"
                        />
                    </Grid>    

                    <Grid item xs={12} align="center">
                        <Button variant="contained" color="primary" onClick={this.roomButtonPressed} >
                            Enter Room
                        </Button>    
                    </Grid>    
                    <Grid item xs={12} align="center">
                        <Button variant="contained" color="secondary" to="/" component={Link}>
                            Back
                        </Button>    
                    </Grid>         
                </Grid>
            </div>
        )
    }
}

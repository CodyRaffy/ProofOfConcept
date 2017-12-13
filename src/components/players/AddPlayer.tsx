import * as React from "react";
import { Store } from "./../../Store";
import { IPlayer } from "./../../types/player";

import { updatePlayer, fetchPlayer } from "./../../actions/PlayerActions";

export interface IOwnProps { }

export interface IOwnState {
    firstName: string;
    lastName: string;
}

export interface IConnectedState { }

export interface IConnectedDispatch {
    add: (firstName: string, lastName: string) => void;
}

export class AddPlayer extends React.Component<IOwnProps & IConnectedState & IConnectedDispatch, IOwnState> {
    constructor(props: IOwnProps & IConnectedState & IConnectedDispatch) {
        super(props);
        this.state = {
            firstName:'',
            lastName: ''
        }
    }

    handleInputChange = (event: any) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    
    addClickHandler = () => {
        const { add} = this.props;
        add(this.state.firstName, this.state.lastName);
    }
    
    render() {
        return (
            <div>
                <h1>Player Information</h1>
                <label htmlFor="firstName">First Name:</label>
                <input 
                    id="firstName" 
                    name="firstName" 
                    type="text" 
                    value={this.state.firstName} 
                    onChange={this.handleInputChange}/> 
                <label htmlFor="lastName">Last Name:</label>
                <input 
                    id="lastName" 
                    name="lastName" 
                    type="text" 
                    value={this.state.lastName} 
                    onChange={this.handleInputChange}/>
                <br />
                <button className="btn btn-primary" onClick={this.addClickHandler}>Add New Player</button>
            </div>
        );
    }
}
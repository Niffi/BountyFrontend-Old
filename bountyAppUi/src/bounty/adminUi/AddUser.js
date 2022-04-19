// import '../App.css';
import React from 'react';
import NumberInput from '../util/NumberInput';

export default class AddUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userFirstname: "",
            userLastname: "",
            userBalance: null,
        };
    }

    reset() {
        this.setState({userFirstname: "", userLastname: "", userBalance: null});
    }

    submit() {
        if(this.state.userFirstname === "" || this.state.userLastname === "" || this.state.userBalance === null || isNaN(this.state.userBalance)) {
            console.log("Error no valid entries");
            window.alert("Error: no valid entries");
            return;
        }
        if(window.confirm("Add User "+this.state.userFirstname+" "+this.state.userLastname+" with a balance of "+this.state.userBalance+"€ ?")) {
            console.log(this.state);
            // update server

            this.reset();
        }       
    }

    render() {
        return(
            <div className='rubric'>
                <div className='title'>{"Add User"}</div>
                <div className="wrapper">{"Vorname: "} <input className='wrapper' value={this.state.userFirstname} onChange={event=>{this.setState({userFirstname: event.target.value})}}/></div>
                <div className="wrapper"> {"Nachname: "} <input className='wrapper' value={this.state.userLastname} onChange={event=>{this.setState({userLastname: event.target.value})}} /></div><br className='wrapper' />
                <div className='wrapper'>{"Kontostand: "} <NumberInput value={this.state.userBalance} setValue={(value)=>{this.setState({userBalance: value});}} /></div>
                {(this.state.userFirstname!==""||this.state.userLastname!==""||this.state.userBalance!=null)&&<button className="wrapper" onClick={this.reset.bind(this)}>{"reset"}</button>}
                {(this.state.userFirstname!==""&&this.state.userLastname!==""&&this.state.userBalance!=null)&&<button className='wrapper' onClick={this.submit.bind(this)}>{"submit"}</button>}
            </div>
        );
    }
}
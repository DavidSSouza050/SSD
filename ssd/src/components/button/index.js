import { Component } from "react";
import './style.css';

export class Button extends Component{
    render(){
        return(
            <button className="button">{this.props.title}</button>
        );
    }
};


export class ButtonInverted extends Component{
    render(){
        return(
            <button className="button inverted">{this.props.title}</button>
        );
    }
};
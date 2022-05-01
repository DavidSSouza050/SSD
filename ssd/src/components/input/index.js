import { Component } from "react";
import './style.css';

export class InputText extends Component {

    render(){
        return(
            <div className="inputField">
                <label for={this.props.id}>{this.props.label}</label>
                <input id={this.props.id} name={this.props.id} type="text" />
            </div>
        );
    }

};

export class Select extends Component{
    render(){
        return(
            <div className="inputField">
                <label for={this.props.id}>{this.props.label}</label>
                <select name={this.props.id} id={this.props.id}>
                    {this.props.children}
                </select>
            </div>
        );
    }
}
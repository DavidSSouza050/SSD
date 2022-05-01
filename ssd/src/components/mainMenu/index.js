import {React, Component} from 'react';
import voltarHome from '../../icons/pagina-inicial.png';
import './style.css';

class MainMenu extends Component{
    render(){

        return(
            <nav id="MainMenu">
            <div className="content">
              <strong className="logo">&#60;SSD - {this.props.title}/&#62;</strong>
              <div className="options">
                <a href="#!">
                  <img src={voltarHome} alt="Página inicial" />
                </a>
                <div className="circle"></div>
                    <span>| </span>
                <a href="#!">SAIR</a>
              </div>
            </div>
          </nav>
        )
    }
}

export default MainMenu;
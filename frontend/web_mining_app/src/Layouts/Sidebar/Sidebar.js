import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
import './Sidebar.css';


class Sidebar extends Component{
    constructor(){
        super();
        this.state = {
            logos : []
        }
    }

    render() {

        return (
            <div className="sidebar">
                <nav className="pcoded-navbar">
                        <div className="nav-list">
                            <div className="pcoded-inner-navbar main-menu">
                                <div className="pcoded-navigation-label"><p className="sidebar-main-title">NEWS ANALYSIS APP</p></div>
                                <ul className="pcoded-item pcoded-left-item">
                                    <li className="pcoded-hasmenu">
                                        <a href="/" className="waves-effect waves-dark">
            								<span className="pcoded-micon"><i className="feather icon-home"></i></span>
                                            <span className="pcoded-mtext">Dashboard</span>
                                        </a>
                                    </li>
                                    <li className="pcoded-hasmenu">
                                        <a href="/sources" className="waves-effect waves-dark">
            								<span className="pcoded-micon"><i className="feather icon-home"></i></span>
                                            <span className="pcoded-mtext">Fuentes</span>
                                        </a>
                                    </li>
                                    <li className="pcoded-hasmenu">
                                        <a href="/categories" className="waves-effect waves-dark">
            								<span className="pcoded-micon"><i className="feather icon-home"></i></span>
                                            <span className="pcoded-mtext">Categorias</span>
                                        </a>
                                    </li>
                                    <li className="pcoded-hasmenu">
                                        <a href="/historical" className="waves-effect waves-dark">
            								<span className="pcoded-micon"><i className="feather icon-home"></i></span>
                                            <span className="pcoded-mtext">Historico</span>
                                        </a>
                                    </li>
                                    <li className="pcoded-hasmenu">
                                        <a href="/probe" className="waves-effect waves-dark">
            								<span className="pcoded-micon"><i className="feather icon-home"></i></span>
                                            <span className="pcoded-mtext">Prueba</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
            </div>



        )
    }
}

export default Sidebar;
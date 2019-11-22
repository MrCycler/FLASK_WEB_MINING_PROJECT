import React, {Component} from 'react';
import {Link} from 'react-router-dom';
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
                <nav class="pcoded-navbar">
                        <div class="nav-list">
                            <div class="pcoded-inner-navbar main-menu">
                                <div class="pcoded-navigation-label">Navigation</div>
                                <ul class="pcoded-item pcoded-left-item">
                                    <li class="pcoded-hasmenu">
                                        <a href="/" class="waves-effect waves-dark">
            								<span class="pcoded-micon"><i class="feather icon-home"></i></span>
                                            <span class="pcoded-mtext">Dashboard</span>
                                        </a>
                                    </li>
                                    <li class="pcoded-hasmenu">
                                        <a href="/source" class="waves-effect waves-dark">
            								<span class="pcoded-micon"><i class="feather icon-home"></i></span>
                                            <span class="pcoded-mtext">Fuentes</span>
                                        </a>
                                    </li>
                                    <li class="pcoded-hasmenu">
                                        <a href="/categories" class="waves-effect waves-dark">
            								<span class="pcoded-micon"><i class="feather icon-home"></i></span>
                                            <span class="pcoded-mtext">Categorias</span>
                                        </a>
                                    </li>
                                    <li class="pcoded-hasmenu">
                                        <a href="/historical" class="waves-effect waves-dark">
            								<span class="pcoded-micon"><i class="feather icon-home"></i></span>
                                            <span class="pcoded-mtext">Historico</span>
                                        </a>
                                    </li>
                                    <li class="pcoded-hasmenu">
                                        <a href="/probe" class="waves-effect waves-dark">
            								<span class="pcoded-micon"><i class="feather icon-home"></i></span>
                                            <span class="pcoded-mtext">Prueba</span>
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
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/images/logopucp.jpg';
import './Navbar.css';


class Navbar extends Component{
    constructor(){
        super();
        this.state = {
            logos : []
        }
    }

    componentDidMount(){
        //window.addEventListener('scroll',this.handleScroll);

    }

    componentWillUnmount(){
        //window.addEventListener('scroll',this.handleScroll);
    }

    /*Para hacer sticky el navbar */
    handleScroll = () => {
        // var navbar = document.getElementById("navbar");
        // var sticky = navbar.offsetTop;
        // if (window.pageYOffset >= sticky){
        //     navbar.classList.add("navbar--sticky");
        // } else {
        //     navbar.classList.remove("navbar--sticky");
        // }
    }

    

    render() {

        return (
            <div>
                <nav className="navbar header-navbar pcoded-header" header-theme="themelight1">
                    <div className="navbar-wrapper">
                        <div className="navbar-logo" logo-theme="theme6">
                            <a href="index.html">
                                <img className="img-navbar" src={Logo} alt="Theme-Logo" />
                            </a>
                            <a className="mobile-menu" id="mobile-collapse">
                                <i className="feather icon-menu icon-toggle-right"></i>
                            </a>
                            <a className="mobile-options waves-effect waves-light">
                                <i className="feather icon-more-horizontal"></i>
                            </a>
                        </div>
                        <div className="navbar-container container-fluid">
                            <ul className="nav-left">
                                <li className="header-search">
                                    <div className="main-search morphsearch-search">
                                        <div className="input-group">
                                            <span className="input-group-prepend search-close">
                                            <i className="feather icon-x input-group-text"></i>
                                        </span>
                                            <input type="text" className="form-control" placeholder="Enter Keyword" />
                                            <span className="input-group-append search-btn">
                                            <i className="feather icon-search input-group-text"></i>
                                        </span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <i className="full-screen feather icon-maximize"></i>
                                
                                </li>
                            </ul>
                            <ul className="nav-right">
                                <li className="header-notification">
                                    <div className="dropdown-primary dropdown">
                                        <div className="dropdown-toggle" data-toggle="dropdown">
                                            <i className="feather icon-bell"></i>
                                            <span className="badge bg-c-red">5</span>
                                        </div>
                                        <ul className="show-notification notification-view dropdown-menu" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
                                            <li>
                                                <h6>Notifications</h6>
                                                <label className="label label-danger">New</label>
                                            </li>
                                            <li>
                                                <div className="media">
                                                    <img className="img-radius" src="../files/assets/images/avatar-4.jpg" alt="Generic placeholder image" />
                                                    <div className="media-body">
                                                        <h5 className="notification-user">John Doe</h5>
                                                        <p className="notification-msg">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                                                        <span className="notification-time">30 minutes ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="media">
                                                    <img className="img-radius" src="../files/assets/images/avatar-3.jpg" alt="Generic placeholder image" />
                                                    <div className="media-body">
                                                        <h5 className="notification-user">Joseph William</h5>
                                                        <p className="notification-msg">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                                                        <span className="notification-time">30 minutes ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="media">
                                                    <img className="img-radius" src="../files/assets/images/avatar-4.jpg" alt="Generic placeholder image" />
                                                    <div className="media-body">
                                                        <h5 className="notification-user">Sara Soudein</h5>
                                                        <p className="notification-msg">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                                                        <span className="notification-time">30 minutes ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="header-notification">
                                    <div className="dropdown-primary dropdown">
                                        <div className="displayChatbox dropdown-toggle" data-toggle="dropdown">
                                            <i className="feather icon-message-square"></i>
                                            <span className="badge bg-c-green">3</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            
        )
    }
}

export default Navbar;
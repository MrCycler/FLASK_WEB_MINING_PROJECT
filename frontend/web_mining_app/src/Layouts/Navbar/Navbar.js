import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
import Logo from '../../assets/images/logopucp.jpg';
//import './Navbar.css';


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
        //     navbar.classNameList.add("navbar--sticky");
        // } else {
        //     navbar.classNameList.remove("navbar--sticky");
        // }
    }

    

    render() {

        return (

            <header className="header">
                <div className="top_bar">
                    <div className="top_bar_container">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="top_bar_content d-flex flex-row align-items-center justify-content-start">
                                        <ul className="top_bar_contact_list">
                                            <li><div className="question">Have any questions?</div></li>
                                            <li>
                                                <i className="fa fa-phone" aria-hidden="true"></i>
                                                <div>001-1234-88888</div>
                                            </li>
                                            <li>
                                                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                                <div><a href="https://colorlib.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="7b12151d14551f1e1e0918091e1a0f120d1e3b1c161a121755181416">[email&#160;protected]</a></div>
                                            </li>
                                            </ul>
                                            <div className="top_bar_login ml-auto">
                                                <div className="login_button"><a href="#">Register or Login</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>              
                    </div>
                    <div className="header_container">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="header_content d-flex flex-row align-items-center justify-content-start">
                                        <div className="logo_container">
                                            <a href="#">
                                                <div className="logo_text">Unic<span>at</span></div>
                                            </a>
                                        </div>
                                    <nav className="main_nav_contaner ml-auto">
                                        <ul className="main_nav">
                                            <li className="active"><a href="#">Home</a></li>
                                            <li><a href="about.html">Consolidado</a></li>
                                            <li><a href="courses.html">El Comercio</a></li>
                                            <li><a href="blog.html">Perú 21</a></li>
                                            <li><a href="blog.html">RPP</a></li>
                                            <li><a href="blog.html">Categorías</a></li>                                          
                                        </ul>
                                        <div className="search_button"><i className="fa fa-search" aria-hidden="true"></i></div>
                                       
                                        <div className="hamburger menu_mm">
                                            <i className="fa fa-bars menu_mm" aria-hidden="true"></i>
                                        </div>
                                    </nav>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>





            </header>
            
            
        )
    }
}

/*
<div>
                <nav classNameName="navbar header-navbar pcoded-header" header-theme="themelight1">
                    <div classNameName="navbar-wrapper">
                        <div classNameName="navbar-logo" logo-theme="theme6">
                            <a href="index.html">
                                <img classNameName="img-navbar" src={Logo} alt="Theme-Logo" />
                            </a>
                            <a classNameName="mobile-menu" id="mobile-collapse" href="./">
                                <i classNameName="feather icon-menu icon-toggle-right"></i>
                            </a>
                            <a classNameName="mobile-options waves-effect waves-light" href="./">
                                <i classNameName="feather icon-more-horizontal"></i>
                            </a>
                        </div>
                        <div classNameName="navbar-container container-fluid">
                            <ul classNameName="nav-left">
                                <li classNameName="header-search">
                                    <div classNameName="main-search morphsearch-search">
                                        <div classNameName="input-group">
                                            <span classNameName="input-group-prepend search-close">
                                            <i classNameName="feather icon-x input-group-text"></i>
                                        </span>
                                            <input type="text" classNameName="form-control" placeholder="Enter Keyword" />
                                            <span classNameName="input-group-append search-btn">
                                            <i classNameName="feather icon-search input-group-text"></i>
                                        </span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <i classNameName="full-screen feather icon-maximize"></i>
                                
                                </li>
                            </ul>
                            <ul classNameName="nav-right">
                                <li classNameName="header-notification">
                                    <div classNameName="dropdown-primary dropdown">
                                        <div classNameName="dropdown-toggle" data-toggle="dropdown">
                                            <i classNameName="feather icon-bell"></i>
                                            <span classNameName="badge bg-c-red">5</span>
                                        </div>
                                        <ul classNameName="show-notification notification-view dropdown-menu" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
                                            <li>
                                                <h6>Notifications</h6>
                                                <label classNameName="label label-danger">New</label>
                                            </li>
                                            <li>
                                                <div classNameName="media">
                                                    <img classNameName="img-radius" src="../files/assets/images/avatar-4.jpg" alt="" />
                                                    <div classNameName="media-body">
                                                        <h5 classNameName="notification-user">John Doe</h5>
                                                        <p classNameName="notification-msg">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                                                        <span classNameName="notification-time">30 minutes ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div classNameName="media">
                                                    <img classNameName="img-radius" src="../files/assets/images/avatar-3.jpg" alt="" />
                                                    <div classNameName="media-body">
                                                        <h5 classNameName="notification-user">Joseph William</h5>
                                                        <p classNameName="notification-msg">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                                                        <span classNameName="notification-time">30 minutes ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div classNameName="media">
                                                    <img classNameName="img-radius" src="../files/assets/images/avatar-4.jpg" alt="" />
                                                    <div classNameName="media-body">
                                                        <h5 classNameName="notification-user">Sara Soudein</h5>
                                                        <p classNameName="notification-msg">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                                                        <span classNameName="notification-time">30 minutes ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li classNameName="header-notification">
                                    <div classNameName="dropdown-primary dropdown">
                                        <div classNameName="displayChatbox dropdown-toggle" data-toggle="dropdown">
                                            <i classNameName="feather icon-message-square"></i>
                                            <span classNameName="badge bg-c-green">3</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
*/


export default Navbar;
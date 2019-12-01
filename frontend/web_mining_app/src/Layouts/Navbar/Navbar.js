import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
import Logo from '../../assets/unicat/images/logomaestria.jpg';
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
                                            <li><div className="question">¿Alguna consulta?</div></li>
                                            <li>
                                                <i className="fa fa-phone" aria-hidden="true"></i>
                                                <div>+51 999-999-999</div>
                                            </li>
                                            <li>
                                                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                                <div><a href="" className="__cf_email__" data-cfemail=""> jose.balbuena@pucp.pe</a></div>
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
                                             <img src={Logo} width="70%"/>
                                                
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




export default Navbar;
import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
import Logo from '../../assets/unicat/images/logomaestria.jpg';
//import {Row,Col,Container} from 'reactstrap';
import {Button, Modal,  ModalBody } from 'reactstrap';
import TextField from '@material-ui/core/TextField';
//import Logo from '../../assets/images/logopucp.jpg';
import './Navbar.css';


class Navbar extends Component{
    constructor(){
        super();
        this.state = {
            logos : [],
            modal_suscripcion: false,

        }

        this.toggle_suscripcion = this.toggle_suscripcion.bind(this);
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

    toggle_suscripcion() {
        this.setState(prevState => ({
            modal_suscripcion: !prevState.modal_suscripcion}));
      }

    

    render() {

        /*<div className="question">¿Alguna consulta?</div> 
        <i className="fa fa-phone" aria-hidden="true"></i>
        <div>+51 999-999-999</div>
        <i className="fa fa-envelope-o" aria-hidden="true"></i>
        <div><a href="" className="__cf_email__" data-cfemail=""> jose.balbuena@pucp.pe</a></div>
        */

        return (
            <header className="header">
                <div className="top_bar">
                    <div className="top_bar_container">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="top_bar_content d-flex flex-row align-items-center justify-content-start">
                                        <ul className="top_bar_contact_list">
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            </ul>
                                            <div className="top_bar_login ml-auto">
                                                <div className="login_button" onClick={this.toggle_suscripcion}><a href="./#">Register or Login</a></div>
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
                                            <a href="./">
                                             <img src={Logo} width="70%" alt="logo-pucp"/>          
                                            </a>
                                        </div>
                                    <nav className="main_nav_contaner ml-auto">
                                        <ul className="main_nav">
                                            <li><a href="/">Inicio</a></li>
                                            <li><a href="/graficos">Visualización de Gráficos</a></li>  
                                        </ul>
                                        
                                    </nav>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <Modal isOpen={this.state.modal_suscripcion} toggle={this.toggle_suscripcion}>

                    <ModalBody className="form_modal_body">
                        <div className="ModalContainer">
                            <div className="ModalContainer__title">
                                <h2>Suscripción</h2>
                                <p>Si deseas obtener mas informacio dejanos tu correo electronico.</p>
                            </div>
                            <div className="ModalContainer__form">
                                <div className="Form__input">
                                    <TextField label="Nombre y apellidos" variant="outlined" />
                                </div>
                                <div className="Form__input">
                                    <TextField label="Correo electrónico" variant="outlined" />
                                </div>
                            </div>
                            <Button variant="contained" color="primary">Ingresar</Button>
                        </div>
                    </ModalBody>
                </Modal>


            </header>
            
            
        )
    }
}




export default Navbar;
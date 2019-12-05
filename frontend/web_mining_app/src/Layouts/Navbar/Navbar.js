import React, {Component} from 'react';
import Logo from '../../assets/unicat/images/logomaestria.jpg';
//import {Row,Col,Container} from 'reactstrap';
import {Button, Modal,  ModalBody } from 'reactstrap';
import TextField from '@material-ui/core/TextField';
//import Logo from '../../assets/images/logopucp.jpg';
import './Navbar.css';


class Navbar extends Component{
    constructor(props){
        super(props);
        this.state = {
            logos : [],
            modal_suscripcion: false,

        }

        this.toggle_suscripcion = this.toggle_suscripcion.bind(this);
        this.onclick_subcription = this.onclick_subcription.bind(this);
        this.out_subscription = this.out_subscription.bind(this);
    }

    componentDidMount(){
        //window.addEventListener('scroll',this.handleScroll);

    }

    componentWillUnmount(){
        //window.addEventListener('scroll',this.handleScroll);
    }

    handleScroll = () => {
    }


    onclick_subcription(){
        this.toggle_suscripcion();
        this.props.log_handler(); 
        window.sessionStorage.setItem("auth", "active");
        
    }

    out_subscription(){
        
        this.props.log_handler(); 
        window.sessionStorage.setItem("auth", "deactive");    
    }

    toggle_suscripcion() {
       
        this.setState(prevState => ({
            modal_suscripcion: !prevState.modal_suscripcion}));
      }

    

    render() {

        let li1 = "";
        let div1= "";
        if(window.sessionStorage.getItem("auth")==='active')
        {
            li1 = <li><a href="/prove">Prueba</a></li>  
            div1 = <div id="SALIR" className="login_button" onClick={this.out_subscription}><p className="Register_text">Salir</p></div>;
           
        }
        else{
            
            div1 = <div id="REGISTER" className="login_button" onClick={this.toggle_suscripcion}><p className="Register_text">Registrese</p></div>;
        }

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
                                                {div1}
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
                                            <li><a href="/aboutus">Acerca de nosotros</a></li>  
                                           {li1}
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
                                <p>Si deseas acceder a mayor información dejanos tu correo electrónico.</p>
                            </div>
                            <div className="ModalContainer__form">
                                <div className="Form__input">
                                    <TextField label="Nombre y apellidos" variant="outlined" />
                                </div>
                                <div className="Form__input">
                                    <TextField label="Correo electrónico" variant="outlined" />
                                </div>
                            </div>
                            
                            <Button variant="contained" color="primary" onClick={this.onclick_subcription}>Ingresar</Button>
                            
                        </div>
                    </ModalBody>
                </Modal>


            </header>
            
            
        )
    }
}




export default Navbar;
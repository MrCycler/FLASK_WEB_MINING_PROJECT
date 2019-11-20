import React, {Component} from 'react';
import {Link} from 'react-router-dom';
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
        var navbar = document.getElementById("navbar");
        var sticky = navbar.offsetTop;
        if (window.pageYOffset >= sticky){
            navbar.classList.add("navbar--sticky");
        } else {
            navbar.classList.remove("navbar--sticky");
        }
    }

    

    render() {

        return (
            <div id="navbar" className="navbar-area">
                 <Link to="/">
                    <img class="navbar__image" 
                    alt=""
                    src="https://papercubehome.files.wordpress.com/2019/02/modo-principal.png"/>
                    </Link>
                <Link to="/" className="navbar__item">INICIO</Link>
                <Link to="/sources" className="navbar__item">FUENTES</Link>
                <Link to="/categories" className="navbar__item">CATEGORIAS</Link>
                <Link to="/historical" className="navbar__item">HISTORICO</Link>
                <Link to="/probe" className="navbar__item">PRUEBE EL ALGORITMO</Link>
            </div>
        )
    }
}

export default Navbar;
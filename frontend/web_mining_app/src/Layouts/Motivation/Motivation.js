import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
import Icon1 from '../../assets/unicat/images/icon_1.png';
import Icon2 from '../../assets/unicat/images/icon_2.png';
import Icon3 from '../../assets/unicat/images/icon_3.png';
import Icon4 from '../../assets/unicat/images/icon_4.png';
//import './Navbar.css';


class Motivation extends Component{
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
            <div className="features">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="section_title_container text-center">
                                <h2 className="section_title">Welcome To Unicat E-Learning</h2>
                                <div className="section_subtitle"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel gravida arcu. Vestibulum feugiat, sapien ultrices fermentum congue, quam velit venenatis sem</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="row features_row">
                        <div className="col-lg-3 feature_col">
                            <div className="feature text-center trans_400">
                                <div className="feature_icon"><img src={Icon1} /></div>
                                <h3 className="feature_title">The Experts</h3>
                                <div className="feature_text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div>
                            </div>
                        </div>
                        <div className="col-lg-3 feature_col">
                            <div className="feature text-center trans_400">
                                <div className="feature_icon"><img src={Icon2} /></div>
                                <h3 className="feature_title">Book & Library</h3>
                                <div className="feature_text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div>
                            </div>
                        </div>
                        <div className="col-lg-3 feature_col">
                            <div className="feature text-center trans_400">
                                <div className="feature_icon"><img src={Icon3} /></div>
                                <h3 className="feature_title">Best Courses</h3>
                                <div className="feature_text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div>
                            </div>
                        </div>
                        <div className="col-lg-3 feature_col">
                            <div className="feature text-center trans_400">
                                <div className="feature_icon"><img src={Icon4}/></div>
                                <h3 className="feature_title">Award & Reward</h3>
                                <div className="feature_text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
            
        )
    }
}




export default Motivation;
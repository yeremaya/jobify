import React from "react";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from '../components';
import main from '../assets/images/main.svg'
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
        <div>
            <nav>
                <Logo />
            </nav>
        </div>
        <div className='container page'>
            <div className='info'>
                <h1>Job <span>Tracking</span> App</h1>
                <p>
                    I'm baby austin shabby chic tumblr qui. Mumblecore qui flannel raclette DSA JOMO. Vibecession adipisicing magna stumptown. Tote bag messenger bag vegan distillery venmo sed cloud bread lyft jean shorts mumblecore bicycle rights JOMO knausgaard deserunt.
                </p>
                <Link to='/register' className='btn btn-hero'>
                    Login / Register
                </Link>
            </div>
            <img src={main} alt="Jobhunt" className="img main-img" />
        </div>
    </Wrapper>
  )
}

export default Landing;
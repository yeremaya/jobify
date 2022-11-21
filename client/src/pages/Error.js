import React from "react";
import img from '../assets/images/error-404.svg';
import Wrapper from "../assets/wrappers/ErrorPage";
import {Link} from "react-router-dom";

const Error = () => {
  return (
  <Wrapper className='full-page'>
      <div>
        <img src={img} alt="not found"/>
        <h3>Oops! Page not found.</h3>
        <Link to={"./"}>Go back to home</Link>
      </div>
  </Wrapper>
  )
}

export default Error;
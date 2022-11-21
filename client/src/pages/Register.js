import React from "react";
import { useState } from "react";
import { Logo, FormRow, Alert } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { useAppContext } from "../context/appContext";

const initialState = {
    name: "",
    email: "",
    password: "",
    isMember: true,
}

const Register = () => {
    const [values, setValues] = useState(initialState);

    const { isLoading, showAlert, displayAlert, registerUser } = useAppContext()

    const toggleMember = () => {
        setValues({...values, isMember: !values.isMember});
    }

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const {name, password, email, isMember} = values
        if (!password || !email || (!isMember && !name)) {
            displayAlert()
            return
        }
        const currentUser = {name, password, email }
        registerUser(currentUser)
    }

    return (
    <Wrapper className="full-page">
        <form className="form" autoComplete="off" onSubmit={onSubmit}>
            <Logo />
            <h3>{ values.isMember ? "Login" : "Register" }</h3>
            {showAlert && <Alert />}

            {/* Name */}
            {!values.isMember && (<FormRow type="text" name="name" value={values.name} handleChange={handleChange} labelText="Name" />) }

            {/* Email */}
            <FormRow type="text" name="email" value={values.email} handleChange={handleChange} labelText="email" />

            {/* Password */}
            <FormRow type="password" name="password" value={values.password} handleChange={handleChange} labelText="password" />

            <button type="submit" className="btn btn-block" disabled={isLoading}>{ values.isMember ? "Login" : "Register" }</button>
            <p>
                { values.isMember ? "Not yet a member?" : "Already a member?" }
                <button type="button" className="member-btn" onClick={toggleMember}>
                    { !values.isMember ? "Login" : "Register" }
                </button>
            </p>
        </form>
    </Wrapper>
    )
}

export default Register;
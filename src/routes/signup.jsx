import React, { useState } from "react";
import "../styles.css";
import { VscArrowRight } from "react-icons/vsc";
import { FaFacebookSquare, FaGoogle, FaTwitter } from "react-icons/fa";
import { AiOutlineGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { Link } from "react-router-dom";

export default function Signup() {
    // React States
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [signup, setSignup] = useState(false);

    // User Login info
    const database = [

        {
            username: "test",
            password: "test"
        },

        {
            username: "user2",
            password: "pass2"
        }

    ];

    const errors = {
        uname: "invalid username",
        pass: "invalid password",
        mob: "invalid numbers"
    };

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        var { uname, pass, phname } = document.forms[0];

        // Find user login info
        const userData = database.find((user) => user.username === uname.value);

        // Compare user info
        if (userData) {
            if (userData.password !== pass.value) {
                // Invalid password
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
            }
        } else {
            // Username not found
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    // JSX code for login form
    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>

                <div className="input-container">
                    <label> Username </label>
                    <input type="text" name="uname" required placeholder="  " />
                    {renderErrorMessage("uname")}
                </div>


                <div className="input-container">
                    <label> Phone number </label>
                    <input type="text" name="phname" required placeholder="  " />
                    {renderErrorMessage("uname")}
                </div>

                <div className="input-container">
                    <label> Password </label>
                    <input type="password" name="pass" required placeholder=" " />
                    {renderErrorMessage("pass")}
                </div>


                <div style={{ marginTop: '5px', display: 'flex', justifyContent: 'center' }}>
                    <input type="submit" value={'     Create Account     '} />
                </div>

                <div style={{ marginTop: '8px', display: 'flex', justifyContent: 'center' }}>   or  </div>

                <div style={{ marginTop: '8px', display: 'flex', justifyContent: 'center' }}>  Create Account With  </div>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '7px' }}>
                    -----------------------------------------------------
                </div>


                <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-around', padding: '20px' }}>

                    <div style={{ color: 'blue', fontSize: '27px', alignSelf: 'center' }}>
                        <FaFacebookSquare />
                    </div>

                    <div style={{ color: 'red', fontSize: '27px', alignSelf: 'center' }}>
                        <FaGoogle />
                    </div>

                    <div style={{ color: "gray", fontSize: '27px', alignSelf: 'center' }}>
                        <AiOutlineGithub />
                    </div>

                    <div style={{ color: "deepskyblue", fontSize: '27px', alignSelf: 'center' }}>
                        <FaTwitter />
                    </div>

                    <div style={{ color: "blue", fontSize: '27px', alignSelf: 'center' }}>
                        <BsLinkedin />
                    </div>


                </div>


            </form>
        </div>
    );

    return (

        <div className="app">
            <div className="login-form">
                <div style={{ display: 'flex', marginBottom: '20px', width: '98%', justifyContent: 'space-between' }}>
                    <div style={{ fontSize: '30px' }}>   Create Account   </div>
                    <Link to="/signin">
                        <button style={{cursor: 'pointer',padding: '10px', backgroundColor: 'deepskyblue', color: 'white', borderRadius: '7px', fontWeight: 'bold', fontSize: '16px', borderStyle: 'solid', boxShadow: 'none', outline: 'none', border: 'none'}}>Enter</button>
                    </Link>
                </div>
                {isSubmitted ? <div>User is successfully created</div> : renderForm}
            </div>
        </div>

    );
}



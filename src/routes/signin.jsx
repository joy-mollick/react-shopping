import React, { useState } from "react";
import "../styles.css";
import { VscArrowRight } from "react-icons/vsc";
import { FaFacebookSquare, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Signin() {
    // React States
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [signup, setSignup] = useState(false);

    // User Login info
    const database = [

        {
            username: "user1",
            password: "pass1"
        },

        {
            username: "user2",
            password: "pass2"
        }

    ];

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        var { uname, pass } = document.forms[0];

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
                    <label> Password </label>
                    <input type="password" name="pass" required placeholder=" " />
                    {renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                <Link to="/products">
                    <input type="submit" value={'     Enter     '} />
                </Link>
                </div>

                <div style={{ marginTop: '8px', display: 'flex', justifyContent: 'center' }}>   or  </div>

                <div style={{ marginTop: '5px', display: 'flex', justifyContent: 'center' }}>
                    <Link to="/signup">
                        <input type="submit" value={'     Create Account     '} />
                    </Link>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '7px' }}>
                    -----------------------------------------------------
                </div>

                <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '90%', alignContent: 'center', alignItems: 'center' }}>

                    <div style={{ color: 'blue', fontSize: '27px', width: '30%', alignSelf: 'center', marginLeft: '25%' }}>
                        <FaFacebookSquare />
                    </div>

                    <div style={{ color: 'red', fontSize: '27px', width: '30%', marginLeft: '5%', alignSelf: 'center' }}>
                        <FaGoogle />
                    </div>

                    <div style={{ color: "deepskyblue", fontSize: '27px', width: '30%', marginLeft: '5%', alignSelf: 'center' }}>
                        <FaTwitter />
                    </div>

                </div>


            </form>
        </div>
    );

    return (

        <div className="app">
            <div className="login-form">
                <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '20px'  }}>
                    <div style={{ fontSize: '35px', color: 'deepskyblue', alignSelf: 'center' }}> <VscArrowRight /> </div>
                    <div style={{display: 'flex', fontSize: '30px', marginLeft: '20px',justifyContent:'flex-end' }}>  Sign In   </div>
                </div>
                {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
            </div>
        </div>

    );
}

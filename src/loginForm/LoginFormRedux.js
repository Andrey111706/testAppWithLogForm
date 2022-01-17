import {Field, reduxForm} from "redux-form";
import {EmailArea, PasswordArea} from "./FormControl/FormControls";
import {EmailChecker, RequireField} from "./FormControl/Validators";
import style from "./LoginForm.module.css"
import React from "react";


const LoginFormCreator = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} className={style.form}>
            <h4>Welcome!</h4>
            <h2>Join the Community</h2>
            <div className={style.inputHolder}>
                <label><span>E-mail or Username</span>
                   <div className={style.iconHolder + ' ' + style.iconMail}/>
                    <Field placeholder={"e.g.: elonmusk@mars.com"} component={EmailArea} name="email"
                           validate={[RequireField, EmailChecker]}/>
                </label>
            </div>

            <div className={style.inputHolder}>
            <label><span>Password</span>
                <div className={style.iconHolder + ' ' + style.iconLocker}/>
                <Field placeholder={"e.g.: X Æ A-12"} component={PasswordArea} name="password"
                       validate={[RequireField]}/>
            </label>
            </div>
            <button className={style.submitButton}><span>Sign Up</span></button>
            <div className={style.onSubmitInfo}>
                <span>Already a member?</span>
                <span>Login here →</span>
            </div>
        </form>
    )
};
let LoginFormRedux = reduxForm(
    {
        form: 'login'
    }
)(LoginFormCreator)
export default LoginFormRedux
import React from 'react';
import style from './LoginForm.module.css'
import LoginFormRedux from "./LoginFormRedux";

const LoginForm = () => {
    return (
        <div className={style.mainPage}>
            <div className={style.rectangleInAngleHandler}>
                <div className={style.rectangleInAngle}/>
            </div>
            <div className={style.formHolder}>
                    <LoginFormRedux/>
            </div>

        </div>
    );
};

export default LoginForm;
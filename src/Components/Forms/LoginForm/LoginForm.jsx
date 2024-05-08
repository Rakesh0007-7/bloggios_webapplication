"use client";

import './LoginForm.scss';
import TextField from "@/Components/Fields/TextField";
import {useState} from "react";
import FilledButton from "@/Components/Buttons/FilledButton/FilledButton";

const LoginForm = () => {

    const formStyle = {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const [loginData, setLoginData] = useState({
        entryPoint: '',
        password: ''
    });
    const [errorData, setErrorData] = useState({
        entryPoint: '',
        password: ''
    })
    const [isButtonLoading, setIsButtonLoading] = useState(false);

    const handleInputChange = (event, property) => {
        setErrorData(prevState => ({
            ...prevState,
            [property]: '',
        }));
        setLoginData(prevState => ({
            ...prevState,
            [property]: event.target.value
        }));
    };


    const handleInputClear = (event, property) => {
        setLoginData(prevState => ({
            ...prevState,
            [property]: ''
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsButtonLoading(true);
        if (loginData.entryPoint === '') {
            setErrorData(prevState => ({
                ...prevState,
                entryPoint: 'Email or Username is mandatory',
            }));
            setIsButtonLoading(false);
            return;
        } else if (loginData.password === '') {
            setErrorData(prevState => ({
                ...prevState,
                password: 'Password is mandatory',
            }));
            setIsButtonLoading(false);
            return;
        } else if (loginData.password.length > 0 && !passwordRegex.test(loginData.password)) {
            setErrorData(prevState => ({
                ...prevState,
                password: 'Password must contain at least 8 characters with at least one special, one uppercase, one number and one lowercase character',
            }));
            setIsButtonLoading(false);
            return;
        } else {
            setIsButtonLoading(false);
            console.log(loginData)
        }
    }

    return (
        <form onSubmit={handleSubmit} style={formStyle}>
            <TextField
                label={'Email or Username'}
                placeholder={'Enter your email or username'}
                value={loginData.entryPoint}
                onChange={(event)=> handleInputChange(event, 'entryPoint')}
                handleClear={(event)=> handleInputClear(event, 'entryPoint')}
                inputMode={'email'}
                type={'text'}
                helperText={errorData.entryPoint}
            />

            <div>
                <TextField
                    label={'Password'}
                    placeholder={'Enter your password'}
                    value={loginData.password}
                    onChange={(event)=> handleInputChange(event, 'password')}
                    inputMode={'text'}
                    type={'password'}
                    helperText={errorData.password}
                />
            </div>

            <FilledButton
                label={'Login'}
                type={'submit'}
                isDisabled={isButtonLoading}
            />
        </form>
    )
};

export default LoginForm;
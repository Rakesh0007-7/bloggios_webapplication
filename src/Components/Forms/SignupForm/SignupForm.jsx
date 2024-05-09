"use client";
import './SignupForm.scss';
import TextField from '@/Components/Fields/TextField';
import { useState } from 'react';
import FilledButton from '@/Components/Buttons/FilledButton/FilledButton';

const SignupForm = () => {
    const formStyle = {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const [SignupData, setSignupData] = useState({
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
      setSignupData(prevState => ({
          ...prevState,
          [property]: event.target.value
      }));
      };

      const handleInputClear = (event, property) => {
        setSignupData(prevState => ({
            ...prevState,
            [property]: ''
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsButtonLoading(true);
        if (SignupData.entryPoint === '') {
            setErrorData(prevState => ({
                ...prevState,
                entryPoint: 'Email is mandatory',
            }));
            setIsButtonLoading(false);
            return;
        } else if (SignupData.password === '') {
            setErrorData(prevState => ({
                ...prevState,
                password: 'Password is mandatory',
            }));
            setIsButtonLoading(false);
            return;
        } else if (SignupData.password.length > 0 && !passwordRegex.test(SignupData.password)) {
            setErrorData(prevState => ({
                ...prevState,
                password: 'Password must contain at least 8 characters with at least one special, one uppercase, one number and one lowercase character',
            }));
            setIsButtonLoading(false);
            return;
        } else {
            setIsButtonLoading(false);
            console.log(SignupData)
        }
    }

    
  return (
    <form onSubmit={handleSubmit} style={formStyle}>
            <TextField
                label={'Email'}
                placeholder={'Enter your email'}
                value={SignupData.entryPoint}
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
                    value={SignupData.password}
                    onChange={(event)=> handleInputChange(event, 'password')}
                    inputMode={'text'}
                    type={'password'}
                    helperText={errorData.password}
                />
            </div>

            <FilledButton
                label={'Signup'}
                type={'submit'}
                isDisabled={isButtonLoading}
            />
        </form>
    )
};

export default SignupForm
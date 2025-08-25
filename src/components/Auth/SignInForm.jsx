import React, {useState} from 'react';
import './SignInForm.css';
import { useNavigate } from 'react-router-dom';

import EnvelopeSimple from '../../assets/EnvelopeSimple.png';
import LockKey from '../../assets/LockKey.png';
import EyeIcon from '../../assets/eye.png';
import EyeOffIcon from '../../assets/EyeSlash.png';
import LogoGoogle from '../../assets/GoogleLogo.png';


function SignInForm() {
    const [email, setEmail] = useState('');
    const[emailError, setEmailError] = useState('');
    
    const[password, setPassword] = useState('');
    const[passwordError, setPasswordError] = useState('');

    const [showPassword, setShowPassword] = useState(false);

    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i; //Проверяет, что email состоит из латинских букв, цифр и допустимых символов, и соответствует формату что-то@что-то.домен.
    // Флаг i — делает проверку нечувствительной к регистру.

    const phoneRegex = /^\+?\d{7,15}$/; // от 7 до 15 цифр, с необязательным +

    const validateEmailOrPhone = (value) => {
        return phoneRegex.test(value) || emailRegex.test(value);
    };

    const cyrillicRegex = /[А-Яа-яЁё]/; // проверка на кириллицу

    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/; // Проверяет пароль:
    //Минимум 8 символов.
    // (?=.*[A-Z]) — минимум одна заглавная латинская буква;
    //Обязательно содержит хотя бы одну цифру ((?=.*[0-9])).
    //Обязательно содержит хотя бы один спецсимвол из набора !@#$%^&* ((?=.*[!@#$%^&*])).
    //Состоит только из латинских букв, цифр и спецсимволов.

    const handleEmailChange = (e) => {
        const val = e.target.value;
        setEmail(val);
        if (val.length >= 7 && !validateEmailOrPhone(val)) {
            setEmailError('Введите корректный email или номер телефона');
        } else {
            setEmailError('');
        }
    };

    //При изменении значения email сначала проверяем на вредоносные символы (через hasInjection).
    //Если есть опасные символы — показываем ошибку, не обновляем email.
    //Иначе — обновляем значение email и сбрасываем ошибку.

    const handlePasswordChange = (e) => {
        const val = e.target.value;
            setPassword(val);

            if (cyrillicRegex.test(password)) {
                setPasswordError('Кириллица в пароле недопустима');
            }else if (!passwordRegex.test(password)) {
                setPasswordError('Пароль должен быть минимум 8 символов, с цифрой и спецсимволом');
            } else {
                setPasswordError('');
            }
    };

    //Аналогично для пароля.

    const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    if (!validateEmailOrPhone(email)) {
      setEmailError('Введите корректный email или номер телефона');
      valid = false;
    }

    if (cyrillicRegex.test(password)) {
      setPasswordError('Кириллица в пароле недопустима');
      valid = false;
    } else if (!passwordRegex.test(password)) {
      setPasswordError('Пароль должен быть минимум 8 символов, содержать заглавную букву, цифру и спецсимвол');
      valid = false;
    }

    if (valid) {
      alert('Вход выполнен успешно!');
      navigate('/home');    
      // здесь можно отправлять данные на сервер
    }
  };

    const navigate = useNavigate();

    const handleSignUpRedirect = () => {
        navigate('/signup');
    }

    return (
        <div className='auth-container'>
            <form className='auth-box' onSubmit={handleSubmit} noValidate>
                <h2>
                    Welcome back
                    <br />
                    <strong>sign in your LinkUp account</strong>
                </h2>
                <div className='input-wrapper'>
                    <img src={EnvelopeSimple} alt='email' className='input-icon' />
                    <input
                      type='email' 
                      placeholder='Email or phone number'
                      value={email}
                      onChange={handleEmailChange}
                      autoComplete='off'
                      required 
                    />
                </div>
                {emailError && <p className='error-text'>{emailError}</p>}

                <div className='input-wrapper'>
                    <img src={LockKey} alt='lock' className='input-icon' />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder='Password'
                      value={password}
                      onChange={handlePasswordChange}
                      autoComplete='current-password'
                      required
                    />
                    <img
                    src={showPassword ? EyeOffIcon : EyeIcon}
                    alt='toggle visibility'
                    className='input-eye'
                    onClick={() => setShowPassword(!showPassword)}
                    />
                </div>
                {passwordError && <p className='error-text'>{passwordError}</p>}


                <button className='btn-filled' type='submit'>
                   Sign In
                </button>

                <p className='forgot-password'>
                    Forgot your password? <a href='#'>Reset password</a>
                </p>

                <div className="custom-divider">
                    <span className="line"></span>
                    <span className="or-text">or</span>
                    <span className="line"></span>
                </div>

                <button className='btn-outline' type='button'>
                    <img src={LogoGoogle} alt='Google logo' className='google-logo' />
                    Continue with Google
                </button>
                <button className='btn-ghost' type='button' onClick={handleSignUpRedirect}>
                    Sign Up
                </button>
            </form>
        </div>
    );
}

export default SignInForm;
import React,  {useState} from 'react';
import  './SignUpForm.css';
import { useNavigate } from 'react-router-dom';

import EnvelopeSimple from '../../assets/EnvelopeSimple.png';
import LockKey from '../../assets/LockKey.png';
import EyeIcon from '../../assets/eye.png';
import EyeOffIcon from '../../assets/EyeSlash.png';
import LogoGoogle from '../../assets/GoogleLogo.png';

function SignUpForm() {
    const [email, setEmail] = useState('');
    const[emailError, setEmailError] = useState('');

    const[password, setPassword] = useState('');
    const[passwordError, setPasswordError] = useState('');

    const[confirmPassword, setConfirmPassword] = useState('');
    const[confirmError, setConfirmError] = useState('');

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)

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

    function hasInjection(str) {
    const forbiddenPatterns = [
    /<script.*?>.*?<\/script>/gi, // теги <script> для XSS
    /[-'";]/g,                   // символы, которые могут быть опасны в SQL (' " ; --)
    /(\b)(select|update|delete|insert|drop|alter|create|truncate)(\b)/gi // SQL ключевые слова
  ];
  // простая (и не полная) проверка строки на наличие потенциально опасных частей, которые могут привести к XSS или SQL инъекции.
  // Если любой из паттернов найдётся в строке — функция вернёт true (то есть строка подозрительная). 
  return forbiddenPatterns.some((pattern) => pattern.test(str));
}
    const handleEmailChange = (e) => {
        const val = e.target.value;
        setEmail(val);

    
        if (hasInjection(val)) {
            setEmailError('Некорректные символы в email или номере');
        } else if (val.length >= 7 && !validateEmailOrPhone(val)) {
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
        if (hasInjection(val)) {
            setPasswordError('Некорректные символы в пароле');
        } else {
            setPasswordError('');
            setPassword(val);
        }
    };

    //Аналогично для пароля.

    const handleConfirmChange = (e) => {
        const val = e.target.value;
        setConfirmPassword(val);
    };
    //Просто обновляем состояние, без дополнительной проверки (валидация будет при отправке формы).
    
    const validateForm = () => {
        let valid = true;

        if (!validateEmailOrPhone(email)) {
            setEmailError('Введите корректный email на латинице или номер телефона');
            valid = false;
        } else {
            setEmailError('');
        }
        if (cyrillicRegex.test(password)) {
            setPasswordError('Кириллица в пароле недопустима');
            valid = false;
        }else if (!passwordRegex.test(password)) {
            setPasswordError('Пароль должен быть минимум 8 символов, с цифрой и спецсимволом');
            valid = false;
        } else {
            setPasswordError('');
        }

        if (password !== confirmPassword) {
            setConfirmError('Пароли не совпадают');
            valid = false;
        } else {
            setConfirmError('');
        }

        return valid;

    };
//Проверяет текущие значения полей:
//Email должен соответствовать регулярному выражению.
//Пароль должен соответствовать требованиям.
//Пароли должны совпадать.
//Если что-то не так — устанавливает соответствующие ошибки и возвращает false.
//Если всё корректно — ошибки сбрасываются, возвращает true.

    const handleSubmit = (e) => {
        e.preventDefault(); // предотвращает перезагрузку страницы при отправке
        if (validateForm()) {
            // Если всё валидно, можно отправлять данные на сервер
            alert('Регистрация прошла успешно!');
            navigate('/home');
        }
    };
    //При нажатии на кнопку отправки сначала вызывается validateForm.
    //Если форма валидна — выполняется действие (здесь просто alert, на практике отправка данных).
    //Если не валидна — показываются ошибки, отправка не происходит.
    
    const navigate = useNavigate();

    const handleSignInRedirect = () => {
        navigate('/signin');
    }

    return (

        <div className='auth-container'>
            <form className='auth-box' onSubmit={handleSubmit} noValidate>
                <h2>
                    Welcome to your
                    <br /> 
                    <strong>professional community</strong>
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
                    <img 
                        src={LockKey} alt='lock' className='input-icon' />
                    <input 
                        type={showPassword ? 'text' : 'password'} 
                        placeholder='Password'
                        value={password}
                        onChange={handlePasswordChange}
                        autoComplete='new-password' //подсказывает браузеру, что это поле для нового пароля (чтобы не подставлял старые значения).
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

                <div className='input-wrapper'>
                    <img src={LockKey} alt='lock' className='input-icon' />
                    <input
                        type={showConfirm ? 'text' : 'password'} 
                        placeholder='Confirm password'
                        value={confirmPassword}
                        onChange={handleConfirmChange}
                        autoComplete='new-password'
                        required 
                    />
                    <img 
                        src={showConfirm ? EyeOffIcon : EyeIcon} 
                        alt='toggle visibility' 
                        className='input-eye'
                        onClick={() => setShowConfirm(!showConfirm)}
                        />
                </div>
                {confirmError && <p className='error-text'>{confirmError}</p>}

                <button className='btn-filled' type='submit'>
                    Sign Up
                </button>

                <p className='terms'>
                    By Signing Up, you agree to our <a href="#">Terms of Service</a> and{' '} 
                    <a href='#'>Privacy Policy</a>
                </p>

                <div className="custom-divider">
                    <span className="line"></span>
                    <span className="or-text">or</span>
                    <span className="line"></span>
                </div>  

                <button className='btn-outline'>
                    <img src={LogoGoogle} alt='Google logo' className='google-logo' />
                    Continue with Google
                </button>
                <button className='btn-ghost' type='button' onClick={handleSignInRedirect}>
                    Sign In
                </button>  
            </form>  
        </div>
    );
}

export default SignUpForm;  
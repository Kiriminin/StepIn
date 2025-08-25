    import React from 'react';
    import {NavLink, useNavigate} from 'react-router-dom';
    import './MainHeader.css';
    import Logo from '../../assets/Logo.png';
    import HomeButton from '../../assets/HomeButton.png';
    import NetworkButton from '../../assets/NetworkButton.png';
    import VacanciesButton from '../../assets/VacanciesButton.png';
    import MessagesButton from '../../assets/MessagesButton.png';
    import NotificationsButton from '../../assets/NotificationsButton.png';
    import MyProfileButton from '../../assets/MyProfileButton.png';
    import SearchIcon from '../../assets/search.png';


    function MainHeader() {
        const navigate = useNavigate();
        return (
            <header className='main-header'>
                <div className='main-header__container'>

                    <div className='main-header__logo'>
                        <NavLink to='/home'>
                        <img src={Logo} alt='StepIn Logo' />
                        </NavLink>
                    </div>

                    <div className='search-wrapper'>
                        <img src={SearchIcon} alt='Search' className='search-icon' />
                        <input
                        type="text"
                        placeholder='Search'
                        className='main-header__search'
                        />
                    </div>

                        <nav className='main-header__nav'>
                            <NavLink to='/home' className='main-header__nav-item'>
                            <img src={HomeButton} alt='Home' />
                            Home
                            </NavLink>
                            <NavLink to='/network' className='main-header__nav-item'>
                            <img src={NetworkButton} alt='Network' />
                            Network
                            </NavLink>
                            <NavLink to='/vacancies' className='main-header__nav-item'>
                            <img src={VacanciesButton} alt='Vacancies' />
                            Vacancies
                            </NavLink>
                            <NavLink to='/messages' className='main-header__nav-item'>
                            <img src={MessagesButton} alt='Messages' />
                            Messages
                            </NavLink>
                            <NavLink to='/notifications' className='main-header__nav-item'>
                            <img src={NotificationsButton} alt='Notifications' />
                            Notifications
                            </NavLink>
                        </nav>

                        <button 
                            className='main-header__profile-btn'
                            onClick={() => navigate('/profile')}
                        >
                            <img src={MyProfileButton} alt='Profile' />
                            <span>My Profile</span>
                        </button>
                    </div>
            </header>
        );
    }
    export default MainHeader;
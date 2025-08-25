import React from 'react';
import './WelcomeSection.css';
import { NavLink,    useNavigate} from 'react-router-dom';
import Woman from '../../assets/woman.png';

function WelcomeSection() {

    const navigate = useNavigate();

  const handleLoginGoogle = () => {
    navigate('signup');  // переход на главный экран
  };

  const handleLoginEmail = () => {
    navigate('signup');  // переход на страницу входа по email 
  };

    return (
        <>
        <section className='welcome'>
            <div className='welcome__content'>
                <h1 className='welcome__title'>
                    Welcome<br />to the community<br />specialist!
                </h1>
                
                <button className="btn btn-outline" onClick={handleLoginGoogle}>
                    Login with Google
                </button>

                <button className="btn btn-filled" onClick={handleLoginEmail}>
                    Login with Email 
                </button>

                <p className="welcome__terms">
                    By clicking "Continue" to join or sign in, you agree to the terms of the StepIn User Agreement, Privacy Policy,
                    and Cookie Policy.
                </p>

                <p className="welcome__join">
                    Not on StepIn? <NavLink to="/signup" className="link">Join</NavLink>
                </p>
            </div>
                <div className="welcome__image">
                    <img src={Woman} alt="Женщина с ноутбуком" />

                </div>
        </section>
        <div className='next-block'>
            <div className='next-content'>
             <h2 className='next-title'>
                Find a suitable vacancy or<br />internship
                </h2> 
                <div className='btn btn-container1'>
                   <button className='btn btn-contained1'>Engineering</button>
                   <button className='btn btn-contained1'>Business development</button>
                   <button className='btn btn-contained1'>Finance</button>
                   <button className='btn btn-contained1'>Administrative Assistant</button>
                   <button className='btn btn-contained1'>Retail employee</button>
                   <button className='btn btn-contained1'>Help Desk</button>
                   <button className='btn btn-contained1'>Operations</button>
                   <button className='btn btn-contained1'>Information Technology</button>
                   <button className='btn btn-contained1'>Marketing</button>
                   <button className='btn btn-contained1'>Personnel support</button>
                   <button className='btn btn-contained1'>Education</button>
                   <button className='btn btn-contained1'>Sales</button>

                </div>
            </div>
        </div>
        
        <div className='last-block'>
            <div className='last-content'>
              <h2 className='vacancy-title'>
                Post your vacancy so millions of people can see it 
              </h2>

              <button className='btn  vacancy-button'>
              Post a vacancy
              </button>
              </div>
            
            <div className='vacancy-block'>
              <div className='vacancy-content'>
               <div>
               <h2 className='vacancy-text'>
                Discover the best<br /> software tools
               </h2>
               <h2 className='vacancy-textLast'>
                Connect with buyers who have<br />first-hand experience to find the<br />best products for you.
               </h2>
               </div>
                 <div className='btn btn-container'>
                    <button className='btn btn-contained'>E-commerce platforms</button>
                    <button className='btn btn-contained'>Recruiting Software</button>
                    <button className='btn btn-contained'>Software for CRM systems</button>
                    <button className='btn btn-contained'>Social Networking Software</button>
                    <button className='btn btn-contained'>HR systems</button>
                    <button className='btn btn-contained'>Project Management Software</button>
                 </div>
               </div>
            </div>
        </div>
        <div className='connection-block'>
            <div className='connection-content'>
                <h2 className='connection-title'>
                    Connect with your colleagues,<br />
                    classmates and friends on StepIn.
                </h2>
                <button className='btn btn-connect-login' onClick={handleLoginEmail}>
                    Login
                </button> 
            </div>
        </div>
    </>
    )
}

export default WelcomeSection;
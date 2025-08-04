import React, {useState} from 'react';
import './Footer.css';
import CaretDown from '../../../assets/CaretCircleDown.png';
import CaretUp from '../../../assets/CaretCircleUp.png';
import GearSix from '../../../assets/GearSix.png';
import Question from '../../../assets/Question.png';
import ShieldCheck from '../../../assets/ShieldCheck.png';

const Footer = () => {
  const [language, setLanguage] = useState('English');
  const [isOpen, setIsOpen] = useState(false);

  const toogleSelect = () => setIsOpen(!isOpen);

  return (
    <footer className='footer'>
      <div className='footer__container'>
       <div className='footer__columns'>
        <div className='footer__column'>
          <span>General information</span>
           <span>Careers</span>
           <span>Ad Settings</span>
           <span>Security Center</span>
          </div>

        <div className='footer__column'>
            <span>Accessibility</span>
            <span>Privacy and Terms</span>
            <span>Mobile Phone</span>
          </div>

        <div className='footer__column'>
           <span>Policies for the Professional Community</span>
           <span>Sales Solutions</span>
           <span>Advertising Solutions</span>
          </div>

        <div className='footer__column'>
          <div className='footer__icon-text'>
            <img scr={Question} alt='Question' />  
          </div>
            <span><strong>Question?</strong></span><br />
            <span>Visit our Help Center.</span> 

          <div className='footer__icon-text'>
            <img src={GearSix} alt='Gear' />
            </div>
            <span><strong>Manage account and Privacy</strong></span><br />
            <span>Go to settings.</span>

          <div className='footer__icon-text'>
            <img src={ShieldCheck} alt='Shield' />
            </div>
            <span><strong>Recommendation Transparency</strong></span><br />
            <span>Learn more about recommended contet.</span>        
       </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState } from 'react';
import './Footer.css';
import CaretDown from '../../../assets/CaretCircleDown.png';
import CaretUp from '../../../assets/CaretCircleUp.png';
import GearSix from '../../../assets/GearSix.png';
import Question from '../../../assets/Question.png';
import ShieldCheck from '../../../assets/ShieldCheck.png';

const Footer = () => {
  const [language, setLanguage] = useState('English');
  const [isOpen, setIsOpen] = useState(false);

  const toggleSelect = () => setIsOpen(!isOpen);

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__columns">
          <div className="footer__column">
            <span>General information</span>
            <span>Careers</span>
            <span>Ad Settings</span>
            <span>Security Center</span>
          </div>

          <div className="footer__column">
            <span>Accessibility</span>
            <span>Privacy and Terms</span>
            <span>Mobile Phone</span>
          </div>

          <div className="footer__column">
            <span>Policies for the Professional Community</span>
            <span>Sales Solutions</span>
            <span>Advertising Solutions</span>
          </div>

          <div className="footer__column">
            <div className="footer__icon-text">
              <img src={Question} alt="Question" />
              <div>
                <strong>Question?</strong>
                <br />
                <span>Visit our Help Center.</span>
              </div>
            </div>

            <div className="footer__icon-text">
              <img src={GearSix} alt="Gear" />
              <div>
                <strong>Manage account and Privacy</strong>
                <br />
                <span>Go to settings.</span>
              </div>
            </div>

            <div className="footer__icon-text">
              <img src={ShieldCheck} alt="Shield" />
              <div>
                <strong>Recommendation Transparency</strong>
                <br />
                <span>Learn more about recommended content.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Language Select */}
      <div className="footer__language">
        <div className="footer__select-wrapper" onClick={toggleSelect}>
          <span>{language}</span>
          <img
            src={isOpen ? CaretUp : CaretDown}
            alt="toggle"
            className="footer__select-icon"
          />
        </div>
        {isOpen && (
          <div className="footer__options">
            <div
              onClick={() => {
                setLanguage('English');
                setIsOpen(false);
              }}
            >
              English
            </div>
            <div
              onClick={() => {
                setLanguage('Українська');
                setIsOpen(false);
              }}
            >
              Українська
            </div>
            <div
              onClick={() => {
                  setLanguage('Русский');
                setIsOpen(false);
              }}
            >
              Русский
            </div>
            <div
              onClick={() => {
                setLanguage('Deutsch');
                setIsOpen(false);
              }}
            >
              Deutsch
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
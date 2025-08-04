import React, { useState } from 'react';
import './RightSidebar.css';
import ThreeDots from '../../../assets/threedots.png';
import CaretCircleUp from '../../../assets/CaretCircleUp1.png';
import Edit from '../../../assets/edit.png';
import AvatarkaOnline from '../../../assets/AvatarkaOnline.png';
import Slider from '../../../assets/Sliders.png';
import Search from '../../../assets/search.png';
import CaretCircleDown from '../../../assets/CaretCircleDown1.png';

function RightSidebar() {

    const [activeTab, setActiveTab] = useState('sorted');
    const [showCategories, setShowCategories] = useState(false);
    const [isOpen, setIsOpen] = useState(true);

    return(
        <aside className='right-sidebar'>
            <div className='right-sidebar__top'>
                <div className='right-sidebar__user'>
                <img src={AvatarkaOnline} alt="User Avatar" className='right-sidebar__avatar' />
                <h3 className='right-sidebar__title'>Messages</h3>
                </div>

                <div className='right-sidebar__icons'>
                    <button><img src={Edit} alt='Edit' className='right-sidebar__icon' /></button>
                    <button><img src={ThreeDots} alt='Options' className='right-sidebar__icon' /></button>
                    <button 
                    onClick={() => setIsOpen(!isOpen)} 
                    className='toggle-visibility-btn' 
                    >
                        <img src={isOpen ? CaretCircleUp : CaretCircleDown} alt='Toggle sidebar' /> 
                    </button>
                </div>
            </div>

            <div className={`right-sidebar__content-wrapper ${isOpen ? 'open' : 'closed'}`}>
                <div className='right-sidebar__search'>
                  <div className='right-sidebar__search-wrapper'>
                     <img src={Search} alt="Search" className='right-sidebar__search-icon' />
                     <input type='text' placeholder='Search' />
                  </div>

                    <button
                        className='right-sidebar__search-button'
                        onClick={() => setShowCategories(!showCategories)}
                    >
                        <img src={Slider} alt='Filter categories' />
                    </button>
                </div>
                    {showCategories && (
                        <div className='right-sidebar__categories-dropdown'>
                            <ul>
                                <li>Category 1</li>
                                <li>Category 2</li>
                                <li>Category 3</li>
                            </ul>
                        </div>
                    )}

                <div className='right-sidebar__tabs'>
                    <button
                       className={activeTab === 'sorted' ? 'active' : ''}
                       onClick={() => setActiveTab('sorted')}
                    >
                        Sorted
                    </button>
                    <button
                       className={activeTab === 'other' ? 'active' : ''}
                       onClick={() => setActiveTab('other')}
                    >
                        Other
                    </button>
                </div>

                <div className='right-sidebar__content'>
                    {activeTab === 'sorted' && <p>Sorted Content goes here</p>}
                    {activeTab === 'other' && <p>Other Content goes here</p>}
                </div>
                </div>
        </aside>
    );
}

export default RightSidebar;
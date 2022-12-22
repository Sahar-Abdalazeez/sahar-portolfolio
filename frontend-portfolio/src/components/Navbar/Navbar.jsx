import React, { useState } from 'react'
import './Navbar.scss';
import { images } from '../../assets';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

const navs = ['Home', "About", 'Contact', 'Work', 'Skills']
function Navbar() {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className='app__navbar'>
            {/* for large screens  */}
            <div className='app__navbar-logo'>
                <img src={images.Logo} alt="" />
            </div>
            <ul className='app__navbar-links'>
                {navs.map((item) => (
                    <li className='app__flex p-text' key={`link-${item}`}>
                        <div></div>
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>
            {/* for small devices  */}
            <div className="app__navbar-menu">
                <HiMenuAlt4 onClick={() => setToggle(true)} />
                {
                    toggle && (
                        <motion.div
                            whileInView={{ x: [300, 0] }}
                            transition={{ duration: 0.85, ease: 'easeOut' }}
                        >
                            <HiX onClick={() => setToggle(false)} />
                            <ul >
                                {navs.map((item) => (
                                    <li key={{ item }}>
                                        <a href={`#${item}`} onClick={() => setToggle(false)} >{item}</a>
                                    </li>
                                ))}
                            </ul>

                        </motion.div>
                    )
                }
            </div>



        </nav>
    )
}

export default Navbar
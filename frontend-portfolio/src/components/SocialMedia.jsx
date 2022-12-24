import React from 'react'
import { FaFacebookF } from 'react-icons/fa';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function SocialMedia() {
    return (
        <div className="app__social" >
            <a href={'https://github.com/Sahar-Abdalazeez'} >
                <AiFillGithub />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100007349014111&mibextid=ZbWKwL">
                <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/in/sahar-abdalaziz-3912521aa">
                <AiFillLinkedin />
            </a>
        </div>
    )
}

export default SocialMedia
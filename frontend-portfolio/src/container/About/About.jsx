import React, { useState, useEffect } from 'react'
import './About.scss';
import { motion } from 'framer-motion'
import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';

function About() {
    const [abouts, setAbouts] = useState([]);
    //we want to call this useEffect at the start once when the code loads 
    useEffect(() => {
        const query = '*[_type == "abouts"]';
        client.fetch(query).then((data) => setAbouts(data))
    }, [])

    return (
        <>
            <h2 className='head-text' > I Know that <span>Good Apps</span><br />means <span>Good Business</span> </h2>

            <div className='app__profiles'>
                {abouts.map((about, index) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        className="app__profile-item"
                        key={about.title + index}
                    >
                        <div className='img-container'>
                            <img src={urlFor(about.imgUrl)} alt={about.title} />
                        </div>
                        <h2 className='bold-text' style={{ marginTop: 20 }} >{about.title}</h2>
                        <p className='p-text' style={{ marginTop: 10, textAlign: 'left' }} >{about.description}</p>

                    </motion.div>
                ))}

            </div>
        </>
    )
}

export default AppWrap(
    MotionWrap(About, 'app__about'),
    'about', "app__whitebg")
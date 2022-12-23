import React, { useState, useEffect } from 'react'
import './About.scss';
import { motion } from 'framer-motion'
import { images } from '../../assets';
import { urlFor, client } from '../../client';

function About() {
    const [abouts, setAbouts] = useState([]);
    //we want to call this useEffect at the start once when the code loads 
    useEffect(() => {
        const query = '*[_type == "abouts"]';
        client.fetch(query).then((data) => setAbouts(data))
    }, [])

    console.log('abouts', abouts)
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
                        <img src={urlFor(about.imgUrl)} alt={about.title} />
                        <h2 className='bold-text' style={{ marginTop: 20 }} >{about.title}</h2>
                        <p className='p-text' style={{ marginTop: 10 }} >{about.description}</p>

                    </motion.div>
                ))}

            </div>
        </>
    )
}

export default About
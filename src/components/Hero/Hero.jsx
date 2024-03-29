import React from 'react'
import { motion } from 'framer-motion'
import hero from "../../assets/images/Hero-banner-text.png"
import styles from "./Hero.module.scss"

const Hero = () => {
    return (
        <motion.img 
        initial= {{y: -250}}
        animate= {{ y: -10}}
        src={hero} 
        className={styles.logo} 
        alt="logo" />
    )
}

export default Hero
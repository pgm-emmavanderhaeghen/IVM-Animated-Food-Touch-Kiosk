import { motion } from 'framer-motion'

// components
import Heading from "../components/Heading/Heading";

// styling
import styles from "../App.module.scss";

// gif
import failure from "../assets/images/gif/failure.gif"

// animation
const containerVariants = {
  hidden: {
    opacity: 0,
    y: -200
  },
  visible: {
    opacity: 1,
    y: -10,
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: { ease: 'easeInOut'}
  }
}

function Failure() {
  return (
    <motion.div 
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    className={styles.container}>      

      <div className={styles.m4}>

        <Heading number="1">Oops, something <br></br> went wrong!</Heading>
        <p>Hmm … there seems to be <br></br> a little problem, a member <br></br> of staff  will have a look soon.</p>
        <p className={styles.red}>Hang in there</p>
        <img className={styles.round} src={failure} alt="failure" />

      </div>
    </motion.div>
  );
}

export default Failure;
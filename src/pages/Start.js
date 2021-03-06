import styles from "../App.module.scss";
import {ReactComponent as Smile} from "../assets/images/bocca-smile.svg"
import { Link } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import Button from "../components/Button/Button"
import { ROUTES } from "../constants/routes";
import Heading from "../components/Heading/Heading";

function Start() {
  return (
    <div className={styles.container}>  

    <Hero />

      <div className={styles.m4}>

        <Heading number="1">Welcome at bocca</Heading>
        <p className={styles.text} >
          Bocca is a fresh, quick and delicious <strong>pastabar </strong>  
          located in Bruges & Ghent. Check out what we got on the menu.
        </p>
        <Heading number="2" color="red" variant="spaced">Hungry?</Heading>
      
      </div>

      <div className={styles.m4}>

        <Link to={ROUTES.SELECTION}>
          <Button 
            variant='square' 
            color='black'
          >
            Eat here <br/>         
            <Smile/>
          </Button>
        </Link>

        <Link to={ROUTES.SELECTION}>
          <Button 
            variant='square' 
            color='red'
          >
            Take away <br/>   
            <Smile/>
          </Button>
        </Link>   
              
      </div>
    </div>
  );
}

export default Start;
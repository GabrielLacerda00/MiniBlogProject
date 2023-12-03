import React from "react";
import styles from "./About.module.css";

import { Link } from "react-router-dom";

const About = () => {
    return(
        <div className={styles.about}>
            <h2>About Mini Blog</h2>
            <p>This project is made with react in front-end and firebase in back-end</p>
            <Link to="/posts/create" className="btn">
                Create post
            </Link>
        </div>
    )
}

export default About;
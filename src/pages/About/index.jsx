import { React } from "react";
import styles from "./About.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const About = () => {
    return (
        <>
            <Header />
            <div className={styles.about}>
                <h1>About</h1>
                <p>This is a simple project to study React.</p>
                <br />
            </div>
            <a href='https://github.com/pietro-ramos' target='_blank' rel='noopener noreferrer'>
                        <button className='btn btn-red'>
                            My GitHub
                        </button>
                </a>
                <a href='https://linkedin.com/in/pietro-ramos-440b88243/' target='_blank' rel='noopener noreferrer'>
                        <button className='btn btn-red'>
                            My LinkedIn
                        </button>
                </a>
            <Footer />
        </>
    );
}

export default About;
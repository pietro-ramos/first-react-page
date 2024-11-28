import { React } from "react";
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import styles  from "./Home.module.css";
import Container from "../../components/Container";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
        <Header />
            <Container>
                <section className={styles.home}>
                    <div className={styles.introduction}>
                    <p>
                        Hello! I'm
                        <span><br />
                        Pietro Ramos
                        </span><br />
                        Backend Developer<br /> & Data Scientist
                    </p>
                        <Link to="/about" className={`${styles.btn} ${styles.btn_red}`}>
                            About me
                        </Link>
                    </div>
                    <figure>
                    <img className={styles.img_home} src="/developer-red.svg" alt="Home Image" />
                    </figure>
                </section>
            </Container>
        <Footer />
        </>
    );
}

export default Home;
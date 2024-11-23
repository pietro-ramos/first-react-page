import { React } from "react";
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import styles  from "./Home.module.css";

const Home = () => {
    return (
        <div className={styles.home}>
            <>
                <Header />

                <section className='container'>
                    <div className='introduction'>
                    <p>
                        Hello! I'm
                        <span><br />
                        Pietro Ramos
                        </span><br />
                        Backend Developer<br /> & Data Scientist
                    </p>
                    <a href='/about'>
                        <button className='btn btn-red'>
                            Find out more
                        </button>
                    </a>
                    </div>
                    <figure>
                    <img className='img-home' src="/developer-red.svg" alt="Home Image" />
                    </figure>
                </section>

                <Footer />
            </>
        </div>
    );
}

export default Home;
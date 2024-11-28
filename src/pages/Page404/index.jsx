import { React } from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './Page404.module.css';


const Page404 = () => {
    return (
        <>
            <Header />
            <Container>
                <h2 className={styles.title2}>Something wrong is not right!</h2>
                <div className={styles.texts}>
                <span className={styles.large_text}>404</span> <br />
                <strong className={styles.red_text}>Page not found</strong>
                </div>
            </Container>
            <Footer />
        </>
    );
}

export default Page404;

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Contact = () => {
    return (
        <>
            <Header />
            <div>
                <h1>Contact</h1>
                <p>Send me a message!</p>
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
            </div>
            <Footer />
        </>
    );

}

export default Contact;
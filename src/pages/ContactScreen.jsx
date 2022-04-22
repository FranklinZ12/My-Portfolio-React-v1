import ContactInfo from 'components/contact/ContactInfo';
import FormContact from 'components/contact/FormContact';
import Title from 'components/Title';
import { useMatch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import '../styles/contact.css';
import 'react-toastify/dist/ReactToastify.css';
const ContactScreen = () => {
  const match = useMatch('/contact');

  return (
    <section className={`contact ${match ? 'section-show' : ''}`}>
      <div className='container'>
        <Title title='Contact'
          subtitle='Contact Me'        
        />
        <ContactInfo />
        <FormContact />
        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </section>
  )
}

export default ContactScreen
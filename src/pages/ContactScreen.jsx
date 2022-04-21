import ContactInfo from 'components/contact/ContactInfo';
import FormContact from 'components/contact/FormContact';
import Title from 'components/Title';
import { useMatch } from 'react-router-dom';
import '../styles/contact.css';

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
      </div>
    </section>
  )
}

export default ContactScreen
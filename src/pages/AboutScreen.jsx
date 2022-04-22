import user from 'assets/user.webp';
import Skills from 'components/about/Skills';
import Testimonials from 'components/about/Testimonials';
import { useMatch } from 'react-router-dom';
import AOS from 'aos';
import 'styles/about.css';
import 'aos/dist/aos.css';
import Title from 'components/Title';

AOS.init();

const AboutScreen = () => {
  const match = useMatch('/about');

  return (
    <section className={`about ${match ? 'section-show' : ''}`}>
      
      <div className='about-me container'>

        <Title title='About'
          subtitle='Learn more about me'
        />

        <div className='row'>
          <div className='col-lg-4'
          data-aos="fade-right"
          >
            <img src={user} className='img-fluid' alt='' />
          </div>
          <div className='col-lg-8 pt-4 pt-lg-0 content'
          data-aos="fade-left"
          >
            <h3>Front-End web Developer</h3>
            <p className='fst-italic mb-4 mt-2'>
              Hi, I'm Franklin, I have studied web application development
              and I plan to become a <br /> software engineer. I chose
              this profession because I am interested in solving
              problems  <br /> in digital environments, considering
              the most feasible optimal solutions.
            </p>
            <div className='row'>
              <div className='col-lg-6'>
                <ul>
                  <li>
                    <i className='bi bi-chevron-right' />
                    <strong>Degree:</strong>
                    <span>Software Engineer Estudent</span>
                  </li>
                  <li>
                    <i className='bi bi-chevron-right' />
                    <strong>City:</strong>
                    <span>Medellin-Colombia</span>
                  </li>
                </ul>
              </div>
              <div className='col-lg-6'>
                <ul>
                  <li>
                    <i className='bi bi-chevron-right' />
                    <strong>Email:</strong>
                    <span>devfranklinzapata@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
            <p>
              I consider myself a person with good communication skills.
              I was part of the MisionTic project of the Ministry of TIC in
              Colombia,  where I participated in software development groups,
              and I was able to improve this skill, which I consider vital as a developer.
            </p>
          </div>
        </div>
      </div>

      {/* ======= Skills  =======  */}
      <Skills />

      {/* ======= Testimonials ======= */}
      <Testimonials />

    </section>
  )
}

export default AboutScreen
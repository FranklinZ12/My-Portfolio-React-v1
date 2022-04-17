import user from 'assets/user.jpg';
import { useMatch } from 'react-router-dom';
import 'styles/about.css';
import html5 from '../assets/html-5.png';
import css from '../assets/css3.png';
import react from '../assets/react.png';
import js from '../assets/javascript.png';
import nj from '../assets/nodejs.png';
import git from '../assets/git.png';
import github from '../assets/github.png';
import scrum from '../assets/scrum.png';
import CardSkills from 'components/about/CardSkills';
const AboutScreen = () => {
  const match = useMatch('/about');

  return (
    <section className={`about ${match ? 'section-show' : ''}`}>
      <div className='about-me container'>

        <div className="section-title">
          <h2>About</h2>
          <p>Learn more about me</p>
        </div>

        <div className='row'>
          <div className='col-lg-4'
          // data-aos="fade-right"
          >
            <img src={user} className='img-fluid' alt='' />
          </div>
          <div className='col-lg-8 pt-4 pt-lg-0 content'
          // data-aos="fade-left"
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
      <div className='skills container'>
        <div className='section-title'>
          <h2>Skills</h2>
        </div>

        <div className='skills-content'>
          <div className='grid grid-cols-4 gap-y-9 gap-x-5 sm:grid-cols-2 lg:grid-cols-4'>
            <CardSkills img={react} name='REACTJS' />
            <CardSkills img={html5} name='HTML' />
            <CardSkills img={css} name='CSS' />
            <CardSkills img={js} name='JAVASCRIPT' />
            <CardSkills img={nj} name='NODEJS' />
            <CardSkills img={git} name='GIT' />
            <CardSkills img={github} name='GITHUB' />
            <CardSkills img={scrum} name='SCRUM' />
          </div>
        </div>
      </div>
      {/* End Skills  */}
      
    </section>
  )
}

export default AboutScreen
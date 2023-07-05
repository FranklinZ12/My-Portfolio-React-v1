import ResumeItem from "components/resume/ResumeItem";
import Title from "components/Title";
import { useMatch } from "react-router-dom";
import '../styles/resume.css';

const ResumeScreen = () => {
  const match = useMatch('/resume');

  return (
    <section className={`resume ${match ? 'section-show' : ''}`}>

      <div className='container'>
        <Title title='Resume'
          subtitle='Check My Resume'
        />

        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Education</h3>
            <ResumeItem 
              career='Software Engineering'
              anios='2019-2 - 2024-1'
              University='Uniminuto[Present]'
              text='I will have the ability to lead teams of design, 
              development, formulation, evaluation and 
              management of interdisciplinary projects to generate solutions 
              through information systems, complying with the standards and methodologies 
              in software development in an efficient, effective and innovative way for 
              all types of organizations, exercising my profession under an axis of human formation.'
            />
            <ResumeItem
              career='Web Developer'
              anios='2021 - 2021'
              University='MisionTic2022-University of Antioquia'
              text={
                <ul>
                  <li>
                    Cycle 1:  Fundamentals of PYTHON programming: Structural programming, object-oriented programming and graphical interface.
                    Development of soft skills.
                    English component focused on software development.
                  </li>
                  <li>
                    Cycle II: JAVA programming: structural programming, object-oriented programming, graphical interface.
                    Development of soft skills II
                    English component focused on software development II.
                  </li>
                  <li>
                    Cycle III: Programming in HTML, CSS AND JAVASCRIPT : Functional programming with REACT for Frontend,
                    NODE.JS with EXPRESS for Backend and non-relational databases with MONGO DB.
                    Development of a REST API application under SCRUM methodology.
                    GIT for code management and versioning, and GITHUB for code storage.
                    Deployment of the application in HEROKU.
                    Soft skills development III
                    English component focused on software development III.
                  </li>
                  <li>
                    Cycle IV: Deepening of cycle III implementing GraphQL technology.
                    Development of soft skills VI
                    English component focused on software development VI
                  </li>
                </ul>
              }
            />
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Experience</h3>
            {/* <ResumeItem
              career='FrontEnd web Developer'
              anios='sept - dic 2021·4 months'
              University='MisionTic2022|University of Antioquia'
              text='The experience I gained in the projects was in building graphical 
              interfaces, one was for research teams to carry out their projects and 
              keep track of their updates and the other was a user sales and product tracking system.'
            /> */}
            On the way
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResumeScreen
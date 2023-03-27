import html5 from '../../assets/html-5.png';
import css from '../../assets/css3.png';
import react from '../../assets/react.png';
import js from '../../assets/javascript.png';
import java from '../../assets/java.png';
import spring from '../../assets/spring.png';
import nj from '../../assets/nodejs.png';
import git from '../../assets/git.png';
import github from '../../assets/github.png';
import scrum from '../../assets/scrum.png';
import CardSkills from './CardSkills';


const Skills = () => {
    return (
        <div className='skills container'>
            <div className='section-title'>
                <h2>Skills</h2>
            </div>

            <div className='skills-content'>
                <div
                    className='grid grid-cols-2 gap-y-9 gap-x-5 
                     sm:grid-cols-4 lg:grid-cols-4'
                >
                    <CardSkills img={react} name='REACTJS' />
                    <CardSkills img={html5} name='HTML' />
                    <CardSkills img={css} name='CSS' />
                    <CardSkills img={js} name='JAVASCRIPT' />
                    <CardSkills img={nj} name='NODEJS' />
                    <CardSkills img={java} name='JAVA' />
                    <CardSkills img={spring} name='SPRING BOOT' />
                    <CardSkills img={git} name='GIT' />
                    <CardSkills img={github} name='GITHUB' />
                    <CardSkills img={scrum} name='SCRUM' />
                </div>
            </div>
        </div>
    )
}

export default Skills
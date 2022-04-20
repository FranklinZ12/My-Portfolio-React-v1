import proyecta from '../../assets/proyecta/proyecta.jpeg';
import proyectaMain from '../../assets/proyecta/proyectaMain.jpeg';
import proyectaUser from '../../assets/proyecta/proyectaUser.jpeg';
import calendar from '../../assets/calendarApp/calendarApp.jpeg';
import calendarMain from '../../assets/calendarApp/calendarMain.jpeg';
import calendarAdd from '../../assets/calendarApp/calendarAdd.jpeg';
import wolfcode from '../../assets/wolfCode.jpeg';
import ciaoPizza from '../../assets/ciaoPizza.jpeg';
import heroApp from '../../assets/heroApp.jpeg';
import hoteles from '../../assets/bootstrap.jpeg';
import Card from 'components/portfolio/Card';


const CardList = () => {
  return (
      <div className='row portfolio-container'>
          <Card
              img={proyecta}
              img2={proyectaMain}
              img3={proyectaUser}
              name='Proyecta'
              type='WEB APP'
              link={' https://front-proyecta.herokuapp.com/'}
              info={'Proyecta es una aplicación web que permite a los usuarios registrarse y crear proyectos, además de poder ver los proyectos que han creado otros usuarios. Tambien, los usuarios pueden crear tareas, comentarios en cada proyecto y pueden subir archivos en cada proyecto.'
            }
          />
          <Card
              img={calendar}
              img2={calendarMain}
              img3={calendarAdd}
              name='CalendarApp'
              type='WEB APP'
              link={' https://front-calendarapp-mern.herokuapp.com/login/'}
              info={'CalendarApp es una aplicación web que permite a los usuarios registrarse y crear, borrar, actualizar y ver los eventos en un calendario.'}
          />
          <Card
              img={wolfcode}
              name='WolfCode'
              type='WEB APP'
          />
          <Card
              img={heroApp}
              name='HeroApp'
              type='WEB APP'
          />
          <Card
              img={ciaoPizza}
              name='CiaoPizza'
              type='WEB APP'
          />
          <Card
              img={hoteles}
              name='Hoteles'
              type='WEB APP'
          />
      </div>
  )
}

export default CardList
import proyecta from '../../assets/proyecta/proyecta.jpeg';
import proyectaMain from '../../assets/proyecta/proyectaMain.jpeg';
import proyectaUser from '../../assets/proyecta/proyectaUser.jpeg';
import calendar from '../../assets/calendarApp/calendarApp.jpeg';
import calendarMain from '../../assets/calendarApp/calendarMain.jpeg';
import calendarAdd from '../../assets/calendarApp/calendarAdd.jpeg';
import wolfcode from '../../assets/wolfCode.jpeg';
import ciaoPizza from '../../assets/ciaoPizza/ciaoPizza.jpeg';
import ciaoRegister from '../../assets/ciaoPizza/ciaoRegister.jpeg';
import heroApp from '../../assets/heroApp/heroApp.jpeg';
import heroDC from '../../assets/heroApp/heroDC.jpeg';
import hero from '../../assets/heroApp/hero.jpeg';
import hoteles from '../../assets/hotel/bootstrap.jpeg';
import hoteles2 from '../../assets/hotel/hoteles2.jpeg';
import hoteles3 from '../../assets/hotel/hoteles3.jpeg';
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
              link={' https://rocky-temple-35030.herokuapp.com/'}
              info={'WolfCode es una aplicación web de seguimiento de ventas y productos de los usuarios. API backend creada por mi equipo para hacer una API REST-CRUD. Utilizamos la metodologia SCRUM para organizar la forma en cómo trabajamos y llevamos el proyecto.'}
          />
          <Card
              img={heroApp}
              img2={heroDC}
              img3={hero}
              name='HeroApp'
              type='WEB APP'
              link={' https://github.com/FranklinZ12/ReactJS-hero-app/'}
              info={'heroApp es una aplicación web sobre heroes de Marvel y DC, permite la busqueda y informacion de los heroes.'}
          />
          <Card
              img={ciaoPizza}
              img2={ciaoRegister}
              name='CiaoPizza'
              type='WEB APP'
              link={' https://github.com/FranklinZ12/CiaoPizza/'}
              info={'CiaoPizza es una aplicación web que permite a los usuarios registarse y hacer sus pedidos de comidas rapidas.'}
          />
          <Card
              img={hoteles}
              img2={hoteles2}
              img3={hoteles3}
              name='Hoteles'
              type='WEB APP'
              link={' https://github.com/FranklinZ12/FirstWeb-with-Bootstrap/'}
              info={'HotelesAntioquia es una aplicación web que permite al usuario contactar a los diferentes hoteles de Antioquia y hospedarse.'}
          />
      </div>
  )
}

export default CardList
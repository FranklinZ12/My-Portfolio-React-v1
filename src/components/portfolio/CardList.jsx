import proyecta from '../../assets/proyecta.jpeg';
import calendar from '../../assets/calendarApp.jpeg';
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
              name='Proyecta'
              type='Web App'
          />
          <Card
              img={calendar}
              name='CalendarApp'
              type='Web App'
          />
          <Card
              img={wolfcode}
              name='WolfCode'
              type='Web App'
          />
          <Card
              img={heroApp}
              name='HeroApp'
              type='Web App'
          />
          <Card
              img={ciaoPizza}
              name='CiaoPizza'
              type='Web App'
          />
          <Card
              img={hoteles}
              name='Hoteles'
              type='Web App'
          />
      </div>
  )
}

export default CardList
import CardList from 'components/portfolio/CardList';
import Title from 'components/Title';
import { useMatch } from 'react-router-dom';
import '../styles/portfolio.css';

const PortfolioScreen = () => {
  const match = useMatch('/portfolio');

  return (
    <section className={`portfolio ${match ? 'section-show' : ''}`}>
      <div className="container">
        <Title title='Portfolio'
          subtitle='My Works'
        />
        <CardList />
      </div>
    </section>
  )
}

export default PortfolioScreen
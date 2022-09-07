// import './index.scss';
import styles from './index.module.scss';

const MainCard = ({ cardData, cardStyle={} }) => {
  const { title, poster_path } = cardData;

  return (
    <div className={styles.MainCard} style={ cardStyle }>
    
      <img className={styles.img} src={`https://image.tmdb.org/t/p/w342${ poster_path }`} alt={ title } />
      <div className={styles.text}>
        {/* <h3 style={{ fontSize: cardStyle.fontSize }}>{ title }</h3>
        <p>{ vote_average }</p> */}
      </div>
    </div>
  )
}

export default MainCard;

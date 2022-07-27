import styles from './DetailCard.module.scss'
import App from "../../components/App";

export default function DetailCard({beer}) {
  return (
    <App>
      <div className={styles.detailCard}>
        <div className={styles.detailCardImageWrap}>
          <img src={beer.image_url} alt="image" className={styles.detailCardImage}/>
        </div>
        <div className={styles.detailCardInfo}>
          <div>Name: {beer.name.toLowerCase()}</div>
          <div>Tagline: {beer.tagline.toLowerCase()}</div>
          <p>Description: {beer.description.toLowerCase()}</p>
          <div>abv: {beer.abv}</div>
          <div>Food pairing: {beer.food_pairing.map(item => item.toLowerCase()).join(', ')}</div>
        </div>
      </div>
    </App>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`https://api.punkapi.com/v2/beers/${context.params.id}`);
  const json = await res.json();
  return {
    props: {
      beer: json[0]
    },
  }
}
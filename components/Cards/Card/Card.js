import React from 'react';
import Link from 'next/link';
import styles from './Card.module.scss';

const Card = ({card}) => {
  const getShortDescription = (description) => {
    const maxCharacter = 140;
    if (description.length > maxCharacter) {
      if (description[maxCharacter]) {
        description = description.slice(0, maxCharacter)
        description = description.slice(0, description.lastIndexOf(' ')) + '...';
      }
    }
    return description
  }
  return (
    <li className={styles.card}>
      <Link href={'/beer/[id]'} as={`/beer/${card.id}`} >
        <a className={styles.cardLink}>
          <h2 className={styles.cardName}>{card.name}</h2>
          <div className={styles.cardImageWrap}>
            {
              card.image_url && <img src={card.image_url} className={styles.cardImage}/>
            }
          </div>
          <p className={styles.cardDescription}>
            {
              getShortDescription(card.description)
            }
          </p>
        </a>
      </Link>
    </li>
  );
};

export default Card;
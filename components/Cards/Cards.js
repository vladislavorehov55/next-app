import React, {useEffect, useState} from 'react';
import Card from "./Card/Card";
import styles from './Cards.module.scss';
import {useRouter} from "next/router";

const Cards = ({data, searchedValue}) => {

  const [cards, setCards] = useState(data);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const defineNextPage = () => {
    if (cards.length < 25) return
    let url = `/beers?page=${+router.query.page + 1}`;
    const beerName = router.query.beer_name;
    if (beerName) {
      url += `&beer_name=${beerName}`
    }
    router.push(url);
  }
  const definePrevPage = () => {
    if (+router.query.page === 1) return
    let url = `/beers?page=${+router.query.page - 1}`;
    const beerName = router.query.beer_name;
    if (beerName) {
      url += `&beer_name=${beerName}`
    }
    router.push(url);
  }


  useEffect(() => {
    setCards(data)
  },[data])


  if (cards.length === 0 && router.query.beer_name) {
    return <h1 className={'errorMessage'}>По запросу ничего не найдено</h1>
  }
  return (
    <>
      <ul className={styles.cardsList}>
        {
          cards.map(card => <Card card={card} key={card.id}/>)
        }
      </ul>
      <div className={styles.pagination}>
        <span className={styles.paginationPageArrow} onClick={definePrevPage}>prev</span>
        <span className={styles.paginationPageArrow} onClick={defineNextPage}>next</span>
      </div>
    </>
  )
};

export default Cards;

import React, {useState} from 'react';
import styles from './SearchPanel.module.scss';
import {useRouter} from "next/router";

const SearchPanel = () => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState(router.query.beer_name ? router.query.beer_name  : '');

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  }
  const submitHandler = (e) => {
    e.preventDefault();
    if (!inputValue) return
    const beerName = inputValue.split(' ').join('_')
    router.push(`/beers?page=1&beer_name=${beerName}`);
  }
  const clearInput = () => {
    setInputValue('');
    router.push('/beers?page=1');
  }
  return (
    <form className={styles.searchForm} onSubmit={submitHandler}>
      <div className={styles.searchInputWrapper}>
        <input value={inputValue}
               onChange={changeHandler}
               placeholder='Введите название пива'
               className={styles.searchInput}
        />
        {
          inputValue &&
          <button className={'btn'}
                  onClick={clearInput}
          >
            <svg height='24px' width='24px' viewBox='0 0 24 24'>
              <path
                d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/>
            </svg>
          </button>
        }
      </div>
      <button className={'btnSearch'}>
        <svg height='24px' width='24px' viewBox='0 0 24 24'>
          <path
            d='M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z'/>
        </svg>
      </button>
    </form>
  );
};

export default SearchPanel;
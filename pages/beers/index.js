import SearchPanel from "../../components/SearchPanel/SearchPanel";
import Cards from "../../components/Cards/Cards";
import App from "../../components/App";
import React from "react";

export default function MainPage({data}) {
  return (
    <App>
      <SearchPanel/>
      <Cards data={data}/>
    </App>
  )
}
export async function getServerSideProps({query}) {
  let url = `https://api.punkapi.com/v2/beers?page=${query.page}`
  if (query.beer_name) {
    url += `&beer_name=${query.beer_name}`
  }
  let res = await fetch(url);
  let data = await res.json();
  if (!data.length) {
    res = await fetch(`https://api.punkapi.com/v2/beers?page=${+query.page - 1}`);
    data = await res.json();
  }
  return {
    props: {
      data
    }
  }
}
import React, {useEffect} from "react";

import {useRouter} from "next/router";

export default function Index() {
  const router = useRouter();
  useEffect(()=> {
    router.push('/beers?page=1')
  },[])
  return (
    <></>
  )
}
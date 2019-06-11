import React, { Suspense } from 'react';
import { useFetch } from 'react-hooks-fetch';


const DisplayCatAPI = () => {
  const { err, data } = useFetch(' https://api.thecatapi.com/v1/images/search?api_key=011e32b9-a91e-4193-80af-ab43b0deed54&category_ids=5')

  return err 
    ? ( <p>{`Something went wrong: ${err}`}</p> )
    : !data 
      ? null
      : <img src={data[0].url} alt="That is where the cat goes" /> 
};


const LazyLoadACat = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <DisplayCatAPI />
    </Suspense>
  )
}

export default LazyLoadACat;
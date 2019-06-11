import React, { Suspense } from 'react';
import { useFetch } from 'react-hooks-fetch';
import URLWithAPIKey from './APIKey';

const Image = () => {
  const { err, data } = useFetch(URLWithAPIKey);

  return err 
    ? ( <p>{`Something went wrong: ${err}`}</p> )
    : !data 
      ? null
      : <img src={data[0].url} alt="That is where the cat goes" /> 
};


const LazyLoader = () => {
  return (
    <div className="custom-hook">
      <Suspense fallback={<span>Loading...</span>}>
        <Image />
      </Suspense>
    </div>
  )
}

export default LazyLoader;
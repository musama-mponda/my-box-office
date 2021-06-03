import React, { useEffect, useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import ShowGrid from '../components/show/ShowGrid';
import { apiGEt } from '../misc/config';
import { useShows } from '../misc/custom-hooks';

const Starred = () => {
  // displaying starred or favourite shows
  const [starred] = useShows();

  const [shows, setShows] = useState(null);
  const [isloading, setIsloading] = useState(true);
  const [error, setError] = useState(null);

  // to fetch data when the components mount we will use useEffect
  useEffect(() => {
    if (starred && starred.length > 0) {
      const promises = starred.map(showId => apiGEt(`/shows/${showId}`));

      Promise.all(promises)
        .then(apiData => apiData.map(show => ({ show })))
        .then(results => {
          setShows(results);
          setIsloading(false);
        })
        .catch(err => {
          setError(err.message);
          setIsloading(false);
        });
    } else {
      setIsloading(false);
    }
  }, [starred]);

  return (
    <MainPageLayout>
      {isloading && <div>Shows are still loading</div>}
      {error && <div>Error Occured:{error}</div>}
      {!isloading && !shows && <div>No Shows were added</div>}
      {!isloading && !error && shows && <ShowGrid data={shows} />}
    </MainPageLayout>
  );
};

export default Starred;

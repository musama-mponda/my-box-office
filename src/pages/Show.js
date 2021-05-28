import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiGEt } from '../misc/config';

const Show = () => {
  const { id } = useParams();

  const [show, setShow] = useState(null);

  useEffect(() => {
    apiGEt(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(results => {
      setShow(results);
    });
  }, [id]);

  console.log('show', show);

  return <div>this is show</div>;
};

export default Show;

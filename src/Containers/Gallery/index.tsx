import axios from 'axios';
import { GalleryList } from 'Components/Gallery';
import { TCat } from 'Helpers/types';
import React, { useState, useEffect } from 'react';

export const Gallery = () => {
  const [data, setData] = useState<TCat[] | []>([]);
  const getCats = async () => {
    const randomCatUrl = 'https://api.thecatapi.com/v1/images/search';
    // const tenCatsUrl = 'https://api.thecatapi.com/v1/images/search?limit=10';
    const response = await axios.get(randomCatUrl);
    setData(response.data);
  };
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    const timeout = setInterval(getCats, 5000);
    return () => {
      clearInterval(timeout);
    };
  }, []);
  return <GalleryList data={data} />;
};

import React from 'react';

/* Own */
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../../hooks/useFetchGifs';

const GifGrid = ({ category }: { category: string }) => {
  const { data: images, loading } = useFetchGifs({ category });

  return (
    <>
      {loading && <h1 className="animate__animated animate__flash">Loading...</h1>}

      <div className="card-grid">
        <h3 className="animate__animated animate__fadeIn">{category}</h3>
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;

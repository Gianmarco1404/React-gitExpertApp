import React,{Fragment} from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GidGridItem } from './GidGridItem';

export const GifGrid = ({category}) => {
    const {data:images,loading}=useFetchGifs(category);
  return (
    <Fragment>
      <h3 className='animate__animated animate__fadeIn'>{category}</h3>
      {loading && <p className='animate__animated animate__flash' >Loading</p>}
      <div className="card-grid">
        {
          images.map(img=>
          <GidGridItem key={img.id} {...img}/>
        )}
      </div>
    </Fragment>
  )
}

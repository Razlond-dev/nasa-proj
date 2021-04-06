import React, { useState } from 'react'
import Loader from '../Loader/Loader';
import './SateliteImage.css'

export default function SateliteImage({src}) {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      {loading ? null : <Loader />}
      <img className='satelite-image'
        style={loading ? {} : { display: 'none' }}
        src={src}
        onLoad={() => setLoading(true)}
      />
    </div>
  )
}

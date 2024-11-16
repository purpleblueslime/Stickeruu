'use client'

import { useState, useEffect } from 'react'
import styles from 'styles/img.module.scss'

export default function Img({className, color, img}) {

  const [lazy, $lazy] = useState(true) // lazy ;-;

  // (if onload don't happen)
  useEffect(() => {
    if (!lazy) $lazy(true)
    const {complete} = app.querySelector(`#💦${img}`)
    if (!complete) return
    $lazy(false)
  }, [img])

  return (
    <div className={className}>
      <div className={styles.imgWrap}>
        <img alt={'img'} className={styles.img} id={`💦${img}`} loading='lazy' onLoad={() => $lazy(false)} src={`/${img}.png`} />
        {lazy ? <div className={styles.lazy}>
          <div className={styles.barWrap}>
            <div className={styles.bar} style={{background: color}} />
          </div>
        </div>:<></>}
      </div>
    </div>
  )

}
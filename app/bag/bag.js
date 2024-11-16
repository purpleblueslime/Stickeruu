'use client'

import { useContext } from 'react';
import Link from 'next/link';
import BagCtx from '../bag.js'
import styles from 'styles/bag.module.scss'

export default function Bag({stickers}) {
  
  const {bag, $bag} = useContext(BagCtx)

  const sum = () => {
    let sm = 0
    stickers.forEach(stick => {
      bag.forEach(id => {
        if (id == stick.id) 
          sm += stick.usd
      }) 
    })
    return sm.toFixed(2)
  }

  return (
    <div className={styles.bagWrap}>
      <div className={styles.imgWrap}>
        <img alt='img' className={styles.img} src='/box.gif' />
      </div>
      <div className={styles.aboutWrap}>
        <div className={styles.about}>
          {bag.length == 1 ? `${bag.length} item in bag` : `${bag.length} items in bag`} 
          <div className={styles.usd}>
            ${sum()}
          </div>
        </div>
        <div className={styles.btnWrap}>
          <Link className={styles.btn} href='/buy'>
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  )


}
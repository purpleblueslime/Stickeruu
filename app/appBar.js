'use client'

import { useRouter } from 'next/navigation'
import { useState, useContext } from 'react'
import BagCtx from './bag.js'
import Link from 'next/link'
import styles from 'styles/appBar.module.scss'

export default function AppBar() {

  const {push} = useRouter()
  const [q, $q] = useState('')
  const {bag} = useContext(BagCtx)

  return (
    <div id={styles.barWrap}>
      <div className={styles.boxWrap}>
        <input className={styles.box} placeholder='search'
          onKeyUp={o => o.keyCode == 13 ? push(`/search?q=${q}`) : $q(o.target.value)} 
        />
        {q ? <a className={styles.btn} onClick={() => push(`/search?q=${q}`)}>{'>'}</a> : <></>}
      </div>
      <Link className={styles.barImgWrap}
        href='/bag'>
          <img alt='bag' className={styles.barImg} src='/bag.png' />
          <div className={styles.bag}>
            {bag.length}
          </div>
      </Link>
    </div>
  )

}
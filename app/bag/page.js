'use client'

import { useContext, useState, useEffect } from 'react'
import Link from 'next/link'
import BagCtx from '../bag.js'
import mongoCall from './mongoCall.js'
import Empty from './empty.js'
import Spin from './spin.js'
import styles from 'styles/stickers.module.scss'
import Bag from './bag.js'
import Sticker from '../sticker.js'

async function wrapCall(bag, $stickers) {
  const {data, error} = await mongoCall(bag)
  if (error) console.error(error)
  console.log(data)
  $stickers(data)
}

export default function page() {

  const {bag} = useContext(BagCtx)
  const [stickers, $stickers] = useState(null)

  useEffect(() => {
    wrapCall(bag, $stickers)
  }, [bag])
  
  if (!stickers) {
    wrapCall(bag, $stickers)
    return <Spin />
  }

  if (stickers?.length == 0) {
    return <Empty />
  }

  return (
    <div>
      <div className='pathWrap'>
        <Link className='path' href='/'>
          ~
        </Link>
        / 
        <Link className='path' href='/bag'>
          bag
        </Link>
      </div>
      <div className='h'>
        Stickers in bag
      </div>
      <div className={styles.stickers}>
        <Bag stickers={stickers} />
        {stickers.map((sticker, k) => <Sticker key={k} sticker={sticker}/>)}
      </div>
    </div>
  )  
}
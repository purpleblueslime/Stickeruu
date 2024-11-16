'use client'

import { useContext } from 'react'
import BagCtx from './bag.js'
import Img from './img.js'
import styles from 'styles/sticker.module.scss'

export default function Sticker({sticker}) {

  const {bag, $bag} = useContext(BagCtx)

  const add = (id) => {
    const b = [...bag]
    b.push(id)
    $bag(b)
  }

  const rem = (id) => {
    let rm = false;

    const b = bag.filter(i => {
      if (i === id && !rm) {
        rm = true;
        return false;
      }
      return true;
    });
    $bag(b)
  }

  return (
    <div className={styles.stickerWrap}>
      <Img className={styles.img} img={sticker.img} color={sticker.color} />
      <div className={styles.aboutWrap}>
        <div className={styles.about}>
          {sticker.name}
          <div className={styles.usd}>
            ${sticker.usd}
          </div>
        </div>
        {!bag.includes(sticker.id) ? 
          <a className={styles.btnWrap}>
            <a className={styles.btn} onClick={() => add(sticker.id)}
              style={sticker.blacked ? {background: sticker.color, color: '#000'} : {background: sticker.color}}>
                ADD TO BAG
            </a>
          </a> : 
          <a className={styles.inBag}>
            <a className={styles.btn} onClick={() => rem(sticker.id)}
              style={sticker.blacked ? {background: sticker.color, color: '#000'} : {background: sticker.color}}>
                {'<'}
            </a>
            x{bag.filter(i => i === sticker.id).length}
            <a className={styles.btn} onClick={() => add(sticker.id)}
              style={sticker.blacked ? {background: sticker.color, color: '#000'} : {background: sticker.color}}>
                {'>'}
            </a>
          </a>
        }
      </div>
    </div>
  )


}
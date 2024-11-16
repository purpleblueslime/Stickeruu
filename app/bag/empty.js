import Link from 'next/link'
import styles from 'styles/error.module.scss'

export default function Empty() {

  return (<>
    <div className='pathWrap'>
      <Link className='path' href='/'>
        ~
      </Link>
      / 
      <Link className='path' href='/bag'>
        bag
      </Link>
    </div>
    <div className={styles.errWrap}>
      <div className={styles.errBox}>
        <img alt='img' className={styles.img} src='/really-think.gif' />
        <div id={styles.err}>Bag is empty :p</div>
      </div>
    </div>
  </>)
  
}
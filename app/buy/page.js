import Link from 'next/link'
import styles from 'styles/error.module.scss'

export default function buy() {

  return (<>
    <div className='pathWrap'>
      <Link className='path' href='/'>
        ~
      </Link>
      / 
      <Link className='path' href='/buy'>
        buy
      </Link>
    </div>
    <div className={styles.errWrap}>
      <div className={styles.errBox}>
        <img alt='img' className={styles.img} src='/pat-gura.gif' />
        <div id={styles.err}>Keep Waiting!</div>
      </div>
    </div>
  </>)
  
}
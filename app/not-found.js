import Link from 'next/link'
import styles from 'styles/error.module.scss'

export default function notFound() {

  return (<>
    <div className='pathWrap'>
      <Link className='path' href='/'>
        ~
      </Link>
      / 
      <Link className='path' href='/404'>
        404
      </Link>
    </div>
    <div className={styles.errWrap}>
      <div className={styles.errBox}>
        <img alt='img' className={styles.img} src='/gura-gura-dance.gif' />
        <div id={styles.err}>Not found</div>
      </div>
    </div>
  </>)
  
}
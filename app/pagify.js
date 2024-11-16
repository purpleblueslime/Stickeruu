import Link from 'next/link'
import styles from 'styles/pagify.module.scss'

export default function component({p, page, stickers}) {

  // numabify that string
  page = Number(page) 

  return (
    <div className={styles.btnsWrap}>
      <div className={styles.btns}>
        {page <= 0 ? <></>:
          <Link className={styles.btn} href={`${p}page=${page - 1}`}>
              {'<'}
          </Link>
        }
        <div className={styles.numba}>
          {page}
        </div>
        {stickers != 16 ? <></>:
          <Link className={styles.btn} href={`${p}page=${page + 1}`}>
            {'>'}
          </Link>
        }
      </div>
    </div>
  )

}
import Link from 'next/link'
import styles from 'styles/foot.module.scss'

export default function Foot() {
  
  return (
    <div id={styles.foot}>
      <div className={styles.imgWrap}>
        <img alt='img' className={styles.img} src='/cloud.png' />
        <div className={styles.links}>
          <span className={styles.nolink}>
            (c) Stickeruu
          </span>
        </div>
      </div>
      <div className={styles.links}>
        <Link className={styles.link} 
          href='https://github.com/purpleblueslime/Stickeruu' target='_'>
            github
        </Link>
      </div>
    </div>
  )

}

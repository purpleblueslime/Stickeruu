import Link from 'next/link'
import Sticker from './sticker.js'
import Pagify from './pagify.js'
import mongoCall from './mongoCall.js'
import styles from 'styles/stickers.module.scss'

export default async function page({searchParams}) {

  if (!searchParams.page) searchParams.page = 0 // def page numba
  const {data, error} = await mongoCall(searchParams.page)  
  if (error) console.error(error)

  return (
    <div>
      <div className='pathWrap'>
        <Link className='path' href='/'>
          ~
        </Link>
        / 
      </div>
      <div className='h'>
        Stickers
      </div>
      <div className={styles.stickers}>
        {data.map((sticker, k) => <Sticker key={k} sticker={sticker}/>)}
      </div>
      {searchParams.page <= 0 && data.length != 16 ? <></>:
        <Pagify p={'/?'} page={searchParams.page} stickers={data.length} />}
    </div>
  )

}
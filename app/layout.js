'use client'

import { useState } from 'react'
import BagCtx from './bag.js'
import AppBar from './appBar.js'
import Foot from './foot.js'
import 'styles/all.scss'

export default function layout({children}) {

  const [bag, $bag] = useState([])

  return (
    <html>
      <head>
        <title>Stickeruu: every sticker tells a story! 🔮</title>
        <link rel='icon' type='image/png' href='/cloud.png' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Jua' />      
      </head>
      <body id='app'>
        <BagCtx.Provider value={{bag: bag, $bag: $bag}}>
          <div style={{minHeight: '100vh'}}>
            <AppBar  />
            {children}
          </div>
        </BagCtx.Provider>
        <Foot />   
      </body>
    </html>
  )

}
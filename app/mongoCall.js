'use server'

import mongo from './mongo.js'

export default async function mongoCall(page) {

  const pp = 16
  const data = await mongo.collection('stickers').find({}).sort({_id: -1}).skip(pp*page).limit(pp).toArray()
  if (!data || !data.length) {
    return {error: 'some error'}
  }
  return {data: data}
  
}
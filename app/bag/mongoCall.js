'use server'

import mongo from '../mongo.js'

export default async function mongoCall(ids) {

  const data = await mongo.collection('stickers').find({id: {$in: ids}}).toArray()
  if (!data) {
    return {error: 'some error'}
  }
  return {data: data}
  
}
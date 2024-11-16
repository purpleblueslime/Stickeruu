import mongo from '../mongo.js'

export default async function mongoCall(q, page) {

  if (!q) return {error: 'missing params'}
  
  const pp = 16
  const data = await mongo.collection('stickers').find({$text: {$search: q}}).skip(pp*page).limit(pp).toArray()
  if (!data || !data.length) 
    return {error: 'some error'}
  
  return {data: data}
  
}
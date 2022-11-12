import React from 'react'
import { FeedPhotosItem } from './FeedPhotosItem'
import {useFetch} from '../../Hooks/useFetch'
import { PHOTOS_GET } from '../../Api'
import {Error} from '..//Help/Error'
import {Loading} from '../Help/Loading'
import styles from './FeedPhotos.module.css'

export const FeedPhotos = () => {

  const { data, loading, error, request } = useFetch()

  React.useEffect(() => {
    async function fetchPhotos() {
      const {url, options} = PHOTOS_GET({page:1, total: 6, user: 0})
      const {res, json} = await request(url, options)
      console.log(json)
    }
    fetchPhotos()
  }, [request])

  if(error) return <Error error={error}/>
  if(loading) return <Loading/>
  if(data)
  return (
    <ul className={`${styles.feed} animeLeft`}>
      {data.map(photo => (
        <FeedPhotosItem key={photo.id} photo={photo}/>
      ))}
    </ul>
  ) 
  else {
    return null
  }
}

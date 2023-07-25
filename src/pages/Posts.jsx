import React from 'react'
import { useParams } from 'react-router-dom'

export const Posts = () => {
    const {id} = useParams()
    console.log(id)
  return (
    <div>Posts</div>
  )
}

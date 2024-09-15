import { posts } from '@/app/lib/placeholder-data'
import Post from '@/app/ui/components/posts/Post'
import React from 'react'

function Page({params}:{params:{id:string}}) {
    console.log('//////params',params);
    
    const post=posts?.find((list)=>list.id===params?.id) || {id:'',title:'',content:'',date:''}
  return (
    <>
    <Post {...post}/>
    </>
  )
}

export default Page
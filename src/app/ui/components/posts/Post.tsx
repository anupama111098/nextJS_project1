import Link from 'next/link'
import React from 'react'

function Post({id,title,content,date}:{id:string,title:string,content:string,date:string}) {
  return (
    <div className='border border-gray-200 p-4 my-4'>
        <Link className='text-blue-300 font-bold' href={`/blog/post/${id}`}>{title}</Link>
        <p className='text-gray-500'>{date}</p>
        <p className=''>{content}</p>
    </div>
  )
}

export default Post
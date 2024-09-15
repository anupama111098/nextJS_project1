import Link from 'next/link'
import React from 'react'
import styles from '@/app/ui/styles/home.module.css'
import Image from 'next/image'

function HomePage() {
  return (
    <main className='flex items-center justify-center min-h-screen bg-gray-50'>
      <div className='container mx-auto p-4 relative'>
        <div className='bg-white border-2 border-purple-100 rounded-lg p-6 grid grid-cols-1'>
          <div className='flex flex-col justify-center'>
        <h1 className={`font-bold ${styles.text_wisteria}`} >Welcome</h1>
        <p>This is home starting page details are here to start.</p>
        <Link className={`outline outline-1 outline-offset-2 border border-purple-700 mb-5 hover:text-white py-2 px-4 mt-4 rounded hover:bg-purple-800 md:w-auto ${styles.fit_content_}`} href={'/blog'}>Go to Blog</Link>
          </div>
          <div className='relative flex justify-center items-center'>
            <Image src={`/image-desktop.jpg`}
            alt='Screenshot of dashboard project showing desktop version.'
            width={1000}
            height={760}
            className='hidden rounded-lg md:block z-10'/>
            <Image src={`/image-mobile.jpg`}
            alt='Screenshot of dashboard project showing desktop version.'
            width={1000}
            height={760}
            className='block md:hidden rounded-md z-10'/>
          </div>
        </div>
      </div>
      <div className={`hidden md:block absolute top-0 right-0 bottom-0 left-2/3 z-0 ${styles.bg_wisteria}`}>
q
      </div>
    </main>
  )
}

export default HomePage
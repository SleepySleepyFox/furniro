import React from 'react'
import BrowseComponent from './BrowseComponent'

export default function BrowseSection() {
  return (
    <div className='flex flex-col p-4'>
      <div>
        <h1 className='font-bold text-3xl py-8 text-primary_h text-center'>Browse The Range</h1>
        <div className='flex flex-col sm:flex-row gap-2'>
          <BrowseComponent />
          <BrowseComponent />
          <BrowseComponent />
        </div>
      </div>
    </div>
  )
}


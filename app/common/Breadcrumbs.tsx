import React from 'react'

export default function Breadcrumbs({path, item} : {path: string, item?: string}) {
  return (
    <div className='bg-tertiary p-8'>
        {path == '/' ? "Home > Products | "  +item : path.replace("/", ' ') + " > Products > " + " | " + item}
    </div>
  )
}

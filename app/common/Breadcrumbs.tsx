import React from 'react'

export default function Breadcrumbs({path, item} : {path: string, item?: string}) {
  return (
    <div>
        {path == '/' ? "Home > " + item : path.replace("/", ' ') + " > "+ item}
    </div>
  )
}

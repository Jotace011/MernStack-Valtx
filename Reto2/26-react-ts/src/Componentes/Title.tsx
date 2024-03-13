import React from 'react'


const Title = ({title}:{title:String}):JSX.Element => {
  return (
    <h1 className='text-xl text-slate-700 text-left'>
        {title}
    </h1>
  )
}

export default Title
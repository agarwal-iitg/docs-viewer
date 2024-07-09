import React, { useRef } from 'react'
import Card from './Card'

const Front = () => {
  // des close tag--tag1/tag2--colur

  const ref = useRef(null)
  const data = [{
    desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optiodoloribus",
    filesize:"0.4mb",
    open:true,
    tag:{
      type:true,
      colour:"green"
    }
  }, {
    desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optiodoloribus",
    filesize:"725gb",
    open:true,
    tag:{
      type:false,
      colour:"green"
    }
  }, {
    desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optiodoloribus",
    filesize:"752gb",
    open:true,
    tag:{
      type:false,
      colour:"blue"
    }
  }]

  return (
    <div>
      <div ref={ref} className='w-full h-full fixed top-0 left-0 bg-black opacity-60 '>
        <div  className='mt-[4.9%] flex gap-5'>
            {data.map((item, index)=>(
              <Card data={item} reference={ref}/>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Front
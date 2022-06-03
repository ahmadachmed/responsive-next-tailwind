 import React from 'react'
 
 function HeaderItem({Icon, title}) {
   return (
     <div className='flex flex-col items-center group cursor-pointer w-12 sm:w-20 hover:text-white duration-300'>
           <Icon className='h-8 w-auto mb-1 group-hover:animate-bounce'/>
           <p className='opacity-0 group-hover:opacity-100 duration-300 tracking-widest'>
               {title}
           </p>
     </div>
   )
 }
 
 export default HeaderItem
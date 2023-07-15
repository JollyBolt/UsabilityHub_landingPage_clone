import React from 'react'
import ModeCommentIcon from '@mui/icons-material/ModeComment';

const Msgbox = () => {
  return (
    <div className='fixed flex justify-center items-center right-4 bottom-4 h-12 w-10 p-4 bg-lightblue rounded-xl hover:scale-110 transition-all ease-in-out duration-500 cursor-pointer'>
        <ModeCommentIcon sx={{ color: 'white' }}/>
    </div>
  )
}

export default Msgbox
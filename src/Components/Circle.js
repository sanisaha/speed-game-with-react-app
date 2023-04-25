import React from 'react';
import image from '../assets/istockphoto-1132395683-612x612.jpg'

const Circle = ({clickHandler, indexNumber, active}) => {
    return (
        <div className='p-10'>
            <div className="avatar" onClick={()=>clickHandler(indexNumber)}>
  <div className="transition w-24 duration-150 ease-in-out rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 active:contrast-200">
    
    {indexNumber === active && <img src={image} alt=''/>}
  </div>
</div>
        </div>
    );
};

export default Circle;
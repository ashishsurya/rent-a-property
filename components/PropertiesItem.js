import { HeartIcon as HeartIconOutline } from '@heroicons/react/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/solid';
import { useState } from 'react';

/* eslint-disable @next/next/no-img-element */
const PropertiesItem = (props) => {
  const [liked, setLiked] = useState(false);
  console.log(props);
  const img_url =
    'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
  return (
    <div className='rounded flex flex-col  border'>
      <div className=''>
        <img src={img_url} alt='' className='rounded-t' />
      </div>
      <div className='p-1'>
        <div className='flex items-center justify-between'>
          <h4 className='text-primary'>
            &#x20B9; {props.price}{' '}
            <span className='text-sm text-black'>/month</span>{' '}
          </h4>
          <button
            onClick={() => {
              setLiked((prev) => !prev);
            }}
          >
            {liked ? (
              <HeartIconSolid className='w-5 h-5 text-primary' />
            ) : (
              <HeartIconOutline className='w-5 h-5 text-primary' />
            )}
          </button>
        </div>
        <h4 className='font-extrabold'>{props.area}</h4>
        <p>
          {props.address} , {props.area} , {props.city}
        </p>
        <hr />
        <div className='flex  space-x-2 text-xs justify-between mt-1'>
          {props.beds && (
            <div className='flex items-center space-x-1 text-primary'>
              <img
                src='https://img.icons8.com/windows/18/7e57c2/bed.png'
                alt=''
              />{' '}
              <p>{props.beds} Beds</p>
            </div>
          )}
          {props.bathrooms && (
            <div className='flex items-center space-x-1 text-primary'>
              <img
                src='https://img.icons8.com/material-outlined/18/7e57c2/shower-and-tub.png'
                alt=''
              />
              <p>{props.bathrooms} bathrooms</p>
            </div>
          )}
          <div className='flex items-center space-x-1 text-primary'>
            <img
              src='https://img.icons8.com/material-outlined/18/7e57c2/shower-and-tub.png'
              alt=''
            />
            <p dangerouslySetInnerHTML={{ __html: props.dimensions }}></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesItem;

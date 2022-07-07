import { useId } from 'react';

const CustomInput = ({ label, value, onChange }) => {
  const id = useId();
  return (
    <div className='flex flex-col'>
      <label htmlFor={label.toLowerCase() + id} className="text-gray-400" >{label}</label>
      <input id={label.toLowerCase() + id} type='text' className='border-none px-0'/>
    </div>
  );
};

export default CustomInput;

import {
  CalendarIcon,
  CurrencyRupeeIcon,
  LocationMarkerIcon,
} from '@heroicons/react/solid';
import { format } from 'date-fns';
import { useContext, useState } from 'react';
import { Calendar } from 'react-date-range';
import { FilterContext } from '../context/FilterContext';
import { propertyTypes } from '../utils/constants';

const InputTray = ({}) => {
  const { fromDate, setFromDate, location, setLocation } =
    useContext(FilterContext);

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [propertyType, setPropertyType] = useState(
    Object.keys(propertyTypes)[0]
  );
  const [price, setPrice] = useState(250);

  console.log(propertyType);

  const handleDateChange = (date) => {
    setFromDate(date);
    setShowDatePicker(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='bg-slate-100 p-3 mt-5 rounded flex flex-wrap space-y-4 md:space-y-0 md:space-x-3'
    >
      <div className='flex flex-col'>
        <label htmlFor='' className='filter__input__label'>
          <LocationMarkerIcon className='w-5 h-5' />
          Location
        </label>
        <input
          required
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          type='text'
          className='rounded-3xl'
        />
      </div>
      <div className='flex flex-col relative'>
        <label htmlFor='' className='filter__input__label'>
          <CalendarIcon className='w-5 h-5' /> From
        </label>
        <button
          className={`${
            showDatePicker ? 'bg-white text-sm text-primary ' : 'bg-transparent'
          }`}
          onClick={() => setShowDatePicker((prev) => !prev)}
        >
          {format(fromDate, 'do MMMM yyyy')}
        </button>
        {showDatePicker && (
          <Calendar
            className='absolute top-[70px] right-0 duration-500'
            color='#7e57c2'
            value={fromDate}
            onChange={handleDateChange}
            showPreview
            minDate={new Date()}
          />
        )}
      </div>
      <div className='flex flex-col'>
        <label htmlFor='' className='filter__input__label'>
          <CurrencyRupeeIcon className='w-5 h-5' /> Minimum Price
        </label>
        <input
          type='number'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          min={250}
          className='rounded-3xl'
        />
      </div>
      <div className='flex flex-col'>
        <label htmlFor=''>Property Type</label>
        <select
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
        >
          {Object.keys(propertyTypes).map((key) => (
            <option key={key} value={key}>
              {propertyTypes[key]}
            </option>
          ))}
        </select>
      </div>
      <button className='primary-btn flex-1 max-w-[200px] self-center'>
        Search
      </button>
    </form>
  );
};

export default InputTray;

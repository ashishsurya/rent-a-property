import { ChevronDownIcon } from '@heroicons/react/solid';
import Head from 'next/head';
import { Fragment } from 'react';
import Header from '../components/Header';
import InputTray from '../components/InputTray';
import PropertiesContianer from '../components/PropertiesContianer';
import FilterContextProvider from '../context/FilterContext';

export default function RentPage() {

  return (
    <Fragment>
      <Head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        ></meta>
        <title>
          Rent &middot; a &middot; Property
        </title>
      </Head>
      <Header />
      <hr />

      <div className='max-w-5xl mx-auto px-4 pt-14'>
        <Fragment>
          <main className='flex flex-col items-center md:flex-row md:justify-between space-y-3 md:space-y-0'>
            <h1>Search properties for rent.</h1>
            <div className='relative'>
              <input
                type='text'
                placeholder='Search with SearchBar'
                className='pr-6'
              />
              <ChevronDownIcon className='absolute w-5 h-5 right-[4px] top-[9px] text-primary bg-primary bg-opacity-25 rounded-full' />
            </div>
          </main>
          <FilterContextProvider>
              <InputTray />
              <PropertiesContianer />
          </FilterContextProvider>
        </Fragment>
      </div>
    </Fragment>
  );
}

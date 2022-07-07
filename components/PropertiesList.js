import React from 'react';
import PropertiesItem from './PropertiesItem';

// eslint-disable-next-line react/display-name
const PropertiesList = React.memo(({ data }) => {
  return (
    <div className='grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 pt-5'>
      {data.map((property) => {
        return <PropertiesItem key={new Date()} {...property} />;
      })}
    </div>
  );
});

export default PropertiesList;

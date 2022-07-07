import { createContext, useState } from 'react';

export const FilterContext = createContext(null);
const FilterContextProvider = ({children}) => {
  const [location, setLocation] = useState('');
  const [fromDate, setFromDate] = useState(new Date());
  return (
    <FilterContext.Provider
      value={{ location, setLocation, fromDate, setFromDate }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;

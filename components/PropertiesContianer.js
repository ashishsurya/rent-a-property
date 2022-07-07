import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";
import { mockData } from "../utils/mockdata";
import PropertiesList from "./PropertiesList";

const PropertiesContianer = ({ }) => {

  const { location } = useContext(FilterContext)
  
  
  return <div className="pt-5">
    <h2>Properties you searched for</h2>
    <PropertiesList data={mockData}/>
  </div>;
};

export default PropertiesContianer;

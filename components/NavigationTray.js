import CustomNavLink from './CustomNavLink';

const NavigationTray = ({}) => {
  return (
    <div className='hidden md:inline-flex px-5  md:relative  flex-1'>
      <div className='flex  flex-row items-center   space-x-8 flex-1'>
        <CustomNavLink href='/rent' title='Rent' />
        <CustomNavLink title='Buy' />
        <CustomNavLink title='Sell' />
        <CustomNavLink title='Manage Property' dropdown />
        <CustomNavLink title='Resources' dropdown />
      </div>
      <div className='flex text-sm space-x-3 tracking-wide'>
        <button className='border'>Log In</button>
        <button className='primary-btn text-white'>Sign Up</button>
      </div>
    </div>
  );
};

export default NavigationTray;

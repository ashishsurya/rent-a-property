import { HomeIcon, MenuIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import NavigationTray from './NavigationTray';

export default function Header() {
  const [navTrayState, setNavTrayState] = useState(false);
  return (
    <header className='flex items-center justify-between px-6 py-3 bg-white'>
      {/* LOGO */}
      <div className='flex items-center text-primary cursor-pointer space-x-2 text-3xl'>
        <HomeIcon className='w-10 h-10' />
        <h1>Estatery</h1>
      </div>
      <NavigationTray />
      <MenuIcon className='md:hidden w-7 h-7' />
    </header>
  );
}

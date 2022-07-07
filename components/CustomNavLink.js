import { ChevronDownIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { useRouter } from 'next/router';

const CustomNavLink = ({ href, dropdown, title }) => {

  const router = useRouter();

  const active = href === router.pathname;

  return (
    <Link passHref href={href || 'error'}>
      <div
        className={`${
          active
            ? 'bg-primary bg-opacity-25 px-2 py-1 rounded text-primary'
            : ''
        } cursor-pointer flex items-center justify-start text-sm`}
      >
        <p className='flex-1'>{title}</p>
        {dropdown && <ChevronDownIcon className='w-5'/>}
      </div>
    </Link>
  );
};

export default CustomNavLink;

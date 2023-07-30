
import Image from 'next/image';
import logo from '/public/logo.png'
import Link from 'next/link';
import Wrapper from '@/components/shared/Wrapper';
import DropdownMenu from './Dropdown';

const Header = () => {
  return (
    
      <header className="flex justify-between bg-white py-2 px-2 sticky top-0 items-center" style={{ zIndex: 100 }}>
        <div>
          {/* <h2 className="text-xl font-bold">Panaverse DAO</h2> */}
          <Image src={logo} alt='panaverse logo' />
        </div >
        <div className='mr-4'>
        <ul className="flex space-x-4 font-medium">
        <li className='mr-10'>
            <DropdownMenu />
          </li>
          <li>
            <Link href={"/"}>
              Home
            </Link>
          </li>
          
        </ul>
        </div>
      </header>
  
  )
}

export default Header;

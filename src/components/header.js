'use client';
import {
  Navbar,
  NavbarBrand,
  Image,
  Link
} from '@nextui-org/react';
import logo from '../assets/logo.svg';
export default function Header() {

  return (
    <Navbar className='h-20 bg-header'>
      <div className="flex items-end"> 
        <NavbarBrand>
          <Link href='/'>
            <Image src={logo} width={240} alt='Chat.ai' className="block" />
          </Link>
        </NavbarBrand>
      </div>
    </Navbar>
  );
}

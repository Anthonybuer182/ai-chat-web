
import {
  Navbar,
  NavbarBrand,
  Image,
  Link
} from '@nextui-org/react';
export default function Header() {

  return (
    <Navbar className='h-20 bg-header'>
      <div className="flex items-end"> 
        <NavbarBrand>
          
          <Link href='/'>
            <Image src="/logo.svg" width={240} alt='Chat.Ai' className="block" />
          </Link>
        </NavbarBrand>
      </div>
    </Navbar>
  );
}

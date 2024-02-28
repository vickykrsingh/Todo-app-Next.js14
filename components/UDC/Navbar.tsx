import {Menu} from '@/components/UDC/Menubar'
import Link from 'next/link'
function Navbar() {
  return (
    <nav className=" bg-slate-500 flex justify-between items-center h-[8vh]">
        <div>
          <h1><Link href={'/'} className='text-2xl font-semibold'>DoMoreNow 📓</Link></h1>
        </div>
        <Menu/>
    </nav>
  );
}

export default Navbar
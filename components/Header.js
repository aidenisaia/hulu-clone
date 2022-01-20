import Image from 'next/image';
import HeaderItem from './HeaderItem';

function Header() {
  return (
    <header className="">
      <div>
        <HeaderItemm title="HOME"/>
      </div>
      <h1>This is the Header</h1>
      <Image 
        className="object-contain"
        src="http://links.papareact.com/ua6"
        width={200}
        height={100}
      />
    </header>
  )
}

export default Header;
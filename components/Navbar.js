import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
        <div className="logo">
            <Image width={128} height={83} src="/logo.webp" alt="" />
        </div>
        <Link href='/'><a>Home</a></Link>
        <Link href='/about'><a>About</a></Link>
        <Link href='/ninjas'><a>NinjaList</a></Link>
    </nav>
  )
}

export default Navbar
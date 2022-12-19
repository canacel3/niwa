import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <nav className='flex flex-rows px-10 md:px-20 pt-10 pb-2.5 text-white fond-bold text-2xl font-mono'>
        <Link href='/'>canacel.net</Link>
      </nav>
      <div className='mx-10 md:mx-20 border-b-2' />
    </header>
  )
}

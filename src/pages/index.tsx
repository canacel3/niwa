import Link from 'next/link'

export default function Home() {
  return (
    <div className='bg-primary w-screen h-screen relative'>
      <Link href='/blog'>
        <div className='title font-mono'>canacel.net</div>
      </Link>
    </div>
  )
}

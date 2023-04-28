import Main from '@/components/Main'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <div className='container lg:max-w-4xl py-12 mx-auto'>
      <Navbar />    
      <Main />
    </div>
  )
}

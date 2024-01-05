import Image from 'next/image'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Message from './components/Message'
import Events from './components/Message'
import Eve from './components/Eve'
//import { Image } from 'next/image'


export default function Home() {
  return (
    <div>
    <Navbar className="fixed"/>
    <Main className="fixed"/>
    <Message className="fixed"/>
    <Eve />
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    {/* <img src='/images/home.jpeg' alt='home' height={30} width={40} 
    /> */}
    
    </main>
    </div>
  )
}

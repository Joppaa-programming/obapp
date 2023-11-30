
"use client"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from './componets/nav';
import Sidekick from './componets/sidekick';
import ContactUs from './componets/contact-us';
import Hero from './componets/hero';
import Services from './componets/services';
import Footer from './componets/footer';
import Grid from './componets/grid';
import { useDispatch, useSelector } from 'react-redux';
 // this is new 

const inter = Inter({ subsets: ['latin'] })

//app
export default function Home() {
  const dispatch = useDispatch()
  const origins = useSelector(state => state.origins.origins);
  return (
    
    <div >

    <Hero/>
      <Grid data={origins} />
    </div>

  );
}

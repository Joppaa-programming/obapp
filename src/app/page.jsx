
"use client"
import { Inter } from 'next/font/google'
import Hero from './componets/hero';
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

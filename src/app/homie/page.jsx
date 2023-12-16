
"use client"

import { useDispatch, useSelector } from 'react-redux';
import Grid from '../componets/grid';
 // this is new 



//app
export default function Home() {
 
  const origins = useSelector(state => state.origins.origins);
  return (
    
    <div >
      <Grid data={origins} />
    </div>

  );
}

import { getServerSideSitemapIndex } from 'next-sitemap'
import axios from 'axios';

export async function GET(request) {
  // Method to source urls from cms
  const baseURL = process.env.BASEURL
   const response = await fetch(`${baseURL}/api/business`)
   const business = await response.json();
  // const origins = await response.json();
 // const ids = origins.map(origin => `${baseURL}/origin/${origin.SK}`)
  const idb = business.map(business => `${baseURL}/business/${business.SK}`)
 
  //console.log(ids)
  return getServerSideSitemapIndex(idb
  )
}
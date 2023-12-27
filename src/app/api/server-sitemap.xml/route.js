import { getServerSideSitemap } from 'next-sitemap'
import axios from 'axios';
export async function GET(request) {
    // Method to source urls from cms
    const baseURL = process.env.BASEURL
    const response = await fetch(`${baseURL}/api/origins`)
    const responseB = await fetch(`${baseURL}/api/business`)
   
    const origins = await response.json();
    const business = await responseB.json();
   // console.log(business)
    // const ids = origins.map((origin )=> ({
    //    loc: `${baseURL}/origin/${origin.SK}`,
    //     lastmod : new Date().toISOString()
    // }))
    const idb = business.map((business )=> ({
        loc: `${baseURL}/business/${business.SK}`,
         lastmod : new Date().toISOString()
     }))
   //console.log(idb)
    return getServerSideSitemap(idb
    )
}
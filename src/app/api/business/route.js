import { getBusinesses } from "@/app/db/client";

export async function GET(req, res) {

  const data = await  getBusinesses()
 // console.log(origins)

   return new Response(JSON.stringify(data));
}
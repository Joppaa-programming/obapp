import { getBusinesses } from "@/app/db/client";
export const dynamic = "force-dynamic"
export async function GET(req, res) {

  const data = await  getBusinesses()
 // console.log(origins)

   return new Response(JSON.stringify(data));
}
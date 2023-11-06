import { getOrigins } from "@/app/db/client";

export async function GET(req, res) {

  const origins = await  getOrigins()
 // console.log(origins)

   return new Response(JSON.stringify(origins));
}
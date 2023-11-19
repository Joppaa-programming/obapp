import { getOrigins } from "@/app/db/client";
export const dynamic = "force-dynamic"
export async function GET(req, res) {

  const origins = await  getOrigins()
 // console.log(origins)

   return new Response(JSON.stringify(origins));
}
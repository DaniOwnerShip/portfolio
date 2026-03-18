import MainContent from "@/components/MainContent"
import { getdbdata } from "@/api/mongoClient.mjs"

export const dynamic = 'force-dynamic';

export default async function Home() {
  const fullData = await getdbdata();
  
  return <MainContent data={fullData?.[0]?.data} />
}

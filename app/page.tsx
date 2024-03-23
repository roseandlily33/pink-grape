import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/navbar";
import SectionCard from "./components/SectionCard/SectionCard";
import {getPopularVideos, getVideos} from './utils/videos';

export default async function Home() {
 
  const disneyVideos = await getVideos("disney trailer");
  const travelVideos = await getVideos("travel");
  const popularVideos = await getPopularVideos();

  return (
    <main className="h-screen">
      <div className="h-5/6 ">
        <Navbar />
        <Banner title="My Movie" subTitle="cute movie" imageUrl="/public/mesh-gradient.png" />
      </div>
      <br />
      <div className="mainContent">
        <SectionCard title="Disney" videos={disneyVideos} size="medium"/>  
        <SectionCard title="Travel" videos={travelVideos} size="medium"/>
        <SectionCard title="Popular" videos={popularVideos} size="medium" />
      </div>
    </main>
  );
}

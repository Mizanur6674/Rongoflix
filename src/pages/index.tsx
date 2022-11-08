import type { NextPage } from "next";
import Banner from "../components/Banner";
import Layar from "../components/Layout/layout";
import requests from "../../utils/requests";
import { Movie } from "../../type";
import Row from "../components/Row";

interface props {
  netflixOriginals: Movie[]
  trendingNow: Movie[]
  topRated: Movie[]
  actionMovies: Movie[]
  comedyMovies: Movie[]
  horrorMovies: Movie[]
  romanceMovies: Movie[]
  documentaries: Movie[]
 
}

const Home = ({
  netflixOriginals,
  actionMovies,
  comedyMovies,
  documentaries,
  horrorMovies,
  romanceMovies,
  topRated,
  trendingNow,
}:props) => {
 
  return (
    <div className=" relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
      <Banner netflixOriginal={netflixOriginals} />
      <div className=" md:space-y-24">
      <Row title='Tranding Now' movies={trendingNow} />
      <Row title='Action Thrillers' movies={actionMovies} />
      <Row title='Top Rated Movies' movies={topRated} />
       
        {/* my list */}
        <Row title='Comedies' movies={comedyMovies} />
        <Row title='Scary Movies' movies={horrorMovies} />
        <Row title='Romance Movies' movies={romanceMovies} />
        <Row title='Documentaries' movies={documentaries} />
      </div>
    </div>
  );
};
export default Home;


export const getServerSideProps = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] =
    await Promise.all([
      fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
      fetch(requests.fetchTrending).then((res) => res.json()),
      fetch(requests.fetchTopRated).then((res) => res.json()),
      fetch(requests.fetchActionMovies).then((res) => res.json()),
      fetch(requests.fetchComedyMovies).then((res) => res.json()),
      fetch(requests.fetchHorrorMovies).then((res) => res.json()),
      fetch(requests.fetchRomanceMovies).then((res) => res.json()),
      fetch(requests.fetchDocumentaries).then((res) => res.json()),
     
    ]);

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
     
    },
  };
};

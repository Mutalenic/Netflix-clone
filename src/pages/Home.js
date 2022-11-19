import React from 'react';
import Main from '../components/Main';
import Row from '../components/Row';
import movieRequests from '../Requests';

function Home() {
  return (
    <div>
      <Main />
      <Row title="UpComing" fetchURL={movieRequests.requestUpComing} />
      <Row title="TopRated" fetchURL={movieRequests.requestTopRated} />
      <Row title="Popular" fetchURL={movieRequests.requestPopular} />
      <Row title="Trending" fetchURL={movieRequests.requestTrending} />
      <Row title="NowPlaying" fetchURL={movieRequests.requestNowPlaying} />

    </div>
  );
}

export default Home;

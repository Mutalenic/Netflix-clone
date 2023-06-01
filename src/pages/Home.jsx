import React from 'react';
import Main from '../components/Main';
import Row from '../components/Row';
import movieRequests from '../Requests';

function Home() {
  return (
    <div>
      <Main />
      <Row
        rowID="7"
        title="UpComing"
        fetchURL={movieRequests.requestUpComing}
      />
      <Row
        rowID="9"
        title="TopRated"
        fetchURL={movieRequests.requestTopRated}
      />
      <Row rowID="11" title="Popular" fetchURL={movieRequests.requestPopular} />
      <Row
        rowID="12"
        title="Trending"
        fetchURL={movieRequests.requestTrending}
      />
      <Row
        rowID="3"
        title="NowPlaying"
        fetchURL={movieRequests.requestNowPlaying}
      />
    </div>
  );
}

export default Home;

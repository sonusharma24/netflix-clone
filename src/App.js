import Row from "./components/Row";
import "./App.css";
import request from "./request";
import Banner from "./components/Banner";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="app">
      {/* {nav} */}
      <Nav />

      {/* {banner} */}
      <Banner />

      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumantaries} />
    </div>
  );
}

export default App;

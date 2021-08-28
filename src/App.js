import './App.css';
import RowDiv from './RowDiv'
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
     <RowDiv 
     title='NETFLIX ORIGINALS'
     fetchURL={requests.fetchNetflixOriginals}
     isLargeRow={true}
     />
     <RowDiv title='Trending Now' fetchURL={requests.fetchTrending}/>
     <RowDiv title='TopRated' fetchURL={requests.fetchTopRated}/>
     <RowDiv title='Action Movies' fetchURL={requests.fetchActionMovies}/>
     <RowDiv title='Comedy Movies' fetchURL={requests.fetchComedyMovies}/>
     <RowDiv title='Romance Movies' fetchURL={requests.fetchRomanceMovies}/>
     <RowDiv title='Documentaries' fetchURL={requests.fetchDocumentaries}/>
     <RowDiv title='Horror Movies' fetchURL={requests.fetchHorrorMovies}/>
    </div>
  );
}

export default App;

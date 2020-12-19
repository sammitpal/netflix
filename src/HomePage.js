import React from 'react'
import Banner from './Banner'
import Navbar from './Navbar'
import requests from './request'
import Row from './Row'
import './HomePage.css'
function HomePage() {
    return (
        <div className="home">
            <Navbar/>
      <Banner/>
     <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
     <Row title="Trending" fetchUrl={requests.fetchTrending} isLargeRow={false}/>
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow={false} />
     <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} isLargeRow={false}/>
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} isLargeRow={false}/>
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} isLargeRow={false}/>
     <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} isLargeRow={false}/>
        </div>
    )
}

export default HomePage

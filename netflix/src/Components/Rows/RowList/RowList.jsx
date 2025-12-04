import React from 'react'
import Row from '../Row/Row'
import requests from '../../../utils/request'

const RowList = () => {
  return (
    <>
      <Row title="NETFLIX ORGINALS" fetchUrl={requests.fetchNetflixOrginals} />
      <Row title="TopRatedMovies" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="ActionMovies" fetchUrl={requests.fetchActionMovies} />
      <Row title="ComedyMovies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="HorrerMovies" fetchUrl={requests.fetchHorrerMovies} />
      <Row title="RomanceMovies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Docmentaries" fetchUrl={requests.fetchDocmentaries} />
      <Row title="TvShow" fetchUrl={requests.fetchTvShow} />
    </>
  );
}

export default RowList
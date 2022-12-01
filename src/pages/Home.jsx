import React from 'react'
import Main from '../components/Main/Main'
import Row from '../components/Row/Row'
import request from '../Request'

function Home() {
  return (
    <>
    <Main/>
    <Row title='Popular' fetchURL={request.requestPopular}/>
    <Row title='Up comming' fetchURL={request.requestTopRated}/>
     <Row title='Playing' fetchURL={request.requestNowPlaying}/>
    </>
  )
}

export default Home
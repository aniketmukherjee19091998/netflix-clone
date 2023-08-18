import React from 'react'
import MainComponent from '../components/MainComponent'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
    return (
        <>
            <MainComponent />
            <Row title='Up Coming' fetchURL={requests.requestUpcoming} />
            <Row title='Popular' fetchURL={requests.requestPopular} />
            <Row title='Trending' fetchURL={requests.requestTrenging} />
            <Row title='Top Rated' fetchURL={requests.requestTopRate} />
        </>
    )
}

export default Home
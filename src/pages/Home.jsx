import React from 'react'
import MainComponent from '../components/MainComponent'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
    return (
        <>
            <MainComponent />
            <Row rowId='1' title='Up Coming' fetchURL={requests.requestUpcoming} />
            <Row rowId='2' title='Popular' fetchURL={requests.requestPopular} />
            <Row rowId='3' title='Trending' fetchURL={requests.requestTrenging} />
            <Row rowId='4' title='Top Rated' fetchURL={requests.requestTopRate} />
        </>
    )
}

export default Home
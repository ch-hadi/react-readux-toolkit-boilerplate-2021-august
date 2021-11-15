import React from 'react'
import PropTypes from 'prop-types'
import Header from "../components/home/Header"
import Box from './../components/home/Box';
const Home = props => {

    return (
        <>
           <div style={{marginLeft:150 , marginTop:50}}>
            {/* <Header /> */}
             <Box />
            </div>
        </>
    )
}

Home.propTypes = {

}

export default Home

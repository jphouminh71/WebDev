import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {createNote} from './Note'
import Data from '../notes'

function App() {

    return (
        <div> 
            <Header /> 
            {Data.map(createNote)}
            <Footer /> 
        </div>
    ); 
}

export default App; 
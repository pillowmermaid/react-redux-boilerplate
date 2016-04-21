import React from 'react'
import { connect } from 'react-redux'

//css
import '../css/styles.css'

class App extends React.Component{
    render(){
        return (
            <div className='app-root'>

            </div>
        );
    }
}

export default connect()(App);
import React, { Component } from 'react'
import { Route } from 'react-router'

import DeezerSearch from './pages/search/deezer'

class App extends Component {
    render() {
        return (
            <div id="container">
                <Route exact path='/' render={() => <DeezerSearch store={this.props.store} history={this.props.history} />} />
            </div>
        )
    }
}

export default App

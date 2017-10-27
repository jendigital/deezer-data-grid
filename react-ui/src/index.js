import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
// Import the index reducer and sagas
import IndexReducer from './index-reducer'
import IndexSagas from './index-sagas'

import 'bootstrap/dist/css/bootstrap.css'

import App from './app/app'

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import createSagaMiddleware from 'redux-saga'

import { ConnectedRouter, routerMiddleware } from 'react-router-redux'

import { IntlProvider, addLocaleData } from 'react-intl'
import fr from 'react-intl/locale-data/fr'
import messages from './app/translations/locales/fr'
const locale = 'fr'
addLocaleData(fr)

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Setup the middleware to watch between the Reducers and the Actions
const sagaMiddleware = createSagaMiddleware()

// Redux DevTools - completely optional, but this is necessary for it to
// work properly with redux saga.  Otherwise you'd just do:
//
// const store = createStore(
//   IndexReducer,
//   applyMiddleware(sagaMiddleware)
// )

/*eslint-disable */
const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose
/*eslint-enable */

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
    IndexReducer,
    composeSetup(applyMiddleware(middleware, sagaMiddleware))
);

// Begin our Index Saga
sagaMiddleware.run(IndexSagas)

ReactDOM.render(
    <IntlProvider locale={ locale } messages={ messages } key={ locale }>
        <Provider store={ store }>
            <ConnectedRouter history={history}>
                <App store={store} history={history} />
            </ConnectedRouter>
        </Provider>
    </IntlProvider>,
    document.getElementById('app')
);

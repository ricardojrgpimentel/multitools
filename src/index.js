import React from 'react'
import ReactDOM from 'react-dom'
import Main from './components/Main'
import './sass/main.css'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const middleware = applyMiddleware(
  thunk,
  createLogger()
)

let store = createStore(rootReducer, middleware)

ReactDOM.render((
	<Provider store={store}>
		<Router>
			<Route path="/" component={Main}/>
		</Router>
	</Provider>
	), document.getElementById('root'))
registerServiceWorker()

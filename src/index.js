import React from 'react';
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import {createStore} from 'redux'

import allReducers from './reducers'
import RootComponent from './component/RootComponent'

const myStore = createStore(allReducers)

ReactDOM.render(
                <Provider store={myStore}>
                <RootComponent/>
                
                </Provider>,document.getElementById('root'))
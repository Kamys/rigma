import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { AppComponent } from './app';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducer from './redux/reducers/rootReducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/saga/rootSaga';
import { loadStore, saveStore } from './LocalStorage';
// import './index.css';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    loadStore(), // Use for save state in local store.
    composeWithDevTools(applyMiddleware(sagaMiddleware)));

store.subscribe(() => {
    saveStore(store.getState());
});

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <AppComponent/>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();

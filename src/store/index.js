import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga';
import rootWorkflow from "./rootWorkflow";
import Apis from '../api/modules';

// importations of modules :
import { GenericModule } from './generic';
import { GenericModelState, GenericReducers, GenericActions } from './generic';

const rootReducer = combineReducers({
    users: new GenericModule('users', new GenericModelState(), new GenericReducers('users', GenericActions)).getReducers(),
});

const sagaMiddleware = createSagaMiddleware();

const middleware = compose(
    applyMiddleware(sagaMiddleware),
    composeWithDevTools(),
);

export default createStore(
    rootReducer,
    middleware
);

sagaMiddleware.run(rootWorkflow, new Apis());

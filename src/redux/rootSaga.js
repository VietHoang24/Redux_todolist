import {all} from 'redux-saga/effects'
import counterSaga from './counterSaga';


function *helloSaga(){
    console.log("Hello saga");
}

export default  function*rootSaga(){
    console.log("root saga")
    yield all ([helloSaga(),counterSaga()])
}
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import AddTodoSlice from './AddTodoSlice'
import todoSlice  from './TodoSlice'
import EditTodo from '../components/editTodo'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'

const sagaMiddleware= createSagaMiddleware()
export default configureStore({
    reducer: {
        states: AddTodoSlice,
        
        
        
        
        
        
        todolist: todoSlice,
        
       
    }, 
    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware({
        }).concat(sagaMiddleware)

});
sagaMiddleware.run(rootSaga)
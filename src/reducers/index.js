import { combineReducers} from 'redux';
import errorReducer from './errorReducer';
import languageReducer from './languageReducer';

export default combineReducers({
    errors:errorReducer,
    language:languageReducer
});
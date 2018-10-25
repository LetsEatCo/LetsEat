import {combineEpics} from 'redux-observable';
import {CustomerEpics} from '@/store/epics/customer';

export default combineEpics(...CustomerEpics);

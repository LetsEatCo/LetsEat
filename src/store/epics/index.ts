import {combineEpics} from 'redux-observable';
import {CustomerEpics} from '@/store/epics/customer';
import {StoresEpics} from '@/store/epics/stores';

export default combineEpics(...CustomerEpics, ...StoresEpics);

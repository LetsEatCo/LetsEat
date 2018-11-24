import {combineEpics} from 'redux-observable';
import {CustomerEpics} from '@/store/epics/customer';
import {StoresEpics} from '@/store/epics/stores';
import {CartEpics} from '@/store/epics/customer/cart';

export default combineEpics(...CustomerEpics, ...StoresEpics, ...CartEpics);

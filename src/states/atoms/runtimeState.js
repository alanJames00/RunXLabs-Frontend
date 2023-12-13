import {atom} from 'recoil';

export const RuntimeState = atom({
    key: 'RuntimeState',
    default: {name:'javascript' ,val:'js'}
})
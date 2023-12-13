import { atom } from 'recoil';

export const ThemeState = atom({
    key: 'ThemeState',
    default: {name:'Dark-Mode', val:'vs-dark'}
});
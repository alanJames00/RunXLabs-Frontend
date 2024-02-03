import { atom } from 'recoil';

export const codeContent = atom<string>({
    key: 'code-content',
    default: ''
});
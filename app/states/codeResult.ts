import { atom } from 'recoil';

export const codeResult = atom<string>({
    key:'code-result',
    default: 'sample output',
});
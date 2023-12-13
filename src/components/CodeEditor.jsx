import Editor from '@monaco-editor/react';
import { useRecoilState } from 'recoil'
import { RuntimeState } from '../states/atoms/runtimeState';
import { CodeContent } from '../states/atoms/codeContent';
import { ThemeState } from '../states/atoms/ThemeState';

export default function CodeEditor() {

    const [runtime] = useRecoilState(RuntimeState);
    const [codeText, setCodeText] = useRecoilState(CodeContent);
    const [currTheme] = useRecoilState(ThemeState);
    // console.log(runtime.name);
    console.log(codeText);
    

    return (
    <Editor
      height="90vh"
      theme={currTheme.val}
      value= {codeText}
      language={runtime.name}
      onChange={e => setCodeText(e)}    
    />
    );
}
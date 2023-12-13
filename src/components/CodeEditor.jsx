import Editor from '@monaco-editor/react';
import { useRecoilState } from 'recoil'
import { RuntimeState } from '../states/atoms/runtimeState';
import { CodeContent } from '../states/atoms/codeContent';

export default function CodeEditor() {

    const [runtime] = useRecoilState(RuntimeState);
    const [codeText, setCodeText] = useRecoilState(CodeContent);
    // console.log(runtime.name);
    console.log(codeText);
    

    return (
    <Editor
      height="90vh"
      theme='vs-dark'
      value= {codeText}
      language={runtime.name}
      onChange={e => setCodeText(e)}    
    />
    );
}
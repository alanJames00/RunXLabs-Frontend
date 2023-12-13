import Editor from '@monaco-editor/react';
import { useRecoilState } from 'recoil'
import { RuntimeState } from '../states/atoms/runtimeState';

export default function CodeEditor() {

    const [runtime] = useRecoilState(RuntimeState);

    function handleEditorChange(value, event) {
      console.log('here is the current model value:', value);
    }

    return (
    <Editor
      height="90vh"
      theme='vs-dark'
      language={runtime.name}
      defaultValue=""
      onChange={handleEditorChange}
    />
    );
}
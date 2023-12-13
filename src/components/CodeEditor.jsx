import Editor from '@monaco-editor/react';


export default function CodeEditor() {

    function handleEditorChange(value, event) {
      console.log('here is the current model value:', value);
    }

    return (
        <Editor
      height="90vh"
      defaultLanguage="javascript"
      defaultValue="// some comment"
      onChange={handleEditorChange}
    />
    );
}
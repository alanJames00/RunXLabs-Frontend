import { useState } from 'react'
import CodeEditor from './components/CodeEditor'
import NavBar from './components/NavBar'
import OutputTerminal from './components/OutputTerminal'

function App() {

  return (
    <>
      <NavBar />
      <div className=' flex'>
      <CodeEditor />
      <OutputTerminal />
      </div>
    </>
  )
}

export default App

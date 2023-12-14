import * as React from 'react';
import Button from '@mui/material/Button';
import { useRecoilState } from 'recoil'
import { CodeContent } from '../states/atoms/codeContent';
import { RuntimeState } from '../states/atoms/runtimeState';
import { useState } from 'react';
import { OutputState } from '../states/atoms/outputState';


export default function RunButton() {

    const [codeText] = useRecoilState(CodeContent);
    const [runtime] = useRecoilState(RuntimeState);
    const [output, setOutput] = useRecoilState(OutputState);
    const [isRunning, setRunning] = useState(false);

    async function handleCodeRun() {
        
        // Disable run btn
        setRunning(true);
        
        try {

        const reqBody = {

                language: runtime.val,
                version: "18.15.0",
                files: [
                    {
                        name: `my_cool_code.${runtime.val}`,
                        content: "console.log('myjs')\nconsole.log('helloWorld')"
                    }
                ],
                stdin: "",
                args: ["1", "2", "3"],
                compile_timeout: 10000,
                run_timeout: 3000,
                compile_memory_limit: -1,
                run_memory_limit: -1
            }
            
        const resp = await fetch('https://emkc.org/api/v2/piston/execute', {method: 'POST', 
        headers: {
            'Content-Type':'application/json'
        }, body: JSON.stringify(reqBody) } );
        
        const respJson = await resp.json();
        // handle code results
        if(respJson.run.code == 0) {
            // successful exec
            setOutput(respJson.run.stdout);
        }
        else if(respJson.run.code == 1) {
            // error in code exec
            setOutput(respJson.run.stderr);
        }

        console.log(respJson);

    }

    catch(e) {
        console.log(e);
    }

    }

    return (
        <div className=' mt-3'>
        <Button 
        disabled={isRunning}
        onClick={handleCodeRun}
        variant="contained" size='large'>&gt; Run</Button>
        </div>       
    );
}
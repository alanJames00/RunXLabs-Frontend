"use client"
import { Button } from "@/components/ui/button";
import OutputTerminal from "./Output";
import { codeContent } from "@/app/states/codeContent";
import { useRecoilState } from "recoil";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import { codeLang } from "@/app/states/codeLang";
import { codeResult } from "../states/codeResult";
import { useEffect, useState } from "react";

export default function SideBar() {

    // Recoil States
    const [output, setOutput] = useRecoilState(codeResult);
    const [lang, setLang] = useRecoilState(codeLang);
    const [codeText] = useRecoilState(codeContent);
    console.log(codeText);

    // Component States
    const[isRunning, setRunning] = useState(false);

    const langArray = [ {name:'javascript', val:'js', pName: 'Javascript'}, {name:'python',val:'py', pName: 'Python'}, {name:'c',val:'c', pName: 'C/C++'} , {name:'rust', val:'rs', pName: 'Rust'}, {name:'java' ,val:'java', pName: 'Java'}, {name: "go", val: "go"}]

    // Required for piston-RCE
    const langVers = [{val:'js' ,ver:'18.15.0'}, {val:'py',ver:'3.10.0'}, {val:'c', ver: '10.2.0'}, {val:'rs',ver:'1.68.2'}, {val:'java', ver:'15.0.2'}, {val:"go", ver:"1.16.2"}]

    useEffect(()=>{

        // check if last used lang exists 
        const currentLang: any = localStorage.getItem("currentLang");

        if(currentLang != null) {

            // fetch last used language
            // parse into json
            const currLangJson = JSON.parse(currentLang);
            setLang(currLangJson)
        }

    }, [])

    async function handleCodeRun() {
       
        try {

            // disable run btn
            setRunning(true);

            const reqBody = {
    
                    language: lang.val,
                    version: langVers.find((elem) => elem.val == lang.val)?.ver,
                    files: [
                        {
                            name: `sample_code.${lang.val}`,
                            content: codeText,
                        }
                    ],
                    stdin: "",
                    args: ["1", "2", "3"],
                    compile_timeout: 10000,
                    run_timeout: 3000,
                    compile_memory_limit: -1,
                    run_memory_limit: -1
                }
                console.log(reqBody);
                
                
            const resp = await fetch('https://emkc.org/api/v2/piston/execute', {method: 'POST', 
            headers: {
                'Content-Type':'application/json'
            }, body: JSON.stringify(reqBody) } );
            
            const respJson = await resp.json();
            // handle code results
            console.log(respJson);

            if(respJson.run.code == 0) {
                // successful exec
                setOutput(respJson.run.stdout);
            }
            else if(respJson.run.code != 0 ) {
                // error in code exec
                setOutput(respJson.run.stderr.substring(0,300));
            }
            else if(respJson.run.signal == "SIGKILL") {
                setOutput(`Time Limit Exceeded: SIGKILL \n ${respJson.run.stdout}`)
            }   


        }
        catch(e) {
            console.log(e);
            
        }


        setRunning(false);
    }
    


    return (
        <div className=" ml-6">

            <div className=" mb-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className=" w-60" variant="secondary">{`Change Language: ${lang.name}`}</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Select Language</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={lang.name} onValueChange={(e) => {
                    const a = langArray.find((elem) => elem.name == e );
                    console.log(a);

                    // sync language change to localStorage
                    // convert stringify a
                    const currentLang = JSON.stringify(a);
                    localStorage.setItem("currentLang", currentLang);
                    setLang(a);
                } }>
                    {
                        langArray.map((elem) => (
                            <DropdownMenuRadioItem 
                            key={elem.val}
                            value={elem.name}>{elem.name}</DropdownMenuRadioItem>
                        ))
                    }
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button 
                disabled={isRunning}
                onClick={handleCodeRun}
                className=" ml-4">Run</Button>
            </div>

            <div className=" mb-4">
                <OutputTerminal output={output}/>
            </div>

        </div>
    );
}
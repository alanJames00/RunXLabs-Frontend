"use client"
import { RecoilRoot, useRecoilState } from "recoil";
import CodeEditor from "./Editor";
import SideBar from "./components/SideBar";
import { codeContent } from "./states/codeContent";
import { codeLang } from "./states/codeLang";

export default function Page() {

	// states
	const [codeText, setCodeText] = useRecoilState(codeContent);
	const [lang] = useRecoilState(codeLang);

	return (
		
			<div>
            <div className=" mt-2 ml-2 mb-4 ">
                <h1 className=" text-3xl font-bold">RunXLabs</h1>
                
            </div>
            <div className=" md:flex">
            <CodeEditor value={codeText} lang={lang.name} onChange={(e: any) => {
                // change the localcode state
                setCodeText(e);
            }}/>
            <SideBar />
            </div>
        </div>
		
	);
}
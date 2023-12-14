import { useRecoilState  } from "recoil";
import { OutputState } from "../states/atoms/outputState";
import { ThemeState } from "../states/atoms/ThemeState";
import ReactHtmlParser from 'react-html-parser'

export default function OutputTerminal() {

    const [output] = useRecoilState(OutputState);
    const parsedOutput = output.replace(/\n/g, '<br>');

    return (
    

    <div className=" text-white pl-2 pt-2 border-blue-400 border-4" style={{width:'45%', background:'#2a3f57'}}>
        <p className=" text-green-500">$ output@<span className=" text-yellow-300">runxlabs ~</span></p>
        <div>{ReactHtmlParser(parsedOutput)}</div>
    </div>);
}
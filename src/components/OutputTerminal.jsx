import { useRecoilState  } from "recoil";
import { OutputState } from "../states/atoms/outputState";

export default function OutputTerminal() {

    const [output] = useRecoilState(OutputState);

    return (
    
    <div className=" text-white pl-2 pt-2 border-blue-400 border-4" style={{width:'650px', background:'#2a3f57'}}>
        <p className=" text-green-500">$ output@<span className=" text-yellow-300">runxlabs ~</span></p>
        <p>{output}</p>
    </div>);
}
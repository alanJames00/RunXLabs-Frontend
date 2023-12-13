import RunButton from "./RunButton";
import RuntimeDropdown from "./RuntimeDropdown";


export default function NavBar(){

    return (
        <div className=" h-18 bg-slate-500 flex-row">

            <div className=" flex justify-center gap-6" >
            <RuntimeDropdown />
            
            <RunButton/>
            <button>Run</button>
            </div>
        </div>
    );
}
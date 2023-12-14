import RunButton from "./RunButton";
import RuntimeDropdown from "./RuntimeDropdown";
import ThemeDropdown from "./ThemeDropDown";


export default function NavBar(){

    return (
        <div className=" h-18 bg-slate-300 flex-row pt-1">

            <div className=" flex justify-center gap-6" >
            <RuntimeDropdown />
            <ThemeDropdown />

            <RunButton/>
            </div>
        </div>
    );
}
import RunButton from "./RunButton";
import RuntimeDropdown from "./RuntimeDropdown";
import ThemeDropdown from "./ThemeDropDown";


export default function NavBar(){

    return (
        <div className=" bg-slate-300 flex-row pt-1">
      
            <div className=" flex justify-start gap-8" >
            <h1 className=" text-6xl mt-2 ml-4">&lt;runXlabs/&gt;</h1>
            <RuntimeDropdown />
            <ThemeDropdown />

            <RunButton/>
            </div>
        </div>
    );
}
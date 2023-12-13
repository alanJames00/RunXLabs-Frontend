import RuntimeDropdown from "./RuntimeDropdown";


export default function NavBar(){

    return (
        <div className=" h-16 bg-slate-500">
            <RuntimeDropdown />
            <button>Run</button>
            <button>Run</button>
        </div>
    );
}
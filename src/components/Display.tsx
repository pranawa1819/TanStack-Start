import useIncrement from "./useIncrement";

export default function Display(){
    const {count}= useIncrement();

    return(
        <div className="text-[20px] font-bold">
           {count}
        </div>

    )
}
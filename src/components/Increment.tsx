import useIncrement from "./useIncrement";

export default function Increment()  {
const {count, handleIncrement, handleDecrement}= useIncrement();

  return (

    <div className="flex gap-2">
      <button className='border-2 rounded-2xl px-4 py-1' onClick={handleIncrement}>Decrement</button>
      <p>Count:{count}</p>
      <button className='border-2 rounded-2xl px-4 py-1' onClick={handleDecrement}>Increment</button>
    </div>
  )
}


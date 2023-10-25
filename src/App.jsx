import { useState } from "react";
import "./App.css";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

function App() {
  const [count, setCount] = useState(0);
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const [countThree, setCountThree] = useState(0);

  const increaseCount = () => {
    if (count >= 20) {
      setCount(20);
      return;
    }
    setCount(count + 1);
  };
  const decreaseCount = () => {
    if (count === 0) {
      setCount(0);
    } else setCount(count - 1);
  };
  const deleteCount = () => {
    setCount(0);
  };

  const increaseCountOne = () => {
    if (countOne >= 20) {
      setCountOne(20);
      return;
    }
    setCountOne(countOne + 1);
  };
  const decreaseCountOne = () => {
    if (countOne === 0) {
      setCountOne(0);
    } else setCountOne(countOne - 1);
  };
  const deleteCountOne = () => {
    setCountOne(0);
  };

  const increaseCountTwo = () => {
    if (countTwo >= 20) {
      setCountTwo(20);
      return;
    }
    setCountTwo(countTwo + 1);
  };
  const decreaseCountTwo = () => {
    if (countTwo === 0) {
      setCountTwo(0);
    } else setCountTwo(countTwo - 1);
  };
  const deleteCountTwo = () => {
    setCountTwo(0);
  };

  const increaseCountThree = () => {
    if (countThree >= 20) {
      setCountThree(20);
      return;
    }
    setCountThree(countThree + 1);
  };
  const decreaseCountThree = () => {
    if (countThree === 0) {
      setCountThree(0);
    } else setCountThree(countThree - 1);
  };
  const deleteCountThree = () => {
    setCountThree(0);
  };

  return (
    <div className="items-center justify-center flex h-[80vh]">
      <main className="h-80 w-4/5 bg-cyan-100 border-8 border-cyan-300 rounded-2xl items-center justify-center flex flex-col font-bold">
        <div>
          <h1>COUNT APP</h1>
        </div>
        {/* <span className="font-semibold text-xl">{count}</span> */}
        <div className="flex flex-col gap-2 mt">
          <div className="flex flex-row gap-2">
            <div className=" bg-yellow-400 h-9 w-16 items-center justify-center flex font-medium text-lg">
              <span className="font-semibold text-xl">{count}</span>
            </div>
            <button
              onClick={increaseCount}
              className=" bg-gray-400 h-9 w-9 items-center justify-center flex "
            >
              <AiFillPlusCircle />
            </button>
            <button
              onClick={decreaseCount}
              className=" bg-cyan-300 h-9 w-9 items-center justify-center flex "
            >
              <AiFillMinusCircle />
            </button>
            <button
              onClick={deleteCount}
              className=" bg-red-600 h-9 w-9 items-center justify-center flex "
            >
              <BsFillTrashFill />
            </button>
          </div>
          <div className="flex flex-row gap-2">
            <div className=" bg-yellow-400 h-9 w-16 items-center justify-center flex font-medium text-lg">
              <span className="font-semibold text-xl">{countOne}</span>
            </div>
            <button
              onClick={increaseCountOne}
              className=" bg-gray-400 h-9 w-9 items-center justify-center flex "
            >
              <AiFillPlusCircle />
            </button>
            <button
              onClick={decreaseCountOne}
              className=" bg-cyan-300 h-9 w-9 items-center justify-center flex "
            >
              <AiFillMinusCircle />
            </button>
            <button
              onClick={deleteCountOne}
              className=" bg-red-600 h-9 w-9 items-center justify-center flex "
            >
              <BsFillTrashFill />
            </button>
          </div>
          <div className="flex flex-row gap-2">
            <div className=" bg-yellow-400 h-9 w-16 items-center justify-center flex font-medium text-lg">
              <span className="font-semibold text-xl">{countTwo}</span>
            </div>
            <button
              onClick={increaseCountTwo}
              className=" bg-gray-400 h-9 w-9 items-center justify-center flex "
            >
              <AiFillPlusCircle />
            </button>
            <button
              onClick={decreaseCountTwo}
              className=" bg-cyan-300 h-9 w-9 items-center justify-center flex "
            >
              <AiFillMinusCircle />
            </button>
            <button
              onClick={deleteCountTwo}
              className=" bg-red-600 h-9 w-9 items-center justify-center flex "
            >
              <BsFillTrashFill />
            </button>
          </div>
          <div className="flex flex-row gap-2">
            <div className=" bg-yellow-400 h-9 w-16 items-center justify-center flex font-medium text-lg">
              <span className="font-semibold text-xl">{countThree}</span>
            </div>
            <button
              onClick={increaseCountThree}
              className=" bg-gray-400 h-9 w-9 items-center justify-center flex "
            >
              <AiFillPlusCircle />
            </button>
            <button
              onClick={decreaseCountThree}
              className=" bg-cyan-300 h-9 w-9 items-center justify-center flex "
            >
              <AiFillMinusCircle />
            </button>
            <button
              onClick={deleteCountThree}
              className=" bg-red-600 h-9 w-9 items-center justify-center flex "
            >
              <BsFillTrashFill />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

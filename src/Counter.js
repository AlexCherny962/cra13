import React from 'react';

export default function Counter(props) {

const add = () => props.plus(props.index);
const min = () => props.minus(props.index);
// function min () {props.minus(props.index)}; // как вариант
const rem = () => props.removeCounter(props.index);
const res = () => props.resetCounter(props.index);

    return (
      <div align={"center"}>
     {/*Count {props.count} Index {props.index}  // использовали для контроля */}
        <button onClick={min}>-</button>
     {/*<button onClick={function () {props.minus(props.index)}}>-</button>  // как вариант */}
        {props.count}
     {/*<button onClick={() => props.plus(props.index)}>+</button>  // как вариант */}
        <button onClick={add}>+</button>
        <button onClick={rem}>Remove current counter</button>
        <button onClick={res}>Reset current counter</button>
      </div>
  );
}
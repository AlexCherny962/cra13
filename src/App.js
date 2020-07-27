import React, {useState} from 'react';
import Counter from "./Counter.js"

export default function App() {
    // const [] = useState([{
    //     id: 'Q1',
    //     count:3
    // }])

    const [counters, setCounters] = useState([4, 8, 34]);
    // const addCounter = () => {console.log('Add counter', counters)};
    // const addCounter = () => {setCounters([...counters, 5])
    // };

    const addCounter = () => {
      const randomNumber = Math.round(Math.random() * 10);
      setCounters([...counters, randomNumber]) // делаем ререндеринг массива счетчиков
                             };

    const removeCounter = (index) => {
      let newCounters = [...counters]; // делаем новую копию массива
      newCounters.splice(index, 1); // удаляем элемент массива счетчиков с индексом index
      setCounters(newCounters); // делаем ререндеринг массива счетчиков
                                     };

    const resetCounter = (index) => {
      let newCounters = [...counters]; // делаем новую копию массива
      newCounters[index] = 0;
      setCounters(newCounters); // делаем ререндеринг массива счетчиков
                                    };

    const resetAll = () => {
      setCounters([...counters].map(element => 0)); // делаем ререндеринг массива счетчиков
                           };

    const plusOne = (index) => {
   // console.log('plusone', index, counters)
      let newCounters = [...counters];
   // newCounters[index] += 1; // как вариант
      newCounters[index]=newCounters[index]+1
   // newCounters[index]++; // как вариант
      setCounters(newCounters); // делаем ререндеринг массива счетчиков
   // setCounters(counters[index+1]); // ошибка!
    }
    const minusOne = (index) => {
   // console.log('minusone', index, counters);
      let newCounters = [...counters];
      newCounters[index] -= 1;
      setCounters(newCounters); // делаем ререндеринг массива счетчиков
   // setCounters(counters[index]-1); // ошибка!
    }

    return (
      <div className={"App"} align={"center"}>
    {/*App*/}
    {/*{console.log('Add counter', counters)}*/}
    {/*<Counter count={3} />*/}
    {/*<Counter count={8} />*/}
    {/*<hr/>*/}
       {counters.map((element, index) => (
         <Counter
           count={element} // значение счетчика
           key={index}     // внутренний id React'а
           index={index}   // индекс элемента
           // ссылки на 4 функции, которые реализованы в Counter.js в 4 кнопках
           plus={plusOne}
           minus={minusOne}
           removeCounter={removeCounter}
           resetCounter={resetCounter}
         />
       ))}
       <hr/>
     <button onClick={addCounter}>Create new counter</button>
     <button onClick={resetAll}>Reset all counters</button>
   </div>
 );
}
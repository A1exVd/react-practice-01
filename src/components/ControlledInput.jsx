import { useState } from "react";

// ПОЧЕМУ деструктуризация props -  код становится короче и читабельнее.
export default function ControlledInput({ label, id, name, placeholder }) {
   const [inputValue, setInputValue] = useState("");

   const handleChange = (e) => {
       /* 
        ПОЧЕМУ не видно изменения состояния сразу после того как мы
        использовали setInputValue? Потому что значение state как снапшот для текущего рендера.
        При вызове setState мы запрашивает следующий рендер с новым значением
        но текущая функция продолжает выполняться со значением state из текущего снапшота. 
       */
       setInputValue(e.target.value);
      
       // console.log(inputValue) текущее значение state, то есть при первом нажатии будет выводиться пустая строка

       console.log(e.target.value);
   }
   
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input 
                type="text"
                id={id}
                name={name}
                value={inputValue}
                onChange={handleChange}
                placeholder={placeholder}
            />
        </div>
    )
}
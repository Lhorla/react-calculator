import React from "react";

const Button = [
    {id: "equals", class: "operator", value: "="},
    {id: "clear", class: "operator", value: "C"},
    {id: "backspace", class: "operator", value: "CE"},
    {id: "seven", class: "number", value: "7"},
    {id: "eight", class: "number", value: "8"},
    {id: "nine", class: "number", value: "9"},
    {id: "four", class: "number", value: "4"},
    {id: "five", class: "number", value: "5"},
    {id: "six", class: "number", value: "6"},
    {id: "add", class: "operator", value: "+"},
    {id: "one", class: "number", value: "1"},
    {id: "two", class: "number", value: "2"},
    {id: "three", class: "number", value: "3"},
    {id: "zero", class: "number", value: "0"},
    {id: "decimal", class: "number", value: "."},
    {id: "divide", class: "operator", value: "/"},
    {id: "multiply", class: "operator", value: "*"},
    {id: "subtract", class: "operator", value: "-"},
]

function Buttons({handleClick}) {
    return (
        <div className="buttons">
            {Button.map((btn) => (
                <button
                    key={btn.id}
                    id={btn.id}
                    className="btn"
                    value={btn.value}
                    onClick={handleClick}
                >
                    {btn.value}
                </button>
            ))}
        </div>
    )
}

export default Buttons;

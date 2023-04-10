import React, {useMemo, useRef, useState} from 'react';
import OneBookBiblio from "./OneBookBiblio";
import Burger from "../Burger/Burger";
import Arrow from "../Arrow/Arrow";
import cl from './/User_style.css'
import OneBookCard from "../BookList/OneBookCard";

const User = () => {
    const [saveBooks, setSaveBooks] = useState(JSON.parse(localStorage.getItem(`userBiblio`)));
    const [dataFilter, setDataFilter] = useState(saveBooks);

    const sortDate = async (dataArray) => {
        await setDataFilter(dataArray)
    }
    const correctBibilo = async (array) => {
        await setDataFilter(array)
    }


    return (
        <div>
            <Arrow/>
            <Burger saveBooks={dataFilter} sortDate={sortDate}/>
            {
                saveBooks.length === 0
                    ? <h1
                    className={`parent`}>Нет добавленных книг</h1>
                    : <div style={{display: `grid`, gridTemplateColumns: `repeat(3, minmax(0, 1fr))`, justifyContent: `center`}}>
                        {dataFilter.map((book, index) => {
                            return <OneBookBiblio correctBibilo={correctBibilo} index={index} book={book} key={index}/>
                        })}
                    </div>
            }
        </div>
    );
};

export default User;


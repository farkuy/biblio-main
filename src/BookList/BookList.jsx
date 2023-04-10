import React, {useMemo, useState} from 'react';
import OneBookCard from "./OneBookCard";
import Burger from "../Burger/Burger";

const BookList = ({library}) => {
    const [bibl, setBible] = useState([]);
    const [dataFilter, setDataFilter] = useState(bibl);

    const sortDate = async (dataArray) => {
        await setDataFilter(dataArray)
    }

    useMemo(() => {
        if (typeof library !== `undefined`){
            setBible(library)
            setDataFilter(library)
        }
    }, [library])
    return (
        <div className={`biblio`}>
            <Burger saveBooks={bibl} sortDate={sortDate}/>
            {
                dataFilter.length === 0
                    ? <h1>Ничего не найдено</h1>
                    : <div style={{display: `grid`, gridTemplateColumns: `repeat(3, minmax(0, 1fr))`, justifyContent: `center`}}>
                        {dataFilter.map((book, index) => {
                            return <OneBookCard book={book} key={index}/>
                        })}
                    </div>
            }
        </div>
    );
};

export default BookList;

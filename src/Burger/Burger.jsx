import React, {useState} from 'react';
import cl from './Burget_style.css'
const Burger = ({saveBooks, sortDate}) => {
    const [dataFilter, setDataFilter] = useState(`Добавленные недавно`);
    const [relaseDate, setRelaseDate] = useState(`По дате выхода (старые)`)
    const sortDateBack = async (e) => {
        e.preventDefault();

        if(e.target.value === `Добавленные недавно`) {
            const array = [...saveBooks].sort((a, b) => {
                if (a.date < b.date ) {
                    return 1;
                }
                if (a.date > b.date) {
                    return -1;
                }
                // a должно быть равным b
                return 0;
            })
            setDataFilter(`Сначала старые`)
            await sortDate(array)
        }
        else if(e.target.value === `Сначала старые`) {
            const array = [...saveBooks].sort((a, b) => {
                if (a.date < b.date ) {
                    return -1;
                }
                if (a.date > b.date) {
                    return 1;
                }
                // a должно быть равным b
                return 0;
            })
            setDataFilter(`Добавленные недавно`)
            await sortDate(array)}
    };
    const realseDateFilter = async (e) => {
        e.preventDefault();

        if(e.target.value === `По дате выхода (старые)`) {
            const array = [...saveBooks].sort((a, b) => {
                if (Date.parse(a.volumeInfo.publishedDate) < Date.parse(b.volumeInfo.publishedDate)) {
                    return -1;
                }
                if (Date.parse(a.volumeInfo.publishedDate) > Date.parse(b.volumeInfo.publishedDate)) {
                    return 1;
                }
                // a должно быть равным b
                return 0;
            })
            setRelaseDate(`По дате выхода (новые)`)
            await sortDate(array)
        }
        else if(e.target.value === `По дате выхода (новые)`) {
            const array = [...saveBooks].sort((a, b) => {
                if (Date.parse(a.volumeInfo.publishedDate) < Date.parse(b.volumeInfo.publishedDate) ) {
                    return 1;
                }
                if (Date.parse(a.volumeInfo.publishedDate) > Date.parse(b.volumeInfo.publishedDate)) {
                    return -1;
                }
                // a должно быть равным b
                return 0;
            })
            setRelaseDate(`По дате выхода (старые)`)
            await sortDate(array)
        }
    };



    return (
        <div className="hamburger-menu">
            <input id="menu__toggle" type="checkbox"/>
            <label className="menu__btn" htmlFor="menu__toggle">
                <span></span>
            </label>

            <ul className="menu__box">
                <li><button value={dataFilter} onClick={sortDateBack} className="menu__item" href="#">{dataFilter}</button></li>
                <li><button value={relaseDate} onClick={realseDateFilter}  className="menu__item" href="#">{relaseDate}</button></li>
            </ul>
        </div>
    );
};

export default Burger;
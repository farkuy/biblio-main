import React, {useMemo, useState} from 'react';
import cl from './OneBookCard.css'
import Modal from "../Miscellaneous/Modal";
import MyBtn from "../MyBtn/MyBtn";

const OneBookCard = ({book}) => {
    const [maineInfoBook, setMaineInfoBook] = useState({});
    const [img, setImg] = useState(``);
    const [showModal, setShowModal] = useState(``);


    useMemo(() => {
        if (typeof book.volumeInfo !== `undefined`){
            setMaineInfoBook(book.volumeInfo)
        } else {
            setMaineInfoBook({})
        }

        if(typeof book.volumeInfo.imageLinks !== `undefined`) {
            if(typeof book.volumeInfo.imageLinks.smallThumbnail !== `undefined`){
                setImg(book.volumeInfo.imageLinks.smallThumbnail)
            } else {
                setImg(`https://png.pngtree.com/png-vector/20190307/ourlarge/pngtree-vector-open-book-icon-png-image_781108.jpg`)
            }

        } else {
            setImg(`https://png.pngtree.com/png-vector/20190307/ourlarge/pngtree-vector-open-book-icon-png-image_781108.jpg`)
        }
    }, [book])

    const saveBook = (e) => {
        e.preventDefault();

        e.stopPropagation();
        const oldSaveListBooks = JSON.parse(localStorage.getItem(`userBiblio`));
        const clone = oldSaveListBooks.filter((thisBook, index) => {
            if(thisBook.id === book.id) {
                return true;
            }
        })
        if(clone.length >= 1) {
            alert(`Вы уже добавили эту книгу`);
        } else {
            book.date = new Date()
            oldSaveListBooks.push(book);
            localStorage.setItem(`userBiblio`, JSON.stringify(oldSaveListBooks))
        }
    }

    const visible = (hidden) => {
        setShowModal(hidden)
    }
    return (

        <div
            onClick={() => setShowModal(`md-show`)}
        >
            {
                Object.keys(maineInfoBook).length === 0
                ? <div className={`BookCard`}>da</div>
                    : <div className={`BookCard`}>
                    <div className={`image`}>
                        <img style={{width: `50%`, height: `50%`, margin: 5}} src={img} alt=""/>
                    </div>
                        Название:{maineInfoBook.title}
                        Автор:{
                        typeof maineInfoBook.authors === `undefined`
                            ? <div>Авто не указан</div>
                            : maineInfoBook.authors.map((autor, index) => {
                                return <div key={index + new Date()}>{autor}</div>
                            })}
                    <div style={{display: `flex`, justifyContent: `space-between`}}>
                        Дата выхода: {maineInfoBook.publishedDate}

                    </div>

                    </div>

            }
            <MyBtn
                onClick={saveBook}
                class="btn btn-info"
            >
                Добавить
            </MyBtn>
            <Modal visible={visible} img={img} style={showModal} maineInfoBook={maineInfoBook}/>
        </div>

    );
};

export default OneBookCard;
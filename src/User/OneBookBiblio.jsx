import React, {useMemo, useState} from 'react';
import cl from '../BookList/OneBookCard.css'
import Modal from '../Miscellaneous/Modal';
import MyBtn from "../MyBtn/MyBtn";

const OneBookBiblio = ({book, index, correctBibilo}) => {
    const [maineInfoBook, setMaineInfoBook] = useState({});
    const [img, setImg] = useState(``);
    const [showModal, setShowModal] = useState(``)



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
    }, [book]);
    const delBook = (e) => {
        e.preventDefault();

        e.stopPropagation();
        const unfilteredBooks = JSON.parse(localStorage.getItem(`userBiblio`));
        const Lager = unfilteredBooks.filter((book, position) => {
            if(index !== position) {
                return true
            }
        })
        console.log(Lager)
        localStorage.setItem(`userBiblio`, JSON.stringify(Lager));
        correctBibilo(Lager)
    };
    const visible = (hidden) => {
        setShowModal(hidden);
    }

    return (

        <div
            onClick={() => setShowModal(`md-show`)}
        >
            {
                Object.keys(maineInfoBook).length === 0
                    ? <div className={`BookCard`}>Не найдено</div>
                    : (<div className={`BookCard`}>
                        <div className={`image`}>
                            <img src={img} alt=""/>
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
                    )
            }
            <MyBtn
                onClick={delBook}
                class="btn btn-danger"
            >
                Удолить
            </MyBtn>
            <Modal visible={visible} img={img} style={showModal} maineInfoBook={maineInfoBook}/>
        </div>

    );
};

export default OneBookBiblio;
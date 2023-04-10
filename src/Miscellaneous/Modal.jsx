import React, {useMemo, useState} from 'react';
import cl from './Modal.css'

const Modal = ({visible, style, maineInfoBook, img}) => {
    const [maineInfo, setMaineInfo] = useState(maineInfoBook);

    useMemo(() => {
        if (typeof maineInfoBook.volumeInfo !== `undefined`){
            setMaineInfo(maineInfoBook.volumeInfo)
        } else {
            setMaineInfo({})
        }
    }, [style, maineInfoBook])

    const hiddenModal = (e) => {
        e.preventDefault();
        e.stopPropagation()

        visible(`md-overlay`)
    }

    return (
            <div
                className={`md-modal md-effect-12 ${style}`}
            >
                <input
                    type="button"
                    value={`X`}
                    className={`remove`}
                    onClick={hiddenModal}
                />
                <div className="md-content">
                    <div>
                        <h1>{maineInfoBook.title}</h1>
                        <img src={img} alt=""/>
                        <div>
                            Автор: {
                            typeof maineInfo.authors === `undefined`
                                ? <div>Авто не указан</div>
                                : maineInfo.authors.map((autor, index) => {
                                    return <div key={index + new Date()}>{autor}</div>
                                })}
                            Дата выхода: {maineInfoBook.publishedDate}
                        </div>
                        <div>
                            {
                                typeof maineInfoBook.description === `undefined`
                                ? <div>Описание отсутствует</div>
                                : <div>{maineInfoBook.description}</div>
                            }
                        </div>
                    </div>
                </div>
            </div>

    );
};

export default Modal;
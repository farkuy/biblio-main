import React, {useMemo, useState} from 'react';
import axios from "axios";
import cl from '../Style/App.css'
import Seacrh from "../Search/Seacrh";
import BookList from "../BookList/BookList";
import Arrow from "../Arrow/Arrow";


const BookPage = () => {
    const save = localStorage.getItem(`search`)
    const [search, setSearch] = useState(save || ``);
    const [library, setLibrary] = useState([]);
    const [limitTotal, setLimitTotoal] = useState(100);
    const [pageTotal, setPageTotal] = useState(2)

    async function searchBooks(limit = 10, page = 3) {
        try {
            const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyAvew3sceFAUb3HnuNrZfvU8GvddcyGZPE` + `&maxResults=40`, {
                params: {
                    _limit: limit,
                    _page: page,
                }
            });
            setLibrary(response.data.items)
        } catch (e) {
            setLibrary([])
        }

    }

    useMemo(() => {
        searchBooks();
    }, [search])

    const searchSave = (e) => {
        if(localStorage.getItem(`search`)) {
            localStorage.setItem(`search`, e.target.value)
            setSearch(localStorage.getItem(`search`))
        } else {
            setSearch(e.target.value);
            localStorage.setItem(`search`, e.target.value)
        }
    }

    return (
        <div className="App">
            <Arrow/>
            <Seacrh
                placeholder='Type to search'
                onChange={searchSave}
                value={search}
                type="text"
            />

            <BookList library={library}/>
        </div>
    );
};

export default BookPage;
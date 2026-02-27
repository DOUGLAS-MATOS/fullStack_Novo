import { useState, useEffect } from "react";
import "../styles.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Datatable from "./Datatable";

function ShowBookList() {
    const [books, steBooks] = useState({});
    const apiUrl = import.meta.env.VITE_API_URL;

    useEffect(() =>{
        axios
            //.get("http://localhost:8082/api/books")
            .get(`${apiUrl}/api/books`)
            .then((res) => {
                setBooks(res.data);
            })
            .catch((err) =>{
                console.log("Error from ShowBookList");
            });
    }, []);

    const bookList = 
        books.length === 0
            ? "there is no book record!"
            : <Datatable books = {books} />;


    return (
        <div className="book-list">
            <h2 className = "book-list-header">Book List</h2>

            <Link to="/creat-book" className = "link-creat-book">
                <button type = "button" clasName = "btn-creat-book btn">
                    Add New Book
                </button>
            </Link>

            <div className = "list">{bookList}</div>
        </div>
    );
}

export default ShowBookList;


import axios from '../custom-axios/axios';

const libraryService = {
    fetchBooks: () => {
        return axios.get("/books");
    },
    fetchAuthors: () => {
        return axios.get("/authors");
    },
    fetchCountries: () => {
        return axios.get("/countries");
    },
    fetchCategories: () => {
        return axios.get("/books/categories");
    },
    deleteBook: (id) => {
        return axios.delete(`/books/delete/${id}`);
    },
    addBook: (name, category, author, availableCopies) => {
        return axios.post("/books/add", {
            "name" : name,
            "category" : category,
            "author" : author,
            "availableCopies" : availableCopies
        });
    },
    editBook: (id, name, category, author, availableCopies) => {
        return axios.put(`/books/edit/${id}`, {
            "name" : name,
            "category" : category,
            "author" : author,
            "availableCopies" : availableCopies
        });
    },
    getBook: (id) => {
        return axios.get(`/books/${id}`);
    },
    markBookAsTaken: (id) => {
        return axios.put(`/books/markAsTaken/${id}`);
    },
    addAuthor: (name, surname, country) => {
        return axios.post(`/authors/add`,{
            "name": name,
            "surname" : surname,
            "country" : country
        })
    },
    deleteAuthor: (id) => {
        return axios.delete(`/authors/delete/${id}`);
    },

    addCountry: (name, continent) => {
        return axios.post(`/countries/add`, {
            "name" : name,
            "continent" : continent
        })
    },

    deleteCountry: (id) => {
        return axios.delete(`/countries/delete/${id}`);
    }

}
export default libraryService
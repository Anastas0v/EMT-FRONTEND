import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Navigate, Route} from 'react-router-dom'
import Authors from '../Author/ListAuthor/listAuthors';
import Countries from '../Country/ListCountry/listCountries';
import Books from '../Book/ListBook/listBooks';
import Header from '../Header/header';
import BookAdd from '../Book/AddBook/addBook';
import LibraryService from "../../repository/repository";
import BookEdit from "../Book/EditBook/editBook";
import AuthorAdd from "../Author/AddAuthor/addAuthor";
import CountryAdd from "../Country/AddCountry/addCountry";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      authors: [],
      books: [],
      countries: [],
      selectedBook: {}
    }
  }

  render() {
    return (
        <Router>
          <Header/>
          <main>
            <div className="container">
              <Route path={"/countries/add"} exact render ={() =>
                  <CountryAdd onAddCountry={this.addCountry}/>}/>
              <Route path={"/countries"} exact render = {() =>
                  <Countries countries = {this.state.countries}
                             onDeleteCountry={this.deleteCountry}/>}/>
              <Route path={"/authors/add"} exact render = {() =>
                  <AuthorAdd  countries={this.state.countries}
                              onAddAuthor={this.addAuthor}/>}/>
              <Route path={"/authors"} exact render = {() =>
                  <Authors authors = {this.state.authors}
                           onDeleteAuthor={this.deleteAuthor}/>}/>
              <Route path={"/books/add"} exact render={() =>
                  <BookAdd
                      categories={this.state.categories}
                      authors={this.state.authors}
                      onAddBook={this.addBook}/>}/>
              <Route path={"/books/edit/:id"} exact render = {() =>
                  <BookEdit  categories={this.state.categories}
                             authors={this.state.authors}
                             book={this.state.selectedBook}
                             onEditBook={this.editBook}/>}/>
              <Route path={["/", "/books"]} exact render={() =>
                  <Books books={this.state.books}
                         onDeleteBook={this.deleteBook}
                         onMarkAsTaken={this.markBookAsTaken}
                         onselectBook={this.getBook}/>
              }/>
              <Navigate to={"/"}/>
            </div>
          </main>
        </Router>
    );
  }

  componentDidMount() {
    this.loadCategories();
    this.loadAuthors();
    this.loadCountries();
    this.loadBooks();
  }

  loadAuthors = () => {
    LibraryService.fetchAuthors()
        .then((data) => {
          this.setState({
            authors: data.data
          })
        });
  }

  loadBooks = () => {
    LibraryService.fetchBooks()
        .then((data) => {
          this.setState({
            books: data.data
          })
        });
  }

  loadCountries = () => {
    LibraryService.fetchCountries()
        .then((data) => {
          this.setState({
            countries: data.data
          })
        });
  }
  loadCategories = () => {
    LibraryService.fetchCategories()
        .then((data) => {
          this.setState({
            categories: data.data
          })
        });
  }

  deleteBook = (id) => {
    LibraryService.deleteBook(id)
        .then(() => {
          this.loadBooks();
        });
  }

  addBook = (name, category, author, availableCopies) => {
    LibraryService.addBook(name, category, author, availableCopies)
        .then(() => {
          this.loadBooks();
        });
  }

  getBook = (id) => {
    LibraryService.getBook(id)
        .then((data) => {
          this.setState({
            selectedBook: data.data
          })
        })
  }

  editBook = (id, name, category, author, availableCopies) => {
    LibraryService.editBook(id, name, category, author, availableCopies)
        .then(() => {
          this.loadBooks();
        });
  }
  markBookAsTaken = (id) => {
    LibraryService.markBookAsTaken(id)
        .then(() =>{
          this.loadBooks();
        });
  }
  addAuthor = (name, surname, country) => {
    LibraryService.addAuthor(name,surname,country)
        .then(()=> {
          this.loadAuthors();
        })
  }

  deleteAuthor = (id) => {
    LibraryService.deleteAuthor(id)
        .then(() => {
          this.loadAuthors();
        })
  }

  addCountry = (name, continent) => {
    LibraryService.addCountry(name, continent)
        .then(() => {
          this.loadCountries();
        })
  }

  deleteCountry = (id) => {
    LibraryService.deleteCountry(id)
        .then(()=> {
          this.loadCountries();
        })
  }
}

export default App;
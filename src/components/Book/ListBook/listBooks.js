import React from 'react';
import ReactPaginate from 'react-paginate'
import BookTerm from '../BookTerm/bookTerm';
import {Link} from 'react-router-dom';

class Books extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            size: 5
        }

    }


    render() {

        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;
        const pageCount = Math.ceil(this.props.books.length / this.state.size);
        const books = this.getBooksPage(offset, nextPageOffset);

        return (
            <div className={"container m-md-4"}>
                <div className={"row"}>
                    <div className={"table-responsive"}>
                        <table className={"table table-striped table-bordered text-center"}>
                            <thead>
                            <tr>
                                <th scope={"col"}>Name</th>
                                <th scope={"col"}>Category</th>
                                <th scope={"col"}>Author</th>
                                <th scope={"col"}>Available Copies</th>
                            </tr>

                            </thead>
                            <tbody>
                            {books}
                            </tbody>
                        </table>
                    </div>
                    <div className="col mb-2">
                        <div className="row">
                            <div className="col-sm-12 text-center">
                                <Link className="btn btn-info col-5"
                                      to={"/books/add"}> Add new Book</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <ReactPaginate previousLabel={"<<"}
                               nextLabel={">>"}
                               breakClassName={"break-me"}
                               pageCount={pageCount}
                               marginPagesDisplayed={2}
                               pageRangeDisplayed={5}
                               pageClassName="page-item"
                               previousClassName="page-item"
                               nextClassName="page-item"
                               pageLinkClassName="page-link"
                               previousLinkClassName="page-link"
                               nextLinkClassName="page-link"
                               activeClassName={"active"}
                               onPageChange={this.handlePageClick}
                               containerClassName={"pagination m-4 justify-content-center"}
                               activeClass={"active"}/>

            </div>
        )
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        this.setState({
            page : selected
        })
    }

    getBooksPage = (offset, nextPageOffset) => {
        return this.props.books.map((term) => {
            return(
                <BookTerm term={term} onDeleteBook={this.props.onDeleteBook}
                          onselectBook={this.props.onselectBook}
                          onMarkAsTaken={this.props.onMarkAsTaken}/>
            );
        }).filter((book, index)=> {
            return index>=offset && index<nextPageOffset;
        })
    }

}
export default Books;
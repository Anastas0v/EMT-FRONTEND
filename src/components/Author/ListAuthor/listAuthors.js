import React from 'react';
import ReactPaginate from 'react-paginate'
import AuthorTerm from '../AuthorTerm/authorTerm';
import {Link} from 'react-router-dom';
class Authors extends React.Component {
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
        const pageCount = Math.ceil(this.props.authors.length / this.state.size);
        const authors = this.getAuthorsPage(offset, nextPageOffset);

        return (
            <div className={"container m-md-4"}>
                <div className={"row"}>
                    <div className={"table-responsive"}>
                        <table className={"table table-striped table-bordered text-center"}>
                            <thead>
                            <tr>
                                <th scope={"col"}>Name</th>
                                <th scope={"col"}>Surname</th>
                                <th scope={"col"}>Country</th>
                            </tr>

                            </thead>
                            <tbody>
                            {authors}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col mb-2">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <Link className="btn btn-info col-5"
                                  to={"/authors/add"}> Add new Author</Link>
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

    getAuthorsPage = (offset, nextPageOffset) => {
        return this.props.authors.map((term) => {
            return(
                <AuthorTerm term={term} onDeleteAuthor={this.props.onDeleteAuthor}/>
            );
        }).filter((author, index)=> {
            return index>=offset && index<nextPageOffset;
        })
    }

}
export default Authors;

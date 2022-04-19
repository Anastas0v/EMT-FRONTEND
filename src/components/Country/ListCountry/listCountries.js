import React from 'react';
import ReactPaginate from 'react-paginate'
import CountryTerm from '../CountryTerm/countryTerm';
import {Link} from 'react-router-dom';
class Countries extends React.Component {
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
        const pageCount = Math.ceil(this.props.countries.length / this.state.size);
        const countries = this.getCountryPage(offset, nextPageOffset);

        return (
            <div className={"container m-md-4"}>
                <div className={"row"}>
                    <div className={"table-responsive"}>
                        <table className={"table table-striped table-bordered text-center"}>
                            <thead>
                            <tr>
                                <th scope={"col"}>Name</th>
                                <th scope={"col"}>Continent</th>
                            </tr>

                            </thead>
                            <tbody>
                            {countries}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col mb-2">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <Link className="btn btn-info col-5"
                                  to={"/countries/add"}> Add new Country</Link>
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

    getCountryPage = (offset, nextPageOffset) => {
        return this.props.countries.map((term) => {
            return(
                <CountryTerm term={term} onDeleteCountry={this.props.onDeleteCountry}/>
            );
        }).filter((country, index)=> {
            return index>=offset && index<nextPageOffset;
        })
    }

}
export default Countries;

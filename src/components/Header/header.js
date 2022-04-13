import React from "react";
import {Link} from 'react-router-dom';

const header = (props) => {
    return (
        <header>
            <nav className={"navbar navbar-expand-lg navbar-light navbar-fixed bg-light"}>
                <a className="navbar-brand" href="/books">Library</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"> </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to={"/books"} > Books</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to={"/authors"} > Authors</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to={"/countries"} > Countries</Link>
                        </li>
                    </ul>

                </div>
            </nav>
        </header>

    )
}

export default header;
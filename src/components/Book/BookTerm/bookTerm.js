import React from 'react';
import {Link} from 'react-router-dom';

const bookTerm = (props) => {
    return (
        <tr>
            <td>{props.term.name}</td>
            <td>{props.term.category}</td>
            <td>{props.term.author.name} {props.term.author.surname}</td>
            <td>{props.term.availableCopies}</td>
            <td className="text-center">
                <a title={"Delete"} className="btn btn-danger"
                   onClick={() => props.onDeleteBook(props.term.id)}> Delete
                </a>
                <Link className="btn btn-outline-primary ml-3"
                      onClick={() => props.onselectBook(props.term.id)} to={`/books/edit/${props.term.id}`}>
                    Edit
                </Link>
                <a className={"btn btn-success ml-3"}
                   onClick={() => props.onMarkAsTaken(props.term.id)}>
                    Mark as taken
                </a>
            </td>

        </tr>
    )
}

export default bookTerm;
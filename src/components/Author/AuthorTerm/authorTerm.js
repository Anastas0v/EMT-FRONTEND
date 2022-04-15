import React from 'react';

const authorTerm = (props) => {
    return (
        <tr>
            <td>{props.term.name}</td>
            <td>{props.term.surname}</td>
            <td>{props.term.country.name}</td>
            <td className="text-center">
                <a title={"Delete"} className="btn btn-danger"
                   onClick={() => props.onDeleteAuthor(props.term.id)}> Delete
                </a>
            </td>
        </tr>
    )
}

export default authorTerm;
import React from 'react';

const countryTerm = (props) => {
    return (
        <tr>
            <td>{props.term.name}</td>
            <td>{props.term.continent}</td>
            <td className="text-center">
                <a title={"Delete"} className="btn btn-danger"
                   onClick={() => props.onDeleteCountry(props.term.id)}> Delete
                </a>
            </td>
        </tr>
    )
}

export default countryTerm;
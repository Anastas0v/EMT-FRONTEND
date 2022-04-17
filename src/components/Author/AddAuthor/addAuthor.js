import React from 'react';
import {useNavigate} from 'react-router-dom';

const AuthorAdd = (props) => {

    const history = useNavigate();
    const [formData, updateFormData] = React.useState({
        name: "",
        surname: "",
        country: 1
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name;
        const surname = formData.surname;
        const country = formData.country;


        props.onAddAuthor(name, surname, country);
        history.push("/authors");
    }

    return (
        <div className="row mt-4">
            <div className={"col-md-4"}>
                <form onSubmit={onFormSubmit}>
                    <div className={"form-group"}>
                        <label htmlFor="name">Author Name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               placeholder="Enter author name"
                               onChange={handleChange}
                        />
                    </div>
                    <div className={"form-group"}>
                        <label htmlFor="surname">Author Surname</label>
                        <input type="text"
                               className="form-control"
                               id="surname"
                               name="surname"
                               required
                               placeholder="Enter author surname"
                               onChange={handleChange}
                        />
                    </div>
                    <div className={"form-group"}>
                        <label htmlFor="country">Country</label>
                        <select name="country" className="form-control" onChange={handleChange}>
                            {props.countries.map((term) =>
                                <option value={term.id}>{term.name}</option>
                            )}
                        </select>
                    </div>
                    <div className="text-center">
                        <button id="submit" type="submit" className="btn btn-block btn-info">Submit</button>
                    </div>
                </form>
            </div>
        </div>

    )

}

export default AuthorAdd;
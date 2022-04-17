import React from 'react';
import {useNavigate} from 'react-router-dom';

const BookAdd = (props) => {

    const history = useNavigate();
    const [formData, updateFormData] = React.useState({
        name: "",
        category: 0,
        author: 1,
        availableCopies: 0
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
        const category = formData.category;
        const author = formData.author;
        const availableCopies = formData.availableCopies;

        props.onAddBook(name, category, author, availableCopies);
        history.push("/books");
    }

    return(
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Book name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               placeholder="Enter book name"
                               onChange={handleChange}
                        />
                    </div>
                    <div className={"form-group"}>
                        <label htmlFor="category">Category</label>
                        <select name="category" className="form-control" onChange={handleChange}>
                            {props.categories.map((term) =>
                                <option value={term}>
                                    {term}
                                </option>
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Author</label>
                        <select name="author" className="form-control" onChange={handleChange}>
                            {props.author.map((term) =>
                                <option value={term.id}>{term.name} {term.surname}</option>
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="availableCopies">AvailableCopies</label>
                        <input type="number"
                               className="form-control"
                               id="availableCopies"
                               name="availableCopies"
                               min="1"
                               required
                               placeholder="availableCopies"
                               onChange={handleChange}
                        />
                    </div>
                    <div className={"text-center"}>
                        <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default BookAdd;
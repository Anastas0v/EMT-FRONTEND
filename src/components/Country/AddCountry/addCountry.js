import React from 'react';
import {useHistory} from 'react-router-dom';

const CountryAdd = (props) => {

    const history = useHistory();
    const [formData, updateFormData] = React.useState({
        name: "",
        continent: ""
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
        const continent = formData.continent;


        props.onAddCountry(name, continent);
        history.push("/countries");
    }

    return (
        <div className="row mt-4">
            <div className={"col-md-4"}>
                <form onSubmit={onFormSubmit}>
                    <div className={"form-group"}>
                        <label htmlFor="name">Country Name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               placeholder="Enter country name"
                               onChange={handleChange}
                        />
                    </div>
                    <div className={"form-group"}>
                        <label htmlFor="continent">Continent</label>
                        <input type="text"
                               className="form-control"
                               id="continent"
                               name="continent"
                               required
                               placeholder="Enter continent"
                               onChange={handleChange}
                        />
                    </div>

                    <div className="text-center">
                        <button id="submit" type="submit" className="btn btn-block btn-info">Submit</button>
                    </div>
                </form>
            </div>
        </div>

    )

}

export default CountryAdd;
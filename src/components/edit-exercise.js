import React, { Component } from "react";
import axios from "axios";

export default class EditExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeCompanyName = this.onChangeCompanyName.bind(this);
    this.onChangeCountry = this.onChangeCountry.bind(this);
    this.onChangeCompanyNumber = this.onChangeCompanyNumber.bind(this);
    this.onChangeCompanyWebsite = this.onChangeCompanyWebsite.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      companyName: "",
      country: "",
      companyNumber: 0,
      companyWebsite: "",
      companies: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/exercises/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          companyName: response.data.companyName,
          country: response.data.country,
          companyNumber: response.data.companyNumber,
          companyWebsite: response.data.companyWebsite,
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    axios.get("http://localhost:5000/companies/").then((response) => {
      if (response.data.length > 0) {
        this.setState({
          companies: response.data.map((company) => company.companyName),
        });
      }
    });
  }
  onChangeCompanyName(e) {
    this.setState({
      companyName: e.target.value,
    });
  }

  onChangeCountry(e) {
    this.setState({
      country: e.target.value,
    });
  }

  onChangeCompanyNumber(e) {
    this.setState({
      companyNumber: e.target.value,
    });
  }

  onChangeCompanyWebsite(e) {
    this.setState({
      companyWebsite: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const exercise = {
      companyName: this.state.companyName,
      country: this.state.country,
      companyNumber: this.state.companyNumber,
      companyWebsite: this.state.companyWebsite,
    };

    console.log(exercise);

    axios
      .post(
        "http://localhost:5000/exercises/update/" + this.props.match.params.id,
        exercise
      )
      .then((res) => console.log(res.data));

    window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Edit Exercise Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>CompanyName: </label>
            <select
              ref="companyInput"
              required
              className="form-control"
              value={this.state.companyName}
              onChange={this.onChangeCompanyName}
            >
              {this.state.companies.map(function (company) {
                return (
                  <option key={company} value={company}>
                    {company}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Country: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.country}
              onChange={this.onChangeCountry}
            />
          </div>
          <div className="form-group">
            <label>companyNumber </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.companyNumber}
              onChange={this.onChangeCompanyNumber}
            />
          </div>
          <div className="form-group">
            <label>companyWebsite: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.companyWebsite}
              onChange={this.onChangeCompanyWebsite}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Edit Exercise Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

import React, { Component } from "react";
import axios from "axios";

export default class CreateCompany extends Component {
  constructor(props) {
    super(props);

    this.onChangeCompanyName = this.onChangeCompanyName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      companyName: "",
    };
  }

  onChangeCompanyName(e) {
    this.setState({
      companyName: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const company = {
      companyName: this.state.companyName,
    };

    console.log(company);

    axios
      .post("http://localhost:5000/companies/add", company)
      .then((res) => console.log(res.data));

    this.setState({
      company: "",
    });
  }

  render() {
    return (
      <div>
        <h3>Create New Company</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>CompanyName: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.companyName}
              onChange={this.onChangeCompanyName}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Company"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

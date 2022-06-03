import React, { Component } from 'react'
export default class Create extends Component {
  render() {
    return (
        <div class = "bodyb">
      <form>
        <h3>Create a new entry for disease</h3>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="name"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label>Inheritance</label>
          <input
            type="name"
            name="inheritance"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label>Hospital</label>
          <input
            type="name"
            name="hospital"
            className="form-control"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
      </div>
    )
  }
}
import React, { Component } from "react";
import $ from "jquery";
import TimeField from "react-simple-timefield";

class ReminderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      selectedCategories: [],
      selectedDays: [],
      selectedTimeStamp: "00:00",
      loggedUser: ""
    };

    this.onTimeChange = this.onTimeChange.bind(this);
  }

  getAllCategories() {
    $.ajax({
      url: "/db/getCategories",
      method: "GET"
    }).then(data => {
      this.setState({
        categories: data
      });
    });
  }

  componentDidMount() {
    this.getAllCategories();
  }

  handleSubmit(e) {
    e.preventDefault();
    $.ajax({
      url: "/db/submitReminder",
      method: "POST",
      data: {
        loggedUser: this.props.username,
        selectedCategories: this.state.selectedCategories,
        selectedDays: this.state.selectedDays,
        selectedTimeStamp: this.state.selectedTimeStamp
      }
    })
      .then(msg => {
        alert(msg);
      })
      .fail(err => {
        alert("Could not set a reminder due to an unexpected error! Please try again later!");
      });
  }

  handleChangeDay = event => {
    let opts = [],
      opt;

    for (let i = 0, len = event.target.options.length; i < len; i++) {
      opt = event.target.options[i];

      if (opt.selected) {
        opts.push(opt.value);
      }
    }
    // console.log('opts: ', opts);
    this.setState({ selectedDays: opts });
  };

  handleChangeCategories = event => {
    let opts = [],
      opt;

    for (let i = 0, len = event.target.options.length; i < len; i++) {
      opt = event.target.options[i];

      if (opt.selected) {
        opts.push(opt.value);
      }
    }
    // console.log('opts: ', opts);
    this.setState({ selectedCategories: opts });
  };

  onTimeChange(time) {
    this.setState({ selectedTimeStamp: time });
  }

  render() {
    return (
      <React.Fragment>
        <h2>Set Quote Reminder</h2>
        <div className="wrapper" ref={this.props.containerRef}>
          <div className="form-wrapper">
            <div className="header" />
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div class="form-group">
                <label for="sel1">Select Category:</label>
                <select
                  multiple={true}
                  class="form-control"
                  id="sel1"
                  value={this.state.selectedCategories}
                  onChange={this.handleChangeCategories}
                >
                  {this.state.categories.map((value, index) => {
                    return (
                      <option value={value.categoryID}>
                        {value.categoryName}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div class="form-group">
                <label for="sel1">Select Days:</label>
                <select
                  multiple={true}
                  class="form-control"
                  value={this.state.selectedDays}
                  onChange={this.handleChangeDay}
                >
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                </select>
              </div>
              <div class="form-group">
                <label for="sel1">Select Time:</label>
                <TimeField
                  value={this.state.selectedTimeStamp}
                  onChange={this.onTimeChange}
                />
              </div>
              <button className="btn btn-primary" type="submit">
                Set Reminder
              </button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ReminderForm;

import React, { Component } from "react";
import $ from "jquery";

class ReminderForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
          categories: [],
          selectedCategories: [],
          selectedDays: [],
          selectedTimeStamp: "",
          loggedUser: "a2"
        };
      }

      getAllCategories() {
        $.ajax({
          url: "/db/getCategories",
          method: "GET"
        }).then(data => {
          this.setState({
            categories: data
          });
          console.log(this.state.categories);
        });
      }

      componentDidMount() {
        this.getAllCategories();
      }

      handleSubmit(e){
          e.preventDefault();
          $.ajax({
              url: "/db/submitReminder",
              method: "POST",
              data: {
                loggedUser: this.state.loggedUser,
                selectedCategories: this.state.selectedCategories,
                selectedDays: this.state.selectedDays,
                selectedTimeStamp: this.state.selectedTimeStamp
              }
          })
          .then(msg => {
              alert(msg);
          })
          .fail(err =>{
              alert(err.responseText);
          })
      }

    render() {
        return (
            <React.Fragment>
                <h2>Set Quote Reminder</h2>
                <div className="wrapper" ref={this.props.containerRef}>
                    <div className="form-wrapper">
                        <div className="header">
                        </div>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                        <div class="form-group">
                            <label for="sel1">Select Category:</label>
                                <select multiple class="form-control" id="sel1">
                                    {this.state.categories.map((value, index) => {
                                        return (
                                            <option>
                                                {value.categoryName}
                                            </option>
                                        );
                                    })}
                            </select>
                            </div>
                            <div class="form-group">
                            <label for="sel1">Select Days:</label>
                            <select multiple class="form-control" id="sel1">
                                <option>Monday</option>
                                <option>Tuesday</option>
                                <option>Wednesday</option>
                                <option>Thursday</option>
                                <option>Friday</option>
                                <option>Saturday</option>
                                <option>Sunday</option>
                            </select>
                            </div>
                            <div className="form-group">
                                <div className="email">
                                    <label htmlFor="email">Time</label>
                                    <input type="time" id="appt" name="appt" value={this.state.selectedTime} required/>
                                </div>
                            </div>
                            <button className="btn btn-primary" type="submit">
                                Set Reminder
                                </button>
                        </form>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default ReminderForm;
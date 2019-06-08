import React, { Component } from "react";
import $ from "jquery";

class ReminderForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
          categories: [],
        };
      }

      getCategories() {
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
        this.getCategories();
      }

    render() {
        return (
            <React.Fragment>
                <h2>Set Quote Reminder</h2>
                <div className="wrapper" ref={this.props.containerRef}>
                    <div className="form-wrapper">
                        <div className="header">
                        </div>
                        <form>
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
                                    <input type="time" id="appt" name="appt" required/>
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
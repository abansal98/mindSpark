import React, { Component } from "react";

class ReminderForm extends Component {
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
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
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
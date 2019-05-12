import React from 'react';

export default class Input extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '',
            result: ''
        }
    }

    handleChange = e => {
        this.setState({ value: e.target.value });
    }

    handleSubmit = e => {
        if (e.charCode == 13 || e.target.id === "btn-submit") {
            this.setState({ result: this.state.value });
        }
    }

    render() {
        return (
            <div className="input">
                <h2>{this.state.result}</h2>
                <label htmlFor="input">Texte</label>
                <input type="text" name="input" value={this.state.value} onChange={this.handleChange} onKeyPress={this.handleSubmit}/>
                <div className="center-align">
                    <button className="btn waves-effect waves-light blue lighten-1" id="btn-submit" onClick={this.handleSubmit}>
                        OK
                    </button>
                </div>
            </div>
        )
    }
}
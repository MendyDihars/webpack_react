import React from 'react';
import Input from './input.jsx';

export default class Live extends React.Component {
    constructor() {
        super();
        this.state = {
            direct: false
        }
    }

    changeFormat = () => {
        this.setState({ direct: !this.state.direct });
    }

    render() {
        return (
            <div className="flex">
                <div className="center-align">
                    <div>Direct ?</div>
                    <div className="btn waves-effect waves-light blue ligthen-1" onClick={this.changeFormat}>{(this.state.direct) ? 'On' : 'Off'}</div>
                </div>
                <Input direct={this.state.direct} />
            </div>
        )
    }
}
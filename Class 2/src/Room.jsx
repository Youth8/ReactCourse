import React, { Component } from 'react';

class RoomDetail extends Component {
    render() {
        const {name} = this.props;
        return (
            <div>
                {name}
            </div>
        );
    }
}

export default RoomDetail;
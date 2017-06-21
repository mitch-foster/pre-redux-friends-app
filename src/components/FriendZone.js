import React, { Component } from 'react';

export default class FriendZone extends Component {

    // Render method
    render() {
        return (
            <div>
                <h1>FriendZone Component</h1>
                <ol>
                    {
                        this.props.listOfFriends.map( (friend, i) => {
                            return <li key={i}>{friend}</li>
                        })
                    }
                </ol>
            </div>
        )
    }
}

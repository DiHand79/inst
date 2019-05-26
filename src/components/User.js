import React, {Component} from 'react';


export default class User extends Component {
    render() {
        return(
            <div>
                <a href='#' className={ this.props.min ? 'user min' : 'user' }>
                    <img alt={this.props.alt} src={this.props.src}></img>
                    <div>{this.props.name}</div>
                </a>

            </div>
        )
    }
}
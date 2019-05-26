import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
    render() {
        return(
            <div className='post'>
                <User
                    src='https://cdn.thedailymash.co.uk/wp-content/uploads/20190324205229/40-something-man-2-1.jpg'
                    alt='user photo'
                    name='mr Jonson'
                />
                <img alt={this.props.alt} src={this.props.src}></img>
                <div className='post__name'>
                    some account
                </div>
                <div className='post__descr'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae asperiores repudiandae reiciendis delectus dolores nobis fugit fuga, ut, accusantium ipsa adipisci quae iste voluptate quas magni. Incidunt numquam reiciendis nesciunt.
                </div>
            </div>
        )
    }
}
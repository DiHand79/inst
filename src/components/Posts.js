import React, {Component} from 'react';
import Post from './Post';

export default class Posts extends Component {
    render() {
        return(
            <div className="left">
                <Post
                    alt='sea'
                    src='https://www.un.org/sites/www.un.org/files/styles/large/public/2016/02/11/ocean.jpg'
                />
                <Post
                    alt='sea'
                    src='https://www.karismaadriatic.com/images/common/sea-and-nature.jpg'
                />
                <Post
                    alt='sea'
                    src='https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704__340.jpg'
                />
                <Post
                    alt='sea'
                    src='https://media.wired.com/photos/5bda3609cfdc6c440eed5ac2/master/pass/whale-932605342.jpg'
                />
                <Post
                    alt='sea'
                    src='https://media.treehugger.com/assets/images/2015/06/sea_lions_galapagos.jpg.860x0_q70_crop-scale.jpg'
                />
                <Post
                    alt='sea'
                    src='http://www.googlesightseeing.com/wp-content/uploads/2012/02/boat.jpg'
                />
            </div>
        )
    }
}

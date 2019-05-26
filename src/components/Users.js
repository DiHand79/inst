import React from 'react';
import User from './User';

export default function Users() {
    return(
        <div slassName='right'>
            <User
                src='https://cdn.thedailymash.co.uk/wp-content/uploads/20190324205229/40-something-man-2-1.jpg'
                alt='user photo'
                name='mr Jonson'
            />

            <div className='users__block'>
                <User
                    src='https://image.shutterstock.com/image-photo/close-portrait-smiling-handsome-man-260nw-1011569245.jpg'
                    alt='user photo'
                    name='mr Duglas'
                    min
                />
                <User
                    src='https://peopledotcom.files.wordpress.com/2018/11/prince-harry.jpg?crop=0px%2C0px%2C1200px%2C630px&resize=1200%2C630'
                    alt='user photo'
                    name='mr Prince'
                    min
                />
                <User
                    src='https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                    alt='user photo'
                    name='mr Smith'
                    min
                />
                <User
                    src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                    alt='user photo'
                    name='mr Frodo'
                    min
                />
            </div>
        </div>
    )
}
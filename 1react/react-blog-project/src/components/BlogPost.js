import React, { Component } from 'react'
import PostCompiler from './PostCompiler';

export default class BlogPost extends Component {
    constructor() {
        super();
        this.state = {
            blogpost: [
                {
                    _id: '1',
                    title: 'Will POW be forever?',
                    sub_title: "The End Story" ,
                    author: 'Grant Wilhelm',
                    date: 'January 12, 2018'
                },
                {
                    _id: '2',
                    title: 'This Years Gear In Review',
                    sub_title: "The inside scoop on this years gear!" ,
                    author: 'Grant Wilhelm',
                    date: 'January 1, 2019'
                },
                {
                    _id: '3',
                    title: 'Best POW So Far',
                    sub_title: "A look at his years season!" ,
                    author: 'Grant Wilhelm',
                    date: 'December 23, 2018'
                }
            ]
        }
    }
    render() {
        const {blogpost} = this.state
        return (
            <PostCompiler blogpost = {blogpost} />
        )
    }
}

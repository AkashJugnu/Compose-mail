import React, { Component } from 'react';
import './app.css';

export default class App extends Component {
  render() {
    return (
     	<div className='container'>
          <div className='header'>
            <h2>Contact Us</h2>
          </div>
          <form action="/send" method="post">
            <label>Address</label>
            <input name="address" placeholder="address" required type="text" />
            <label>Subject</label>
            <input name="subject" placeholder="subject" required type="text" />
            <label>Body</label>
            <textarea name="body" rows={6} cols={15} placeholder="body" required defaultValue={""} />
            <input defaultValue="send message" id="submit" type="submit" />
          </form>
        </div>
    );
  }
}


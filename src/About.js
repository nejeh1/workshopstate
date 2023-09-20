import React, { Component } from 'react';
import image1 from './nature-3082832_1280.jpg';

export default class About1 extends Component {
  state = {
    person: {
      name: "nejeh",
      age: "24",
      profession: "web-developer",
      image: image1
    },
    show: true
  };

  changeShow = () => {
    if (this.state.show === false) {
      this.setState({ show: true });
    } else {
      this.setState({ show: false });
    }
  };

  render() {
    const { name, age, profession, image } = this.state.person;

    return (
      <div style={{display:"inline-block"}}>
        {this.state.show ? (
          <>
          
            <h2>Hello, it's {name}. I'm {age} years old.<br></br> My profession is {profession}</h2>
            
            <img src={image} style={{ width: '400px', height: '400px' }} alt="Nature" />
          </>
        ) : null}
        <button onClick={this.changeShow}>Show</button>
      </div>
    );
  }
}

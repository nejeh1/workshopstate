import React, { Component } from 'react'
import image1 from './nature-3082832_1280.jpg'
export default class about1 extends Component {
    state={person:{
        name:"nejeh",
        age:"22",
        profession:"web-developper",
        image:image1}
        ,show:"false",
        }
        changeShow=()=> {
            if (this.state.show==="false") {
                this.setState({show:"true"})}
                  else{ this.setstate({show:"false"})
                }
        }
  render() {
    return (
      <div>
        {this.state.show?<>hello its {this.state.name} i'm {this.state.age} my profession is {this.state.profession}
        <img src={image1}style={{width:'400px',height:'400px'}}></img>
          </>: null}
        <button onClick={this.changeShow} >show</button>
      </div>
    )
  }
}

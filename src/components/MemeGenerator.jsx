import React, { Component } from 'react';
import Form from './Form';
import Image from './Image';
import axios from 'axios';

export default class MemeGenerator extends Component {
   constructor(){
    super();
    this.state = {
        firstText: "",
        secondText: "",
        randomImg: "https://i.imgflip.com/1ur9b0.jpg",
        memeImgs: []
    }
  }

  async componentDidMount() {
     try {
         const response = await axios.get('https://api.imgflip.com/get_memes');
         const { data } = response.data;
         this.setState({ memeImgs: data.memes });
     } catch({ message }) {
         console.error(message);
     }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
        randomImg: this.generateRandomImage(),
        firstText: "",
        secondText: ""
    }) 
  };

  handleChange = e => {
      const { name, value, type, checked } = e.target;
      type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  };

  generateRandomImage = () => {
      const index = Math.floor(Math.random() * this.state.memeImgs.length);
      const { url } = this.state.memeImgs[index];
      return url;
  }

  render() {
     return (
      <div className="wrapper">
         <Form {...this.state}
             handleChange={this.handleChange} 
             handleSubmit={this.handleSubmit}
         />
         <Image {...this.state} />
     </div>
     )
  }
}

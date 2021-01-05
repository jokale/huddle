import './App.css';
import React from 'react';
import logo from './logo.svg';
import bgdesktop from './bgdesktop.svg';
import mockup from './mockup.svg';
import facebook from './facebook.svg'
import twitter from './twitter.svg'
import instagram from './instagram.svg'

class App extends React.Component {
  render(){
      return (
    <div id="App">
      <h1>Build The Community <br></br> Your Fans Will Love</h1>
      <p>Huddle re-imagines the way we build communities. You have <br></br> a voice, but so does your audience. Create connections with <br></br> your users as you engage in geninune discussion</p>
      <img src={logo} id="logo" alt="logo" />
      <img src={bgdesktop} id="bgdesktop" alt="logo" />
      <img src={mockup} id="mockup" alt="logo" />
      <img src={facebook} id="facebook" alt="logo" />
      <img src={instagram} id="instagram" alt="logo" />
      <img src={twitter} id="twitter" alt="logo" />

    </div>
    )
  }

}

export default App;

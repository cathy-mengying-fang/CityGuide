import React, { Component } from 'react';
import './App.css';
import Map from './Map.js';
import DetailLocations from './DetailLocation.js';
import sh_logo from './images/logo.png';
import navIcon from './images/navIcon.png';


import pearl_tower from './images/pearl_tower.png';
import yu_garden from './images/yu_garden.png';
import shikumen_img from './images/shikumen.png';
import psa_img from './images/psa.png';
import maglev_img from './images/maglev.png';

import pearl_tower_idle from './images/pearl_tower_idle.png';
import yu_garden_idle from './images/yu_garden_idle.png';
import shikumen_idle from './images/shikumen_idle.png';
import psa_idle from './images/psa_idle.png';
import maglev_idle from './images/maglev_idle.png';

import lorem_info from './images/lorem_info.png';

class App extends Component {
  constructor(props){
    super(props);
    var maglev = {active_image:maglev_img, idle_image:maglev_idle,altText:"maglev",description:lorem_info,}
    var pearlTower = {active_image:pearl_tower, idle_image:pearl_tower_idle,altText:"pearl_tower",description:lorem_info,}
    var yuGarden = {active_image:yu_garden, idle_image:yu_garden_idle,altText:"yu_garden",description:lorem_info,}
    var shikumen = {active_image:shikumen_img, idle_image:shikumen_idle,altText:"shikumen",description:lorem_info,}
    var psa = {active_image:psa_img, idle_image:psa_idle,altText:"psa",description:lorem_info,}


    this.state = {
      cityList:[maglev,pearlTower,yuGarden,shikumen,psa],
      detail: null,
    };
  }  



  selectItem(id) {
    console.log("selected ",id)
    var item = this.state.cityList[id]
    var detailView = <DetailLocations onClose = {(ev) => this.setState({detail: null})} image = {item.active_image} altText = {item.altText} description = {item.description} />
    this.setState({detail: detailView})
  }


  renderDetailView() {
    if(this.state.detail !== null)
    {
      return this.state.detail
    }
  }




  renderCityList(){
    if (this.state.detail === null)
    {
      var elements = []
      for(var i=0; i < this.state.cityList.length; i++)
      {
        var item = this.state.cityList[i]

        elements.push(<Map onClick = {this.selectItem.bind(this,i)} active_image = {item.active_image} idle_image = {item.idle_image} altText = {item.altText} />)
      }
      return(
        <div className="cityList">
          {elements}
        </div>
        )
    }
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img onClick={(ev) => this.setState({detail:null})} src={sh_logo} className="Logo" alt="shanghai"/>
          <div className="NavMenu"><img src={navIcon} className="navIcon" alt="navIcon"/>
          {//implement state
          }
          </div>
        </header>
        
        <div className="App-content">
          {this.renderCityList()}
          {this.renderDetailView()}
        </div>

      </div>
    );
  }
}

export default App;

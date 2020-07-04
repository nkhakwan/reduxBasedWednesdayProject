import React, { Component } from 'react'
import NewKeg from './NewKeg'
import KegList from './KegList'
import Details from './Details'

export default class KegControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: [],
      detail: false,
      detailItem: []
    };
    this.handleClick = this.handleClick.bind(this); 
  }
  


  handleClick = () => {
    this.setState(lastState => ({
      formVisibleOnPage: !lastState.formVisibleOnPage
    }));
  }


  onNewKegCreation = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      formVisibleOnPage: false
    });
  }

  
  buy = (id) => {
    this.setState(state => {
      const masterKegList = state.masterKegList.map(element => {
        if (element.id === id && element.quantity > 0) {
          return { ...element, quantity: element.quantity - 1 }
        } else {
          return element
        }
      });
      return { masterKegList }
    })
  }

  detail = (id) => {
    const newItem = this.state.masterKegList.filter(keg => keg.id === id)
    this.setState({ detail : true, detailItem : newItem });
  }

  back = () =>{
    this.setState({ detail : false });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.detail){
      console.log(`detailItem value is here ${this.state.detailItem}`);
      currentlyVisibleState = <Details detailItem={this.state.detailItem[0]} back={this.back } />;
      buttonText = "Not to be clicked"
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKeg onNewKegCreation={this.onNewKegCreation} />
      buttonText = "cancel"; 
    } else if (!this.state.formVisibleOnPage) {
      currentlyVisibleState = <KegList kegList={this.state.masterKegList} buy={this.buy} detail={this.detail} />;
      buttonText = "Add Kegs";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button  onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}



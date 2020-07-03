import React, { Component } from 'react'
import NewKeg from './NewKeg'
import KegList from './KegList'

export default class KegControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: [],
      detail: false,
      detailId: null
    };
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



  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKeg onNewKegCreation={this.onNewKegCreation} />
      buttonText = "cancel"; 
    } else if (!this.state.formVisibleOnPage) {
      currentlyVisibleState = <KegList kegList={this.state.masterKegList} buy={this.buy} stock={this.stock} />;
      buttonText = "Add Keg";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button  onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}



import React, { Component } from 'react'
import NewKeg from './NewKeg'
import KegList from './KegList'
import Details from './Details'
import * as a from './../actions';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
//import { findAllByTestId } from '@testing-library/react';


export default class KegControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      //masterKegList: [],
      detail: false,
     // detailItem: []
    };
    this.handleClick = this.handleClick.bind(this); 
  }
  
  
  

  handleClick = () => {
    this.setState(lastState => ({
      formVisibleOnPage: !lastState.formVisibleOnPage
    }));
  }

  /*handleClick = () => {
  const { dispatch } = this.props;
  const action = a.actionFormTgl();
  dispatch(action);*/

  /*onNewKegCreation = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      formVisibleOnPage: false
    });
  }*/

  

  onNewKegCreation = (newKeg) => {
    const {dispatch} =this.props;
    const action1 = a.actionAdd(newKeg);
    dispatch(action1);
    //const action2 = a.actionFormFalse();
    //dispatch(action2);
    this.setState({
      formVisibleOnPage: false
    });
  }
  
  
  buy = (id) => {
    const {dispatch} =this.props;
    const action = a.actionDecQty(id);
    dispatch(action);
  }

  /*buy = (id) => {
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
  }*/

  detail = (id) => {
    const {dispatch} =this.props;
    console.log(this.props.masterKegList);
    const action = a.actionDetail(this.props.masterKegList, id);
    dispatch(action);
    this.setState({ detail : true });
  }

  /*detail = (id) => {
    const newItem = this.state.masterKegList.filter(keg => keg.id === id)
    this.setState({ detail : true, detailItem : newItem });
  }*/

  back = () =>{
    this.setState({ detail : false });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.detail){
      currentlyVisibleState = <Details detailItem={this.props.detailItem} back={this.back } />;
      buttonText = "Not to be clicked"
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKeg onNewKegCreation={this.onNewKegCreation} />
      buttonText = "cancel"; 
    } else if (!this.state.formVisibleOnPage) {
      currentlyVisibleState = <KegList kegList={this.props.masterKegList} buy={this.buy} detail={this.detail} />;
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


  

KegControl.propTypes = {
  masterKegList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    masterKegList: state.macroKegList,
    //formVisibleOnPage: state.formVisibleOnPage,
    detailItem : state.detailItem
  }
}

KegControl = connect(mapStateToProps)(KegControl);

//export default KegControl;






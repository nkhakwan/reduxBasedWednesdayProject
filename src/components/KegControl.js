import React, { Component } from 'react'
import NewKeg from './NewKeg'
import KegList from './KegList'
import Details from './Details'
import * as a from './../actions';

export default class KegControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //formVisibleOnPage: false,
      //masterKegList: [],
      detail: false,
     // detailItem: []
    };
    this.handleClick = this.handleClick.bind(this); 
  }
  
  
  

  /*handleClick = () => {
    this.setState(lastState => ({
      formVisibleOnPage: !lastState.formVisibleOnPage
    }));
  }*/

  handleClick = () => {
  const { dispatch } = this.props;
  dispatch(a.actionFormTgl);
}
  /*onNewKegCreation = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      formVisibleOnPage: false
    });
  }*/

  

  onNewKegCreation = (newKeg) => {
    const {dispatch} =this.props;
    const { id, name, brand, img, price, content, quantity } = newKeg;
    const actionAdd = {
      type: 'ADD_KEG',
      id : id,
      name : name,
      brand : brand,
      img : img,
      price : price,
      content: content,
      quantity: quantity
    }
    dispatch(a.actionAdd);

    const actionFormFalse = {
      type: 'FORM_FALSE'
    }
    dispatch(actionFormFalse);
  }
  





  
  buy = (id) => {

    const {dispatch} =this.props;
    const { id } = id;
    const actionDecQty = {
      type: 'DEC_QTY',
      id : id
    }
    dispatch(a.actionDecQty);
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
    const { id } = id;
    const actionDetail = {
      type: 'DETAIL',
      id : id
    }
    dispatch(a.actionDetail);
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

  

KegControl.propTypes = {
  masterKegList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisibleOnPage: state.formVisibleOnPage,
    detailItem : state.detailItem
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;






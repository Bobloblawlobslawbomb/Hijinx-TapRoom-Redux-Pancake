import React from "react";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import KegDetail from "./KegDetail";
import EditKegForm from "./EditKegForm";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as a from './../actions';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedKeg: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg !=null) {
      this.setState({
        selectedKeg: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
    dispatch(action);
  }
}

  handleEditClick = () => {
    this.setState({editing: true});
  }
  
  handleBuyPintClick = () => {
    const selectedKeg = this.state.selectedKeg;
    const buyPint = Object.assign({}, selectedKeg, {numOfPints: selectedKeg.numOfPints - 1});
    const editedMasterKegList = this.state.masterKegList
      .filter(keg => keg.id !== this.state.selectedKeg.id)
      .concat(buyPint);
    this.setState({
      masterKegList: editedMasterKegList,
      selectedKeg: buyPint
    });
  }

  handleRefillKegClick = () => {
    const selectedKeg = this.state.selectedKeg;
    const kegRefill =Object.assign({}, selectedKeg, {numOfPints: selectedKeg.numOfPints + 124});
    const editedMasterKegList = this.state.masterKegList
      .filter(keg => keg.id !== this.state.selectedKeg.id)
      .concat(kegRefill);
    this.setState({
      masterKegList: editedMasterKegList,
      selectedKeg: kegRefill
    });
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  // handleAddingNewKegToList = (newKeg) => {
  //   const newMasterKegList = this.state.masterKegList.concat(newKeg);
  //   this.setState({
  //     masterKegList: newMasterKegList,
  //     formVisibleOnPage: false,
  //   });
  // };

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.masterKegList[id];
    this.setState({selectedKeg: selectedKeg});
  }


  // handleChangingSelectedKeg = (id) => {
  //   const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
  //   this.setState({selectedKeg: selectedKeg});
  // }

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteKeg(id);
    dispatch(action);
    this.setState({selectedKeg: null});
  }


  // handleDeletingKeg = (id) => {
  //   const newMasterKegList = this.state.masterKegList.filter(keg => keg.id !== id);
  //   this.setState({
  //     masterKegList: newMasterKegList,
  //     selectedKeg: null,
  //   });
  // }

  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const action = a.addKeg(kegToEdit);
    dispatch(action);
    this.setState({
      editing: false,
      selectedKeg: null
    });
  }


  // handleEditingKegInList = (kegToEdit) => {
  //   const editedMasterKegList = this.state.masterKegList
  //     .filter (keg => keg.id !== this.state.selectedKeg.id)
  //     .concat (kegToEdit);
  //   this.setState({
  //     masterKegList: editedMasterKegList,
  //     editing: false,
  //     selectedKeg: null
  //   });
  // }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    
    if (this.state.editing) {
      currentlyVisibleState = <EditKegForm keg={this.state.selectedKeg} onEditKeg={this.handleEditingKegInList}/>
      buttonText = "Return to Keg List";
    } else if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg={this.state.selectedKeg} onClickingDelete={this.handleDeletingKeg} onClickingEdit={this.handleEditClick} onClickingBuyPint={this.handleBuyPintClick} onClickingRefill={this.handleRefillKegClick}/>
      buttonText = "Return to Keg List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "Go back to Keg List";
    } else {
      currentlyVisibleState = <KegList kegList={this.props.masterKegList} onKegSelection={this.handleChangingSelectedKeg}/>
      buttonText = "Add a new Keg";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
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
    formVisibleOnPage: state.formVisibleOnPage
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;
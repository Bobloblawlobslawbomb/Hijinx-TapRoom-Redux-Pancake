import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewKegForm(props) {
  function handleNewKegFormSubmission(e) {
    e.preventDefault();
    props.onNewKegCreation({
      name: e.target.name.value,
      brand: e.target.brand.value,
      price:e.target.price.value,
      alcoholContent:e.target.alcoholContent.value,
      description: e.target.description.value,
      id: v4()
    });
  };

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewKegFormSubmission}
        button="Add new Keg" />
    </React.Fragment>
  );
};

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
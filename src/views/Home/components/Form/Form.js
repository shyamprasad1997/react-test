import React from "react";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { currencyTypes } from "../../../../constants/constants.js";
import { connect } from "react-redux";

import {
  getFieldBValue,
  setFieldBValue,
  getFieldAValue,
  setFieldAValue
} from "../../../../actions/rootActions.js";

const Form = props => {
  const { getFieldBValue, getFieldAValue } = props;

  const handleFieldBTypeChange = value => {
    getFieldAValue({
      fieldAType: props.fieldAType,
      fieldBType: value,
      value: parseInt(props.fieldBValue)
    });
  };

  const handleFieldAValueChange = value => {
    getFieldBValue({
      fieldAType: props.fieldAType,
      fieldBType: props.fieldBType,
      value: value
    });
  };

  const handleFieldBValueChange = value => {
    getFieldAValue({
      fieldAType: props.fieldAType,
      fieldBType: props.fieldBType,
      value: value
    });
  };

  return (
    <form>
      <Field name="fieldAType" component="select">
        <option value={"EUR"}>EUR</option>
      </Field>
      <Field
        name="fieldAValue"
        component="input"
        type="number"
        onChange={e => handleFieldAValueChange(e.currentTarget.value)}
      />
      <br />

      <br />
      <Field
        name="fieldBType"
        component="select"
        onChange={e => handleFieldBTypeChange(e.currentTarget.value)}
      >
        {currencyTypes.map(type => (
          <option value={type}>{type}</option>
        ))}
      </Field>
      <Field
        name="fieldBValue"
        component="input"
        type="number"
        onChange={e => handleFieldBValueChange(e.currentTarget.value)}
      />
    </form>
  );
};

const ReduxedForm = reduxForm({
  form: "convertor"
})(Form);

const mapDispatchToProps = dispatch => {
  return {
    getFieldBValue: e => dispatch(getFieldBValue(e)),
    setFieldBValue: e => dispatch(setFieldBValue(e)),
    getFieldAValue: e => dispatch(getFieldAValue(e)),
    setFieldAValue: e => dispatch(setFieldAValue(e))
  };
};
const selector = formValueSelector("convertor");

const mapStateToProps = state => {
  return {
    initialValues: {
      fieldAValue: state.rootReducer.fieldAValue,
      fieldBValue: state.rootReducer.fieldBValue,
      fieldAType: state.rootReducer.fieldAType,
      fieldBType: state.rootReducer.fieldBType
    },
    fieldAValue: selector(state, "fieldAValue"),
    fieldBValue: selector(state, "fieldBValue"),
    fieldAType: selector(state, "fieldAType"),
    fieldBType: selector(state, "fieldBType")
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxedForm);

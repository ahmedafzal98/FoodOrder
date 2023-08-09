import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const [formValidity, setFormValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const isEmpty = (value) => value.trim() !== "";
  const isFiveChars = (value) => value.trim() !== "" && value.trim() !== 5;
  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const isEntredNameValid = isEmpty(enteredName);
    const isEntredCityValid = isEmpty(enteredCity);
    const isEntredStreetValid = isEmpty(enteredStreet);
    const isEntredPostalCodeValid = isFiveChars(enteredPostalCode);

    setFormValidity({
      name: isEntredNameValid,
      street: isEntredStreetValid,
      city: isEntredCityValid,
      postalCode: isEntredPostalCodeValid,
    });

    const isFormValid =
      isEntredNameValid &&
      isEntredCityValid &&
      isEntredStreetValid &&
      isEntredPostalCodeValid;

    if (!isFormValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postalCode: enteredPostalCode,
      city: enteredCity,
    });
  };
  const inputNameClasses = `${classes.control} ${
    formValidity.name ? "" : classes.invalid
  }`;
  const inputStreetClasses = `${classes.control} ${
    formValidity.street ? "" : classes.invalid
  }`;
  const inputPostalCodeClasses = `${classes.control} ${
    formValidity.postalCode ? "" : classes.invalid
  }`;
  const inputCityClasses = `${classes.control} ${
    formValidity.city ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={inputNameClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formValidity.name && <p>Please Enter Name:</p>}
      </div>

      <div className={inputStreetClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formValidity.street && <p>Please Enter Street:</p>}
      </div>

      <div className={inputPostalCodeClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formValidity.postalCode && (
          <p>Please Enter Postal Code (5 charachters):</p>
        )}
      </div>

      <div className={inputCityClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formValidity.city && <p>Please Enter City</p>}
      </div>

      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;

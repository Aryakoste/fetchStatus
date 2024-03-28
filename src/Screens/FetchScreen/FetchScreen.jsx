import { useState } from "react";
import classes from './FetchScreen.module.css';

const FetchScreen = () => {

  const [selectedImage, setSelectedImage] = useState(null);

    const formInputArr = ['sourceSysCustCode', 'fatherFirstName', 'fatherMiddleName', 'fatherLastName', 'dob', 'pmntAddProof', 'voterIdCard', 'pan', 'drivingLicenseNum', 'aadhar', 'recordIdentifier', 'firstName', 'middleName', 'lastName', "addressline1", "addressline2", "gender"];

  const [formDetails, setFormDetails] = useState({
    "sourceSysCustCode": "",
    "fatherFirstName": "",
    "fatherMiddleName": "",
    "fatherLastName": "",
    "dob": "",
    "pmntAddProof": "",
    "voterIdCard": "",
    "pan": "",
    "drivingLicenseNum": "",
    "aadhar": "",
    "recordIdentifier": "",
    "firstName": "",
    "middleName": "",
    "lastName": "",
    "addressline1": "",
    "addressline2": "",
    "gender": ""
  });

  const handleSubmit = () => {
    console.log(formDetails);

    let emptyForm = Object.values(formDetails).some(data => {
      return data == ""
    })
    console.log(emptyForm);
  };

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setSelectedImage(imageFile);
    console.log(selectedImage);
  }

    return <div className={classes.container}>
    <div className={classes.cardContainer}>
      <h2 style={{textAlign: 'center'}}>Send JSON to backend</h2>
      <div className={classes.inputsContainer}>
        {
          formInputArr.map(d => {
            return <input type='text' placeholder={d} key={d} onChange={(e) => {
              setFormDetails({
                ...formDetails,
                [d]: e.target.value
              })
            }}></input>
          })
        }
        <input type="file" onChange={handleImageChange}></input>
      </div>
      <div className={classes.buttonContainer}>
        <button onClick={handleSubmit}>Submit</button></div>
    </div>
  </div>
}

export default FetchScreen;
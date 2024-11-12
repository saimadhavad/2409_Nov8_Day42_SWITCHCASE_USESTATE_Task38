import React, { useRef } from 'react'
import TopNavigation from './TopNavigation';

function SwitchCaseIfElseIf() {

    let labelCalculateResultRef = useRef();
    let spanMsgRef = useRef();
    let stateSelectRef = useRef();
    let maleRBRef = useRef();
    let femaleRBRef = useRef();
    let selectedGender;
    let salutation;
    let maritalStatus;
    let yourAge;
    let capital;
    let grade;

    let firstNameInputRef = useRef();
    let lastNameInputRef = useRef();
    let ageInputRef = useRef();
    let emailInputRef = useRef();
    let passwordInputRef = useRef();
    let englishMarksInputRef = useRef();
    let sanskritMarksInputRef = useRef();
    let mathematicsAMarksInputRef = useRef();
    let mathematicsBMarksInputRef = useRef();
    let physicsMarksInputRef = useRef();
    let chemistryMarksInputRef = useRef();


    let firstNameSpanResultRef = useRef();
    let lastNameSpanResultRef = useRef();
    let emailSpanResultRef = useRef();
    let passwordSpanResultRef = useRef();
    let englishMarksSpanResultRef = useRef();
    let sanskritMarksSpanResultRef = useRef();
    let mathematicsAMarksSpanResultRef = useRef();
    let mathematicsBMarksSpanResultRef = useRef();
    let physicsMarksSpanResultRef = useRef();
    let chemistryMarksSpanResultRef= useRef();

    let fullNameRegex = /^[A-Za-z\s]{2,30}$/;
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;

    
    let calculateResult = () => {

        let firstName = firstNameInputRef.current.value;
        let lastName = lastNameInputRef.current.value;

        let english = Number(englishMarksInputRef.current.value);
        let sanskrit = Number(sanskritMarksInputRef.current.value);
        let mathematicsA = Number(mathematicsAMarksInputRef.current.value);
        let mathematicsB = Number(mathematicsBMarksInputRef.current.value);
        let physics = Number(physicsMarksInputRef.current.value);
        let chemistry = Number(chemistryMarksInputRef.current.value);

        let totalMarks  = english+sanskrit+mathematicsA+mathematicsB+physics+chemistry;
        let percentage = (totalMarks/470)*100;

        if (percentage >= 90) {
            grade = "A+";
        } else if (percentage >= 80) {
            grade = "A";
        } else if (percentage >= 70) {
            grade = "B";
        } else if (percentage >= 60) {
            grade = "C";
        } else if (percentage >= 50) {
            grade = "D";
        } else if (percentage >= 35) {
            grade = "E";
        } else {
            grade = "F";
        }
      

        labelCalculateResultRef.current.innerHTML =    
        `${firstName} ${lastName}'s total marks are ${totalMarks} with an ${grade} and a percentage of ${percentage.toFixed(2)} %`;

    }


    let onFocus = (inputRef) => {
        inputRef.current.style.backgroundColor = "#4e5d59";
        inputRef.current.style.color ="white";
    }
    let onBlur = (inputRef) => {
        inputRef.current.style.backgroundColor = "";
        inputRef.current.style.color = "";
    }
    let onChange = (inputRef,spanRef,passMarks,maxMarks) => {
        let marks =inputRef.current.value;
        if (marks>=0 && marks<=maxMarks && maxMarks<=100) {
              if(marks>=passMarks) {
                spanRef.current.innerHTML = "✔️ Pass";
              }
              else{
                spanRef.current.innerHTML = "❌ Fail";
              }
        }else{
            spanRef.current.innerHTML = "❎ Invalid";
        }
    }   

    let personalDetailsValidate = (inputRef,spanRef,regExp) => {
        let result =regExp.test(inputRef.current.value);
        if (result == true){
            spanRef.current.innerHTML = "✔️ Valid";
        }
        else {
            spanRef.current.innerHTML = "❌ Invalid";
        }
    }
    let languagesKnown = {
        telugu: "false",
        hindi: "false",
        english:"false",
        tamil:"false",
        kannada:"false"
    }
    let onCreateAccount = () => {
        let firstNameMsg = firstNameInputRef.current.value;
        let lastNameMsg = lastNameInputRef.current.value;
        let stateSelectMsg = stateSelectRef.current.value;
       

        switch(stateSelectMsg) {
            case "Andhra Pradesh":
                capital = "Amaravati";
                break;
            case "Arunachal Pradesh":
                capital = "Itanagar";
                break;
            case "Assam":
                capital = "Dispur";
                break;
            case "Bihar":
                capital = "Patna";
                break;
            case "Chhattisgarh":
                capital = "Raipur";
                break;
            case "Goa":
                capital = "Panaji";
                break;
            case "Gujarat":
                capital = "Gandhinagar";
                break;
            case "Haryana":
                capital = "Chandigarh";
                break;
            case "Himachal Pradesh":
                capital = "Shimla";
                break;
            case "Jharkhand":
                capital = "Ranchi";
                break;
            case "Karnataka":
                capital = "Bengaluru";
                break;
            case "Kerala":
                capital = "Thiruvananthapuram";
                break;
            case "Madhya Pradesh":
                capital = "Bhopal";
                break;
            case "Maharashtra":
                capital = "Mumbai";
                break;
            case "Manipur":
                capital = "Imphal";
                break;
            case "Meghalaya":
                capital = "Shillong";
                break;
            case "Mizoram":
                capital = "Aizawl";
                break;
            case "Nagaland":
                capital = "Kohima";
                break;
            case "Odisha":
                capital = "Bhubaneswar";
                break;
            case "Punjab":
                capital = "Chandigarh";
                break;
            case "Rajasthan":
                capital = "Jaipur";
                break;
            case "Sikkim":
                capital = "Gangtok";
                break;
            case "Tamil Nadu":
                capital = "Chennai";
                break;
            case "Telangana":
                capital = "Hyderabad";
                break;
            case "Tripura":
                capital = "Agartala";
                break;
            case "Uttar Pradesh":
                capital = "Lucknow";
                break;
            case "Uttarakhand":
                capital = "Dehradun";
                break;
            case "West Bengal":
                capital = "Kolkata";
                break;
            default:
                capital = "Please Select a correct state to view its capital.";
        }

        if(selectedGender == "male")
        {
            salutation = "Mr."
        }
        else
            {
                if(maritalStatus == "single") 
                {
                    salutation = "Miss."
                }
                else 
                {
                    salutation="Mrs."
                }
            }
            let age =Number(ageInputRef.current.value);
            if(age>=0 && age<=1){
                yourAge = "Infant";
            }else if (age>=2 && age<=3){
                yourAge = "Toddler";
            }else if (age>=4 && age<=5){
                yourAge = "Preschooler";
            }else if (age>=6 && age<=12){
                yourAge = "Child";
            }else if (age>=13 && age <=17){
                yourAge= "Teenager";
            }else if (age>=18 && age <=39){
                yourAge = "Young Adult";
            }else if (age>=40 && age<=59) {
                yourAge = "Middle-aged Adult";
            }else if (age>=60 && age<=79) {
                yourAge = "Senior Adult";
            }else if (age>=80){
                yourAge = "Senior Adult";
            }else {
                yourAge = "Invalid Age";
            }

            // console.log(languagesKnown);
        spanMsgRef.current.innerHTML = `${salutation} ${firstNameMsg} ${lastNameMsg}[${yourAge}], is from ${stateSelectMsg} [${capital}].
        <br/>You know the ${languagesKnown.telugu == true?"Telugu":""} ${languagesKnown.hindi == true?"Hindi":""}
         ${languagesKnown.english == true?"English":""} ${languagesKnown.tamil == true?"Tamil":""}
         ${languagesKnown.kannada == true?"Kannada":""} languages.`;
    }
    
  return (
    <div className='App'>
        <TopNavigation></TopNavigation>
      <form className='interMarkSheet'>
      <h1 className='topHeading'>1<sup>st</sup> Year Intermediate Education Marksheet</h1>
        <fieldset className='personalDetails'>
            <legend>Personal Details</legend>
        <div className='firstName'>
            <label>First Name</label>
            <span className='colonSpacing'>:</span>
            <input type='text'  ref={firstNameInputRef}
                onFocus={ () => {
                    onFocus(firstNameInputRef);
                }}
                onBlur= { () => {
                    onBlur(firstNameInputRef);
                }}
                onChange={ () => {
                    personalDetailsValidate(firstNameInputRef,firstNameSpanResultRef,fullNameRegex);
                }}
            ></input>
            <span className='spanResult' ref={firstNameSpanResultRef}></span>
        </div>
        <div className='lastName'>
            <label>Last Name</label>
            <span className='colonSpacing'>:</span>
            <input type='text' ref={lastNameInputRef}
                onFocus={ () => {
                    onFocus(lastNameInputRef);
                }}
                onBlur= { () => {
                    onBlur(lastNameInputRef);
                }}
                onChange={ () => {
                    personalDetailsValidate(lastNameInputRef,lastNameSpanResultRef,fullNameRegex);
                }}
            ></input>
            <span className='spanResult' ref={lastNameSpanResultRef}></span>
        </div>
        <div className='gender'>
            <label>Gender</label>         
            <span className='colonSpacing'>:</span> 
            <input type='radio' name='gender' ref={maleRBRef}
                onChange={ () => {
                    if(maleRBRef.current.checked == true){
                        selectedGender ="male";
                    }
                }}
            
            ></input>
            <label style={{width:"auto"}}>male</label>
            <input type='radio' name='gender' ref={femaleRBRef}
                onChange={ () => {
                    if(femaleRBRef.current.checked == true){
                        selectedGender ="female";
                    }
                }}
            ></input>
            <label  style={{width:"auto"}}>female</label>
        </div>
        <div className='maritalStatus'>
            <label>Marital Status</label>
            <span className='colonSpacing'>:</span>
            <input type='radio' name='ms'
            onChange={ (singleEO) => {
                if(singleEO.target.checked == true)
                {
                    maritalStatus = "single";
                }
            }}
            ></input>
            <label className="innerLabel">Single</label>
            <input type='radio' name='ms'
                onChange={(marriedEO) => {
                    if(marriedEO.target.checked == true) {
                        maritalStatus = "married";
                    }
                }}
            ></input>
            <label className='innerLabel'>Married</label>
            <span className='spanResult'></span>
        </div>
        <div className='age'>
            <label>Age</label>
            <span className='colonSpacing'>:</span>
            <input type='number' ref={ageInputRef}
                onFocus={ () => {
                    onFocus(ageInputRef);
                }}
                onBlur={ () => {
                    onBlur(ageInputRef);
                }}
            ></input>
            <span className='spanResult'></span>
        </div>
        <div className='chooseAState'>
            <label>Choose a State</label>
            <span className='colonSpacing'>:</span>
            <select name="states" id="states" ref={stateSelectRef}>
                    <option value="" style={{textAlign:"center"}}>-----    Select a state    -----</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Puducherry">Puducherry</option>
                    <option value="Ladakh">Ladakh</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
            </select>
            <span className='spanResult'></span>
        </div>
        <div className='languagesKnown'>
            <label>Languages Known</label>
            <span className='colonSpacing'>:</span>
            <input type='checkbox'
                onChange = { (teluguCheckEO) => {languagesKnown.telugu = teluguCheckEO.target.checked;}}
            ></input>
            <label style={{width:"auto"}}>Telugu</label>
            <input type='checkbox'
                onChange={ (hindiCheckEO)=> {languagesKnown.hindi = hindiCheckEO.target.checked;}}
            ></input>
            <label style={{width:"auto"}}>Hindi</label>
            <input type='checkbox'
                onChange={ (englishCheckEO) => {languagesKnown.english = englishCheckEO.target.checked;}}            
            ></input>
            <label style={{width:"auto"}}>english</label>
            <input type='checkbox'
                onChange={ (tamilCheckEO) => {languagesKnown.tamil = tamilCheckEO.target.checked;}}
            ></input>
            <label style={{width:"auto"}}>Tamil</label>
            <input type='checkbox'
                onChange={ (kannadaCheckEO) => {languagesKnown.kannada = kannadaCheckEO.target.checked;}}            
            ></input>
            <label style={{width:"auto"}}>Kannada</label>
        </div>
        <div className='email'>
            <label>Email</label>
            <span className='colonSpacing'>:</span>
            <input type='email' ref={emailInputRef}
                onFocus={ () => {
                    onFocus(emailInputRef);
                }}
                onBlur= { () => {
                    onBlur(emailInputRef);
                }}
                onChange={ () => {
                    personalDetailsValidate(emailInputRef,emailSpanResultRef,emailRegex);
                }}
            ></input>
            <span className='spanResult' ref={emailSpanResultRef}></span>
        </div>
        <div className='password'>
            <label>Password</label>
            <span className='colonSpacing'>:</span>
            <input type='password' ref={passwordInputRef}
                onFocus={ () => {
                    onFocus(passwordInputRef);
                }}
                onBlur= { () => {
                    onBlur(passwordInputRef);
                }}
                onChange={ () => {
                    personalDetailsValidate(passwordInputRef,passwordSpanResultRef,passwordRegex)
                }}
            ></input>
            <span className='spanResult' ref={passwordSpanResultRef}></span>
        </div>
        </fieldset>
        <fieldset className='marksDetails'>
            <legend>Marks Details</legend>
        <div className='english'>
            <label>ENGLISH</label>
            <span className='colonSpacing'>:</span>
            <input type='number' ref={englishMarksInputRef}
                onFocus={ () => {
                    onFocus(englishMarksInputRef);
                }}
                onBlur= { () => {
                    onBlur(englishMarksInputRef);
                }}
                onChange={ () => {
                    onChange(englishMarksInputRef,englishMarksSpanResultRef,35,100);
                }}
            ></input>
            <span className='spanResult' ref={englishMarksSpanResultRef}></span>
        </div>
        <div className='sanskrit'>
            <label>SANSKRIT</label>
            <span className='colonSpacing'>:</span>
            <input type='number' ref={sanskritMarksInputRef}
                onFocus={ () => {
                    onFocus(sanskritMarksInputRef);
                }}
                onBlur= { () => {
                    onBlur(sanskritMarksInputRef);
                }}
                onChange={ () => {
                    onChange(sanskritMarksInputRef,sanskritMarksSpanResultRef,35,100);
                }}
            ></input>
            <span className='spanResult' ref={sanskritMarksSpanResultRef}></span>
        </div>
        <div className='mathematicsA'>
            <label>MATHEMATICS - A</label>
            <span className='colonSpacing'>:</span>
            <input type='number' ref={mathematicsAMarksInputRef}
                onFocus={ () => {
                    onFocus(mathematicsAMarksInputRef);
                }}
                onBlur={ () => {
                    onBlur(mathematicsAMarksInputRef);
                }}
                onChange={ () => {
                    onChange(mathematicsAMarksInputRef,mathematicsAMarksSpanResultRef,26,75);
                }}
            ></input>
            <span className='spanResult' ref={mathematicsAMarksSpanResultRef}></span>
        </div>
        <div className='mathematicsB'>
            <label>MATHEMATICS - B</label>
            <span className='colonSpacing'>:</span>
            <input type='number' ref={mathematicsBMarksInputRef}
                onFocus={ () => {
                    onFocus(mathematicsBMarksInputRef);
                }}
                onBlur= { () => {
                    onBlur(mathematicsBMarksInputRef);
                }}
                onChange={ () => {
                    onChange(mathematicsBMarksInputRef,mathematicsBMarksSpanResultRef,26,75);
                }}
            ></input>
            <span className='spanResult' ref={mathematicsBMarksSpanResultRef}></span>
        </div>
        <div className='physics'>
            <label>PHYSICS</label>
            <span className='colonSpacing'>:</span>
            <input type='number' ref={physicsMarksInputRef}
                onFocus={ () => {
                    onFocus(physicsMarksInputRef);
                }}
                onBlur= { () => {
                    onBlur(physicsMarksInputRef);
                }}
                onChange={ () => {
                    onChange(physicsMarksInputRef,physicsMarksSpanResultRef,21,60);
                }}
            ></input>
            <span className='spanResult' ref={physicsMarksSpanResultRef}></span>
        </div>
        <div className='chemistry'>
            <label>CHEMISTRY</label>
            <span className='colonSpacing'>:</span>
            <input type='number' ref={chemistryMarksInputRef}
                onFocus={ () => {
                    onFocus(chemistryMarksInputRef);
                }}
                onBlur= { () => {
                    onBlur(chemistryMarksInputRef);
                }}
                onChange={ () => {
                    onChange(chemistryMarksInputRef,chemistryMarksSpanResultRef,21,60);
                }}
            ></input>
            <span className='spanResult' ref={chemistryMarksSpanResultRef}></span>
        </div>
        </fieldset>
        <div className='buttonDiv'>
            <button className='buttonStyle' type='button' 
                onClick={ () => {
                    calculateResult();
                }}
            >Calculate Result!</button>
             <button className='buttonStyle' type='button' 
                onClick={ () => {
                    onCreateAccount();
                }}
            >Message Display</button>
        </div>
        <label className='labelStyle' ref={labelCalculateResultRef} style={{width:"auto"}}></label><br/>
        <span className='spanStyle' ref={spanMsgRef}></span>
      </form>
      
    </div>
  )
}

export default SwitchCaseIfElseIf

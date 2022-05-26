import logo from './logo.svg';
import './App.css';
import { Component } from 'react';



class JsonForm extends Component{
    constructor(props){ /* This function basically makes sure that form is rendered with dummy data as soon as the single user page is requested*/ 
      /*AUTHOR NAME: Fawad J.Fateh
      DATE OF GENERATION: 22/5/2022
      DATE OF LAST REVISION: 23/5/2022
      VERSION: 1.1 */  
      super(props)
        /* Setting current state as an object of required variables*/
        this.state={
        Gender:'Male',Married:'No',
        Dependents:0,Education:'Graduate',Self_Employed: 'No',
        ApplicantIncome:5489,	CoapplicantIncome:0,	LoanAmount:128,	Loan_Amount_Term:360,	Credit_History:1,	Property_Area:'Urban',
        score:"null"};
        /*These two lines bind the handleChange and handleSubmit hook to the state variable */  
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleChange(event){
      /*This hook function ensures that the page is rendered properly whenever the user changes any field in the form */
      /*AUTHOR NAME: Umer Ahmed
      DATE OF GENERATION: 22/5/2022
      DATE OF LAST REVISION: 23/5/2022
      VERSION: 1.0
       */
        this.setState({[event.target.name]:event.target.value})
    }
    handleSubmit(event){
      /*This hook function handles the sending of the form data to the machine learning model at the backend */
      /*AUTHOR NAME: Fawad J.Fateh
      DATE OF GENERATION: 22/5/2022
      DATE OF LAST REVISION: 23/5/2022
      VERSION: 1.1
      DESCRIPTION: This hook function handles the sending of the form data to the machine learning model at the backend  */
      event.preventDefault()/* This function cancels the submit  event if user prompts a refresh or reloads the page */
      const url="http://localhost:8000/scoreJSON";/* The url to which send a POST request */
      const bodyData=JSON.stringify({"Gender":this.state.Gender,"Property_Area":this.state.Property_Area, /*This function bascially converts state variable which contains the form data the user entered into JSON format*/
      "Married":this.state.Married,"Dependents":this.state.Dependents,
      "Education":this.state.Education,"Self_Employed":this.state.Self_Employed,
      "ApplicantIncome":this.state.ApplicantIncome,"Credit_History":this.state.Credit_History,
      "CoapplicantIncome":this.state.CoapplicantIncome,"LoanAmount":this.state.LoanAmount,
      "Loan_Amount_Term":this.state.Loan_Amount_Term});
      const reqOpt ={method:"POST",headers:{"Content-type":"application/json"},body:bodyData};/*Creating the header of the post request */
        fetch(url,reqOpt)/*This function sets a Json Post request to the url mentioned above whilst sending the converted JSON data in the request body  */
        .then((resp) => resp.json()) /*THis call back function fetches the response from the backend to the post request */
        .then((respJ) => this.setState({score:respJ.score}))/*This callback function resets the state of the probabiity score variable from the data fetched from the backend */
    }

    render(){/*This function is responsible for rendering the form component itself  */ 
     /*AUTHOR NAME: Usman Nizamani
     DATE OF GENERATION: 22/5/2022
     DATE OF LAST REVISION: 23/5/2022
     VERSION NUMBER: 1.1 
     DESCRIPTION:This function is responsible for rendering the form component itself  */
      return(
        <div>
      <form onSubmit={this.handleSubmit}>
  <div class="form-group">
    <label for="formGroupExampleInput">Gender</label>
    <input className="text white" type="text" name='Gender' onChange={this.handleChange} value={this.state.Gender} class="form-control" id="formGroupExampleInput" placeholder="Example input"/>
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Married</label>
    <input type="text" name='Married' onChange={this.handleChange} value={this.state.Married}  class="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Dependents</label>
    <input type="text"  name='Dependents' onChange={this.handleChange} value={this.state.Dependents} class="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
   
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Education</label>
    <input type="text"  name='Education' onChange={this.handleChange} value={this.state.Education} class="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Self Employeed</label>
    <input type="text"  name='Self_Employed' onChange={this.handleChange} value={this.state.Self_Employed} class="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Income</label>
    <input type="text"  name='ApplicantIncome' onChange={this.handleChange} value={this.state.ApplicantIncome} class="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Co-Applicant Income</label>
    <input type="text"  name='CoapplicantIncome' onChange={this.handleChange} value={this.state.CoapplicantIncome} class="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Loan Amount</label>
    <input type="text"  name='LoanAmount' onChange={this.handleChange} value={this.state.LoanAmount} class="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Loan Amount Term</label>
    <input type="text"  name='Loan_Amount_Term' onChange={this.handleChange} value={this.state.Loan_Amount_Term} class="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Credit History</label>
    <input type="text" name='Credit_History' onChange={this.handleChange} value={this.state.Credit_History}  class="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Property Area</label>
    <input type="text"  name='Property_Area' onChange={this.handleChange} value={this.state.Property_Area} class="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
  </div>
  <input type='submit' value='submit' class="btn btn-secondary tm-btn-app-feature"></input>
</form>
<h2 >Our Model Predicted your loan application probabiity score as  {this.state.score}</h2>
  </div>
      )
    }
  }

  export default JsonForm
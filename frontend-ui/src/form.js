import logo from './logo.svg';
import './App.css';
import { Component } from 'react';



class JsonForm extends Component{
    constructor(props){
        super(props)
        this.state={
        Gender:'Male',Married:'No',
        Dependents:0,Education:'Graduate',Self_Employed: 'No',
        ApplicantIncome:5489,	CoapplicantIncome:0,	LoanAmount:128,	Loan_Amount_Term:360,	Credit_History:1,	Property_Area:'Urban',
        score:1};
    
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({[event.target.name]:event.target.value})
    }
    handleSubmit(event){
      event.preventDefault()
     
      const url="http://localhost:8000/scoreJSON";
      const bodyData=JSON.stringify({"Gender":this.state.Gender,"Property_Area":this.state.Property_Area,
      "Married":this.state.Married,"Dependents":this.state.Dependents,
      "Education":this.state.Education,"Self_Employed":this.state.Self_Employed,
      "ApplicantIncome":this.state.ApplicantIncome,"Credit_History":this.state.Credit_History,
      "CoapplicantIncome":this.state.CoapplicantIncome,"LoanAmount":this.state.LoanAmount,
      "Loan_Amount_Term":this.state.Loan_Amount_Term});
      const reqOpt ={method:"POST",headers:{"Content-type":"application/json"},body:bodyData};
        fetch(url,reqOpt)
        .then((resp) => resp.json())
        .then((respJ) => this.setState({score:respJ.score}))
    }

    render(){
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
<p>Our Model Predicted your loan application probabiity score as  =  {this.state.score}</p>
  </div>
      )
    }
  }

  export default JsonForm
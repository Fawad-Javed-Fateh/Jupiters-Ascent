import './App.css';
import { Component } from 'react';

/*const fs=require('fs')*/
const csv=require('csvtojson')
const {Parser}=require('json2csv')

class FormBatch extends Component{
    constructor(props){ /*This constructor sets a state variable object and binds it with the handleFile and handleUpload Hooks */
      super(props);
      this.state = {selectFile:null,output:false,respFromServer:null,selectedID:null,success:null};

      this.handleFile = this.handleFile.bind(this);
      this.handleUpload = this.handleUpload.bind(this);
      this.handleSelection=this.handleSelection.bind(this);

    }
  
    handleFile(event){/*This function handles the uploading stage of files  */
      console.log(event.target.value);
      this.setState({[event.target.name]:event.target.files[0]});/*This binds the file name to the current state */
  
    }
  
    handleUpload = async event =>{/* This function handles the sending of the file to the backend and getting the batch probability scroes back and rendering them  */
      event.preventDefault();/* This function cancels the submit  event if user prompts a refresh or reloads the page */
      const url="http://localhost:8000/scoreFile"; /*Setting the url for the POST request  */
      const fileToSend = this.state.selectFile;/*This selects the current file in the current state variable */
      console.log(fileToSend);
      var formdata = new FormData();
      formdata.append("filePath", this.state.selectFile,this.state.selectFile.name);/*This initilaises the header for the post request by providing the filepath and the filename and the file type in the body */
      const reqOpt={method:"POST",body:formdata};/*Define method and body of http request and send the request  */
  
      const resp = await fetch(url,reqOpt);/* fetch the response from the url and request generated*/
      const resp2 = await resp.json();/*Fetch the json response from the backend */
      
      this.setState({respFromServer:resp2.result})
      this.setState({output:true});/*Render the result table when this output state is true (sets the output state to true when JSON data from backend is fetched) */
  
    }
    handleSelection(event){
      console.log("this is stupid")
      this.setState({selectedID:event.target.innerText})
      console.log(this.state.selectedID)
      console.log(this.state.selectFile)
      const url="http://localhost:8000/saveSelected"
      var formdata = new FormData()
      formdata.append(this.state.selectedID,this.state.selectFile.name)
      const reqOpt={method:"POST",body:formdata}
      fetch(url,reqOpt).then((resp)=>resp.json()).then((respJ) => this.setState({success:respJ.success}))
        
      }
    

  
    render(){/*Renders the file submition component if checkpoint(output state ) is false and returns the output table if checkpoint is true   */
      
      const iterateData =this.state.respFromServer;/*This assigns the JSON response recieved from the backend to a local variable */
      const checkPoint = this.state.output;/*This assigns the output state to the local variable */
      let finalTableData;
      if (checkPoint){
        /*If output state is true , it means that we have recieved a JSON response from the backend for the file we sent */
         const tableData = iterateData.map((x) => /*Map every row of the JSON response into a html table */
         <tr><th scope='row' onClick={this.handleSelection}>{x[0]}</th><td>{x[1]}</td></tr>
         
         );
  
         finalTableData=<table class="table table-bordered table-dark">
           <tbody>
             <tr><th scope='col' >Id</th> <th scope='col'>Probability</th> </tr>
             {tableData}
           </tbody>
         </table>
      }
      else{ /*We havent recevied any response from the backend so in that case dont render anything */
        finalTableData="";
      }
  
      return (
        <div>
          <form onSubmit={this.handleUpload}>
            <input type="file" name="selectFile" onChange={this.handleFile} ></input>
            <input type="submit" value="Submit"></input>
          </form>
          <div> {finalTableData}</div>
        </div>
       
      );
    }
  }
 
export default FormBatch;
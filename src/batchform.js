import './App.css';
import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/*const fs=require('fs')*/
const csv=require('csvtojson')
const {Parser}=require('json2csv')

class FormBatch extends Component{
    constructor(props){ /*This constructor sets a state variable object and binds it with the handleFile and handleUpload Hooks */
    /*AUTHOR NAME: Umer Ahmed
      DATE OF GENERATION: 15/5/2022
      DATE OF LAST REVISION: 20/5/2022
      VERSION: 3.0
     */ 
    
    super(props);
      this.state = {selectFile:null,output:false,respFromServer:null,selectedID:null,rowData:null};

      this.handleFile = this.handleFile.bind(this);
      this.handleUpload = this.handleUpload.bind(this);
      this.handleSelection=this.handleSelection.bind(this);
      this.notify=this.notify.bind(this);

    }
    notify(){/*This function renders a notification popup once the selected loanID is saved in the output file */
      /*AUTHOR NAME: Fawad J.Fateh
      DATE OF GENERATION: 25/5/2022
      DATE OF LAST REVISION: 25/5/2022
      VERSION: 1.1 */
      console.log(typeof(this.state.rowData))
      console.log("hreerer")
      console.log(this.state.rowData.data[0][0])
      var ist=this.state.rowData.data[0][0]
      var ist1=this.state.rowData.data[0][1]
      var ist2 =this.state.rowData.data[0][2]
      var ist3 =this.state.rowData.data[0][3]
      toast.success(ist+': "'+ ist1 + ' '+ ist2 +' '+ist3+'" '+'Has been saved successfully to output.csv',{position: toast.POSITION.TOP_CENTER})
    }
  
    handleFile(event){/*This function handles the uploading stage of files  */
    /*AUTHOR NAME: Umer Ahmed 
      DATE OF GENERATION: 15/5/2022
      DATE OF LAST REVISION: 20/5/2022
      VERSION: 1.1 */
      console.log(event.target.value);
      this.setState({[event.target.name]:event.target.files[0]});/*This binds the file name to the current state */
  
    }
  
    handleUpload = async event =>{/* This function handles the sending of the file to the backend and getting the batch probability scroes back and rendering them  */
      /*AUTHOR NAME: Umer Ahmed
      DATE OF GENERATION: 20/5/2022
      DATE OF LAST REVISION: 21/5/2022
      VERSION: 1.1 */
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
    handleSelection =async event=>{
      /*AUTHOR NAME: Fawad J.Fateh
      DATE OF GENERATION: 25/5/2022
      DATE OF LAST REVISION: 25/5/2022
      VERSION: 1.1 */
      console.log(event.target)
      console.log(event.target.innerText)
      const id=event.target.innerText
      console.log('id = '+ id)
      await this.setState({selectedID:id})
      console.log(this.state.selectedID)
      console.log(this.state.selectFile)
      if(this.state.selectedID!=null)
      {
        const url="http://localhost:8000/saveSelected"
        var formData=JSON.stringify({'ID':this.state.selectedID,'selectFile':this.state.selectFile.name})
        console.log("Yt")
        console.log(formData)
        const reqOpt={method:"POST",headers:{"Content-type":"application/json"},body:formData}
        /*fetch(url,reqOpt).then((resp)=>resp.json()).then((respJ) => this.setState({rowData:JSON.parse(respJ.rowData)}))*/
        const resp=await fetch(url,reqOpt)
        const resp2=await resp.json()
        this.setState({rowData:JSON.parse(resp2.rowData)})
        console.log('bara')
        console.log('sata')
        var updated=this.state.respFromServer
        console.log(typeof(updated))
        var newUpdate=[]
        for(var o in updated){
          if(updated[o][0]!=id){
            newUpdate.push(updated[o])
          }
        }
        await this.setState({respFromServer:newUpdate})
        this.notify()
      }
     
     
        
      }
    

  
    render(){/*Renders the file submition component if checkpoint(output state ) is false and returns the output table if checkpoint is true   */
      /* AUTHOR NAME: Usman Nizamani 
      DATE OF GENERATION: 20/5/2022
      DATE OF LAST REVISION: 20/5/2022
      VERSION: 1.1 */
      const iterateData =this.state.respFromServer;/*This assigns the JSON response recieved from the backend to a local variable */
      const checkPoint = this.state.output;/*This assigns the output state to the local variable */
      let finalTableData;
      if (checkPoint){
        /*If output state is true , it means that we have recieved a JSON response from the backend for the file we sent */
         const tableData = iterateData.map((x) => /*Map every row of the JSON response into a html table */
         <tr><th scope='row' onClick={this.handleSelection}  onMouseOver="this.style.color='#0F0'"
         onMouseOut="this.style.color='#00F'">{x[0]}</th><td>{x[1]}</td></tr>
         
         );
  
         finalTableData=<table class="table table-bordered table-dark">
           <ToastContainer/>
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
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amountDue: "",
      amountReceived: "",
      changeDue: "",
      twenties: "",
      tens: "",
      fives: "",
      ones: "",
      quarters: "",
      dimes: "",
      nickels: "",
      pennies: ""
    }
    this.onChange = this.onChange.bind(this)
    // this.handleClick = this.handleClick.bind(this)
    this.calculate = this.calculate.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  calculate(amountDue, amountReceived){
    let myArray = [];

    amountDue = this.state.amountDue;
    amountReceived = this.state.amountReceived;
    let changeDue = (amountReceived - amountDue).toFixed(2);

    this.setState({
      changeDue: `The total change due is $${changeDue}`,});
  
    if(!this.state.amountDue || !this.state.amountReceived) {  
      this.setState({
        alert: "card text-center alert alert-danger rounded",
        changeDue: 'Please make sure you entered an Amount Due and an Amount Received',
        twenties: 0, 
        tens: 0, 
        fives: 0, 
        ones: 0,
        quarters: 0, 
        dimes: 0, 
        nickels: 0, 
        pennies: 0 });

    } else if(amountReceived < amountDue) {
      this.setState({
        alert: "card text-center alert alert-danger rounded",
        changeDue: 'Cough up more cash...',
        twenties: 0, 
        tens: 0, 
        fives: 0, 
        ones: 0,
        quarters: 0, 
        dimes: 0, 
        nickels: 0, 
        pennies: 0 });

    } else {      
      if (changeDue > 19) {
        let twenties = Math.floor(changeDue /20);
        myArray.push(twenties);
        console.log("twenties " + twenties);
      } else { myArray.push(0)}
      
      let changeDueForTens = (changeDue % 20).toFixed(2);

      if (changeDueForTens > 9) {
        let tens = Math.floor(changeDueForTens /10);
        myArray.push(tens);
        console.log("tens " + tens);
        }else { myArray.push(0)}

      let changeDueForFives = (changeDueForTens % 10).toFixed(2);

      if (changeDueForFives > 4) {
        let fives = Math.floor(changeDueForFives /5);
        myArray.push(fives);
        console.log("fives " + fives);
      }else { myArray.push(0)}

      let changeDueForOnes = (changeDueForFives % 5).toFixed(2);

      if (changeDueForOnes > 1) {
        let ones = Math.floor(changeDueForOnes);
        myArray.push(ones);
        console.log("ones " + ones);
        }else { myArray.push(0)}

      let decimal = changeDue - Math.floor(changeDue).toFixed(2);

      if(decimal > .24) {
        var quarters = Math.floor(decimal /.25);
        myArray.push(quarters);
        console.log("quarters " + quarters);
      }else { myArray.push(0)}

        let decimalForDimes = (decimal % .25).toFixed(2);

      if(decimalForDimes > .09) {
        var dimes = Math.floor(decimalForDimes /.10);
        myArray.push(dimes);
        console.log("dimes " + dimes);
      }else { myArray.push(0)}

        let decimalForNickels = (decimalForDimes % .10).toFixed(2);

      if(decimalForNickels > .04) {
        var nickels = Math.floor(decimalForNickels /.05);
        myArray.push(nickels);
        console.log("nickels " + nickels);
      }else { myArray.push(0)}

          let decimalForPennies = (decimalForNickels % .05).toFixed(2);

      if(decimalForPennies > .01) {
        var pennies = Math.floor(decimalForPennies /.01);
        myArray.push(pennies);
        console.log("pennies " + pennies);
      }else { myArray.push(0)}
  
console.log(myArray);

this.setState({
  // changeDue: `The total change due is $${changeDue}`,
  twenties: myArray[0],
  tens: myArray[1],
  fives: myArray[2],
  ones: myArray[3],
  quarters: myArray[4],
  dimes: myArray[5],
  nickels: myArray[6],
  pennies: myArray[7],
  alert: "card text-center alert alert-success rounded",
    }); 
  }
}

  render() {
    return(
    <div 
    className="container pt-2"
    style={{minWidth: '350px'}}>
      <h1 
      className='text-light border-bottom border-light'
      >Change Calculator</h1>
      <div className="card-deck">
      <div className="card rounded">
      <div className="row card-header">
        <h6
        className="pl-4"
        >Enter Information</h6>
        </div>
        <div className="card-body">
        <div className="col-sm">
          <label 
          id="amountDue"
          className="font-weight-bold"
          >How much is due?</label>
          <input 
            value={ this.state.amountDue }
            id="amountDue"
            name="amountDue"
            type="number"
            className="form-control rounded"
            placeholder="Enter Amount Due"
            onChange={ this.onChange }
          ></input>
        </div>
        <div className="col-sm">
        <label 
        id="amountReceived"
        className="font-weight-bold"
        >How much was received?</label>
          <input 
            value={ this.state.amountReceived }
            id="amountReceived"
            name="amountReceived"
            type="number"
            className="form-control rounded"
            placeholder="Enter Amount Received"
            onChange={ this.onChange }
          ></input>
          </div>
        </div>
        <div className="card-footer">
        <div className="col-sm">
          <button 
          id="calculate"
          name="calculate"
          className="btn btn-block btn-primary rounded"
          onClick={() => this.calculate()}
          >Calculate</button>
        </div>
        </div>
      </div>
      <div className="card rounded">
        <div className="card-body">
          <div className="row w-100">
        <div id="changeDue" name="changeDue" className={ this.state.alert }>{ this.state.changeDue }</div>
        </div>
     
        <div className="row w-100 h-50">
          <div className="card mx-3 my-2 px-2 py-4 text-center col-sm bg-light rounded">Twenties
          <p className="change">{ this.state.twenties }</p></div>
          <div className="card mx-3 my-2 px-2 py-4 text-center col-sm bg-light rounded">Tens
          <p className="change">{ this.state.tens }</p></div>
          <div className="card mx-3 my-2 px-2 py-4 text-center col-sm bg-light rounded">Fives
          <p className="change">{ this.state.fives }</p></div>
          <div className="card mx-3 my-2 px-2 py-4 text-center col-sm bg-light rounded">Ones
          <p className="change">{ this.state.ones }</p></div>
        </div>
        <div className="row w-100 h-50 pb-2">
          <div className="card mx-3 my-2 px-2 py-4 text-center col-sm bg-light rounded">Quarters
          <p className="change">{ this.state.quarters }</p></div>
          <div className="card mx-3 my-2 px-2 py-4 text-center col-sm bg-light rounded">Dimes
          <p className="change">{ this.state.dimes }</p></div>
          <div className="card mx-3 my-2 px-2 py-4 text-center col-sm bg-light rounded">Nickels
          <p className="change">{ this.state.nickels }</p></div>
          <div className="card mx-3 my-2 px-2 py-4 text-center col-sm bg-light rounded">Pennies
          <p className="change">{ this.state.pennies }</p></div>
        </div>
      </div>
      </div>
      </div>
    </div>
    )
  }
}

export default App;

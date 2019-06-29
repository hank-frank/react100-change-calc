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
    this.handleClick = this.handleClick.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  calculate(amountDue, amountReceived){
    console.log("calculate")
    let myArray = [];

    amountDue = this.state.amountDue;
    console.log(amountDue);
    amountReceived = this.state.amountReceived;
    let changeDue = (amountReceived - amountDue).toFixed(2);
    console.log(changeDue);
    this.setState ({
      changeDue: `The total change due is $${changeDue}`
    })
    // myArray.push(changeDue);
    if(!this.state.amountDue || !this.state.amountReceived) { //if/elseif/else is here to auto-set the alert. 
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
      this.setState({twenties: twenties})
      console.log("twenties " + twenties);
    } else { myArray.push(0)
      this.setState({ twenties: 0 })
    }

    let changeDueForTens = (changeDue % 20).toFixed(2);

    if (changeDueForTens > 9) {
      let tens = Math.floor(changeDueForTens /10);
      myArray.push(tens);
      this.setState({tens: tens})
      console.log("tens " + tens);
    }else { myArray.push(0)
      this.setState({tens: 0})}

    let changeDueForFives = (changeDueForTens % 10).toFixed(2);

    if (changeDueForFives > 4) {
      let fives = Math.floor(changeDueForFives /5);
      myArray.push(fives);
      this.setState({fives: fives})
      console.log("fives " + fives);
    }else { myArray.push(0)
      this.setState({fives: 0})}

    let changeDueForOnes = (changeDueForFives % 5).toFixed(2);

    if (changeDueForOnes > 1) {
      let ones = Math.floor(changeDueForOnes);
      myArray.push(ones);
      this.setState({ones: ones})
      console.log("ones " + ones);
    }else { myArray.push(0)
      this.setState({ones: 0})}

    let decimal = changeDue - Math.floor(changeDue).toFixed(2);

    if(decimal > .24) {
      var quarters = Math.floor(decimal /.25);
      myArray.push(quarters);
      this.setState({quarters: quarters})
      console.log("quarters " + quarters);
    }else { myArray.push(0)
      this.setState({quarters: 0})}

      let decimalForDimes = (decimal % .25).toFixed(2);

    if(decimalForDimes > .09) {
      var dimes = Math.floor(decimalForDimes /.10);
      myArray.push(dimes);
      this.setState({dimes: dimes})
      console.log("dimes " + dimes);
    }else { myArray.push(0)
      this.setState({dimes: 0})}

      let decimalForNickels = (decimalForDimes % .10).toFixed(2);

    if(decimalForNickels > .04) {
      var nickels = Math.floor(decimalForNickels /.05);
      myArray.push(nickels);
      this.setState({nickels: nickels})
      console.log("nickels " + nickels);
    }else { myArray.push(0)
      this.setState({nickels: 0})}

        let decimalForPennies = (decimalForNickels % .05).toFixed(2);

    if(decimalForPennies > .01) {
      var pennies = Math.floor(decimalForPennies /.01);
      myArray.push(pennies);
      this.setState({pennies: pennies})
      console.log("pennies " + tens);
    }else { myArray.push(0)
      this.setState({pennies: 0})}
    
    return myArray; 
  }
  }

  handleClick(e) {
    let result = this.calculate();
    // console.log(result);
    // console.log(typeof result)
    this.setState({
      alert: "card text-center alert alert-success rounded",
      // twenties: result[0],
      // tens: result[1],
      // fives: result[2],
      // ones: result[3],
      // quarters: result[4],
      // dimes: result[5],
      // nickels: result[6],
      // pennies: result[7],
    });
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
          onClick={ this.handleClick }
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
          <div className="card mx-3 my-2 px-2 py-4 text-center col-sm bg-light rounded">Twenties<br/>
          { this.state.twenties }</div>
          <div className="card mx-3 my-2 px-2 py-4 text-center col-sm bg-light rounded">Tens<br/>
          { this.state.tens }</div>
          <div className="card mx-3 my-2 px-2 py-4 text-center col-sm bg-light rounded">Fives<br/>
          { this.state.fives }</div>
          <div className="card mx-3 my-2 px-2 py-4 text-center col-sm bg-light rounded">Ones<br/>
          { this.state.ones }</div>
        </div>
        <div className="row w-100 h-50 pb-2">
          <div className="card mx-3 my-2 px-2 py-4 text-center col-sm bg-light rounded">Quarters<br/>
          { this.state.quarters }</div>
          <div className="card mx-3 my-2 px-2 py-4 text-center col-sm bg-light rounded">Dimes<br/>
          { this.state.dimes }</div>
          <div className="card mx-3 my-2 px-2 py-4 text-center col-sm bg-light rounded">Nickles<br/>
          { this.state.nickels }</div>
          <div className="card mx-3 my-2 px-2 py-4 text-center col-sm bg-light rounded">Pennies<br/>
          { this.state.pennies }</div>
        </div>
      </div>
      </div>
      </div>
    </div>
    )
  }
}

export default App;

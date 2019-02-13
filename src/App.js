import React, { Component } from 'react';
import './App.css';

import web3 from './ethereum/web3';
import SimpleStorage from './ethereum/simpleStorage';
import { Button, Container, Grid } from 'semantic-ui-react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { value: ''};
    SimpleStorage.events.Change({}, (error, events) => { this.setState({value: events.returnValues.newVal })});
  }

  setValue = async newValue => {
    //event.preventDefault();
    const accounts = await web3.eth.getAccounts();

    await SimpleStorage.methods.set(newValue).send({
      from: accounts[0],
    });

    this.setState({value: newValue });
  };

  clickOne = () => {
    console.log('one');
    this.setValue(1);
  }

  clickTwo = () => {
    console.log('two');
    this.setValue(2);
  }

  clickThree = () => {
    console.log('three');
    this.setValue(3);
  }

  clickFour = () => {
    console.log('four');
    this.setValue(4);
  }

  async componentDidMount() {
    const value = await SimpleStorage.methods.get().call();
    this.setState({ value });

    /*
    SimpleStorage.getPastEvents("allEvents",
                                {fromBlock: 0, toBlock: 'latest'},
                                (error, events) => { console.log(events); });*/
  }

  render() {
    return (
      <Container style={{ marginTop: '3em' }}>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"></link>

        <Grid>
          <Grid.Row>
            <Button primary onClick={this.clickOne}>1</Button>
            <Button primary onClick={this.clickTwo}>2</Button>
          </Grid.Row>

          <Grid.Row>
            <Button primary onClick={this.clickThree}>3</Button>
            <Button primary onClick={this.clickFour}>4</Button>
          </Grid.Row>
        </Grid>
        <div>{this.state.value}</div>
      </Container>

    );
  }
}

export default App;

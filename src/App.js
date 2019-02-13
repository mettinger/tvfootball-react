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
    const accounts = await web3.eth.getAccounts();
    await SimpleStorage.methods.set(newValue).send({
      from: accounts[0],
    });
    this.setState({value: newValue });
  };

  onClick = (buttonLabel) => {
    console.log(buttonLabel);
    this.setValue(buttonLabel);
  }

  async componentDidMount() {
    const value = await SimpleStorage.methods.get().call();
    this.setState({ value });
  }

  render() {
    return (
      <Container style={{ marginTop: '3em' }}>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"></link>

        <Grid>
          <Grid.Row>
            <Button primary onClick={()=>this.onClick(1)}>1</Button>
            <Button primary onClick={()=>this.onClick(2)}>2</Button>
          </Grid.Row>

          <Grid.Row>
            <Button primary onClick={()=>this.onClick(3)}>3</Button>
            <Button primary onClick={()=>this.onClick(4)}>4</Button>
          </Grid.Row>
        </Grid>
        <div>{this.state.value}</div>
      </Container>

    );
  }
}

export default App;

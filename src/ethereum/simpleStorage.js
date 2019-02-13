import web3 from './web3';
import SimpleStorage from './build/SimpleStorage.json';


const instance = new web3.eth.Contract(
  SimpleStorage.abi,
  SimpleStorage.networks[5777].address
);

export default instance;

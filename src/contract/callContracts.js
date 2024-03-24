import Web3 from "web3";

import contractAbi from "./ShurikenAbi.json"; // Replace with your ABI
const contractAddress = "0x20d774EE1F16094C43BC6E07354D541f28Fb9e26";
// const contractAddress = "0x74fE446B408cc8aba70f65fAdC3bE011e7559e81";

// const contract = new ethers.Contract(contractAddress, contractAbi, signer);

// Initialize Web3 with a provider (e.g., an Ethereum node URL)
const web3 = new Web3("https://rpc-mumbai.maticvigil.com/");
// const web3 = new Web3(
//   "https://gateway.testnet.octopus.network/ottochain/m4k5urt9h33dpbhgsp4lqxemo6naeihz"
// );
const log = console.log;
// Load the ABI and contract address of your smart contract
// const contractABI = [...]; // Your contract's ABI
// const contractAddress = '0xYourContractAddress';

// Create a contract instance
const contract = new web3.eth.Contract(contractAbi, contractAddress);

// Example 1: Read data from the contract
export const readData = async () =>
  contract.methods
    .getAllCourses()
    .call()
    .then((result) => {
      console.log("Result:", result);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

// export async function readData() {
//   const result = await contract.getAllCourses();
//   console.log("Data from the smart contract:", result);
// }

// export async function enroll(courseName = "Blockchain FUndamentals") {
//   // const providersAccounts = await web3.eth.getAccounts();

//   const defaultAccounto = await web3.eth
//     .getAccounts()
//     .then((accounts) => accounts[0]);
//   log(defaultAccounto);
//   const defaultAccount = window.ethereum.selectedAddress;
//   log(defaultAccount);
//   const transactionObject = { from: defaultAccount };
//   transactionObject.gas = await web3.eth.estimateGas(transactionObject);
//   transactionObject.gasPrice = await web3.getGasPrice();

//   const receipt = await contract.methods
//     .enroll(courseName)
//     .send(transactionObject);
//   // const tx = await contract.connect(signer).someFunction(param1, param2);
//   // await tx.wait();
//   // console.log("Transaction hash:", tx.hash);
// }

export async function enroll(courseName = "Blockchain FUndamentals") {
  // const providersAccounts = await web3.eth.getAccounts();

  const defaultAccount = await window.ethereum.request({
    method: "eth_requestAccounts"
  });
  console.log("defaultAccount[0]");
  console.log(defaultAccount[0]);
  const acc = "0x39bbe33acc94147480b6dfffd10de4ebbb2179f0";

  const transactionObject = { from: acc, gasPrice: web3.utils.toHex(web3.utils.toWei('30', 'gwei')), // Gas price (optional)
  gasLimit: web3.utils.toHex(300000)  };

  // transactionObject.gas = await window.ethereum.request({
  //   method: "eth_estimateGas",
  //   params: [transactionObject]
  // });
  // transactionObject.gasPrice = await window.ethereum.request({
  //   method: "eth_gasPrice"
  // });

  const receipt = await contract.methods
    .enroll(courseName)
    .send({ ...transactionObject, from: acc });

  // const tx = await contract.connect(signer).someFunction(param1, param2);
  // await tx.wait();
  // console.log("Transaction hash:", tx.hash);
}

readData();

enroll()
  .then(() => {
    console.log("finished");
  })
  .catch((error) => {
    console.log(error);
  });

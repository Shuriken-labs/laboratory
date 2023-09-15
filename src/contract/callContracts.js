import Web3 from "web3";

import contractAbi from "./ShurikenAbi.json"; // Replace with your ABI
// const contractAddress = "0x20d774EE1F16094C43BC6E07354D541f28Fb9e26";
const contractAddress = "0x74fE446B408cc8aba70f65fAdC3bE011e7559e81";

// const contract = new ethers.Contract(contractAddress, contractAbi, signer);

// Initialize Web3 with a provider (e.g., an Ethereum node URL)
// const web3 = new Web3("https://rpc-mumbai.maticvigil.com/");
const web3 = new Web3(
  "https://gateway.testnet.octopus.network/ottochain/m4k5urt9h33dpbhgsp4lqxemo6naeihz"
);

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

// export async function sendData() {
//   const tx = await contract.connect(signer).someFunction(param1, param2);
//   await tx.wait();
//   console.log("Transaction hash:", tx.hash);
// }

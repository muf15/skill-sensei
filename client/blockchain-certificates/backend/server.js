const express = require("express");
const { ethers } = require("ethers");
require("dotenv").config();

const app = express();
app.use(express.json());

// ABI and contract address
const contractABI = [
  {
    "inputs": [
      { "internalType": "address", "name": "recipient", "type": "address" },
      { "internalType": "string", "name": "studentName", "type": "string" },
      { "internalType": "string", "name": "courseName", "type": "string" },
      { "internalType": "string", "name": "ipfsHash", "type": "string" },
    ],
    "name": "issueCertificate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }],
    "name": "getCertificates",
    "outputs": [
      {
        "components": [
          { "internalType": "string", "name": "studentName", "type": "string" },
          { "internalType": "string", "name": "courseName", "type": "string" },
          { "internalType": "uint256", "name": "issueDate", "type": "uint256" },
          { "internalType": "string", "name": "ipfsHash", "type": "string" },
        ],
        "internalType": "struct CertificateManager.Certificate[]",
        "name": "",
        "type": "tuple[]",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
];

const contractAddress = "YOUR_CONTRACT_ADDRESS";

const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contract = new ethers.Contract(contractAddress, contractABI, wallet);

app.post("/issueCertificate", async (req, res) => {
  const { recipient, studentName, courseName, ipfsHash } = req.body;
  try {
    const tx = await contract.issueCertificate(recipient, studentName, courseName, ipfsHash);
    await tx.wait();
    res.status(200).send({ message: "Certificate issued!", transactionHash: tx.hash });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.get("/getCertificates/:recipient", async (req, res) => {
  const recipient = req.params.recipient;
  try {
    const certificates = await contract.getCertificates(recipient);
    res.status(200).send(certificates);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CertificateManager {
    struct Certificate {
        string studentName;
        string courseName;
        uint256 issueDate;
        string ipfsHash; // To store the certificate on IPFS
    }

    mapping(address => Certificate[]) public certificates;
    
    event CertificateIssued(address indexed recipient, string courseName, string ipfsHash);

    function issueCertificate(
        address recipient,
        string memory studentName,
        string memory courseName,
        string memory ipfsHash
    ) public {
        Certificate memory newCertificate = Certificate({
            studentName: studentName,
            courseName: courseName,
            issueDate: block.timestamp,
            ipfsHash: ipfsHash
        });
        
        certificates[recipient].push(newCertificate);
        emit CertificateIssued(recipient, courseName, ipfsHash);
    }

    function getCertificates(address recipient) public view returns (Certificate[] memory) {
        return certificates[recipient];
    }
}

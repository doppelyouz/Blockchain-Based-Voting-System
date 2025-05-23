import React from "react";
import Feature from "../Features/Feature";
import { MdGppGood, MdLibraryAddCheck, MdLock, MdShare } from "react-icons/md";

const Features = () => {
  return (
    <div className="features-wrapper">
      <div className="title-large">Advanced Blockchain Voting System</div>

      <div className="mobile-wrapper">
        <div>
          <Feature title="Immutable Vote Records" icon={<MdLock />} align="right">
            <p>
              Every vote is permanently recorded on the blockchain using Ganache's local network, making it impossible to alter, delete, or manipulate after submission. This immutability ensures the integrity of the entire electoral process and provides a complete audit trail for all voting activities.
            </p>
          </Feature>
        </div>
        <div>
          <Feature title="Smart Contract Security" icon={<MdGppGood />} align="left">
            <p>
              Our system utilizes secure smart contracts deployed on Ganache blockchain with cryptographic hashing and digital signatures. Each vote is cryptographically secured and validated through smart contract logic, ensuring voter privacy while maintaining complete transparency of the voting process.
            </p>
          </Feature>
        </div>
        <div>
          <Feature title="Decentralized Architecture" icon={<MdShare />} align="right">
            <p>
              Built on Ganache's local blockchain network, our voting system eliminates single points of failure and removes dependency on centralized servers. Smart contracts automatically execute voting rules, candidate registration, and vote tallying processes with complete transparency.
            </p>
          </Feature>
        </div>
        <div>
          <Feature
            title="Blockchain-Based Verification"
            icon={<MdLibraryAddCheck />}
            align="left"
          >
            <p>
              All voting transactions are recorded on Ganache's blockchain ledger, creating a tamper-proof and verifiable system. This blockchain architecture ensures data integrity, prevents vote manipulation, and allows real-time verification of election results through transaction history.
            </p>
          </Feature>
        </div>
      </div>
    </div>
  );
};

export default Features;
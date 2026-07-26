# Smart Contract Project

This project uses **Hardhat** for developing, testing, and deploying Ethereum smart contracts.

## Prerequisites

Make sure you have the following installed:

- Node.js (v16 or later recommended)
- npm

Install project dependencies:

```bash
npm install
```

---

## Running Tests

To execute all smart contract tests:

```bash
npx hardhat test
```

---

## Local Deployment

To deploy the contracts on the local Hardhat network:

```bash
npx hardhat run scripts/deploy.js
```

> **Note:** Ensure that the Hardhat local node is running if you are deploying to a local network.

Start a local node:

```bash
npx hardhat node
```

Then deploy:

```bash
npx hardhat run scripts/deploy.js --network localhost
```

---

## Deploying to a Network

To deploy the contracts to any configured network:

```bash
npx hardhat run scripts/deploy.js --network <network_name>
```

Replace `<network_name>` with the desired network configured in your `hardhat.config.js`.

### Example

Deploy to Sepolia:

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

Deploy to Polygon:

```bash
npx hardhat run scripts/deploy.js --network polygon
```

---

## Project Structure

```text
.
├── contracts/          # Smart contracts
├── scripts/
│   └── deploy.js       # Deployment script
├── test/               # Test files
├── hardhat.config.js   # Hardhat configuration
├── package.json
└── README.md
```

---

## Useful Hardhat Commands

| Command | Description |
|---------|-------------|
| `npx hardhat test` | Run all tests |
| `npx hardhat compile` | Compile smart contracts |
| `npx hardhat node` | Start a local Hardhat node |
| `npx hardhat run scripts/deploy.js` | Deploy locally |
| `npx hardhat run scripts/deploy.js --network <network_name>` | Deploy to a configured network |

---

## Notes

- Configure your RPC URLs and private keys in `hardhat.config.js` or using environment variables before deploying to public networks.
- Never commit your private keys or `.env` file to version control.

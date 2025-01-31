# Charity Donation DApp

<img src="./public/Charity DApp.png">


## Overview
This project is a decentralized application (DApp) built with **React.js** and **Web3.js** that allows users to donate **Ethereum (ETH)** to a specified charity wallet address using **MetaMask**.


## Features
- Connect to **MetaMask**
- Display connected wallet address
- Send **0.1 ETH** donations to a specified charity wallet
- Handle connection errors gracefully
- Styled UI with **Tailwind CSS**

## Technologies Used
- **React.js**: Frontend framework for building the UI
- **Web3.js**: Ethereum JavaScript API for interacting with the blockchain
- **MetaMask**: Ethereum wallet for transactions
- **Tailwind CSS**: Styling framework

## Prerequisites
Before running the project, ensure you have the following installed:
- **Node.js** (latest LTS version recommended)
- **npm** or **yarn**
- **MetaMask** browser extension
- An **Ethereum wallet** with test ETH (if using a test network)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/charity-dapp.git
   cd charity-dapp
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

## Usage
1. Open the application in your browser.
2. Click **Connect to MetaMask** to link your Ethereum wallet.
3. Click **Donate 0.1 ETH** to send a donation to the specified charity wallet.
4. Confirm the transaction in MetaMask.
5. Receive a success message if the transaction is successful.

## Configuration
- Replace `'0xYourCharityAddressHere'` in `Charity.js` with the actual charity Ethereum wallet address.
- Ensure you are connected to the appropriate Ethereum network (e.g., **Goerli testnet** for testing).

## Roadmap
- [ ] Add support for multiple donation amounts
- [ ] Display real-time Ethereum balance
- [ ] Implement transaction history
- [ ] Enhance UI/UX with animations

## License
This project is licensed under the **MIT License**.

## Contributing
Pull requests are welcome! Feel free to submit issues and suggest improvements.

## Contact
For any questions, reach out via [your email or GitHub].


# TRON Transfer DApp

This project is a decentralized application (DApp) built on the TRON network. It allows users to transfer TRC-20 tokens using their TronLink wallet. The front end is built with JavaScript, and users can interact with a smart contract using the provided interface.

## Features

- **Token Transfers**: Users can easily transfer TRC-20 tokens.
- **TronLink Wallet Detection**: The app checks if the user has TronLink installed.
- **TRC-20 Token Interaction**: The app supports interactions with any TRC-20 token on the TRON network.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- You have Node.js installed. Download it from [Node.js Official Website](https://nodejs.org/).
- You have a TRON Wallet (TronLink) installed. Download it from [TronLink Official Website](https://www.tronlink.org/).

### Clone the Repository

To get a local copy of the project up and running, follow these simple steps:

1. Open your terminal and navigate to the folder where you want to clone the repository.

2. Run the following command:

   ```bash
   git clone https://github.com/YOUR_USERNAME/your-repository-name.git


3. Change to the Project's Directory

To change to the project's directory, run the following command:

```bash
cd your-repository-name
```

4. Install Dependencies

To install the required packages and dependencies, run the following command:

```bash
npm install
```

After installation is complete, run the following command to start the application:

```bash
npm start
```

The application should now be running at [http://localhost:3000/](http://localhost:3000/).

## Adding TRC-20 Token to TronLink Wallet

To interact with the custom TRC-20 token on the TRON network, you need to add the token to your TronLink wallet. Follow these steps to add a custom TRC-20 token:

### Step 1: Open TronLink Wallet

Open the TronLink browser extension or mobile app.

### Step 2: Navigate to the "Assets" Section

In your TronLink wallet, click on the "Assets" tab to view the list of tokens in your wallet.

### Step 3: Add a New Token

Scroll down to the bottom of your token list and click on "+" (Add Token).

A pop-up window will appear, asking for the contract address of the token.

### Step 4: Enter the Token Contract Address

Copy the token contract address from below:

```
Contract Address: TY5sn2NZnFzQQq2EfEGQq5EveL1gcVsnq7Z
```

Paste this contract address into the "Token Contract Address" field in TronLink.

If the token is valid, TronLink will automatically fetch the token symbol and decimals. Double-check the information and confirm.

### Step 5: Confirm the Token

Once you confirm, the token will be added to your TronLink wallet. You can now see the token in your "Assets" section and use it for transfers within the app.

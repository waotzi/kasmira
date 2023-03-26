declare global {
  interface Window { 
    ethereum?: any; 
  }
}

declare const window: Window & typeof globalThis;

const MetamaskConnect = () => {
  const handleClick = () => {
    if (typeof window.ethereum !== `undefined`) {
      window.ethereum.request({ method: `eth_requestAccounts` })
        .then(() => {
          // handle successful connection
        })
        .catch((error: Error) => {
          // handle error
          console.error(error);
        });
    } else {
      // handle missing MetaMask
      console.error(`Please install MetaMask`);
    }
  };
  
  return `
    <button class="metamask-connect" onclick="${handleClick()}">
      <img src="https://docs.metamask.io/metamask-fox.svg" alt="Metamask logo">
      <span>Connect with Metamask</span>
    </button>
  `;
};

export default MetamaskConnect;

const connectMetamaskButton = document.getElementById("connect-metamask");

// Check if Metamask is already connected
if (ethereum && ethereum.selectedAddress) {
  connectMetamaskButton.textContent = "Connected to Metamask";
}

connectMetamaskButton.addEventListener("click", async () => {
  try {
    // Check if Metamask is installed
    const provider = await detectEthereumProvider();
    if (!provider) {
      throw new Error("Metamask not installed");
    }

    // Check if Metamask is already connected
    if (ethereum && ethereum.selectedAddress) {
      connectMetamaskButton.textContent = "Connected to Metamask";
      return;
    }

    // Request access to the user's accounts
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });

    // Log the user's accounts
    console.log(accounts);

    // Update the button text
    connectMetamaskButton.textContent = "Connected to Metamask";
  } catch (error) {
    console.error(error);
  }
});

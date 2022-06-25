export function isMetaMask() {
  return Boolean(window.ethereum && window.ethereum.isMetaMask)
}

export default {
  isMetaMask
}

export function isMetaMask() {
  console.log(Boolean(window.ethereum && window.ethereum.isMetaMask))
  return Boolean(window.ethereum && window.ethereum.isMetaMask)
}

export default {
  isMetaMask
}

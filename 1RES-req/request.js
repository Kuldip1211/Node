function encrypt(data){
  return 'encrypted data';
}
function send(url,data){
  const encrpted = encrypt(data);
  console.log(`sendind ${encrpted} to ${url}`);
}

module.exports = {
  send,
}
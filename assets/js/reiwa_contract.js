
let web3js;
const reiwaAddress = "0xeADCFa3A680324C0d981B73DE1EE7e30D7865415";
const faucetAddress = "0xB3d225839dAD0567FF713dDBdcEc7bCB6C2536B0";

//authereum関連
let authereum;
let auprovider;
let auweb3;
let auaddress;

//変数定義
let reiwatoken;
let reiwafaucet;
let addr;

//読み込み待ち
window.onload = async function () {

	if (location.href === "https://nandemotoken.github.io/reiwatoken/index_MetaMask.html"){
		await ethereum.enable();
		web3js = new Web3(web3.currentProvider);	
	}

	if (location.href === "https://nandemotoken.github.io/reiwatoken/index_Authereum.html"){
	authereum = await new Authereum('mainnet')
    auprovider = await authereum.getProvider()
    auweb3 = await new Web3(provider) 
    auaddress = await authereum.getAccountAddress()
	}

	//処理
	startApp();

}

// //関数の事前準備
// function checkWallet() {
// 	if (typeof web3 !== 'undefined') {
// 		web3js = new Web3(web3.currentProvider);
// 		console.log("MetaMaskを利用します");
// 	} else {
// 		console.log("MetaMask？どこ？");
// 	}
// }
async function getAmount() {
	bal = await reiwatoken.methods.balanceOf(addr[0]).call()
	alert("令和トークンの保有数" + bal)
}
// async function sendTransaction() {
// 	alert("令和トークンを取得します");
// 	reiwatoken.newToken100({ from:addr[0]} , function (err , txHash) {});
// }

async function faucetToken() {
	alert("運営プールから、令和トークンを1つ取得します");
	reiwafaucet.methods.faucetToken().send({ from: addr[0] })
}

async function startApp() {
	// reiwatoken = web3.eth.contract(reiwaABI).at(reiwaAddress);
	reiwatoken = new web3js.eth.Contract(reiwaABI, reiwaAddress);
	reiwafaucet = new web3js.eth.Contract(faucetABI, faucetAddress);
	// addr = web3.eth.accounts[0];
	addr = await web3js.eth.getAccounts();
	console.log("javascript working user address is " + addr[0]);
	// $('#reiwa_zandaka').on('click', getAmount);
	// $('#reiwa_get').on('click', sendTransaction);
}








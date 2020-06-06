
let web3js;
const reiwaAddress = "0xeADCFa3A680324C0d981B73DE1EE7e30D7865415";

//変数定義
let reiwatoken;
let addr;

//読み込み待ち
window.onload = async function () {

ethereum.enable();

//ここから処理
checkWallet();
startApp();

}

//関数の事前準備
	function checkWallet(){
		if (typeof web3 !== 'undefined') {
			web3js = new Web3(web3.currentProvider);
			console.log("MetaMaskを利用します");
		} else {
			console.log("MetaMask？どこ？");
		}
	}
	async function getAmount(){
		bal = await reiwatoken.methods.balanceOf(addr[0]).call()
		alert("令和トークンの保有数"+ bal )
	}
	async function sendTransaction() {
		alert("令和トークンを取得します");
		reiwatoken.newToken100({ from:addr[0]} , function (err , txHash) {});
	}
	async function startApp(){
		// reiwatoken = web3.eth.contract(reiwaABI).at(reiwaAddress);
		reiwatoken = new web3js.eth.Contract(reiwaABI, reiwaAddress);
		// addr = web3.eth.accounts[0];
		addr = await web3js.eth.getAccounts();
		console.log("javascript working user address is "+ addr[0]);
		$('#reiwa_zandaka').on('click' , getAmount );
		$('#reiwa_get').on('click' , sendTransaction );
	}






















//ここから下はコメントアウト(旧バージョンなど)
/*
alert($("h2").text());
alert(typeof web3);
                  if (typeof web3 !== 'undefined') {
                          // メタマスクのWeb3のプロバイダを使用する。
                          web3js = new Web3(web3.currentProvider);
                          alert("イーサリアムウォレットを利用します");
                          alert("なんか文字が出ない");
                          alert(web3.eth.accounts[0]);
                  } else {
                          // メタマスクがインストールされていない場合、メタマスクのインストールを促す
                          alert("イーサリアムウォレットを導入してください(MetaMask等)");
                  }
*/




/*
	  window.addEventListener('load', function() {
		  var reiwatoken;
		  var userAccount;
		  var addr = web3.eth.accounts[0]

		  function startApp() {
			  //コントラクト読込
			  var reiwaAddress = "0xeADCFa3A680324C0d981B73DE1EE7e30D7865415";
			  reiwatoken = web3.eth.contract(reiwaABI).at(reiwaAddress);


			  //ユーザーの登録
			  web3.eth.getAccounts(function(err, accounts) {
				  console.log(accounts[0]);
				  userAccount = accounts[0];
			  });



			  //コントラクトから内容の取得
			  reiwatoken.symbol.call({from: addr}, function(err, symbol) {
				  //ABI expects string here,
				  if(err) { console.log(err) }
				  console.log('Token symbol: ' + symbol)
			  })


			  document.getElementById("button_set").onclick = () => {
				  getAmount();
			  }

			  document.getElementById('reiwaimg').onclick = () =>{
				  imgClick();
			  }
		  
		  }


		  function getAmount(){
			  return reiwatoken.balanceOf.call( web3.eth.accounts[0]  , function(err, bal) {
				  if(err) { console.log(err) }
				  console.log('you have: ' + bal + 'reiwa token')
				  alert("令和トークンの保有数"+ bal )
			  })

		  }

		  function imgClick() {
			  alert("令和トークンを取得します");
			  reiwatoken.newToken100({ from:addr} , function (err , txHash) {
				  if(err) console.error(err)
				  if (txHash) {
					  console.log('Transaction sent')
					  console.dir(txHash)
				  }
			  });
		  }


		  //MetaMaskがインストールされているかのチェック
		  if (typeof web3 !== 'undefined') {
			  // メタマスクのWeb3のプロバイダを使用する。
			  web3js = new Web3(web3.currentProvider);
			  alert("イーサリアムウォレットを利用します");
		  } else {
			  // メタマスクがインストールされていない場合、メタマスクのインストールを促す
			  alert("イーサリアムウォレットを導入してください(MetaMask等)");
		  }

		  // ユーザーのアプリ開始
		  startApp()
	  })

*/


var soap = require("soap");
var url = '../AscioServiceTest.wsdl';

soap.createClient(url, function(err, client) {
  if(err) console.log("client error",err);
  else {
	client.LogIn({
		session : {
			Account : "xxx",
			Password: "xxx"
		}
	}, function(err,result) {
		if (err) console.error("login error",err);
			else console.log(result);			
	})
  };
});	
 a = function(){
 	console.log("Testing....");
 	b= function(){
 		console.log("sagar is coming...")
 	c();
 	};
 	setInterval(b, 10000);
 };

 c= function(){
 	console.log("And now he is gone...");
 };
setInterval(a, 1000);
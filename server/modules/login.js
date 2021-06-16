

module.exports = function (app, MongoClient, jsonParser, jwt, nodemailer) {
	
	const transporter = nodemailer.createTransport({

		host: process.env.EMAIL_HOST, 
		port: process.env.EMAIL_PORT,
		secure: true,
		auth: {
			user: process.env.EMAIL_USER, 
			pass: process.env.EMAIL_PASSWORD 
		}
	});


// ----------------------------------- LOGIN -----------------------------------------
// ===================================================================================


app.post('/login', jsonParser, function(req,res) {
	
   //console.log (req);
	
   let email_query = req.body.email; 
   let pwd_query = req.body.pwd;
	
   // console.log('inside login \n' + email_q);
	   
   MongoClient.connect ("mongodb://localhost:27017/", 
						{ useNewUrlParser: true, useUnifiedTopology: true  }, 
						function (err1, client){ 
	   
	    if (err1) {console.error('err1 \n', err1);}
      
  		const db = client.db('mydb');
	   
    	db.collection('admin').find( {email:  email_query})
		.toArray( function (err2, p) { 
			
    		if (err2) {console.error('err2 \n', err2);}
			
			else { 
				
				  if (p.length < 1 || p == undefined) {
					res.json({ 
                		success: false, 
                		message: 'Email не зарегистирован'
            		})
				  }
				
			      else { 
					  
					let email = p[0].email;
					let pwd = p[0].password;
					let status = p[0].status;
					let shop = p[0].shop;
					let category = p[0].category;
					  
						if (pwd_query != pwd ) {
							res.json({ 
                    			success: false, 
                    			message: 'Неправильный пароль. Повторите попытку'
                			})
						}
					
						else { 
							
							if (status != true ) {
								res.json({ 
                    			success: false, 
                    			message: 'Аккаунт не активирован'
                				})
							}
							
							else {

							    let js = {'shop': shop, 'category':category};						
								var token   = jwt.sign(js, 
													   process.env.JKEY,
													   { expiresIn: "24h" });
                
								res.json({
                    				success : true,
                    				message : 'Токен создан',
                    				token   : token
                				}) 
							}
									
				  		}
					}
			}
		})
   	});
})


// ----------------------------------- REGISTER ---------------------------------------
// ====================================================================================



app.post('/register', jsonParser, (req, res) => {

	// re-write to post whatever fields were passed <===============================
   let user = {
	   			name: req.body.name,
			  	email: req.body.email,
			 	password: req.body.pwd,
	   			phone: req.body.phone,
	  			shop: req.body.shop,
	  			category: req.body.category,
	  			status: true
			 };
	
	//console.log('inside \/register \n' + user.email);
	
  	MongoClient.connect("mongodb://localhost:27017/", 
			{ useNewUrlParser: true, useUnifiedTopology: true  }, 
						
	function(err, client){
      
		if (err) {	console.error(err);}
			
  		const db = client.db("mydb");
  		const collection = db.collection("admin");
			
		collection.find( {email:  req.body.email}) 
		.toArray( function (err, ptr) {
			
    		if (err) {	console.error(err);} //db call err}
			
			else if (ptr.length < 1 || ptr == undefined) {
						
				collection.find( {shop:  req.body.shop}) 
				.toArray( function (err, p) {
							
					if (err) {	console.error(err);} //db call err}
				  	
					else if (p.length < 1 || p == undefined) {	
  						collection.insertOne(user, function(err, result){
        
        					if(err){ return console.log(err);} 
        					//console.log(result.ops);
        					client.close();
							res.json({
                    			success :true,
                    			message : 'Аккаунт создан.\nДоступ в кабинет открыт',
                			});
						});
					}
								
					else { res.json({
                    		success : false,
                    		message : 'Название магазина уже используется.\nВыберите другое название'
                			}) 
						 }
				});
			}
						
			else { res.json({
                    success : false,
                    message : 'Данный имейл уже зарегистрирован.\nПерейдите к восстановлению пароля'
                	}) 
			}
   				
  		});
  });
  
})


// ----------------------------------- RESTORE ----------------------------------------
// ====================================================================================


app.post('/restore', jsonParser, (req, res) => {

   let email = req.body.email;
	
   MongoClient.connect("mongodb://localhost:27017/", 
			{ useNewUrlParser: true, useUnifiedTopology: true  }, 
						
   function(err, client){
      
		if (err) {	console.error(err);}
			
  		const db = client.db("mydb");
  		const collection = db.collection("admin");
			
		collection.find( {email:  email}) 
		.toArray( function (err, ptr) {
			
			if (err) {	console.error('db call err \n' + err);} 
				  	
			else if (ptr.length < 1 || ptr == undefined) {	

				res.json({
                   success :false,
                   message : 'Данный e-mail не зарегистрирован',
                });
			}
			
			else {	
				
				let pwd = ptr[0].password;
				
				const mailOptions = {
    				from: 'info@bot-hub.co',
    				to: email,
    				subject: `Восстановление пароля Bothubco`,
    				text: `Добрый день,\n\nВойдите в кабинет со следующими полями:\nE-mail: ${email}\n`+
					`Пароль: ${pwd}\n\nС уважением,\nКоманда Bothubco`
  				};
				
				transporter.sendMail(mailOptions, (err1, info) => {
      				if (err1) { return console.error('transporter err1 \n' + err1); }
      				res.json({
						success : true,
                   		message : 'Ваш пароль выслан на указанный имейл',
					});
  				});
			}
					
		
		})
	   
		})
	   
});

}
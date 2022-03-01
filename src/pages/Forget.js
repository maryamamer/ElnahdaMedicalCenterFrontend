import React from "react";
import logo from '../media/images/logo.jpeg';



function Login() {
    return ( 
<>

<section class="h-100">
		<div class="container h-100" />
			<div class="row justify-content-md-center align-items-center h-100">
				<div class="card-wrapper">
					<div class="brand">
						<img src={logo} alt="bootstrap 4 login page" />
					</div>
					<div class="card fat">
						<div class="card-body">
							<h4 class="card-title">هل نسيت كلمة السر ؟</h4>
							<form method="POST" class="my-login-validation" novalidate="" />
								<div class="form-group">
									<label for="email">البريد الألكتروني</label>
									<input id="email" type="email" class="form-control" name="email" value="" required autofocus />
									<div class="invalid-feedback">
										بريد الكتروني خطأ 
									</div>
									<div class="form-text text-muted">
										بالضغط على "تغيير كلمة السر" سوق يتم ارسال رسالة لك لتغييرها
								</div>

								<div class="form-group m-0">
									<button type="submit" class="btn btn-primary btn-block">
										تغيير كلمة السر
									</button>
								</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</section>
    
    
    
 
     </>
     );
}

export default Login;
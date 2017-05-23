$(function() {
	$.validator.addMethod('strongPassword',function(value,element) {
		return this.optional(element)
		|| value.length>=6
		&& /\d/.test(value)
		&&/[a-z]/i.test(value);
	},'your passowrd should have atleast one number and one chararter')
	$("#register-form").validate({

		rules: {

			email: {
				required: true,
				email: true
			},

			password:{
				required: true,
				strongPassword: true
			},

			password2: {
				required: true,
				equalTo:"#password"
			},

			firstName: {
				required: true,
				nowhitespace: true,
				lettersonly: true
			}

		},

		messages: {

			email: {
				required: 'Please Enter the email',
				email: 'Please enter the valid Email address'
			}
		}

	});
});
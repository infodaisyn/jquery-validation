// $(function() {
// 	$.validator.addMethod('strongPassword',function(value,element) {
// 		return this.optional(element)
// 		|| value.length>=6
// 		&& /\d/.test(value)
// 		&&/[a-z]/i.test(value);
// 	},'your password should have atleast one number and one chararter')
// 	$("#register-form").validate({

// 		rules: {

// 			email: {
// 				required: true,
// 				email: true
// 			},

// 			password:{
// 				required: true,
// 				strongPassword: true
// 			},

// 			password2: {
// 				required: true,
// 				equalTo:"#password"
// 			},

// 			firstName: {
// 				required: true,
// 				nowhitespace: true,
// 				lettersonly: true
// 			}

// 		},

// 		messages: {

// 			email: {
// 				required: 'Please Enter the email',
// 				email: 'Please enter the valid Email address'
// 			}
// 		}

// 	});
// });

$(function(){

	$.validator.setDefaults({
    errorClass: 'help-block',
    highlight: function(element) {
      $(element)
        .closest('.form-group')
        .addClass('has-error');
    },
    unhighlight: function(element) {
      $(element)
        .closest('.form-group')
        .removeClass('has-error');
    },
    errorPlacement: function (error, element) {
      if (element.prop('type') === 'checkbox') {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    }
  });


	$("#register-form").validate({

		rules: {

			email: {
				required: true,
				email: true
			},

			password: "required",
			password2: {
				required: true,
				equalTo: "#password"
			},

			firstName: {
				required: true,
				nowhitespace: true,
				lettersonly: true
			} 
		},

		messages: {

			email: {
				required:  "Please enter email",
				email: "Please enter valid email address"	
			},

			password: {
				required: "Please enter the password",
				password: " please enter valid password"
			},

			firstName: {
				required: "please Enter you First Name",
				lettersonly: "please enter A-Z letters"
			}

		}
	});

});
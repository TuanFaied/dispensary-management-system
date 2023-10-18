
function Validation(values) {
    let errors={};
    
     if(values.p_password.length < 5){
        errors.password = "Password must be more then five characters"
    }
    if(values.p_password != values.repassword){
        errors.repassword = "Enter the correct password"
    }

  return errors;
}

export default Validation
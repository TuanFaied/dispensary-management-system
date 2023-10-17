
function Validation(values) {
    let errors={};

    if(!values.p_name){
        errors.name="Name is required."
    }
    if(!values.p_email){
        errors.email="Email is required"
    }
    else if(!/\S+@\S+\.\S+/.test(values.p_email)){
        errors.email="Email is invalid."
    }

    if(!values.p_password){
        errors.password = "Password is required"
    }
    else if(values.p_password.length < 5){
        errors.password = "Password must be more then five characters"
    }
    if(values.p_password != values.repassword){
        errors.repassword = "Enter the correct password"
    }

  return errors;
}

export default Validation
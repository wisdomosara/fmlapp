import Server from '../../services/server/Server';

const token = localStorage.getItem('FMLToken');
const resetPasswordEndPoint = process.env.REACT_APP_CREATE_RESET_PASSWORD_END_POINT;
const headers = {"Content-Type": "application/json","Access-Control-Allow-Origin": "*",};

function validatePasswordInput(data,setInputError){
    // code here
    return true;
}

function resetPassword(data,passwordtoken,setRequested,setLoading,setStatus){
    Server.authBlogPost(`${resetPasswordEndPoint}/${passwordtoken}`,data,token,headers)
    .then(response=>{response && setRequested(true); response && setLoading(false);setStatus(response.data.success);})
    .catch(error=>{error && setRequested(true); error && setLoading(false);});
}

const ResetPasswordController={resetPassword,validatePasswordInput}

export default ResetPasswordController;
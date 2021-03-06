
import { getToken, handleUserResponse,appId,handleUserExpired} from "../utils/authProvider";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { AuthingGuard } from '@authing/react-ui-components'
// 引入 css 文件
import '@authing/react-ui-components/lib/index.min.css'
  
export const Login = () => {
  let navigate = useNavigate();
  useEffect(()=>{
     let token =getToken()
     if(token){
      navigate("setting")
     }
  },[navigate])
  const handleSubmit = async (userInfo:any) => {
        handleUserResponse(userInfo.token)
        handleUserExpired(userInfo.tokenExpiredAt)
        navigate("setting");
  }
  return (
  <AuthingGuard appId={appId} onLogin={handleSubmit} />
  );
};

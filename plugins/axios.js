// 引入错误拦截插件
import {Message} from "element-ui";

// redirect  方位     statusCode 状态码


export default function({$axios,redirect}){
        $axios.onError(err =>{
            const {statusCode,message} = err.response.data;
            if(statusCode === 400 ) {
                Message.warning({message});
            }
        })
}

import { authCode } from './share';
export function getUserId(Config, corpId){
 return new Promise(function(resolve, reject){
     authCode(corpId).then(function(result){
         const code = result.code;
         let params = Config.params || {};
         params.code = code;
         Config.params = params;
         request(Config, 'getUserId request bad').then(function(response){
             resolve(response);
         }).catch(function(error){
             reject(error);
         });
     }).catch(function(error){
         reject(error);
     });
 });
}
export default {
  getUserId,
};
import {request} from '@/network/Alldatas' ;

export function GetDatas(){
  return request({
    url:'/api/index.json'
  })
}
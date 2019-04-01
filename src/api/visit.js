import fetch from '@/utils/fetch'

export function getconcretedetailbytime(params) {
  const data =params;
    return fetch({
        url: '/concrete/getconcretedetailbytime',
        method: 'post',
        data
    })
}
export function setconcreterecord(params) {
  const data =params;
    return fetch({
        url: '/concrete/setconcreterecord',
        method: 'post',
        data
    })
}
export function gettraveltime(params) {
  const data =params;
    return fetch({
        url: '/concrete/gettraveltime',
        method: 'post',
        data
    })
}
export function setdayrecord(params) {
  const data =params;
    return fetch({
        url: '/concrete/setdayrecord',
        method: 'post', 
        data
    })
}
export function getuserinfo(params) {
  const data =params;
    return fetch({
        url: '/ding/getuserinfo',
        method: 'post',
        data
    })
}
export function getconcreterecorddetail(params) {
  const data =params;
    return fetch({
        url: '/concrete/getconcreterecorddetail',
        method: 'post',
        data
    })
}
export function gettravellist(params) {
  const data =params;
    return fetch({
        url: '/concrete/gettravellist',
        method: 'post',
        data
    })
}
export function gettraveldetail(params) {
  const data =params;
    return fetch({
        url: '/concrete/gettraveldetail',
        method: 'post',
        data
    })
}
export function getdayrecordlist(params) {
  const data =params;
    return fetch({
        url: '/concrete/getdayrecordlist',
        method: 'post',
        data
    })
}
export function deletedayrecord(params) {
  const data =params;
    return fetch({
        url: '/concrete/deletedayrecord',
        method: 'post',
        data
    })
}
export function committravelrecord(params) {
  const data =params;
    return fetch({
        url: '/concrete/committravelrecord',
        method: 'post',
        data
    })
}
export function getapproves(params) {
  const data =params;
    return fetch({
        url: '/approve/getapproves',
        method: 'post',
        data
    })
}
export function getmortgage(params) {
  const data =params;
    return fetch({
        url: '/approve/getmortgage',
        method: 'post',
        data
    })
}

export function sign(params) {
  const data =params;
    return fetch({
        url: '/ding/sign',
        method: 'post',
        data
    })
}
export function GetCheckInfoList(params) {
  const data =params;
    return fetch({
        url: '/document/GetCheckInfoList',
        method: 'post',
        data
    })
}
export function SaveCheckInfo(params) {
  const data =params;
    return fetch({
        url: '/document/SaveCheckInfo',
        method: 'post',      
        data
    })
}
export function getdoclist(params) {
  const data =params;
    return fetch({
        url: '/document/getdoclist',
        method: 'post',      
        data
    })
}
export function SavePic(params) {
  const data =params;
    return fetch({
        url: '/document/SavePic',
        method: 'post',
        headers:{'Content-Type':'multipart/form-data'},
        data
    })
}
export function getdochistory(params) {
  const data =params;
    return fetch({
        url: '/document/getdochistory',
        method: 'post',      
        data
    })
}
export function getpostmsg(params) {
  const data =params;
    return fetch({
        url: '/document/getpostmsg',
        method: 'post',      
        data
    })
}
export function getpsotmsgdetail(params) {
  const data =params;
    return fetch({
        url: '/document/getpsotmsgdetail',
        method: 'post',      
        data
    })
}
export function getannualrate(params) {
  const data =params;
    return fetch({
        url: '/commoncalc/getannualrate',
        method: 'post',      
        data
    })
}

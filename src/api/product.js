import fetch from '@/utils/fetch'

export function getcompetitorlist(params) {
  const data =params;
    return fetch({
        url: '/competitor/getcompetitorlist',
        method: 'post',
        data
    })
}
export function getcompetitordetail(params) {
  const data =params;
    return fetch({
        url: '/competitor/getcompetitordetail',
        method: 'post',
        data
    })
}

export function getactivitieslist(params) {
  const data =params;
    return fetch({
        url: '/activity/getactivitieslist',
        method: 'post',
        data
    })
}
export function getactivitiesdetail(params) {
  const data =params;
    return fetch({
        url: '/activity/getactivitiesdetail',
        method: 'post',
        data
    })
}


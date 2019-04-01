import count from '@/utils/count'
export function getannualrate(params) {
  const data =params;
    return count({
        url: '/commoncalc/getannualrate',
        method: 'post',
        data
    })
}
export function getmonthly(params) {
  const data =params;
    return count({
        url: '/commoncalc/getmonthly',
        method: 'post',
        data
    })
}
export function getrate(params) {
  const data =params;
    return count({
        url: '/commoncalc/getrate',
        method: 'post',
        data
    })
}
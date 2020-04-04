import Api from './api'

const Get = () => {
    Api.get('search_by_date?tags=story&page=0')
    .then(res => {
        console.log(res)
    })
}

export default Get
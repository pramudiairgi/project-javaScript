function uniteUnique(...args){
    return args.reduce((result,arrNow)=> {
        arrNow.forEach(item => {
            if (!result.includes(item)){
                result.push(item)
            }
        })
        return result
    },[])
}
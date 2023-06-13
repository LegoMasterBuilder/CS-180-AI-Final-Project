export default class APIService{
    static InsertTitle(title){
        return fetch(`/api/<string:title>/`,{
            'method':'POST',
             headers : {
            'Content-Type':'application/json'
      },
      title:JSON.stringify(title)
    })
    .then(response => response.json())
    .catch(error => console.log(error))
    }

}
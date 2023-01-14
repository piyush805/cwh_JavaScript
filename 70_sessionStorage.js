/*
Used less often than local stroage and methods are similar but 
    1.  Session storage exists only within current broswer tab. Another tab with same page will have a diff storage

    2.  Data survives page refresh but not opening-closing tab(even with same URL)- IT survives only for one session
*/

console.log(sessionStorage.getItem(key))

sessionStorage.removeItem(key) //remove a key value pair

sessionStorage.clear() //remove all key value pairs

sessionStorage.key(index);//key stored at that index

sessionStorage.length //number of key value pairs

//Event named storage Event
//triggered when local/session storage are triggered 
window.onstorage = (e)=>{
    alert("change");
    console.log(e);//has old value new value and all
}

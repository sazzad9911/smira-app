export async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

export const url ="http://165.232.178.79:4000"

export const setDeals=(doc)=>{
  return{
    type:'SET_DEALS',
    playload:doc
  }
}
export const setBrands=(doc)=>{
  return{
    type:'SET_BRANDS',
    playload:doc
  }
}
export const setHotels=(doc)=>{
  return{
    type:'SET_HOTELS',
    playload:doc
  }
}
export const setShortBy=(doc)=>{
  return{
    type:'SHORT',
    playload:doc
  }
}
export const setRating=(doc)=>{
  return{
    type:'RATING',
    playload:doc
  }
}
export const setBrand=(doc)=>{
  return{
    type:'BRAND',
    playload:doc
  }
}
export const setCategory=(doc)=>{
  return{
    type:'CATEGORY',
    playload:doc
  }
}
export const setLoader=(doc)=>{
  return{
    type:'SET_LOADER',
    playload:doc
  }
}
export const setUser=(doc)=>{
  return{
    type:'SET_USER',
    playload:doc
  }
}
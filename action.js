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

export const configAuth = {
  iosClientId: `686443341701-kvbrmfmruh0fgj0dd2c2cujfa0o8ftj8.apps.googleusercontent.com`,
  androidClientId: `686443341701-floc1isk5k3rk2ri5njlmfp9gqaajpph.apps.googleusercontent.com`,
  iosStandaloneAppClientId: `686443341701-kvbrmfmruh0fgj0dd2c2cujfa0o8ftj8.apps.googleusercontent.com`,
  androidStandaloneAppClientId: `686443341701-u1f3et3s9srnl7huf3amno5sp4mpsdg7.apps.googleusercontent.com`,
  scopes: ["profile", "email"]
}

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
export const setFamilyCode=(doc)=>{
  return{
    type:'SET_FAMILY_CODE',
    playload:doc
  }
}
export const setBottomSheet=(doc)=>{
  return{
    type:'SET_BOTTOM_SHEET',
    playload:doc
  }
}
export const setAnimatedLoader=(doc)=>{
  return{
    type:'SET_ANIMATED_LOADER',
    playload:doc
  }
}
export const setAction=(doc)=>{
  return{
    type:'SET_ACTION',
    playload:doc
  }
}
export const setTheme=(doc)=>{
  return{
    type:'SET_THEME',
    playload:doc
  }
}
export const setLanguage=(doc)=>{
  return{
    type:'SET_LANGUAGE',
    playload:doc
  }
}
export const setNotification=(doc)=>{
  return{
    type:'SET_NOTIFICATION',
    playload:doc
  }
}
export const setPageSettings=(doc)=>{
  return{
    type:'SET_PAGE_SETTINGS',
    playload:doc
  }
}
export const setMembership=(doc)=>{
  return{
    type:'SET_MEMBERSHIP',
    playload:doc
  }
}
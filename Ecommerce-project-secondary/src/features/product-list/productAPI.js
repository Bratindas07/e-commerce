// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) =>{
    //TODO : we will not hardcode-server URL here, we will change this later on 
    const response = await fetch('http://localhost:8080/products/')
    const data=await response.json() 
    resolve({data}) 
  } 
  );
} 

export function fetchAllProductsByFilters({filter,sort,pagination}) {
  //TODO: on server we will support multiple values 
  let queryString='';
  for(let key in filter){
    const categoryValues = filter[key];
    if (categoryValues.length>0){
      const lastCategoryValue = categoryValues[categoryValues.length-1];
      queryString+= `${key}=${lastCategoryValue}&` 
    }
  }
  for (let key in sort){
    queryString+=`${key}=${sort[key]}&`
  }

  for (let key in pagination){
    queryString+=`${key}=${pagination[key]}&`
  }
  return new Promise(async (resolve) =>{
    //TODO : we will not hardcode-server URL here, we will change this later on 
    const response = await fetch('http://localhost:8080/products?'+queryString)
    const data = await response.json() 
    // const totalItems = 100
    const products = data.data
    const totalItems = data.items
    //response.headers.get("X-Total-Count")
    // console.log(totalItems);
    resolve({
      data:{
      products:products, 
      totalItems:totalItems
    }}) 
  } 
  );
} 

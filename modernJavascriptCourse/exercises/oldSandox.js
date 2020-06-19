// const getTodos = (resource, callback) => {

//   const request = new XMLHttpRequest();

//   request.addEventListener('readystatechange', () => {

//     if(request.readyState === 4 && request.status === 200){
//       const data = JSON.parse(request.responseText);
//       callback(undefined, data);
//     } else if (request.readyState === 4){
//       callback('could not fetch the data', undefined);
//     }

//   });
  
//   request.open('GET', resource);
//   request.send();

// };


// const getSomething = () => {

//   return new Promise((resolve, reject) => {

//     resolve('some data');
//     //reject('some error');
//   });
// }


const getTodos = (resource) => {

    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
  
      request.addEventListener('readystatechange', () => {
    
        if(request.readyState === 4 && request.status === 200){
          const data = JSON.parse(request.responseText);
          resolve(data);
        } else if (request.readyState === 4){
          reject('could not fetch the data');
        }
    
      });
      
      request.open('GET', resource);
      request.send();
    });
  
  };
  
  getTodos('json/luigi.json').then(data => {
    console.log('promise resolved:', data);
  }).catch(err => {
    console.log('promise rejected:', err);
  });
  
  // promise example
  const getSomething = () => {
  
    return new Promise((resolve, reject) => {
      // do something (fetch data)
      // resolve('some data');
      reject('some error');
    });
  
  };
  
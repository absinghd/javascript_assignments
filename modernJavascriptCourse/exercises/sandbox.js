const getTodos = ( doItNow) => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    if(request.readyState === 4 && request.status ===200) {
      // const data = JSON.parse(request.responseText);
      doItNow(undefined, request.responseText);
    }
    else if(request.readyState ===4){
     doItNow("couldn't get the data", undefined);
    }
  })

  request.open('GET', "todos\bicky.json");
  request.send();
};

getTodos((err, data) => {
  console.log('shots fired');
  if(err) {
  console.log(err);
  }
  else{
    console.log(data);
  }
});
const promise = new Promise((resolve,reject) => {

});

const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
     console.log('Done!');
      }, 15000);
    });
  };
console.log('finish');
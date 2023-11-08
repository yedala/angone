/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  const response = data;
  let result: any = [];
  // response.forEach((res: any) => {
  //   res.nslAttr.forEach((attr: any) => {
  //     result.push(attr.id);
  //   })
  //   // console.log(res);
  // })
  
  postMessage(data);
  // return response.map((item: any) => item + 10);
});

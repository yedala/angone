/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  const response = data;
  let result: any = [];
  let nums = [5,7,6,78,8,10];
  let target = 8
 function searchRange(nums:any, target:any) {
   return [nums.indexOf(target), nums.lastIndexOf(target)];
 }
  response.forEach((res: any) => {
    result.push(res-10);
    searchRange(nums,result);
    // console.log(res);
  })
  
  postMessage(result);
  // return response.map((item: any) => item + 10);
});

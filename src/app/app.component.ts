import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angone';
  nums = [5,7,7,8,8,10];
   target = 8
  searchRange(nums:any, target:any) {
    return [nums.indexOf(target), nums.lastIndexOf(target)];
  }
  data: any = [];
  constructor() {
    for (let i = 0; i < 10000000; i++) {
      this.data.push(i);
    };



    let results: any = [];
    let data = this.data;

    function checktwo() {
      let t1 = performance.now();
      var t2;
      const worker1 = new Worker(new URL('./web1.worker.ts', import.meta.url));
      const worker2 = new Worker(new URL('./web1.worker.ts', import.meta.url));
      const worker3 = new Worker(new URL('./web1.worker.ts', import.meta.url));
      const worker4 = new Worker(new URL('./web1.worker.ts', import.meta.url));

      // const worker2 = new Worker('./webworker.js');
      const halfway = Math.floor(data.length/2 );

      worker1.onmessage = ({data}) =>{
        t2 = performance.now();
        console.log(t1,t2,new Date());
      }
      worker2.onmessage = ({data}) =>{
        t2 = performance.now();
        console.log(t1,t2,new Date());
      }
      worker3.onmessage = ({data}) =>{
        t2 = performance.now();
        console.log(t1,t2,new Date());
      }
      worker4.onmessage = ({data}) =>{
        t2 = performance.now();
        console.log(t1,t2,new Date());
      }
      worker1.postMessage(data.slice(0, 2500000));
      worker2.postMessage(data.slice(2500000,5000000));
      worker1.postMessage(data.slice(5000000, 7500000));
      worker2.postMessage(data.slice(7500000,10000000));

     
      console.log('two');
      

    }
    this.checkone();
    checktwo();

  }
  checkone() {
    var res: any = [];
    let t1 = performance.now();
    let t2;
    this.data.forEach((a: any, i: any) => {
      // res.push(a+10);
      this.searchRange(this.nums,this.target)

      // if(i===10000000){
        t2 = performance.now();
      // }
    });
    console.log('one');
    console.log(t1, t2);
  }
  
}

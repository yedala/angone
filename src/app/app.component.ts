import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'angone';
  Data: any =[];
  constructor() {
    this.createData();
  }
  createData(){
    for (let i = 0; i < 1000000; i++) {
      let entity: any = {
        nslAttr:[{name:'one',id:1},{name: 'two',id:2}, {name: 'three',id:3},{name: 'four',id:4}]
      }
      this.Data.push(entity);
    };
    this.checkone();
    this.checktwo();
    
  }
  checkone() {
    var res: any = [];
    let t1 = performance.now();
    let t2;
    this.Data.forEach((ent: any, i: any) => {
      ent.nslAttr.forEach((attr: any) => {
        res.push(attr.id);
      })
    });
    t2 = performance.now();
    console.log('one');
    console.log(t1, t2,t2-t1);
  }
   checktwo() {
     let res: any = [];
    let t1 = performance.now();
    var t2;
    const worker1 = new Worker(new URL('./web1.worker.ts', import.meta.url));
    const worker2 = new Worker(new URL('./web1.worker.ts', import.meta.url));
    worker1.onmessage = ({data}) =>{
      // res = data;
      t2 = performance.now();
      console.log(t1,t2,t2-t1);
    }
    worker2.onmessage = ({data}) =>{


      t2 = performance.now();
      console.log(t1,t2,t2-t1);
    }
    // worker3.onmessage = ({data}) =>{
    //   t2 = performance.now();
    //   console.log(t1,t2,new Date());
    // }
    // worker4.onmessage = ({data}) =>{
    //   t2 = performance.now();
    //   console.log(t1,t2,new Date());
    // }
    worker1.postMessage(1);
    worker2.postMessage(this.Data.slice(500000));
   

   
    // console.log('two');
    

  }
}

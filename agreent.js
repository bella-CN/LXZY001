// pages/agreent/agreent.js
Page({
  data:{
    name:"李月芳",
    students:[
      {id:0,name:"张三",age:"33"},
      { id: 1, name: "李四", age: "16" },
      { id: 2, name: "牛牛", age: "77" },
      { id: 3, name: "王青", age: "98" },
    ],
    count:0
  },
  add(){
    this.setData({
      count:this.data.count+1
    });
  },
  jian(){
    this.setData({
      count: this.data.count-1
    });
   
  }
})
let rectangle = {
    width: 10,
    height: 5,
    color: "blue",
}
 for (let key in rectangle){
    console.log(rectangle[key]);
 }

let x = rectangle.width * rectangle.height;
 console.log("diện tích hình chữ nhật là: " + x);
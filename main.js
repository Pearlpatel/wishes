var canvas = new fabric.Canvas('myCanvas');
 
function new_image(){
    fabric.Image.fromURL("BrithdayImage.jpg",function (Img) {	
	block_object_image=Img;
    //set width and height
    block_object_image.scaleToWidth(150);
   block_object_image.scaleToHeight(150);
    //set postion,,top=y,left=x
    block_object_image.set({
        top:0,
        left:0
    });
    canvas.add(block_object_image);
});

}


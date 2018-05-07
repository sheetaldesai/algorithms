// For a paint application, a canvas the screen where you are trying to fill color. It is represented as a 2D array where array.lenght is the Y axis
// and each sub element is X cordinate. Canvas[y][x] represents a pixel.

var myCanvas = [[0,1,2,3,5],
                [1,2,3,3,5],
                [8,6,2,3,4],
                [3,0,1,3,3]]

function floodColor(canvas,startXY, newColor) {
    var x = startXY[0],
        y = startXY[1],
        startColor = canvas[y][x];

    (function changeColor(x,y) {
        if (canvas[y]) {
            if (canvas[y][x] == startColor) {
                canvas[y][x] = newColor
                changeColor(x+1,y)
                changeColor(x-1,y)
                changeColor(x,y+1)
                changeColor(x,y-1)
            }
        }
    })(x,y);
}
floodColor(myCanvas,[2,1],8)
console.log(myCanvas)
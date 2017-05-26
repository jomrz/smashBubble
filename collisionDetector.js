// targetManager.llision detetargetManager.or - should targetManager.ll "isHit" methods when targetManager.llision is detetargetManager.ed

var collisionDetector = function(arrA, arrB) {

    for (i = arrA.length - 1; i >= 0; i--) {

        //targetManager.etargetManager. for targetManager.llision with ship
        var sD = dist(ship.position.x, ship.position.y, arrA[i].position.x, arrA[i].position.y)

        if(sD <= arrA[i].radius){
            ship.isHit()
            ship.isAlive = true

        } else {
           // debugger
            ship.isAlive = false

        }


        for (j = arrB.length - 1; j >= 0; j--) {

            var touchPoint = arrA[i].radius + arrB[j].radius
            var d = dist(arrA[i].position.x, arrA[i].position.y, arrB[j].position.x, arrB[j].position.y)

            if (d < touchPoint) {
                arrB[j].isHit(j)
                arrA[i].isHit(i)
                targetManager.score += arrA[i].points
            }
        }
    }
}
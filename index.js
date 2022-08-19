// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
    let noOfBlocks = blocks-42;
    if (Math.sign(noOfBlocks) === -1){
        return (-1)*noOfBlocks;
    }
    
    return noOfBlocks;
    
    
}


function distanceFromHqInFeet(blocks){ 
    let value = distanceFromHqInBlocks(blocks)
    
    let lengthInFeet = value*264;

    return lengthInFeet;
    

}

function  distanceTravelledInFeet(start, destination){
    let distanceInFeet = (start-destination)*264;
    if (Math.sign(distanceInFeet) === -1){
        return -1*distanceInFeet;
    }
    return distanceInFeet;    
}

function calculatesFarePrice(start, destination){
    let distanceTravelled = distanceTravelledInFeet(start, destination)
         
    let fare;

    if (distanceTravelled<= 400){
        return fare =0;
    }
    else if(distanceTravelled>400 && distanceTravelled< 2000){
        return fare = (distanceTravelled-400)* 2/100;
    }

    else if(distanceTravelled>2000 && distanceTravelled<2500){
        return fare = 25;
    }
    else if(distanceTravelled > 2500){
        return 'cannot travel that far'
    }
            
}


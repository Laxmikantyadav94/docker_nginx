function data(){
    return Promise.resolve(3);
}

function one(){
    setTimeout(()=>{
        return Promise.resolve(1);
    },1000)
}

function two(){
    return Promise.resolve(2);
}

function three(){
    return Promise.reject(3);
}

function abc(){
    data().then(async(input)=>{
        switch(input){
            case 1:
                let output=await one();
                console.log("one called",output);
                break;
            case 2:
                let output2= await two();
                console.log("two called",output2);
                break;
            case 3:
                let output3= await three();
                console.log("two called",output3);
                break;
        }
    }).then(()=> console.log("resolved"))
    .catch(()=> console.log("error"))
    
}

abc();
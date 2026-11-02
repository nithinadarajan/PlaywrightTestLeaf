//How var,let,const can be accessed

//var - function scoped, let, const - block scoped

/*function login(){
    var userName="nithi@gmail.com";
    if(true){
        var userName="subbu@gmail.com";
        console.log(userName);
    }

}
login(); */

/*function login(){
    let userName="nithi@gmail.com";
    if(true){
        let userName="subbu@gmail.com";
        console.log(userName);
    }
    console.log(userName);

}
login();*/

function login(){
    const userName="nithi@gmail.com";
    if(true){
        const userName="subbu@gmail.com";
        console.log(userName);
    }
    console.log(userName);

}
login();
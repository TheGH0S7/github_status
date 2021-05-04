const request = require('request');
const colors = require('colors');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });


function status(){
request('https://www.githubstatus.com/',  { json: true }, (err, res, body) => {  
    var name0 = body.components[0].name
    var status0 = body.components[0].status
    var name1 = body.components[1].name
    var status1 = body.components[1].status
    var name2 = body.components[2].name
    var status2 = body.components[2].status
    var name4 = body.components[4].name
    var status4 = body.components[4].status
    var name5 = body.components[5].name
    var status5 = body.components[5].status
    var name6 = body.components[6].name
    var status6 = body.components[6].status
    var name7 = body.components[7].name
    var status7 = body.components[7].status
    var name8 = body.components[8].name
    var status8 = body.components[8].status

    console.log("\n")
    console.log("===================".yellow)
    console.log("\n")

    if (status0 === "operational") {
        console.log(name0.blue,':'.blue, status0.green)
    } else {
        console.log(name0.blue,':'.blue, status0.red)
    }


    if (status1 === "operational") {
        console.log(name1.blue,':'.blue, status1.green)
    } else {
        console.log(name1.blue,':'.blue, status1.red)
    }


    if (status2 === "operational") {
        console.log(name2.blue,':'.blue, status2.green)
    } else {
        console.log(name2.blue,':'.blue, status2.red)
    }


    if (status4 === "operational") {
        console.log(name4.blue,':'.blue, status4.green)
    } else {
        console.log(name4.blue,':'.blue, status4.red)
    }


    if (status5 === "operational") {
        console.log(name5.blue,':'.blue, status5.green)
    } else {
        console.log(name5.blue,':'.blue, status5.red)
    }


    if (status6 === "operational") {
        console.log(name6.blue,':'.blue, status6.green)
    } else {
        console.log(name6.blue,':'.blue, status6.red)
    }


    if (status4 === "operational") {
        console.log(name7.blue,':'.blue, status7.green)
    } else {
        console.log(name7.blue,':'.blue, status7.red)
    }


    if (status8 === "operational") {
        console.log(name8.blue,':'.blue, status8.green)
    } else {
        console.log(name8.blue,':'.blue, status8.red)
    }


    console.log("\n")
    console.log("===================".yellow)
    console.log("\n")
    form()
});
}



function form() {
readline.question('Refresh? ', ref => {
    if(ref === 'yes') {
        console.clear()
        status()
    } else if (ref === 'y') {
        console.clear()
        status()
    } else if (ref === 'no') {
        console.clear()
        console.log('goodbye!'.red)
        process.exit()
    } else if (ref === 'n') {
        console.clear()
        console.log('goodbye!'.red)
        process.exit()
    } else {
        console.clear()
        console.log('Invalid Input!'.red)
        form()

    }
}
  )};



status()

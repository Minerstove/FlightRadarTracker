const { FlightRadar24API } = require("flightradarapi");
const frApi = new FlightRadar24API();
const fs = require('fs'); //To write to a file

//let flights = frApi.getFlights(...);
async function airlineList(){
    const writeStream = fs.createWriteStream('Airlines.txt');
    let airlines = await frApi.getAirlines();
    console.log(airlines);
    airlines.forEach(value => writeStream.write(`${JSON.stringify(value)}\n`));
    writeStream.on('finish', ()=> {
        console.log('wrote all the array data to file Airlines.txt');
    });
    writeStream.on('error', (err) => {
        console.error(`There is an error writing the file Airlines.txt => ${err}`)
    });
    writeStream.end();
    return 0;
}


airlineList();

    //fs.writeFile('Airlines.txt',airlines,(err)=>{if (err) throw err;}) data cannot be an array therefore
    
    /*var file = fs.createWriteStream('Airlines.txt');
    file.on('error',function(err){if(err) throw err});
    airlines.forEach(function(v){file.write(v.join(',')+'\n');});
    file.end() Failed Solution*/ 
var soap = require('soap');
var parseString = require('xml2js').parseString;

//      Link Ref
// 
//  https://www.npmjs.com/package/xml2js
//  https://www.npmjs.com/package/soap
// url : https://minitestsoap.herokuapp.com/soapAPI1/?wsdl

var url = 'http://127.0.0.1:8000/soapAPI1/?wsdl';
var getTempd = {text: 'get_temp'};
var setTempd = {room_id:"80012" ,tempV: 11.8, humidV: 13.4}

var getInfo = {text: 'get_information'}

var setdata_Weight = {name:"dddddddddd Psssorsss", address:"5012 sda 23123 dxczas ", weight:23.60}

soap.createClient(url, function(err, client) {
    // setTemp(client, setTempd)
    // getTemp(client, getTempd)
    
    // getInformation(client, getInfo)

    // setdataweight(client, setdata_Weight)
    // sended_something(client)
    get_all_stock_sended(client)
});

function getTemp(cli, args){
    cli.getTempData(args, function(err, result) {
        result = result.getTempDataResult
        parseString(result, function (err, result) {
            for(var i = 0; i < result.root.item.length ; i++){
                console.log(`////////////// ${i} /////////////`);
                console.log(`room : ${result.root.item[i]['room_id'][0]['_']}`);
                console.log(`temp : ${result.root.item[i]['temp'][0]['_']}`);
                console.log(`humid : ${result.root.item[i]['humid'][0]['_']}`);
                console.log(`date : ${result.root.item[i]['date'][0]['_']} \n`);
            }
        });
    })
}



function get_all_stock_sended(cli, args){
    cli.check_stock_sended_all(function(err, result) {
        console.log(result)
        result = result.check_stock_sended_allResult
        parseString(result, function (err, result) {
            for(var i = 0; i < result.root.item.length ; i++){
                console.log(`////////////// ${i} /////////////`);
                console.log(`name : ${result.root.item[i]['name'][0]['_']}`);
                console.log(`address : ${result.root.item[i]['address'][0]['_']}`);
                console.log(`weight : ${result.root.item[i]['weight'][0]['_']}`);
                console.log(`status_sended : ${result.root.item[i]['status_sended'][0]['_']} \n`);
            }
        });
    })
}

function getInformation(cli, args){
    cli.getInformation(args, function(err, result) {
        // console.log(result)
        result = result.getInformationResult
        parseString(result, function (err, result) {
            // console.log(result)
            if(result['Error']){
                console.log('Error')
            }else{
                if(result.root.item[0]['id'][0]['$']['type'] == 'str'){
                    if(result.root.item[0]['name'][0]['$']['type'] == 'str'){
                        if(result.root.item[0]['hobby'][0]['$']['type'] == 'str'){
                            displayShow(result)
                        }
                    }
                }
            }
            
        });
    })
}

function setdataweight(cli, args){
    cli.setDataWeight(args, function(err, result) {
        console.log(result);
    })
}

function sended_something(cli){
    cli.sended_something(function(err, result) {
        console.log(result);
    })
}


function displayShow(result){
    for(var i = 0; i < result.root.item.length ; i++){
        console.log(`////////////// ${i} /////////////`);
        console.log(`id : ${result.root.item[i]['id'][0]['_']}`);
        console.log(`name : ${result.root.item[i]['name'][0]['_']}`);
        console.log(`hobby : ${result.root.item[i]['hobby'][0]['_']}`);
    }
}

function setTemp(cli, args){
    cli.setTempData(args, function(err, result) {
        console.log(result);
    })
}

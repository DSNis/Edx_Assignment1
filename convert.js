const csv = require('csvtojson');
const fs = require('fs');
const filePath = 'C:\\Users\\User1\\Documents\\Node_JS\\edx_convert\\customer-data.csv'
csv().fromFile(filePath).then((jsonObj) => {
    var json = JSON.stringify(jsonObj);
    fs.writeFile('./convert.json',json, function(err){
         console.log(err);
    })
    console.log('File Saved!');
   
})


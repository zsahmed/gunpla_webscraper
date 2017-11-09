var fs = require('fs');
var contents = fs.readFileSync("../gunplaPretty.json");

var jsonContent = JSON.parse(contents);
var gunplaArray = [];

for (var i = 0; i < jsonContent.length; i++)
{
    var temp = jsonContent[i];
    temp.gunplaId = i;
    gunplaArray.push(temp);
}


fs.writeFile("gunplaJsonWithId.json", JSON.stringify(gunplaArray, null, 2), 'utf8', function (err) {
    if (err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});

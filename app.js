var request = require('request');
var client = require('cheerio-httpcli');
client.headers['User-Agent'] = 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_2_1 like Mac OS X; ja-jp) AppleWebKit/533.17.9 (KHTML,like Gecko) Version/5.0.2 Mobile/8C148a Safari/6533.18.5';
client.timeout = 240000;

now = new Date();
ny = now.getFullYear();
nm = ("0" + (now.getMonth() + 1)).slice(-2);
nd = ("0" + now.getDate()).slice(-2);

pre = new Date(ny,now.getMonth(),now.getDate()-1);
py = pre.getFullYear();
pm = ("0" + (pre.getMonth() + 1)).slice(-2);
pd = ("0" + pre.getDate()).slice(-2);

var yesterday = py + '-' + pm + '-' + pd;
var num = [];
var i = 0;

console.log(yesterday);
console.log('http://dd.eagle-r-s.net/hl/101/machine-information/machine-detail?rack_no=' + i + '&target_date=' + yesterday);
for(i = 638; i <= 1085; i++){
  if(i.toString().match(/4|9|688|70.|71.|72.|73[012]|78[35678]|80.|810|83[1235678]|8[5678].|10[01].|102[01]/)){
  }else{
    num.push(i.toString());
    client.fetch('http://dd.eagle-r-s.net/hl/101/machine-information/machine-detail?rack_no=' + i + '&target_date=' + yesterday, {}, function (err, $, res) {
        console.log($('h2#machine_name').text().replace(/\s+/g, "") + $('div.veiw_rack_no').text().replace(/\s+/g, ""));
        console.log($('div.detail_number').text().replace(/\s+/g, ""));
    });
  }
}

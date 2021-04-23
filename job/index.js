const cheerio = require('cheerio');
const axios = require('axios');
const fs = require('fs');
const { spawnSync } = require('child_process');
const { DateTime } = require("luxon");
let $;

async function get() {
    const { data } = await axios.get('https://covid19asi.saglik.gov.tr');
    return cheerio.load(data);
}

function scriptFind(text) {
    let val;
    $('script').each((index, scr) => {
        if (scr && scr.children && scr.children.length > 0 && scr.children[0].data && scr.children[0].data.indexOf(text) > -1 && scr.children[0].data.indexOf('ready') === -1) {
            val = scr.children[0].data;
        }
    });
    // val = scripts[0].children[0].data;
    return val.substr(val.indexOf('=') + 2, val.length - val.indexOf('=') + 1);
}

get().then(_$ => {
    $ = _$;    
    const toplamAsi = scriptFind('var yapilanasisayisi');
    const birinciDoz = scriptFind('var asiyapilankisisayisi1Doz');
    const ikinciDoz = scriptFind('var asiyapilankisisayisi2Doz');
    console.log('Aşı sayısı', toplamAsi);
    console.log('Birinci doz aşı sayısı', birinciDoz);
    console.log('Birinci doz aşı sayısı', ikinciDoz);
    const dj = JSON.parse(fs.readFileSync('../data.json'));
    const today = DateTime.now().setZone('Europe/Istanbul').toFormat('dd.MM.yyyy');
    console.log('Tarih:', today);
    if (dj[today]) {
        console.log('Okunan ', dj[today]);
        if (dj[today].firstTotal === 0) {
            dj[today].firstTotal = parseInt(toplamAsi);
        }
        dj[today].lastTotal = parseInt(toplamAsi);
	    dj[today].lastUpdate = DateTime.now().setZone('Europe/Istanbul').toFormat('HH:mm:ss');
    } else {
        dj[today] = {
            firstTotal: parseInt(toplamAsi),
            lastTotal: parseInt(toplamAsi),
	        lastUpdate: DateTime.now().setZone('Europe/Istanbul').toFormat('HH:mm:ss')
        }
    }
    console.log('Yazılan ', dj[today]);
    fs.writeFileSync('../data.json', JSON.stringify(dj));
});

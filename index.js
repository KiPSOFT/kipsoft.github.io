document.addEventListener('DOMContentLoaded', function () {
    Vue.component('counter', async () => {
        const template = `<div>
                    <p class="container">{{ date }}</p>
                    <p class="container">{{ vaccineCount }}</p>
                   </div>`;
        try {
            const data = { "19.04.2021": {
                "vaccineCount": 0,
                "lastCheckTime": "00:00"
            }};
            /*
            const result = await fetch('data.json');
            const data = await result.json(); */
            const today = (new Date()).toLocaleDateString('tr-TR', {
                year: 'numeric',
                month: '2-digit',
                day: 'numeric'
            });
            const val = {
                date: today,
                vaccineCount: data[today].vaccineCount
            };
            return {
                template,
                data: _ => {
                    return val;
                }
            };            
        } catch (err) {
            console.log(err);
        }
    });
    new Vue({
        el: '#app'
    });    
});
<template>
    <div>
        <p class="container">{{ date }}</p>
        <p class="container">{{ vaccineCount }}</p>
        <p class="container smalltext">Son güncellenme zamanı: {{ lastUpdate }}</p>
    </div>
</template>

<script>
    import eventBus from '../event-bus.js';
    import Base from './Base.vue';
    
    export default {
        extends: Base,
        data () {
            return {
                date: '',
                vaccineCount: '0',
                lastUpdate: '00:00:00'
            }
        },
        mounted() {
            const self = this;
            eventBus.$on('dataReceived', data => {
                try {
                    const today = self.today();
                    this.date = today;
                    this.vaccineCount = self.numberWithCommas(data[today].lastTotal - data[today].firstTotal);
                    this.lastUpdate = data[today].lastUpdate ? data[today].lastUpdate : '23:59:59';
                } catch (err) {
                    console.log(err);
                }
            });
        }
    }
</script>
<template>
    <div>
        <p class="container smalltext">Ortalama günlük aşı (7 günlük) : {{ avgVaccine }}</p>
        <p class="container smalltext">Toplam yapılan aşı sayısı : {{ lastTotal }}</p>
        <p class="container smalltext">Tahmini aşının tamamlanacağı tarih : {{ endDate }}</p>
    </div>    
</template>
<script>
import eventBus from '../event-bus.js';
import Base from './Base.vue';

export default {
    extends: Base,
    data() {
        return {
            avgVaccine: 0,
            lastTotal: 0,
            endDate: ''
        }
    },
    mounted() {
        const self = this;
        eventBus.$on('last7DaysData', (lastWeekData, data) => {
            let totalVaccine = 0;
            for(let d of lastWeekData) {
                totalVaccine+=parseInt(d);
            }
            self.avgVaccine = self.numberWithCommas(Math.floor(totalVaccine / 7));
            self.lastTotal = self.numberWithCommas(data[self.today()].lastTotal);
            const population = 83614362 - 22750657; // Reference https://data.tuik.gov.tr/Bulten/DownloadIstatistikselTablo?p=dFQyeZyM7sErBj7ZzWygyGGaqRqJXxbyjrZbjuXkq2qzXjmHKSxRVqPbuizcKiG0
            console.log('Population;', population);
            const neededVaccineCount = (population * 2) - parseInt(data[self.today()].lastTotal);
            console.log('Needed vaccine count;', neededVaccineCount);
            const dayCount = Math.floor(neededVaccineCount / Math.floor(totalVaccine / 7));
            console.log('Day count;', dayCount);
            const dt = new Date();
            dt.setDate(dt.getDate() + dayCount);
            self.endDate = dt.toLocaleDateString("tr-TR", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                });
        });
    }
}
</script>
<script>
import { Line } from "vue-chartjs";
import eventBus from '../event-bus.js';

export default {
    extends: Line,
    mounted() {
        const self = this;
        eventBus.$on('dataReceived', data => {
            const keys = Object.keys(data);
            const labels = [];
            const dataset = [];
            for(let i = 0; i < 7; i++) {
                labels.push(keys[(keys.length - 1) - i]);
                const val = data[keys[(keys.length - 1) - i]];
                dataset.push(val.lastTotal - val.firstTotal);
            }
            eventBus.$emit('last7DaysData', dataset, data);
            self.renderChart(
                {
                    labels: labels.reverse(),
                    datasets: [
                        {
                            label: 'Günlük aşı sayıları',
                            data: dataset.reverse(),
                            backgroundColor: "transparent",
                            borderColor: "rgba(1, 116, 188, 0.50)",
                            pointBackgroundColor: "rgba(171, 71, 188, 1)",
                            color: 'white'
                        }
                    ]
                },
                {
                    responsive: true,
                    maintainAspectRatio: false
                }
            );
        });
    }
}
</script>
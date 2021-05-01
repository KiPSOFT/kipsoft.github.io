<script>
    export default {
        methods: {
            numberWithCommas(x) {
                return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
            },
            today() {
                return new Date().toLocaleDateString("tr-TR", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                });
            }
        }
    }
</script>
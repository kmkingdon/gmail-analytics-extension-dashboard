
<script>
import { Doughnut } from 'vue-chartjs';

export default {
  extends: Doughnut,
  props: ['data'],
  mounted () {
    this.renderChart({
      labels: ['Opened', 'Not Opened'],
      datasets: [
        {
          backgroundColor: [
            '#41B883',
            '#E46651',
          ],
          data: this.data
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}
</script>

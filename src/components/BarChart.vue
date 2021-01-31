
<script>
  import { Bar } from 'vue-chartjs'

  export default {
    extends: Bar,
    data () {
      return {
        datacollection: {
          labels: ['z/OS', 'BFF', 'Frontend', 'Azure'],
          datasets: [
            {
                backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
              label: 'Migration Status',
              // backgroundColor: '#f87979',
              // pointBackgroundColor: 'white',
              // borderWidth: 1,
              // pointBorderColor: '#249EBF',
              data: [60, 40, 20, 50]
            }
          ]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }],
            xAxes: [ {
              gridLines: {
                display: false
              }
            }]
          },
          legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    mounted () {
      this.renderChart(this.datacollection, this.options)
    }
  }
</script>s
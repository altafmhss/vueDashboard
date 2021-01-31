<template>
 <div id="headers">
    <navbars />
      <ol class="breadcrumb">
      </ol>
      <ol class="breadcrumb">
      </ol>
    <Dashcards />
    <hr>
   <div class="content-wrapper">
    <div class="container-fluid">
    <div class="row">


  <div class="col-lg-7">
          <!-- Example Pie Chart Card-->
          <div class="card mb-3">
            <div class="card-header">
              <i class="fa fa-pie-chart"></i> Bar Chart Example</div>
            <div class="card-body">
                <Barchart height="200"/>
            </div>
            <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
          </div>
    </div>


       <div class="col-lg-5">
          <!-- Example Pie Chart Card-->
          <div class="card mb-3">
            <div class="card-header">
              <i class="fa fa-pie-chart"></i> Pie Chart Example</div>
            <div class="card-body">
                <Piechart  height="175"/>
            </div>
            <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
          </div>
    </div>
    </div>
    </div>
   </div>

    <hr/>
    <Datatables/>
<hr/>
<Footers/>
  </div>
</template>

<script>
import navbars from './navbar'
import Footers from './footer'
import Dashcards from './cards'
import Barchart from './BarChart'
import Piechart from './PieChart'
import Datatables from './datatables'

export default {
    name: 'headers',
  components: { navbars, Dashcards,Barchart,Piechart,Datatables,Footers}
}
</script>
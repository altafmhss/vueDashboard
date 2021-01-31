<template>
 <div id="headers">
    <navbars />
      <ol class="breadcrumb">
      </ol>
      <ol class="breadcrumb">
      </ol>
    <hr/>
    <Datatables/>
  </div>
</template>

<script>
import navbars from './navbar'
import Datatables from './datatables'
export default {
    name: 'headers',
  components: {navbars, Datatables}
}
</script>
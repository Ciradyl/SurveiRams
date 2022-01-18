<template>

    <q-page class="constrain-more q-pa-md">

       <!-- HEADER-->
   <div class="z-absolute bg-accent">
      <div class="row q-pa-sm text-white q-pt-lg">
        <!--Back-->
        <div class="col q-pl-md">
        </div>

        <!--page title-->
        <div class="row">
          </div>
            <div class="col text-center text-weight-bolder text-h6  q-pr-md">
              Patrolling Mode
            </div>
          <div class="col">
        </div>

      </div>   
    </div>
      <!-- end header-->

       <div class=" fit q-pa-md">

    <q-card bordered class="my-card"
    style="border-radius: 4px">
      <q-card-section>
        <div class="text-h6" style="margin-top: 30px">Assignment #</div>
      </q-card-section>

 
   <q-input filled v-model="date">
        <template v-slot:prepend>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy transition-show="scale" transition-hide="scale">
              <q-date v-model="date" mask="YYYY-MM-DD HH:mm">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>

        <template v-slot:append>
          <q-icon name="access_time" class="cursor-pointer">
            <q-popup-proxy transition-show="scale" transition-hide="scale">
              <q-time v-model="date" mask="YYYY-MM-DD HH:mm" format24h>
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-time>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
    </q-card>
  </div>

  <q-scroll-area
      :thumb-style="thumbStyle"
      :content-style="contentStyle"
      :content-active-style="contentActiveStyle"
      style="height: 225px; border-radius: 4px; margin-top: -10px"
      class="bg-grey-3 q-mx-md q-mb-sm" >

  <div class="fit q-pa-md" style="margin-top: -20px">
     <q-table
      :grid="$q.screen.xs"
      title="Generated Route"
      :rows="rows"
      :columns="columns"
      row-key="name"
      :filter="filter"
      hide-header
    >
    
    </q-table>

  </div>

  </q-scroll-area>

  <!-- reports -->

   <q-scroll-area
      :thumb-style="thumbStyle"
      :content-style="contentStyle"
      :content-active-style="contentActiveStyle"
      style="height: 180px; border-radius: 4px;"
      class="bg-grey-3 q-mx-md q-pa-xs" >


  
    <!-- card --> 
<q-card bordered class="my-card q-px-sm" style="border-radius: 1px;">      <div class="row">

          <div class="col">
       
           <q-card-section class="q-pt-md text-subtitle1 text-bold">
            Report #1
           </q-card-section>

           <q-card-section class="q-pb-xs q-pt-xs" style="margin-top: -10px;">
           12/12/21 00:00:00 
           </q-card-section>
           </div>

          <div class="row q-pr-lg" style="padding-top: 30px; padding-bottom: 15px;margin-right: -6px;">
            <div class="cursor-pointer">
     
          <q-btn class="q-ma-sm" 
            inset-shadow-down	
                 outline round 
                 color="positive" 
                 icon="edit" 
                 style="margin-top: -5px"/>

          <q-btn class="q-ma-sm" 
                 outline round 
                 color="negative" 
                 icon="delete"
                 style="margin-top: -5px" />

            </div>
          </div> 
         
      </div>
    </q-card>

    <!--end-->

      <!-- card --> 
    <q-card bordered class="my-card q-px-smd" style="border-radius: 1px;">
      <div class="row">

          <div class="col">
       
           <q-card-section class="q-pt-md text-subtitle1 text-bold">
            Report #2
           </q-card-section>

           <q-card-section class="q-pb-xs q-pt-xs" style="margin-top: -10px;">
           12/12/21 00:00:00 
           </q-card-section>
           </div>

          <div class="row q-pr-lg" style="padding-top: 30px; padding-bottom: 15px;margin-right: -6px;">
            <div class="cursor-pointer">
     
          <q-btn class="q-ma-sm" 
            inset-shadow-down	
                 outline round 
                 color="positive" 
                 icon="edit" 
                 style="margin-top: -5px"/>

          <q-btn class="q-ma-sm" 
                 outline round 
                 color="negative" 
                 icon="delete"
                 style="margin-top: -5px" />

            </div>
          </div> 
         
      </div>
    </q-card>
    
    <!--end-->

   </q-scroll-area>
       <!--Finish-->
        <div class="cursor-pointer">
       
          <div>
        <div class="q-pa-md">
         <q-btn rounded
                  class="fit bg-secondary q-pa-md text-white" 
           label="Finish" to="/Assignments"/>
        </div>
          </div>
        </div>



    </q-page>

</template>


<!--script-->
<script>
import { ref } from 'vue'
  const columns = [
    {
      name: 'Time',
      required: true,
      label: 'Time',
      align: 'left',
      field: row => row.name,
      format: val => `${val}`,
      sortable: true
    },
    { name: 'Post', align: 'center', label: 'Post', field: 'post', sortable: true },
        { name: 'Sign', align: 'center', label: 'Signature', field: 'signature', sortable: true }
  ]
//23-500 OIC/SIC LOBBY South 
  const rows = [
    {
      name: '23:00 PM',
      post: 'OIC/SIC',
      signature: 'ASD10289SPA' 
    },
    {
      name: '00:00 MN',
      post: 'LOBBY',
      signature: 'ASD10289SPA' 
    },
    {
      name: '01:00 AM',
      post: 'SOUTH',
      signature: 'ASD10289SPA' 
    },
  ]

export default {
  setup () {
    return {
      //calendar
      date: ref('2019-02-01 12:44'),
      //route
      filter: ref(''),
      columns,
      rows
    }
  }
}
</script>

<!--style-->
<style lang="sass">
.camera-frame
    border: 2px solid $grey-10
    border-radius: 10px

.q-page
    overflow: hidden

</style>


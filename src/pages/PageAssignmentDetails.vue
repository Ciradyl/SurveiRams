<template>
  <q-page class="constrain-more q-pa-md">
    <!-- HEADER-->
    <div class="z-absolute bg-accent">
      <div class="row q-pa-sm text-white q-pt-lg">
        <!--Back-->
        <div class="col q-pl-md">
          <q-btn 
            flat 
            round 
            class="q-pb-sm"
            to="/Assignments"
          >
            <q-icon            
              name="fas fa-arrow-alt-circle-left"
              size="sm"
            />
          </q-btn>
        </div>

        <!--page title-->
        <div class="row">
          </div>
            <div class="col text-center text-weight-bolder text-h6  q-pr-md" style="margin-bottom: 15px">
              Patrolling
            </div>
          <div class="col">
        </div>
      </div>
    </div>
    <!-- end header-->


    <div class=" fit q-px-md q-pb-sm">
      <q-card 
        bordered 
        class="my-card"
        style="border-radius: 20px"
      >
        <q-card-section>
          <div class="text-h6">Assignment #</div>
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
        style="height: 460px; border-radius: 20px; margin-top: 0px"
        class="bg-grey-3 q-ma-md q-pt-lg" >

    <div class="fit q-pa-md">
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

    <!--Begin-->
    <div class="q-pa-md">
      <q-btn
        rounded 
        size="20px" 
        class="fit text-weight-bold bg-secondary text-white" 
        label="Begin" 
        to="/patrollingmode"
      />
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


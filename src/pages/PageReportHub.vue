<template>
  <q-page class="q-pa-md">
    <!-- HEADER-->
    <div class="z-absolute bg-accent">
      <div class="row q-pa-sm text-white q-pt-lg">
        <!--Back-->
        <div class="col q-pl-xs">
          <q-btn 
            flat 
            round 
            class="q-pb-sm"
            to="/Patrollingmode"
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
            <div class="col text-center text-weight-bolder text-h6 q-pr-md ">
              Reports
            </div>
          <div class="col">
        </div>

      </div>   
    </div>
      <!-- end header-->

      <!-- scroll area -->
    <div class="q-pt-md">
      <q-card bordered class="fit my-card q-pt-md" style="border-radius: 20px; margin-bottom: 5px;">
        <q-card-section>
          <div class="text-h6 q-pt-lg text-weight-bold">
            Anomalies
          </div>
          <div class="row text-subtitle1 text-weight-light text-grey-7">
            Found any?
          </div>
        </q-card-section>
    </q-card>
    
    <!-- card --> 
      <q-scroll-area
        :thumb-style="thumbStyle"
        :content-style="contentStyle"
        :content-active-style="contentActiveStyle"
        style="height:420px; border-radius: 20px;"
        class="bg-grey-3 " 
      >
          <!--card section-->  
            <div class="row q-pt-sm q-pb-xs q-px-md">
              <q-card class="fit" style="height: 30px; border-radius: 10px; margin-top: 10px;">
               <q-card-section>
               <div class="row q-pa-sm">
                    <!--title-->
                    <div class="col text-bold text-grey-9 text-h7">
                      Report 1
                      <!--time interval-->
                        <div class="row text-grey-7 text-h8">
                          00:00 - 00:00
                        </div>
                    </div>
                    <!--edit-->
                      <div class="row q-pr-md q-pt-sm text-grey-7 text-h8">  
                        <q-icon 
                        name="edit"
                          class="text-positive" 
                          style="font-size: 2em;"  
                          clickable 
                          cursor-pointer	
                          v-ripple 
                          @click="home"  
                        />
                      </div>
                    <!--edit-->
                      <div class="row q-pr-xs q-pt-sm text-grey-7 text-h8">  
                        <q-icon 
                        name="delete"
                          class="text-negative" 
                          style="font-size: 2em;"  
                          clickable 
                          v-ripple 
                          @click="home"  
                        />                      
                      </div>
                </div>
               </q-card-section>
              </q-card>
            </div>
          <!-- end -->

          <!--card section-->  
            <div class="row q-pt-sm q-pb-xs q-px-md">
              <q-card class="fit" style="height: 30px; border-radius: 10px">
               <q-card-section>
               <div class="row q-pa-sm">
                    <!--title-->
                    <div class="col text-bold text-grey-9 text-h7">
                      Report 2
                      <!--time interval-->
                        <div class="row text-grey-7 text-h8">
                          00:00 - 00:00
                        </div>
                    </div>
                    <!--edit-->
                      <div class="row q-pr-md q-pt-sm text-grey-7 text-h8">  
                        <q-icon 
                        name="edit"
                          class="text-positive" 
                          style="font-size: 2em;"  
                          clickable 
                          v-ripple 
                          @click="home"  
                        />
                      </div>
                    <!--edit-->
                      <div class="row q-pr-xs q-pt-sm text-grey-7 text-h8">  
                        <q-icon 
                        name="delete"
                          class="text-negative" 
                          style="font-size: 2em;"  
                          clickable 
                          v-ripple 
                          @click="home"  
                        />                      
                      </div>
                </div>
               </q-card-section>
              </q-card>
            </div>
          <!-- end -->
          
          <!--card section-->  
            <div class="row q-pt-sm q-pb-xs q-px-md">
              <q-card class="fit" style="height: 30px; border-radius: 10px">
               <q-card-section>
               <div class="row q-pa-sm">
                    <!--title-->
                    <div class="col text-bold text-grey-9 text-h7">
                      Report 3
                      <!--time interval-->
                        <div class="row text-grey-7 text-h8">
                          00:00 - 00:00
                        </div>
                    </div>
                    <!--edit-->
                      <div class="row q-pr-md q-pt-sm text-grey-7 text-h8">  
                        <q-icon 
                        name="edit"
                          class="text-positive" 
                          style="font-size: 2em;"  
                          clickable 
                          v-ripple 
                          @click="home"  
                        />
                      </div>
                    <!--edit-->
                      <div class="row q-pr-xs q-pt-sm text-grey-7 text-h8">  
                        <q-icon 
                        name="delete"
                          class="text-negative" 
                          style="font-size: 2em;"  
                          clickable 
                          v-ripple 
                          @click="home"  
                        />                      
                      </div>
                </div>
               </q-card-section>
              </q-card>
            </div>
          <!-- end -->                           
        </q-scroll-area>
        <!-- scroll area end -->
      </div>



      <!--create report-->
      <div class="row q-px-md q-pt-md">
        <div class="col">
          <q-btn rounded to="/patrollingreport" class="fit bg-secondary text-white q-pa-md"> 
            New Report
          </q-btn>
        </div>
      </div>
      <!-- end button-->

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



<template>
  <q-page>
    <!--header-->
    <div class="z-absolute bg-accent">
      <div class="row q-pa-sm text-white q-pt-lg">
        <!--Back-->
        <div class="col q-pl-md">
          <q-btn 
            flat 
            round 
            class="q-pb-sm"
            to="/Home"
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
            <div class="col text-center text-weight-bolder text-h6 q-pr-lg ">
              {{ $route.name }}
            </div>
          <div class="col">
        </div>

      </div>   
    </div>

    <!--body-->
    <div class="row q-pt-md">
      <div class="col q-px-md">         
        <q-card class="my-card">
        <q-card-section elevated class="q-pt-xl" />
    
        <!--tabs-->
        <q-tabs v-model="tab" align="justify" class="text-secondary q-pt-xl" >
          <q-tab no-caps label="Assigned" name="Assigned" />
          <q-tab no-caps label="Completed" name="Completed" />
        </q-tabs>

        <q-tab-panels v-model="tab" animated class="bg-grey-1 elevated">
          <!--Assigned-->
          <q-tab-panel name="Assigned">
            <q-scroll-area
              :thumb-style="thumbStyle"
              :bar-style="barStyle"
              style="height: 450px; min-width: 300px;"
              class="col"
            >
              <!--Assignments available-->   
              <div class="row q-px-xs q-pb-md" style="height: 75px;">           
                  <q-btn 
                    exact 
                    no-caps 
                    to="/assignmentdetails" 
                    class="col text-grey-8" 
                    label="Assignment 1" 
                    align="left" />
              </div>
            </q-scroll-area>

            <!--no assignments available icon-->
            <div class="absolute-center ">
              <div class="row q-pl-xl">
                <q-icon name="assignment"  color="grey-4" style="font-size: 4em;"/>
              </div>
              <div class="row text-grey-5 text-h8">
                No Assignments available
              </div>
            </div>
          </q-tab-panel>

          <!--Completed-->
          <q-tab-panel name="Completed">
            <q-scroll-area
              :thumb-style="thumbStyle"
              :bar-style="barStyle"
              style="height: 450px; min-width: 300px;"
              class="col"
            >
              <!--Assignments available-->   
              <div class="row q-px-xs q-pb-md" style="height: 75px;">              
                  <q-btn 
                    to="/assignmentdetails" 
                    exact no-caps 
                    class="text-grey-8 fit" 
                    label="Assignment 1" 
                    align="left" 
                    
                    icon-right="check" 
                  />
              </div>
            </q-scroll-area>

            <!--no completed ssignments icon-->
            <div class="absolute-center ">
              <div class="row q-pl-xl">
                <q-icon name="assignment"  color="grey-4" style="font-size: 4em;"/>
              </div>
              <div class="row text-grey-5 text-h8">
                No Assignments available
              </div>
            </div>
          </q-tab-panel>
        </q-tab-panels>
        </q-card>
      </div>
    </div>


  </q-page>
</template>

<!--script-->
<script>
  import { ref } from 'vue'
  
  export default {
    name: 'PageAssignments',
    setup () {
      const search = ref('')
      const inputRef = ref(null)
      function toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
      return {
        alert: ref(true),
        confirm: ref(false),
        prompt: ref(false),
        address: ref(''),
        model: ref(''),
        inputRef,
        tab: ref(''),
        search,
        thumbStyle: {
          right: '4px',
          borderRadius: '5px',
          backgroundColor: '#E4AC44',
          width: '5px',
          opacity: 0.75
      },

      barStyle: {
        right: '2px',
        borderRadius: '9px',
        backgroundColor: 'white',
        width: '9px',
        opacity: 0.2
      }
      }
    }
  }
  </script>
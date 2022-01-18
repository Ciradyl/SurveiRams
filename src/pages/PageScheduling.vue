<template>
  <q-page>
    <!--header-->
    <div class="z-absolute bg-accent">
      <div class="row q-pa-sm text-white q-pt-lg">
        <!--Back-->
        <div class="col q-pl-md">
          <q-icon 
            name="logout"
            size="25px"
            clickable
            v-ripple
            @click="home" 
          />
        </div>

        <!--page title-->
        <div class="row">
          </div>
            <div class="col text-center text-h6  q-pr-xl">
              SCHEDULING
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
          <div class="row bg-white q-px-sm q-pb-sm">
            <div class="col">
              <!--search function-->
              <q-input rounded color="secondary bg-grey-2" v-model="text" label="Search">
                <template v-slot:prepend>
                  <q-icon name="search" class="q-pl-md" />
                </template>
              </q-input>
            </div>
            <!--new schedule - DESKTOP -->
            <div class="row gt-xs q-px-md">
              <q-btn to="/Route" no-caps class="q-pa-md bg-secondary text-white text-bold">
                New Schedule
              </q-btn>
            </div>
          </div>
          <q-splitter
            v-model="splitterModel"
            horizontal
            :limits="[20, 50]"
            style="height: 580px"
            class="col bg-grey-3"
          >
            <!--calendar-->
            <template v-slot:before>
              <q-date v-model="date" minimal class="fit bg-grey-4 text-black"/>
            </template>

            <!--expand/shrink-->
            <template v-slot:separator>
              <q-avatar rounded color="secondary" text-color="white" style="width: 40px; height: 15px"/>
            </template>

            <!--Date-->
            <template v-slot:after>
              <div class="q-pa-md">

            <!--routes-->
            <q-table
              v-model:pagination="pagination"            
              color="secondary"
              :loading="loading"
              :rows="reports"
              :columns="columns"
            />
                <template>
                  <q-inner-loading
                    showing
                    color="primary"
                  />
                </template>
              </div>
            </template>
          </q-splitter>
          </q-card>
          <!--floating add button - MOBILE -->
          <q-page-sticky position="bottom-right" :offset="[18, 18]" class="lt-sm">
            <q-btn to="/Route" fab icon="add" color="secondary" />
          </q-page-sticky>
      </div>     
    </div>


  </q-page>
</template>

<!--script-->
<script>
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    name: 'PageSchedule',
    setup () {
      const inputRef = ref(null)
      const loading = ref(true)
      const reports = ref([])
      const axios = require('axios')
      
      const pagination = ref({
        sortBy: 'name',
        descending: false,
        page: 1,
        rowsPerPage: 3
      })

      const columns = [
        {
          name: 'Schedule',
          label: 'schedule',
          field: 'schedule',
          align: 'left'
        },
        {
          name: 'Security Personnel',
          label: 'security_personnel',
          field: 'security_personnel',
          align: 'center'
        },
        {
          name: 'Post',
          label: 'post',
          field: 'post',
          align: 'right'
        }         
      ]

       axios.get('http://localhost:8000/api/route') 
       .then(response => {
         reports.value = response.data.route
       })
       .finally(() => {
         loading.value = false
       })
       
      return {
        //Time and date
        splitterModel: ref(50),
        date: ref('2021/12/14'),

        alert: ref(false),
        confirm: ref(false),
        prompt: ref(false),
        address: ref(''),
        model: ref(''),
        inputRef,

        columns,
        loading,
        reports,
        pagination
    }}
  })
  </script>
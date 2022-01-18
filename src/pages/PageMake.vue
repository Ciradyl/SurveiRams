<template>
  <q-layout view="lHh Lpr lFf" class="bg-white">
  <!--header-->
      <q-toolbar class="q-pa-md bg-accent text-white text-weight-bold">
        <q-btn flat round dense icon="close" to="/Scheduling" />
          <q-toolbar-title>Schedule and Route</q-toolbar-title>
        <q-btn flat round dense icon="send" @click="send()" label="Send"  />
      </q-toolbar>

  <!--calendar-->
      <div class="q-px-md q-py-md" style="max-width: 1080px absolute-top">
        <q-input filled v-model="schedule">

          <template v-slot:prepend>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-date v-model="schedule" mask="YYYY-MM-DD HH:mm">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>

          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-time v-model="schedule" mask="YYYY-MM-DD HH:mm" format24h>
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-icon>
          </template>

        </q-input>

  <!--add Security Personnel-->
    <q-input 
      label="Security Personnel"
      outlined v-model="security_personnel"  
      class="q-px-md q-py-md" 
      style="max-width: 1080px absolute-top" 
    />

  <!--Post-->
    <q-input 
      label="Post"
      outlined v-model="post"  
      class="q-px-md q-py-md" 
      style="max-width: 1080px absolute-top" 
    />
    </div>
  </q-layout>
</template>


<!--script-->
<script>
import { ref } from 'vue'
import axios from 'axios'

export default {
   name: 'PageMake',
  
  created () {
      // upon loading do something...
  },
  data () {
      return {
        schedule: ref('schedule'),
        security_personnel: "",
        post: ""
      }
      
      console.log(schedule);
  },

  methods: {
      send() {
        var _this = this;
        axios.post(
          'http://localhost:8000/api/make', 
          {
            schedule: this.schedule,
            security_personnel: this.security_personnel,
            post: this.post
          }
        )
        .then(function (response) {
          console.log(response.data);
          _this.$router.push({ name: 'route' })
        })
        .catch(function (error) {
          console.log(error)
          if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data.error);
          }
        });
      },
    }
}
</script>

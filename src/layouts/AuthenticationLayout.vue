<template>
    <!--logo name-->
    <div class="row q-pr-xl q-mr-xl q-pt-xs">
      <div class="col">
        </div>
          <div class="col">
            <img src="~assets/Ramslogo.png" style="min-height: 25px; max-width: 200px">
          </div>
        <div class="col">
      </div>
    </div>
    
    <!--background-->
    <div class="row gt-xs bg-image">
      <div class="col">
        <q-img src="~assets/Artboard2.png" class="absolute-full"/>
      </div>
    </div>

 <!--authentication-->
 <div
      class="row
      absolute-center 
      "
    >
      <q-card elevated style="width: 750px; max-width: 100vw; absolute-center ">
        <q-card-section class="row">
        <!--col 0-->
        <div class="col">
          <!--Welcome-->
          <div class=" text-h5 text-secondary text-bold q-pa-md">Welcome Back!</div>
          <div class="subtitletext-h1 text-grey-7 text-light q-px-md">We are excited to see you again!</div>
         
          <!--Username-->
           <div class="q-pl-md q-pt-md q-pb-md">
              <div style="max-width: 450px">
                <q-input outlined v-model="username" color="secondary"  label="Username" />
              </div>
            </div>

          <!--Password-->
          <div class="q-pl-md q-pt-md q-pb-md">
            <div style="max-width: 450px; ">
              <q-input outlined v-model="password"  :type="isPwd ? 'password' : 'text' " hint="Forgot your password?" color="secondary" label="Password">
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>
            </div>
          </div>

          <!--Login-->
          <div class="q-pa-md">
            <div class="q-gutter-md " style="max-width: 450px;">
              <q-btn @click="login()" exact no-caps color="secondary" label="Login" class="fit"/>
            </div>
          </div>
        </div>

        <!--col 1-->
        <div class="col gt-xs">
          <img src="~assets/Ramslogo.png" style="height: 300px; max-width: 300px" class="q-mx-xs absolute-right q-my-xl q-mr-xl"/>
        </div>

        </q-card-section>
      </q-card>
  </div>

</template>

<!--script-->
<script>
  import { ref } from 'vue'
  import { useQuasar } from 'quasar'
  import axios from 'axios'

  export default {
    name: 'AuthenticationLayout',
    setup () {
      const search = ref('')
      const inputRef = ref(null)
      const $q = useQuasar()

      function alert(title, message) {
        $q.dialog({
          title: title,
          message: message
        });
      }

      return {
        isPwd: ref(true),
        alert
      }
    },
    created () {
      // upon loading do something...
    },
    data () {
      return {
        username: "",
        password: ""
      }
    },
    methods: {
      login() {
        var _this = this;
        axios.post(
          'http://localhost:8000/api/login', 
          {
            username: this.username,
            password: this.password
          }
        )
        .then(function (response) {
          console.log(response.data);
          _this.$router.push({ name: 'home' })
        })
        .catch(function (error) {
          console.log(error)
          if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data.error);
            this.alert(
              "Authentication failed",
              error.response.data.error
            );
          }
        });
      },
    }
  }
  </script>

<!--style-->
  <style lang="sass">
  .YL
    &__toolbar-input-container
      min-width: 100px
      width: 55%
    &__toolbar-input-btn
      border-radius: 0
      border-style: solid
      border-width: 1px 1px 1px 0
      border-color: rgba(0,0,0,.24)
      max-width: 60px
      width: 100%
    &__drawer-footer-link
      color: inherit
      text-decoration: none
      font-weight: 500
      font-size: .75rem
      &:hover
        color: #000
  </style>


<template>
  <q-page>
    <!--header-->
    <div class="z-absolute bg-accent">
      <div class="row q-pa-sm text-white q-pt-lg">
        <div dense class="col q-pl-xl">
          </div>
            <!--page title-->
            <div class="col text-center text-bold text-h6">
              HOME
            </div>
          <div class="col">
        </div>
        <!--logout-->
        <div class="row q-pr-md">
          <q-icon 
            name="logout"
            size="25px"
            clickable
            v-ripple
          />
        </div>
      </div>   
    </div>

    <!--body-->

    <div class="row q-pt-md">
      <div class="col q-px-md">         
          <q-card>

            <!--profile picture-->
            <div class="row q-px-xl q-pt-md q-pb-sm">
              <q-avatar size="80px" class="col vertical-center">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
              </q-avatar>         
            </div>

            <!--name-->
            <div class="row q-px-xl q-pb-xs">            
              <div class="col text-center text-bold text-grey-8">
                Shakam de Bosos
              </div>
            </div>  

            <!--id number-->
            <div class="row q-px-xl q-pb-md">            
              <div class="col text-center text-grey-6">
                ID: 0000-0000
              </div>
            </div>   

          </q-card>
      </div>
    </div>

    <div class="row q-pt-xl">
      <div class="col q-pr-md q-pl-sm">             
          <q-card v-ripple  @click="goToSchedule()" class="my-box cursor-pointer q-hoverable">

            <!--icon-->
            <div class="row q-pt-lg">
              <q-avatar class="col vertical-center text-secondary">
                <q-icon name="schedule" size="40px"/>
              </q-avatar>         
            </div>

            <!--name-->
            <div class="row q-pb-md">            
              <div class="col text-center text-bold text-grey-8">
                Scheduling
              </div>
            </div>  

          </q-card>
      </div>      
    </div>

    <div class="row q-pt-md q-pb-xl">
      <div class="col q-pr-sm q-pl-md">             
          <q-card v-ripple @click="goToFeedback()" class="my-box cursor-pointer q-hoverable">

            <!--icon-->
            <div class="row q-pt-lg">
              <q-avatar class="col vertical-center text-secondary">
                <q-icon name="feedback" size="40px"/>
              </q-avatar>         
            </div>

            <!--name-->
            <div class="row q-pb-md">            
              <div class="col text-center text-grey-8">
                Feedbacks
              </div>
            </div>  

          </q-card>
      </div>

      <div class="col q-pr-md q-pl-sm">             
          <q-card v-ripple @click="goToMembers()" class="my-box cursor-pointer q-hoverable">

            <!--icon-->
            <div class="row q-pt-lg">
              <q-avatar class="col vertical-center text-secondary">
                <q-icon name="people" size="40px"/>
              </q-avatar>         
            </div>

            <!--name-->
            <div class="row q-pb-md">            
              <div class="col text-center text-bold text-grey-8">
                Members
              </div>
            </div>  

          </q-card>
      </div>      
    </div>

  </q-page>
</template>

<!--script-->
<script>
  export default {
    name: 'PageHome',
    methods: {
      goToAssignments() {
      this.$router.push('/assignments'); 
      },
      goToFeedback() {
      this.$router.push('/feedback'); 
      },
      goToSchedule() {
      this.$router.push('/scheduling'); 
      },
      goToMembers() {
      this.$router.push('/guardprofile'); 
      },
  }
}
</script>
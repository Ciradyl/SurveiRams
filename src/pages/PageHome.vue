<template>
  <q-page>
    <!--header-->
    <div class="z-absolute bg-accent">
      <div class="row q-pa-sm text-white q-pt-lg">
        <div dense class="col q-pl-xl">
          </div>
            <!--page title-->
            <div class="col text-center text-weight-bolder text-h6 q-pl-sm ">
              {{ $route.name }}
            </div>
          <div class="col">
        </div>
        <!--logout-->
        <div class="row q-pr-sm">
          <q-btn flat round class="q-pb-sm">
            <q-icon            
              name="fas fa-sign-out-alt"
              size="sm"
            />
          </q-btn>
        </div>
      </div>   
    </div>

    <!--body-->

    <!--profile section-->
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
            <div class="col text-center text-weight-bold text-grey-8">
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

    <!--assignments section-->
    <div class="row q-pt-xl">
      <div class="col q-pr-md q-pl-md">             
        <q-card v-ripple @click="goToAssignments()" class="my-box cursor-pointer q-hoverable">
          <!--icon-->
          <div class="row q-pt-lg ">
            <q-avatar class="col vertical-center text-secondary">
              <q-icon name="assignment" size="40px"/>
            </q-avatar>         
          </div>
          <!--name-->
          <div class="row q-pb-md">            
            <div class="col text-center text-weight-bolder text-grey-8">
              Assignments
            </div>
          </div> 
        </q-card>
      </div>
    </div>

    <!--feedback section-->
    <div class="row q-pt-md q-pb-xl">
      <div class="col q-pr-md q-pl-md">             
        <q-card v-ripple @click="goToFeedback()" class="my-box cursor-pointer q-hoverable">
          <!--icon-->
          <div class="row q-pt-lg">
            <q-avatar class="col vertical-center text-secondary">
              <q-icon name="grading" size="40px"/>
            </q-avatar>         
          </div>
          <!--name-->
          <div class="row q-pb-md">            
            <div class="col text-center text-weight-bolder text-grey-8">
              Feedback
            </div>
          </div>  
        </q-card>
      </div>
 
    </div>

    <!--Begin section-->   
    <div class="row q-px-md q-pt-xl">
      <div class="col">
        <q-btn 
          rounded 
          no-caps
          to="/assignmentdetails" 
          class="fit bg-accent text-weight-bold text-subtitle1 text-white q-pa-xs q-mt-lg"
        > 
          Begin Patrol
        </q-btn>
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
  }
}


</script>
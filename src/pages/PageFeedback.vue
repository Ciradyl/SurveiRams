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
          <!--section 1-->
          <div class="row bg-white q-px-sm q-pb-sm">
            <div class="col">
              <!--search function-->
              <q-input rounded color="secondary bg-grey-2" v-model="text" label="Search">
                <template v-slot:prepend>
                  <q-icon name="search" class="q-pl-md" />
                </template>
              </q-input>
            </div>
          </div>
          <!--section 2-->
          <div class>
            <!--scrollable-->
            <q-scroll-area
              :thumb-style="thumbStyle"
              :content-style="contentStyle"
              :content-active-style="contentActiveStyle"
              style="height: 580px;"
              class=" bg-grey-3"
            >
            <!--events-->

            <!--Event 1-->
            <div class="row q-pt-sm q-pb-xs q-px-md">
              <q-card elevated @click="goToFeedbackView()"  class="fit my-box cursor-pointer q-hoverable" style="height: 30px">
                <q-card-section>
                  <!--title-->
                  <div class="row q-pb-xs text-bold text-grey-9 text-h7">
                    Assignment
                  </div>
                  <!--time interval-->
                  <div class="row q-pb-xs text-grey-7 text-h8">
                    00:00 - 00:00
                  </div>
                </q-card-section>
              </q-card>
            </div>

            <!--Event 2-->
            <div class="row q-pt-sm q-pb-xs q-px-md">
              <q-card elevated v-ripple @click="goToFeedbackView()" class="fit my-box cursor-pointer q-hoverable" style="height: 30px">
                <q-card-section>
                  <!--title-->
                  <div class="row q-pb-xs text-bold text-grey-9 text-h7">
                    Assignment
                  </div>
                  <!--time interval-->
                  <div class="row q-pb-xs text-grey-7 text-h8">
                    00:00 - 00:00
                  </div>
                </q-card-section>
              </q-card>
            </div>

            <!--Event 3-->
            <div class="row q-pt-sm q-pb-xs q-px-md">
              <q-card elevated @click="goToFeedbackView()"  class="fit my-box cursor-pointer q-hoverable" style="height: 30px">
                <q-card-section>
                  <!--title-->
                  <div class="row q-pb-xs text-bold text-grey-9 text-h7">
                    Assignment
                  </div>
                  <!--time interval-->
                  <div class="row q-pb-xs text-grey-7 text-h8">
                    00:00 - 00:00
                  </div>
                </q-card-section>
              </q-card>
            </div>

            <!--Event 4-->
            <div class="row q-pt-sm q-pb-xs q-px-md">
              <q-card elevated @click="goToFeedbackView()"  class="fit my-box cursor-pointer q-hoverable" style="height: 30px">
                <q-card-section>
                  <!--title-->
                  <div class="row q-pb-xs text-bold text-grey-9 text-h7">
                    Assignment
                  </div>
                  <!--time interval-->
                  <div class="row q-pb-xs text-grey-7 text-h8">
                    00:00 - 00:00
                  </div>
                </q-card-section>
              </q-card>
            </div>
            
                </q-scroll-area>
          </div>             
        </q-card>
      </div>
    </div>


  </q-page>
</template>

<!--script-->
<script>

export default {
  name: 'PageFeedbackView',
    methods: {
    goToFeedbackView() {
    this.$router.push('/feedbackview'); 
    },
  setup () {
    return {
      contentStyle: {
        color: 'secondary'
      },

      contentActiveStyle: {
        backgroundColor: '#eee',
        color: 'black'
      },

      thumbStyle: {
        right: '2px',
        borderRadius: '5px',
        backgroundColor: '#E4AC44',
        width: '5px',
        opacity: 0.75
      },
    }
  }
}
}

</script>
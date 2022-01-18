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
            to="/feedback"
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
          <div class="row bg-white text-weight-bold text-h5 q-px-md q-pb-sm">
            Assignment #
            <div class="col">
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
            <div class="row q-pt-sm q-pb-xs q-px-sm">
              <q-card flat class="fit" style="height: 30px">
                <q-card-section>
                  <!--title-->
                  <div class="row q-pb-xs text-bold text-grey-9 text-h6">
                    Shakam de Bosos
                  </div>
                  <div class="row q-pb-xs text-weight-light text-grey-9 text-h8">
                    Security Personnel
                  </div>
                </q-card-section>
              </q-card>
            </div>

            <div class="row q-pt-sm q-pb-xs q-px-sm">
              <q-card flat class="fit" style="height: 30px">
                <q-card-section>
                  <!--title-->
                  <div class="row q-pb-xs text-grey-9 text-h7">
                   <span class="q-pr-xl text-bold" >Time in/out</span>
                   <span> 00:00 - 00:00</span>
                  </div>
                </q-card-section>
              </q-card>
            </div>       

            <div class="row q-pt-sm q-pb-xs q-px-sm">
              <q-card flat class="fit" style="height: 30px">
                <q-card-section>
                  <!--title-->
                  <div class="row q-pb-xs text-bold text-grey-9 text-h7">
                    Attachments
                  </div>
                </q-card-section>
              </q-card>
            </div> 
            
            <div class="row q-pt-xs q-pb-xs q-px-sm">
              <q-card flat class="fit">
                <q-card-section>
                   <div class="q-pl-md text-weight-bold text-h7">
                     Remarks
                   </div>
                  <!--title-->
                  <div class="q-pa-md">
                    <q-input
                      v-model="text"
                      filled
                      type="textarea"
                    />
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
      }
    }
  }
}

</script>
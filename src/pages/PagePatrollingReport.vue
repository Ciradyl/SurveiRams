<template>
  <q-page-container>
    <q-page class="constrain-more q-pa-md">

      <!-- HEADER-->
    <div class="z-absolute bg-accent">
      <div class="row q-pa-sm text-white q-pt-lg">
        <!--Back-->
        <div class="col q-pl-xs">
          <q-btn 
            flat 
            round 
            class="q-pb-sm"
            to="/reporthub"
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
              Report
            </div>
          <div class="col">
        </div>

      </div>   
    </div>
      <!-- end header-->

  <!-- scroll area -->
  <div>
    <q-scroll-area
        :thumb-style="thumbStyle"
        :content-style="contentStyle"
        :content-active-style="contentActiveStyle"
        style="height: 570px; border-radius: 20px;"
        class="bg-grey-3 " >

        <q-card bordered class="fit my-card"
      style="border-radius: 20px;">
        <q-card-section>
          <div class="text-h6" style="margin-top:90px;">Reporting</div>
        </q-card-section>

      </q-card>
    
    <!-- card --> 
    <q-card bordered class="my-card q-ma-md" style="border-radius: 10px; margin-top: 30px">
       <!--Longitude-->
      <div class="q-ma-md">
        <q-input
            v-model="longitude"
            class="col col-sm-6"
            label="Longitude"
            dense
        >
          <template v-slot:append>
              <q-btn 
              @click="getLongitude" 
              round 
              dense 
              flat 
              icon="navigation"
              />
          </template>
        </q-input>
      </div>
      <!--Latitude-->
      <div class="q-ma-md">
        <q-input
            v-model="latitude"
            class="col col-sm-6"
            label="Latitude"
            dense
        >
          <template v-slot:append>
              <q-btn 
              @click="getLatitude" 
              round 
              dense 
              flat 
              icon="navigation"
              />
          </template>
        </q-input>
      </div>
    </q-card>

    <!-- end --> 

    <!-- card --> 
    <q-card bordered class="my-card q-ma-md" style="border-radius: 10px">
       <!--Name-->
      <div class="q-ma-md">
        <q-input
            v-model="name"
            class="col col-sm-6"
            label="Name"
            dense
        >
          <template v-slot:append>
              <q-btn round dense flat icon="triangle"/>
          </template>
        </q-input>
      </div>
    </q-card>

    <!-- end --> 

    <!-- card --> 
    <q-card bordered class="my-card q-ma-md" style="border-radius: 10px">
     <!--Date-->
      <div class="q-ma-md">
        <q-input
            v-model="date" 
            class="col col-sm-6"
            label="Date"
            dense
        >
          <template v-slot:append>
              <q-icon round dense flat name="alarm"/>
          </template>
        </q-input>
      </div>
           <!--Time-->
      <div class="q-ma-md">
        <q-input
            v-model="time"
            class="col col-sm-6"
            label="TIme"
            dense
        >
          <template v-slot:append>
              <q-icon round dense flat name="alarm"/>
          </template>
        </q-input>
      </div>
    </q-card>
    <!-- end --> 

    <!-- card --> 
    <q-card bordered class="my-card q-ma-md" style="border-radius: 10px">
      <!--attach image-->
      <div class="q-ma-md">
        <q-file
          class="fit text-grey-4" 
          label="Attach image"
        >
          <template v-slot:append>
              <q-icon
              round 
              dense 
              flat 
              name="attachment"
              />
          </template>        
        </q-file>
      </div>
            <!--Remarks-->
      <div class="q-ma-md">
        <q-input
            v-model="remarks"
            class="col col-sm-6"
            label="Remarks"
            dense
        >
          <template v-slot:append>
              <q-btn round dense flat icon="triangle"/>
          </template>
        </q-input>
      </div>
    </q-card>
    <!-- end --> 

    </q-scroll-area>
    <!-- scroll area end -->
  </div>

      <!--submit-->
      <div class="row q-pt-lg q-px-md ">
        <q-btn
          @click="submit()"
          rounded
          class="fit q-pa-md bg-positive text-white" 
          label="Submit"
        />
      </div>
      <!-- end button-->

    </q-page>
  </q-page-container>

</template>


<!--script-->
<!--script-->
<script>
import { uid } from 'quasar'
import { ref } from 'vue'
import axios from 'axios'

require('md-gum-polyfill')

export default {
  name: 'PagePatrollingReport',
  data() {
    return {
        id: uid(),
        longitude: "",
        latitude: "",
        name: "",
        date: "",
        time: "",
        photo: null,
        remarks: "",

      imageCaptured: false,
      imageUpload: [],
      hasCameraSupport: true
    }
  },
  methods: {
    initCamera() {
      navigator.mediaDevices.getUserMedia({
        video: true
      }).then(stream => {
        this.$refs.video.srcObject = stream
      }).catch(error => {
        this.hasCameraSupport = false
      })
    },
    captureImage() {
      let video = this.$refs.video
      let canvas = this.$refs.canvas
      canvas.width = video.getBoundingClientRect().width
      canvas.height = video.getBoundingClientRect().height
      let context = canvas.getContext('2d')
      context.drawImage(video, 0, 0, canvas.width, canvas.height)
      this.imageCaptured = true
      this.post.photo = this.dataURItoBlob(canvas.toDataURL())
      this.disableCamera()
    },
    captureImageFallback(file) {
      this.post.photo = file

      let canvas = this.$refs.canvas
      let context = canvas.getContext('2d')

      var reader = new FileReader()
      reader.onload = event => {
        var img = new Image()
        img.onload = () => {
          canvas.width = img.width
          canvas.height = img.height
          context.drawImage(img,0,0)
          this.imageCaptured = true
        }
        img.src = event.target.result
      }
      reader.readAsDataURL(file)
    },
    disableCamera() {
      this.$refs.video.srcObject.getVideoTracks().forEach(track => {
        track.stop()
      })
    },
    dataURItoBlob(dataURI) {
      // convert base64 to raw binary data held in a string
      // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
      var byteString = atob(dataURI.split(',')[1]);

      // separate out the mime component
      var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

      // write the bytes of the string to an ArrayBuffer
      var ab = new ArrayBuffer(byteString.length);

      // create a view into the buffer
      var ia = new Uint8Array(ab);

      // set the bytes of the buffer to the correct values
      for (var i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
      }

      // write the ArrayBuffer to a blob, and you're done
      var blob = new Blob([ab], {type: mimeString});
      return blob;

    },
    getLocation() {
      this.locationLoading = true
      navigator.geolocation.getCurrentPosition(position => {
        this.getCityAndCountry(position)
      }, err => {
        this.locationError()
      }, { timeout: 7000 })
    },
    getCityAndCountry(position) {
      let apiUrl = `https://geocode.xyz/${ position.coords.latitude },${ position.coords.longitude }?json=1`
      this.$axios.get(apiUrl).then(result => {
        this.locationSuccess(result)
      }).catch(err => {
        this.locationError()
      })
    },
    locationSuccess(result) {
      this.post.location = result.data.city
      if (result.data.country) {
        this.post.location += `, ${ result.data.country }`
      }
      this.locationLoading = false
    },
    locationError() {
      this.$q.dialog({
        title: 'Error',
        message: 'Could not find your location.'
      })
      this.locationLoading = false
    },
    submit() {
        var _this = this;
        axios.post(
          'http://localhost:8000/api/patrollingreport', 
          {
            longitude: this.longitude,
            latitude: this.latitude,
            name: this.name,
            date: this.date,
            time: this.time,
            photo: this.photo,
            remarks: this.remarks,
          }
        )
        .then(function (response) {
          console.log(response.data);
          _this.$router.push({ name: 'patrollingreport' })
        })
        .catch(function (error) {
          console.log(error)
          if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data.error);
          }
        });
      },
  },
  mounted() {
    this.initCamera()
  },
  beforeDestroyCamera() {
    if (this.hasCameraSupport) {
      this.disableCamera()
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


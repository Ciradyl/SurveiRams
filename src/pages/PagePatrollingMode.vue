<template>

    <q-page class="constrain-more q-pa-md">

         <!-- HEADER-->
   <div class="z-absolute bg-accent">
      <div class="row q-pa-sm text-white q-pt-lg">
        <!--Back-->
        <div class="col q-pl-md">
        </div>

        <!--page title-->
        <div class="row">
          </div>
            <div class="col text-center text-weight-bolder text-h6  q-pr-md">
              Patrolling Mode
            </div>
          <div class="col">
        </div>

      </div>   
    </div>
      <!-- end header-->


       
<div class="absolute-center">
      <q-avatar size="210px" color="grey"/>
</div>

        <!--Add report-->
        <div class="cursor-pointer">
       
        <div class="q-pa-md" 
             style="position: fixed;
                    left: 50%;
                    bottom: 170px;
                    transform: translate(-50%, -50%);
                    margin: 0 auto;">

         <q-btn 
              size="17px" 
              class="bg-white text-primary " 
              label="Add report" 
              to="/reporthub"
              />
        </div>
        
        </div>

         <!--Finish-->
        <div class="cursor-pointer">

          <div class="fixed-bottom" style="margin-bottom:40px;">
            <div class="q-pa-md" style="transform: translate(5%, -50%);">
              <q-btn style="background: goldenrod; 
                              border-radius: 12px; 
                              width: 90%; 
                              margin: auto" 
                      size="20px" class="text-white" label="Finish" to="/Patrolsummary"
              />
            </div>
          </div>
        </div>

    </q-page>
</template>

<!--script-->
<!--script-->
<script>
import { uid } from 'quasar'
require('md-gum-polyfill')

export default {
  name: 'PageCamera',
  data() {
    return {
      post: {
        id: uid(),
        anomaly: '',
        location: '',
        remarks: '',
        photo: null,
        date: Date.now()
      },
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
    }
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


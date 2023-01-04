<template>
  <v-card class="greeting-card">
    <v-row class="ma-0 pa-0">
      <v-col cols="8">
        <v-card-title class="text-no-wrap pt-1 ps-2"> Congratulations 🥳 </v-card-title>
        <v-card-subtitle class="text-no-wrap ps-2"> Our Celebrants have won Trophies </v-card-subtitle>
        <v-card-text class="d-flex align-center mt-2 pb-2 ps-2">
          <div>
            <p class="text-md font-weight-semibold primary--text mb-2">Birthday: {{totalAnniversaries}}</p>
            <p class="text-md font-weight-semibold primary--text mb-2">Weedings: {{totalWeddings}}</p>

      
            <v-btn small color="primary" :to="{name: 'birthday'}"> View Celebrant(s) </v-btn>
          </div>
        </v-card-text>
      </v-col>

      <v-col cols="4">
        <v-img
          contain
          height="180"
          width="159"
          :src="require(`@/assets/images/misc/triangle-${$vuetify.theme.dark ? 'dark' : 'light'}.png`).default"
          class="greeting-card-bg"
        ></v-img>
        <v-img
          contain
          height="108"
          max-width="83"
          class="greeting-card-trophy"
          :src="require('@/assets/images/misc/trophy.png').default"
        ></v-img>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import axios from 'axios'

export default {
  setup() {
    
  },

data(){

  return{

    totalAnniversaries:"",
    totalWeddings:"",

  }
}
,

methods:{


  async getAllAnniversaries() {
        await axios
          .post('api/getAllAnniversaries' + '?token=' + this.$store.state.token)
          .then(response => {
            this.allAnniversaries = response.data.allAnniversaries
            this.allAnniversaries2 = response.data.allAnniversaries2
            this.totalAnniversaries = response.data.totalAnniversaries 
          
  
          })
          .catch(() => {
            // this.$toastr.error("Can not load status", "Error");
          })
      },

      async getAllWeddings() {
        await axios
          .post('api/getAllWeddings' + '?token=' + this.$store.state.token)
          .then(response => {
            this.allWeddings = response.data.allWeddings
            this.allWeddings2 = response.data.allWeddings2
            this.totalWeddings = response.data.totalWeddings 
          
  
          })
          .catch(() => {
            // this.$toastr.error("Can not load status", "Error");
          })
      },
  
},

created(){

  this.getAllAnniversaries();
  this.getAllWeddings();
}



}
</script>


<style lang="scss" scoped>
.greeting-card {
  position: relative;
  .greeting-card-bg {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .greeting-card-trophy {
    position: absolute;
    bottom: 10%;
    right: 8%;
  }
}
// rtl
.v-application {
  &.v-application--is-rtl {
    .greeting-card-bg {
      right: initial;
      left: 0;
      transform: rotateY(180deg);
    }
    .greeting-card-trophy {
      left: 8%;
      right: initial;
    }
  }
}
</style>

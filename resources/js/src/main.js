import '@/plugins/vue-composition-api'
import '@resources/sass/styles/styles.scss'
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
// import store from './store'

import { store } from './store';

window.Vue = require('vue').default;


global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;



//excel
import VueExcelXlsx from "vue-excel-xlsx";

Vue.use(VueExcelXlsx);


// fontawesome

import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
Vue.use(Vuetify, {
 iconfont: 'fa'
})

//import progress Bar
import VueProgressBar from 'vue-progressbar';

const options = {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
};

Vue.use(VueProgressBar, options);

 
Vue.config.productionTip = false


//install filter
Vue.filter('lowercase', function (value) {

  if (!value) return '';
  value = value.toString();
  return value.toLowerCase();

});




//capitalize first letter

Vue.filter('firstLetter', function (value) {

  if (!value) return '';

  value = value.toString();

  return value.charAt(0).toUpperCase() + '. ';

});

//initial 

Vue.filter('initial', function (value) {

  if (!value) return '';

  return value = value.substring(0, 1)+'.'

 

});




//import vform
import { Form, Errors } from 'vform';

Vue.component(Errors.name, Errors);

window.Form = Form;


// sweet alert
import Swal from 'sweetalert2';

window.Swal = Swal;

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventLisener('mouseenter', Swal.stopTimer)
    toast.addEventLisener('mouseleave', Swal.resumeTimer)
  }
});

window.toast = Toast;


window.Fire = new Vue();



//vue-toastr-2

import VueToastr2 from 'vue-toastr-2'
import 'vue-toastr-2/dist/vue-toastr-2.min.css'
 
window.toastr = require('toastr')
 
Vue.use(VueToastr2)


// //vuetify form validation


// src/plugins/vuetify.js

import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

import Vuetify from 'vuetify/lib'

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
})


//axios
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

//numeric
import VNumeric from 'vuetify-numeric/vuetify-numeric.umd.min'
Vue.use(VNumeric)


//moments js

import moment from 'moment';

Vue.filter('dateFormat', function (time) {

  return moment(time).format('Do MMMM  YYYY, h:mm a');
})


//format to thousand


Vue.filter('RoundOffThousand', function (num) {

     

       let amount =  parseFloat(num).toFixed(2); 

      return   amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");   

})

//round off 


Vue.filter('roundOff', function (num) {

Math.round((num + Number.EPSILON) * 100) / 100
  
  })


Vue.filter('dateFormat2', function (time) {

  return moment(time).format('Do MMMM  YYYY');
})

Vue.filter('dateReorder', function (time) {
  return moment(time).format('Do MMMM  YYYY');
})

Vue.filter('dateReorder3', function (time) {
  return moment(time).format('Do MMMM, YYYY');
})



Vue.filter('dateReorder2', function (time) {

  return moment(time).format("dddd, Do MMMM YYYY");
})


Vue.filter('birthDay', function (time) {
  return moment(time).format('Do MMMM');
})

Vue.filter('addDays', function (time, day) {
  return moment(time).add(day, 'days');
})


//mixin
// import mixin from './plugins/mixin';

Vue.mixin({



  methods: {

    // async getAdmin() {
    //   await axios
    //     .get(
    //       "/api/auth/adminRole?token=" + this.$store.state.token
    //     )
    //     .then((response) => {

         
    //       this.$store.commit("setAdmin", response.data.adminRole);
    //       this.$store.commit("setUser", response.data.userRole);
    //       this.$store.commit("setEmployee", response.data.employeeRole);
    //       this.$store.commit("setPromotion", response.data.promotionRole);
    //       this.$store.commit("setConversion", response.data.conversionRole);
    //       this.$store.commit("setRedeployment", response.data.redeploymentRole);
          






    //     })
    //     .catch(() => {
    //       // this.$toastr.error("You dont have role permission", "Error");
    //     });
    // },


 
    getUser() {
      axios
        .post('/api/user', { token: this.$store.state.token })
        .then((response) => {
          this.user_id = response.data.user.id;
         
        })
        .catch((error) => {
          this.$toastr.error("Session expired, refresh your page", error);
          this.$router.push("/login");
        });
    },


    checkLogin(){
      if (this.$store.state.token != "") {
        axios
          .post("/api/checkToken", { token: this.$store.state.token })
          .then((response) => {
            if (!response.data.success) {
              // this.spinnerLoading = false;
              this.$store.commit('setToken', response.data.token);
              //  this.$router.push("/employeedashboard");
            }
          })
          .catch((error) => {
            //  this.spinnerLoading = true;
          
            this.$router.push("/login");
          });
      } else {
        // this.spinnerLoading = true;
        this.$router.push("/login");
      }
    }





  },


}),


new Vue({
  // el:'#app',
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')

<template>
    <v-card>
      <!-- dialog2 -->

      <v-row class="list px-3 mx-auto">
        <v-col cols="12" md="3">
          <v-text-field v-model="form.searchName" label="Search  Customer" @keyup="searchField"></v-text-field>
        </v-col>
               <v-col cols="12" sm="3" md="3">
                      <v-menu
                        ref="menu3"
                        v-model="menu3"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            v-model="form.date_from"
                            label="Date"
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          v-model="form.date_from"
                          :rules="v => !!v || 'Date From is required'"
                          :active-picker.sync="activePicker3"
                          
                          min="1950-01-01"
                          @change="save3"
                        ></v-date-picker>
                      </v-menu>
                    </v-col>
  
                    <!-- <v-col cols="12" sm="3" md="3">
                      <v-menu
                        ref="menu4"
                        v-model="menu4"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            v-model="form.date_to"
                            label="Date To"
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          v-model="form.date_to"
                          :rules="v => !!v || 'Date To is required'"
                          :active-picker.sync="activePicker4"
                          
                          min="1950-01-01"
                          @change="save4"
                        ></v-date-picker>
                      </v-menu>
                    </v-col>
   -->
              

                    <v-col cols="12" md="3">
                   <v-btn @click="clearForm()" color="primary"> Clear Search</v-btn>
                    </v-col>
  
                    <v-col cols="12" md="3">
                      </v-col>
  
         <v-col cols="12" md="3">
          <vue-excel-xlsx
            :data="allAnniversaries2"
            :columns="columns"
            :file-name="'Birthday'"
            :file-type="'xlsx'"
            :sheet-name="'Birthday'"
          >
            <v-icon x-large style="color: green"> mdi-file-excel </v-icon>
            Celebrant(s): {{ totalAnniversaries }}
          </vue-excel-xlsx>
        </v-col>
  
       
  
      </v-row>
  

      <v-row class="list px-3 mx-auto">
        <v-col cols="12" md="12">
      <v-card-title>Birthday Celebrants</v-card-title>
      <v-data-table :headers="headers" :items="allAnniversaries">
  
        <template v-slot:[`item.sn`]="{ index }">
  
           {{ index + 1 }}
           </template>
      
    
  
        <template v-slot:[`item.customer`]="{ item }">
          {{ item.surname }} {{ item.firstname }}
        </template>
  
        <template v-slot:[`item.birthday`]="{ item }">
        <v-chip style="color:forestgreen">  {{ item.date_of_birth | birthDay }} </v-chip>
        </template>


        <template v-slot:[`item.phone_no`]="{ item }">
          {{ item.customer_contact.phone_no}} 
        </template>
  

        <template v-slot:[`item.email`]="{ item }">
          {{ item.customer_contact.email}} 
        </template>
  
  

      </v-data-table>
      </v-col>
      
  
  
        </v-row>

  


    </v-card>

  
  </template>
  
  <script>
  // eslint-disable-next-line object-curly-newline
  import { mdiFacebook, mdiTwitter, mdiGithub, mdiGoogle, mdiEyeOutline, mdiEyeOffOutline } from '@mdi/js'
  import { ref } from '@vue/composition-api'
  import axios from 'axios'
  
  export default {
    data() {
      return {
        activePicker: null,
        date: null,
        menu: false,
        menu3: false,
        menu4: false,
  
        activePicker2: null,
        activePicker3: null,
        activePicker4: null,
        date2: null,
        menu2: false,
        allStaff: '',
        allAnniversaries: [],
        statuses: [],
        headers: [
        { text: '#', align: 'start', sortable: false, value: 'sn' },
         
          { text: 'Customer', value: 'customer', sortable: false },
          { text: 'Birthday', value: 'birthday', sortable: false },

          { text: 'Phone No', value: 'phone_no', sortable: false },
          { text: 'Email', value: 'email', sortable: false },
        ],

        // header2: [
        // { text: '#', align: 'start', sortable: false, value: 'sn' },
         
        //   { text: 'Customer', value: 'customer', sortable: false },
        
        //   { text: 'Wedding Anniversary', value: 'wedding_date', sortable: false },
        //   { text: 'Phone No', value: 'phone_no', sortable: false },
        //   { text: 'Email', value: 'email', sortable: false },
        // ],
  
        // show_date_of_resumption:false,
        columns: [
         
          {
            label: 'Customer Surname',
            field: 'surname',
          },
  
          {
            label: 'Customer Firstname',
            field: 'firstname',
          },
         
          
          {
            label: 'Birhday',
            field: 'date_of_birth',
          },


          {
            label: 'Phone No',
            field: 'customer_contact.phone_no',
          },

          {
            label: 'Email',
            field: 'customer_contact.email',
          },
  
          
  
        
        ],
        btn: '',
        btn2: '',
        dialog: false,
        dialog2: false,
        search: '',
        editMode: false,
  
        allCustomers: [],
        allAnniversaries: [],
        allAnniversaries2: [],
        totalAnniversaries: null || 0,
       
        name: '',
       
  
        valid: true,
  
       


  
        progress: false,
  
       
        totalAMount:"",
  
        form: new Form({
  
          searchName:"",
          date_from: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
          // date_to: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
        }),
      }
    },
  
    setup() {
      const isPasswordVisible = ref(false)
  
      const Anniversary_categories = ref([])
      const socialLink = [
        {
          icon: mdiFacebook,
          color: '#4267b2',
          colorInDark: '#4267b2',
        },
        {
          icon: mdiTwitter,
          color: '#1da1f2',
          colorInDark: '#1da1f2',
        },
        {
          icon: mdiGithub,
          color: '#272727',
          colorInDark: '#fff',
        },
        {
          icon: mdiGoogle,
          color: '#db4437',
          colorInDark: '#db4437',
        },
      ]
  
      return {
        isPasswordVisible,
        // username,
        // email,
        // password,
        socialLink,
        Anniversary_categories,
  
        // createAnniversary,
  
        icons: {
          mdiEyeOutline,
          mdiEyeOffOutline,
        },
      }
    },
  
    computed: {},
  
    mounted() {
      this.checkLogin()
    },
  
    watch: {
      menu(val) {
        val && setTimeout(() => (this.activePicker = 'YEAR'))
      },
  
      menu2(val) {
        val && setTimeout(() => (this.activePicker2 = 'YEAR'))
      },
  
  
      menu3(val) {
        val && setTimeout(() => (this.activePicker3 = 'YEAR'))
      },
  
  
      menu4(val) {
        val && setTimeout(() => (this.activePicker4 = 'YEAR'))
      },
    },
  
    methods: {
    
  
      
  
     
      //   getText(item) {`${item.surname} - ${item.text}`
  
      // },
  
   
  
   
  
      save(date) {
        this.$refs.menu.save(date)
      },
      save2(date) {
        this.$refs.menu2.save(date)
      },
  
      save3(date) {
        this.$refs.menu3.save(date)
        this.searchField();
      },
      save4(date) {
        this.$refs.menu4.save(date)
        this.searchField();
      },
  
      clearForm(){
        this.form.reset();
        this.form.date_from = ""
        this.form.date_to = ""
        this.getAllAnniversaries();
  
      },
  
  
   
  
      // stateOfOrigin(item){
  
      //   const index =  this.states.findIndex(function(obj) {
  
      //           return obj.id === item.Anniversary_contact.state_of_origin_id;
      //       });
  
      //    return   this.state_of_origin = this.states[index].state;
  
      // },
  
      // stateOfResidence(item){
  
      //   const index =  this.states.findIndex(function(obj) {
  
      //           return obj.id === item.Anniversary_contact.state_of_residence_id;
      //       });
  
      //    return   this.state_of_residence = this.states[index].state;
  
      // },
  
  
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
  
 
  
      async searchAnniversary() {
        let query = this.search
        this.form.
          post('/api/search/birhday')
          // .get('api/auth/findDesignation?q='+ query + '&token=' + this.$store.state.token )
          .then(response => {
            this.allAnniversaries = response.data.allAnniversaries
            this.allAnniversaries2 = response.data.allAnniversaries2
            this.totalAnniversaries = response.data.totalAnniversaries 
  
          })
          .catch(() => {
            this.$toastr.error('search failed', 'Error')
          })
      },
  
  
  
      searchField() {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(function () {
          Fire.$emit('searching')
        }, 2000)
      },
  

  
    

  
    },
  
    created() {
     
      this.getAllAnniversaries()
  
      Fire.$on('searching', () => {
        //listen to searchingField event
  
        this.searchAnniversary()
      })
  
      Fire.$on(['createAnniversaryEvent', 'DeleteAnniversaryEvent', 'updatedAnniversaryEvent'], () => {
        //listen to  events
        this.getAllAnniversaries()
      })
    },
  }
  </script>
  
  <style lang="scss">
  @import '~@resources/sass/preset/pages/auth.scss';
  </style>
  
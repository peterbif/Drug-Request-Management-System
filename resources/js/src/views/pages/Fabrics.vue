<template>
    <v-card>
   
  
      <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on" @click="create"> Create New Fabrics </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ btn }}</span> 
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <!-- <v-alert v-if="form.errors.has('surname')"     
                dense
                type="error"
                >
               {{form.errors.get('surname')}} 
              </v-alert> -->
  
                
                  <v-row>
                    <v-col cols="12" sm="6" md="6">
                      <v-alert v-if="form.errors.has('fabric_name')" dense type="error">
                        {{ form.errors.get('fabric_name') }}
                      </v-alert>
                      <v-text-field
                        v-model="form.fabric_name"
                        label="Fabric Name*"
                        :counter="199"
                        :rules="v => !!v || 'Fabric Name is required'"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-alert v-if="form.errors.has('fabrics_length')" dense type="error">
                        {{ form.errors.get('fabrics_length') }}
                      </v-alert>
                      <v-text-field
                        v-model="form.fabrics_length"
                        label="Fabric Length(Yards)*"
                        :rules="v => !!v || 'Fabric Length is required'"
                        :counter="199"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
  
                 
  
            
                  <v-row>
                    <v-col cols="12" sm="6" md="6">
                      <v-alert v-if="form.errors.has('price')" dense type="error">
                        {{ form.errors.get('price') }}
                      </v-alert>
                      <v-text-field
                        label="Total Cost"
                      
                        v-model="form.price"
                      
                        :rules="v => !!v || 'Price is required'"
                        hint="Total Price"
                      > </v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="6">
                      <v-alert v-if="form.errors.has('price_per_yard')" dense type="error">
                        {{ form.errors.get('price_per_yard') }}
                      </v-alert>
                      <v-text-field
                        label="Price Per Yard"
                      
                        v-model="form.price_per_yard"
                      
                        :rules="v => !!v || 'Price Per Yard is required'"
                        hint="Price Per Yard"
                      > </v-text-field>
                    </v-col>
  
                   
                  </v-row> </v-form
              ></v-container>
              <!-- <small v-show="balance" style="color: red; font-size: 20px">Balance Of Payment: {{ balance }}</small> -->
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red" @click="dialog = false"> Close </v-btn>
  
              <v-btn v-if="editMode" color="primary" @click.prevent="updateFabrics()" :disabled="!form.id">
                <v-progress-circular :value="20" v-show="progress"></v-progress-circular>
                {{ btn2 }}
              </v-btn>
  
              <v-btn
                v-else
                color="primary"
                @click.prevent="createFabrics()"
                :disabled="
                  !(
                   
                    form.fabric_name &&
                    form.fabrics_length &&
                    form.price &&
                    form.price_per_yard
                  )
                "
              >
                <v-progress-circular :value="20" v-show="progress"></v-progress-circular>
                {{ btn2 }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
  
      <v-row class="list px-3 mx-auto">
        <v-col cols="12" md="4">
          <v-text-field v-model="form.searchName" label="Search  Fabrics" @keyup="searchField"></v-text-field>
        </v-col>

        <v-col cols="12" sm="2" md="2">
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
                          label="Date from"
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

                  <v-col cols="12" sm="2" md="2">
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

  
       
                   
  
         <v-col cols="12" md="2">
          <vue-excel-xlsx
            :data="allFabrics2"
            :columns="columns"
            :file-name="'Fabrics'"
            :file-type="'xlsx'"
            :sheet-name="'Fabrics'"
          >
            <v-icon x-large style="color: green"> mdi-file-excel </v-icon>
            Fabrics(s): {{ totalFabrics }}
          </vue-excel-xlsx>
        </v-col>
        </v-row>

        <v-row class="list px-3 mx-auto">
          <v-col cols="12" md="3">
                 <v-btn @click="clearForm()" color="primary"> Clear Search</v-btn>
                  </v-col>
 
           <v-col cols="12" md="4">
         <span style="font-size:20px; color:blue"> Total Amount:  <span>	&#8358; </span> {{totalAMount|RoundOffThousand}}  </span> 
           </v-col>
  
       
  
      </v-row>
  
      <v-card-title>Fabrics</v-card-title>
      <v-data-table :headers="headers" :items="allFabrics">

        <template v-slot:[`item.sn`]="{ index }">
        {{ index + 1 }}
         </template>

         <template v-slot:[`item.price`]="{ item }">
            <span>	&#8358; </span>  {{item.price|RoundOffThousand}}
        </template>


        <template v-slot:[`item.price_per_yard`]="{ item }">
            <span>	&#8358; </span>  {{item.price_per_yard|RoundOffThousand}}
        </template>

      

        <template v-slot:[`item.created_at`]="{ item }">
           {{item.created_at|dateReorder2}}
        </template>
        

        <template v-slot:[`item.actions`]="{ item }">
          <v-icon small style="color: green" class="mr-2" @click="editFabrics(item)">mdi-pencil</v-icon>
          <v-icon small style="color: red" @click="deleteFabrics(item)">mdi-delete</v-icon>
        </template>
      </v-data-table>
  
   
  
   
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
        
        allFabrics: [],

        menu3: false,
        menu4: false,

     
      activePicker3: null,
      activePicker4: null,
      
        headers: [
          { text: '#', align: 'start', sortable: false, value: 'sn' },

          { text: 'Fabrics Name', align: 'start', sortable: false, value: 'fabric_name' }, 
          { text: 'Fabrics length (Yards)', value: 'fabrics_length', sortable: false },
          { text: 'Remaining length (Yards)', value: 'remaining_length', sortable: false },

          { text: 'Price', value: 'price', sortable: false },
          { text: 'Price Per Yard', value: 'price_per_yard', sortable: false },

          { text: 'Date Created', value: 'created_at', sortable: false },
          { text: 'Action', value: 'actions', sortable: false },
        ],
  
        // show_date_of_resumption:false,
        columns: [
          {
            label: 'Fabrics Name',
            field: 'fabric_name',
          },
          {
            label: 'Fabrics Length',
            field: 'fabrics_length',
          },
  
          {
            label: 'Price',
            field: 'price',
          },
  
         
        ],
        btn: '',
        btn2: '',
        dialog: false,
        
        editMode: false,
  
        allFabrics: [],
        allFabrics2: [],
        totalFabrics: null || 0,
       
  
        valid: true,
        totalAMount:"",
       
  
  
        progress: false,
  
       
        form: new Form({
          id: '',
          customer_id: '',
          fabric_name: '',
          fabrics_length: '',
          price:"",
          price_per_yard:"",
          searchName:"",

          date_from:"",
          date_to:"",
         
        }),
      }
    },
  
    setup() {
      const isPasswordVisible = ref(false)
  
      const Fabrics_categories = ref([])
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
        Fabrics_categories,
  
        // createFabrics,
  
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


    menu3(val) {
      val && setTimeout(() => (this.activePicker3 = 'YEAR'))
    },


    menu4(val) {
      val && setTimeout(() => (this.activePicker4 = 'YEAR'))
    },
  
     
    },
  
    methods: {
    //   balancePayment() {
    //     if (!(this.form.grand_price && this.form.payment)) {
    //       return
    //     } else {
    //       this.balance = this.form.grand_price - this.form.payment
    //       this.balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    //     }
    //   },
  
    
  
  
  
      
    save3(date) {
      this.$refs.menu3.save(date)
      this.searchField();
    },
    save4(date) {
      this.$refs.menu4.save(date)
      this.searchField();
    },
  
      view(item) {
        this.dialog3 = true
        this.form.fill(item)
        this.name = item.customer.surname + ' ' + item.customer.firstname;
  
        this.form.grand_price = item.Fabrics_payment.grand_price;
        this.form.payment = item.Fabrics_payment.payment;
        this.staff = item.user.surname + ' ' + item.user.firstname;
        this.refrenced_no = item.refrenced_no;
  
        if (this.form.grand_price && this.form.payment) {
          this.bal = this.form.grand_price - this.form.payment
        }
      },
  

    clearForm(){
      this.form.reset();
      this.form.date_from = ""
      this.form.date_to = ""
      this.getallFabrics();

    },
  
     
  
      async getallFabrics() {
        await axios
          .get('api/getallFabrics' + '?token=' + this.$store.state.token)
          .then(response => {
            this.allFabrics = response.data.allFabrics
            this.allFabrics2 = response.data.allFabrics2
            this.totalFabrics = response.data.totalFabrics 
            this.totalAMount = response.data.totalAMount;
  
          })
          .catch(() => {
            // this.$toastr.error("Can not load status", "Error");
          })
      },
  
    
  
      async searchFabrics() {
        let query = this.search
        this.form.
          post('/api/search/fabrics')
          // .get('api/auth/findDesignation?q='+ query + '&token=' + this.$store.state.token )
          .then(response => {
            this.allFabrics = response.data.allFabrics
            this.allFabrics2 = response.data.allFabrics2
            this.totalFabrics = response.data.totalFabrics
            this.totalAMount = response.data.totalAMount;

          })
          .catch(() => {
            // this.$toastr.error('search failed', 'Error')
          })
      },
  
      create() {
        this.editMode = false
        this.form.reset()
        this.btn = 'Create New Fabrics'
        this.btn2 = 'Create'
      },
  
      searchField() {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(function () {
          Fire.$emit('searching')
        }, 2000)
      },
  
      async createFabrics() {
        this.$refs.form.validate()

        this.form.price = parseFloat( this.form.price);
  
        await this.form
          .post('api/fabrics' + '?token=' + this.$store.state.token)
          .then(() => {
            this.$toastr.success('Fabrics created successfully', 'Success')
            this.dialog = false
            Fire.$emit('createFabricsEvent')
            this.form.reset()
          })
          .catch(error => {
            this.progress = true
            this.$toastr.error('Can not create fabrics', error)
          })
      },
  
      editFabrics(item) {
        this.editMode = true
        this.form.reset()
        this.btn = 'Update Fabrics'
        this.btn2 = 'Update'
        this.form.fill(item)
        
      
        this.dialog = true
      },
  
      updateFabrics(item) {
        
        Swal.fire({
          title: 'Are you sure you want to update?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, update it!',
        }).then(result => {
          if (result.value) {
            // this.formLoading = "Updating dept";
            this.spinnerLoading = true
            this.form
              .put('api/fabrics/' + this.form.id + '?token=' + this.$store.state.token)
              .then(() => {
                this.$toastr.success('Fabrics updated successfully', 'Success')
                Fire.$emit('updatedFabricsEvent') //update an event
                this.dialog = false
              })
              .catch(error => {
                this.btn = 'Updating Fabrics'
  
                this.btn2 = ''
  
                this.$toastr.error('Can not update Fabrics details', 'Error')
              })
          }
        })
      },
  
      deleteFabrics(item) {
        Swal.fire({
          title: 'Are you sure?',
          text: item.fabric_name + ' will be deleted permanently' + " and it won't be reverted!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!',
        }).then(result => {
          if (result.value) {
            this.form
              .delete('api/fabrics/' + item.id + '?token=' + this.$store.state.token)
              .then(() => {
                Swal.fire('Deleted!', 'Record has been deleted.', 'success')
                Fire.$emit('DeleteFabricsEvent') //delete  an event
              })
              .catch(error => {
                Swal.fire({
                  icon: 'error',
                  title: error,
                  text: 'Not Deleted, Something went wrong!',
                  footer: '<a href>Why do I have this issue?</a>',
                })
              })
          }
        })
      },
    },
  
    created() {
     
      this.getallFabrics()
      
  
      Fire.$on('searching', () => {
        //listen to searchingField event
  
        this.searchFabrics()
      })
  
      Fire.$on(['createFabricsEvent', 'DeleteFabricsEvent', 'updatedFabricsEvent'], () => {
        //listen to  events
        this.getallFabrics()
      })
    },
  }
  </script>
  
  <style lang="scss">
  @import '~@resources/sass/preset/pages/auth.scss';
  </style>
  
<template>
    <v-card>
   <v-row>
        <v-dialog v-model="dialog2" persistent max-width="600px">
          <v-card>
            <v-card-title>
              <span class="text-h5">Upload Passport</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-card> </v-card>
  
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-alert v-if="form.errors.has('error')" dense type="error">
                    {{ form.errors.get('error') }}
                  </v-alert>
  
                  <v-row id="preview">
                    <v-col cols="12" sm="6" md="6">
                      <v-img v-if="urlp" :src="urlp" height="125" width="125" class="grey darken-4"></v-img>
                    </v-col>
  
                    <v-col cols="12" sm="6" md="6">
                      <v-file-input
                        accept="image/*"
                        id="passportId"
                        outlined
                        label="Upload Passport"
                        class="mb-3"
                        v-model="form.passport"
                        @change="
                          selectPhoto()
                          readURL(this)
                        "
                      ></v-file-input>
                    </v-col>
                  </v-row> </v-form
              ></v-container>
              <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red" @click="dialog2 = false"> Close </v-btn>
  
              <v-btn color="primary" @click="uploadPassport" :disabled="!form.passport">
                <v-progress-circular :value="20" v-show="progress"></v-progress-circular>
                Upload
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
      <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on" @click="create"> Create New Sales </v-btn>
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
                    <v-col cols="12" sm="12" md="12">
                      <v-alert v-if="form.errors.has('customer_id')" dense type="error">
                        {{ form.errors.get('customer_id') }}
                      </v-alert>
  
                      <v-autocomplete
                        :items="allCustomers"
                        item-value="id"
                        item-text="surname"
                        label="Select Customer"
                        v-model="form.customer_id"
                        solo
                      >
                        <template v-slot:item="{ item }">
                          {{ item.surname }} {{ item.firstname }} {{ item.customer_contact.phone_no }}
                        </template>
                      </v-autocomplete>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="6" md="6">
                    <v-alert v-if="form.errors.has('fabrics_material_id')" dense type="error">
                      {{ form.errors.get('fabrics_material_id') }}
                    </v-alert>


                   
  
                    <v-autocomplete
                        :items="allFabrics"
                        item-value="id"
                        item-text="fabric_name"
                        :label="Select_Fabrics"
                        v-model="form.fabrics_material_id"
                        solo
                      >
                 <template v-slot:item="{ item }">
                 

                <span> {{item.fabric_name }} </span>   &nbsp; &nbsp;

        
                 <v-chip 
                style="border-color: red; font-size:15px;"
                 outlined
                  pill
                 
                  > {{ item.remaining_length }}
    
                 </v-chip>
               
                      </template>

                    
                    </v-autocomplete>
                  </v-col>

                  <v-col cols="12" sm="6" md="6">
                      <v-alert v-if="form.errors.has('fabrics_length')" dense type="error">
                        {{ form.errors.get('fabrics_length') }}
                      </v-alert>
                      <v-text-field
                        v-model="form.fabrics_length"
                        label="Fabric Length (Yards)*"
                        :rules="v => !!v || 'Fabric Length is required'"
                        :counter="199"
                        required
                        @keyup="amountToBePaid()"
                      ></v-text-field>
                    </v-col>

                  </v-row>

                
                
               
                  <v-row>
                    <v-col cols="12" sm="6" md="6">
                      <v-alert v-if="form.errors.has('grand_price')" dense type="error">
                        {{ form.errors.get('grand_price') }}
                      </v-alert>
                      <v-text-field
                        label="Grand Price"
                        text
                        v-model="form.grand_price"
                       readonly
                        :rules="v => !!v || 'Grand Price is required'"
                        hint="Total Amount to be paid"
                      ></v-text-field>
                    </v-col>
  
                    <v-col cols="12" sm="6" md="6">
                      <v-alert v-if="form.errors.has('payment')" dense type="error">
                        {{ form.errors.get('payment') }}
                      </v-alert>
  
                      <v-text-field
                        label="Amount Paid"
                        text
                        v-model="form.payment"
                      
                        :rules="v => !!v || 'Payment is required'"
                        hint="Amount paid"
                      ></v-text-field>
                    </v-col>
                  </v-row> </v-form
              ></v-container>
              <small v-show="moreLength" style="color: red; font-size: 20px"> {{ moreLength }}</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red" @click="dialog = false"> Close </v-btn>
  
              <v-btn v-if="editMode" color="primary" @click.prevent="updateSales()" :disabled="!form.id">
                <v-progress-circular :value="20" v-show="progress"></v-progress-circular>
                {{ btn2 }}
              </v-btn>
  
              <v-btn
                v-else
                color="primary"
                @click.prevent="createSales()"
                :disabled="
                  !(
                    form.customer_id &&
                    form.fabrics_material_id &&
                    form.fabrics_length &&
                    form.grand_price &&
                    form.payment
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
        <v-col cols="12" md="3">
          <v-text-field v-model="form.searchName"  prepend-icon="mdi:account-cowboy-hat" label="Search  Customer" @keyup="searchField"></v-text-field>
        </v-col>
  
        <v-col cols="12" md="3">
          <v-text-field v-model="form.fabric_name"  prepend-icon="mdi-mdi:account-multiple-check" label="Search Fabrics Name" @keyup="searchField"></v-text-field>
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
  
                    <v-col cols="12" sm="3" md="3">
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
  
                   
                    </v-row>
  
           <v-row class="list px-3 mx-auto">
            

                    <v-col cols="12" md="3">
                   <v-btn @click="clearForm()" color="primary"> Clear Search</v-btn>
                    </v-col>

                    <v-col cols="12" md="4">
         <span style="font-size:20px; color:blue"> Total Amount:  <span>	&#8358; </span> {{totalAMount|RoundOffThousand}}  </span> 
           </v-col>

          
  
         <v-col cols="12" md="3">
          <vue-excel-xlsx
            :data="allSales2"
            :columns="columns"
            :file-name="'Sales'"
            :file-type="'xlsx'"
            :sheet-name="'Sales'"
          >
            <v-icon x-large style="color: green"> mdi-file-excel </v-icon>
            Sales(s): {{ totalSales }}
          </vue-excel-xlsx>
        </v-col>
  
                  
  
       
  
      </v-row>
  
      <v-card-title>Sales</v-card-title>
      <v-data-table :headers="headers" :items="allSales">
  
        <template v-slot:[`item.sn`]="{ index }">
  
           {{ index + 1 }}
           </template>
      
  
        <template v-slot:[`item.fabric`]="{ item }"> {{ item.fabrics_name }} / {{ item.remaining_length }} </template>
  
        <template v-slot:[`item.customer`]="{ item }">
          {{ item.customer.surname }} {{ item.customer.firstname }}
        </template>

        <template v-slot:[`item.fabric_name`]="{ item }">
          {{ item.fabrics.fabric_name }} 
        </template>
  
      
        <template v-slot:[`item.created_at`]="{ item }">
          {{ item.created_at|dateReorder2 }} 
        </template>
  
<!--   
        <template v-slot:[`item.status`]="{ item }">
         
          <v-chip v-if="item.status.status_name == 'Very Urgent'"
         style="bSales-color: red;"
          outlined
           pill
           >    {{ item.status.status_name }}
      
       </v-chip>
       <v-chip v-else-if="item.status.status_name == 'high Priority'"
       style="bSales-color: orangered;"
          outlined
           pill
           >    {{ item.status.status_name }}
      
       </v-chip>
  
       <v-chip v-else-if="item.status.status_name == 'Completed'"
       style="bSales-color: green;"
          outlined
           pill
           >    {{ item.status.status_name }}
      
       </v-chip>
  
       <v-chip v-else-if="item.status.status_name == 'Delivered'"
       style="bSales-color: green;"
          outlined
           pill
           >    {{ item.status.status_name }}
      
       </v-chip>
  
       <v-chip v-else-if="item.status.status_name == 'Received'"
       style="bSales-color: green;"
          outlined
           pill
           >    {{ item.status.status_name }}
      
       </v-chip>
       <v-chip v-else
       style="bSales-color: yellow;"
          outlined
           pill
           >    {{ item.status.status_name }}
      
       </v-chip>
        </template> -->
  
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon small style="color: green" class="mr-2" @click="editSales(item)">mdi-pencil</v-icon>
          <v-icon small style="color: red" @click="deleteSales(item)">mdi-delete</v-icon>
        </template>
      </v-data-table>
  
  
      <!-- dialog3 -->
  
      <v-row justify="center">
        <v-dialog v-model="dialog3" persistent max-width="600px">
          <v-card>
            <v-card-title>
              <span class="text-h4 text-center">{{ name }} Sales Details</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <span class="text-h5">Sales Reference Number: </span> {{ refrenced_no }})
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <span class="text-h5">Fabric Details: </span> {{ form.fabrics_name }} ( {{ form.fabrics_length }}) 
                  </v-col>
                </v-row>
  
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <span class="text-h5"> Measurement:</span> {{ form.measurement }}
                  </v-col>
                </v-row>
  
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <span class="text-h5">Delivery Date:</span> {{ form.delivery_date | dateFormat2 }}
                  </v-col>
  
                 </v-row>
                 <v-row>
                  <v-col cols="12" sm="12" md="12"> <span class="text-h5">Assigned Staff:</span> {{ staff }} </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <span class="text-h5">Grand Price Date:</span> {{ form.grand_price|RoundOffThousand}}
                    <span class="text-h5">Amount Paid:</span> {{ form.payment|RoundOffThousand }}
                  </v-col>
  
                  <v-col v-if="bal" cols="12" sm="6" md="6"> </v-col>
  
                  <v-alert bSales="bottom" color="pink darken-1" dark class="text-h5"> Balance: {{ bal|RoundOffThousand }} </v-alert>
                </v-row>
  
              
              </v-container>
              <!-- <small>*indicates required field</small> -->
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red" @click="dialog3 = false"> Close </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
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
        
        date2: null,
        menu2: false,
        allFabrics: '',
        allSales: [],
        moreLength:"",
        headers: [
        { text: '#', align: 'start', sortable: false, value: 'sn' },
          { text: 'Customer', value: 'customer', sortable: false },
          { text: 'Fabrics Name', align: 'start', sortable: false, value: 'fabric_name' }, 
          { text: 'Fabrics length (Yards)', value: 'fabrics_length', sortable: false },
          { text: 'Price', value: 'payment', sortable: false },
          { text: 'Date', value: 'created_at', sortable: false },
          { text: 'Action', value: 'actions', sortable: false },
        ],
  
        // show_date_of_resumption:false,
        columns: [
         
          {
            label: 'Customer Surname',
            field: 'customer.surname',
          },
  
          {
            label: 'Customer Firstname',
            field: 'customer.firstname',
          },
          {
            label: 'Fabrics name',
            field: 'fabrics.fabrics_name',
          },
          {
            label: 'Fabrics length',
            field: 'fabrics_length',
          },
  
          {
            label: 'Price',
            field: 'payment',
          },
  
          {
            label: 'Date',
            field: 'created_at',
          },
  
        
        ],
        btn: '',
        btn2: '',
        dialog: false,
        dialog2: false,
        search: '',
        editMode: false,
  
        allCustomers: [],
        allSales: [],
        allSales2: [],
        totalSales: null || 0,
        staff: '',
        name: '',
        bal: '',
  
        valid: true,
  
        Select_Fabrics:"Select Fabrics",
        
        progress: false,
  
        dialog3: false,
        balance: '',
        refrenced_no:"",
       price_per_yard2:"",
  
        form: new Form({
          id: '',
          customer_id: '',
          fabrics_material_id:null,
          fabrics_length: '',
          grand_price: '',
          payment: '',
          searchName:"",
          date_from: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
          date_to: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
        }),
      }
    },
  
    setup() {
      const isPasswordVisible = ref(false)
  
      const Sales_categories = ref([])
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
        Sales_categories,
  
        // createSales,
  
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
      balancePayment() {
        if (!(this.form.grand_price && this.form.payment)) {
          return
        } else {
          this.balance = this.form.grand_price - this.form.payment
          this.balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        }
      },

      amountToBePaid(){
            this.moreLength ="";
        if(!(this.form.fabrics_material_id && this.form.fabrics_length)){

            return
            }  else{

         let id = this.form.fabrics_material_id;

        const index =  this.allFabrics.findIndex(function(obj) {
                
                return obj.id ===  id;
            });

            // alert(this.allFabrics[index])

          
          

            if(this.form.fabrics_length > this.allFabrics[index].remaining_length) { 
              this.form.grand_price = "";
              return this.moreLength = `You just have ${this.allFabrics[index].remaining_length} yards left`;
           
            }else{

              this.price_per_yard2 = this.allFabrics[index].price_per_yard;
        this.form.grand_price = (parseFloat(this.form.fabrics_length) * parseFloat(this.price_per_yard2)).toFixed(2);

         this.form.payment = this.form.grand_price;
      }
            }

      },
  
      amount(){
  
        this.form.payment = 1;
        this.searchField();   

      },
  
     
      //   getText(item) {`${item.surname} - ${item.text}`
  
      // },
  
      async getAllFabrics() {
        await axios
        .get('api/getallFabrics' + '?token=' + this.$store.state.token)
          .then(response => {
            this.allFabrics = response.data.allFabrics
          })
          .catch(() => {
            // this.$toastr.error("Can not load status", "Error");
          })
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
        this.getAllSales();
  
      },
  
  
      view(item) {
        this.dialog3 = true
        this.form.fill(item)
        this.name = item.customer.surname + ' ' + item.customer.firstname;
  
        this.form.grand_price = item.Sales_payment.grand_price;
        this.form.payment = item.Sales_payment.payment;
        this.staff = item.user.surname + ' ' + item.user.firstname;
        this.refrenced_no = item.refrenced_no;
  
        if (this.form.grand_price && this.form.payment) {
          this.bal = this.form.grand_price - this.form.payment
        }
      },
  
     
      async getAllCustomers() {
        await axios
          .get('api/getAllCustomers' + '?token=' + this.$store.state.token)
          .then(response => {
            this.allCustomers = response.data.allCustomers
          })
          .catch(() => {
            // this.$toastr.error("Can not load status", "Error");totalSales
          })
      },
  
      async getAllSales() {
        await axios
          .get('api/getAllSales' + '?token=' + this.$store.state.token)
          .then(response => {
            this.allSales = response.data.allSales
            this.allSales2 = response.data.allSales2
            this.totalSales = response.data.totalSales 
           this.totalAMount = response.data.totalAMount;
  
          })
          .catch(() => {
            // this.$toastr.error("Can not load status", "Error");
          })
      },
  
      // async getAllSales() {
      //   await axios.get('api/getAllSales'+'?token='+this.$store.state.token)
      //     .then((response) => {
      //        this.allSales = response.data.allSales;
  
      //     })
      //     .catch(() => {
      //       // this.$toastr.error("Can not load status", "Error");
  
      //     });
      // },
  
      async searchSales() {
        let query = this.search
        this.form.
          post('/api/search/sales')
          // .get('api/auth/findDesignation?q='+ query + '&token=' + this.$store.state.token )
          .then(response => {
            this.allSales = response.data.allSales
            this.allSales2 = response.data.allSales2
            this.totalSales = response.data.totalSales 
           this.totalAMount = response.data.totalAMount;
          })
          .catch(() => {
            this.$toastr.error('search failed', 'Error')
          })
      },
  
      create() {
        this.editMode = false
        this.form.reset()
        this.btn = 'Create New Sales'
        this.btn2 = 'Create'
        this.Select_Fabrics = "Select Fabrics";

      },
  
      searchField() {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(function () {
          Fire.$emit('searching')
        }, 2000)
      },
  
      async createSales() {
        this.$refs.form.validate()
  
        this.form.grand_price = parseFloat(this.form.grand_price)
        this.form.payment = parseFloat(this.form.payment)
  
        await this.form
          .post('api/sales' + '?token=' + this.$store.state.token)
          .then(() => {
            this.$toastr.success('Sales created successfully', 'Success')
            this.dialog = false
            Fire.$emit('createSalesEvent')
            this.form.reset()
          })
          .catch(error => {
            this.progress = true
            this.$toastr.error('Can not create Sales', error)
          })
      },
  
      editSales(item) {
        this.editMode = true
        this.form.reset()
        this.btn = 'Update Sales'
        this.btn2 = 'Update'
        this.form.fill(item)
    
        this.Select_Fabrics = item.fabrics.fabric_name;
        this.dialog = true
      },
  
      updateSales(item) {
        this.form.grand_price = parseFloat(this.form.grand_price)
        this.form.payment = parseFloat(this.form.payment)
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
              .put('api/sales/' + this.form.id + '?token=' + this.$store.state.token)
              .then(() => {
                this.$toastr.success('Sales updated successfully', 'Success')
                this.allFabrics = [];
                Fire.$emit('updatedSalesEvent') //update an event
                this.dialog = false
               
              })
              .catch(error => {
                this.btn = 'Updating Sales'   
  
                this.btn2 = ''
  
                this.$toastr.error('Can not update Sales information', 'Error')
              })
          }
        })
      },
  
      deleteSales(item) {
        Swal.fire({
          title: 'Are you sure?',
          text: item.customer.surname+" " + item.fabrics.fabric_name +" "+' will be deleted permanently' + " and it won't be reverted!",  
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!',
        }).then(result => {
          if (result.value) {
            this.form
              .delete('api/sales/' + item.id + '?token=' + this.$store.state.token)
              .then(() => {
                Swal.fire('Deleted!', 'Record has been deleted.', 'success')
                this.allFabrics = [];
                Fire.$emit('DeleteSalesEvent') //delete  an event
                 this.Select_Fabrics = "Select Fabrics";


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
      this.getAllSales();
      this.getAllCustomers();
      this.getAllFabrics();
  
      Fire.$on('searching', () => {
        //listen to searchingField event
  
        this.searchSales()
      })
  
      Fire.$on(['createSalesEvent', 'DeleteSalesEvent', 'updatedSalesEvent'], () => {
        //listen to  events
        this.getAllSales();
        this.getAllFabrics();

        
      })
    },
  }
  </script>
  
  <style lang="scss">
  @import '~@resources/sass/preset/pages/auth.scss';
  </style>
  
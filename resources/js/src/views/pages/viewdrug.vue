<template>
    <v-card class="mt-15">

     <v-row  class="list px-3 mx-auto">
     <v-col  cols="12" md="10">
        <v-text-field v-model="search" label="Search by drug name or brand name" @keyup="searchField"></v-text-field>
      </v-col>
  
       <v-col cols="12" md="2">
        <!-- <vue-excel-xlsx
          :data="allDrug2"
          :columns="columns"
          :file-name="'Drug'"
          :file-type="'xlsx'"
          :sheet-name="'Drug List'"
          >
         <v-icon
         x-large
         style="color:green"
     
          >
        
          mdi-file-excel
        
        </v-icon>
         Drug(s): {{totalDrugs}}
      </vue-excel-xlsx> -->
      <router-link :to="{ name: 'login' }" style="font-size:20px"> 

        <v-icon
      small
      color="green"
       >
      

      mdi-login

     
  
    </v-icon>

    Login
       
      </router-link>
       
      </v-col> 
  
  </v-row>
  
    <v-card-title>Drug(s)</v-card-title>
          

    <v-data-table :headers="headers" :items="allDrugs">

<template v-slot:[`item.sn`]="{ index }">
{{ index + 1 }}
 </template>

 

  <template v-slot:[`item.status`]="{ item }">
 <v-chip  v-if="item.status_id ==1"
style="border-color: forestgreen;"
outlined
pill
>   {{item.status.status}} 

</v-chip>

<v-chip  v-else
style="border-color: red;"
outlined
pill
>   {{item.status.status}} 

</v-chip>
</template>




<template v-slot:[`item.created_at`]="{ item }">
   {{item.created_at|dateReorder2}}
</template>

<!-- 
<template v-slot:[`item.actions`]="{ item }">
  <v-icon small style="color: green" class="mr-2" @click="editDrug(item)">mdi-pencil</v-icon>
  <v-icon small style="color: red" @click="deleteDrug(item)">mdi-delete</v-icon>
</template> -->
</v-data-table>

  
    </v-card>
  </template>
  
  <script>
  // eslint-disable-next-line object-curly-newline
  import { mdiFacebook, mdiTwitter, mdiGithub, mdiGoogle, mdiEyeOutline, mdiEyeOffOutline } from '@mdi/js'
  import { ref } from '@vue/composition-api'
  import axios from 'axios'
  
  
  
  export default {
  
  
    data(){
      
        
  return {
    
      statuses:[],
  
    columns : [
                      {
                          label: "Name",
                          field: "name",
                      },
                      {
                          label: "Brand Name",
                          field: "brand_name",
            
                      },
                      
                      {
                          label: "Strength",
                          field: "strength",
                      },

                      {
                          label: "Presentation",
                          field: "presentation",
                      },

                      {
                          label: "Status",
                          field: "status.status",
                      },
                      
                      {
                          label: "Date Created",
                          field: "created_at",
                      },

                     
                  ],
      btn:"",
      btn2:"",
      dialog: false,
      dialog2: false,
      search: '',
      editMode:false,
    
      allDrugs:[],
      allDrug2:[],
    totalDrugs:null || 0,
   

  
        valid: true,
   
       
  
  
    progress:false,
  
    
    dialog3:false,
  
    
    headers: [
          { text: '#', align: 'start', sortable: false, value: 'sn' },

          { text: 'Drug', align: 'start', sortable: false, value: 'name' }, 
          { text: 'Brand Name', value: 'brand_name', sortable: false },
          { text: 'Strength', value: 'strength', sortable: false },

          { text: 'Presentation', value: 'presentation', sortable: false },
          { text: 'Status', value: 'status', sortable: false },

          // { text: 'Date Created', value: 'created_at', sortable: false },
          // { text: 'Action', value: 'actions', sortable: false },
        ],
   
      
  
    // date_of_appointment: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
  
    
    form: new Form({
      id:"",
      name: "",
      brand_name:"",
      strength:"",
      presentation:"",
      status_id:"",
        }),
  
  }
    },
  
    setup() {
      const isPasswordVisible = ref(false)
      // const username = ref('')
      // const email = ref('')
      // const password = ref('')
  
      const Drug_categories = ref([])
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
        Drug_categories,
  
        // createDrug,
  
        icons: {
          mdiEyeOutline,
          mdiEyeOffOutline,
        },
      }
    },
  
  
    computed: {
      passwordConfirmationRule() {
        return () =>
          this.form.password === this.form.password_confirmation || "Password must match";
      },
  
  
    //   date_of_app(){
    // return this.form.date_of_appointment =   this.date_of_appointment;
  
    //   },
  
  
  
  
  
  
       
      
  
    },
  
    mounted(){
  
      // this.checkLogin();
      // this.getUser();
  
    },

    watch: {
      menu (val) {
        val && setTimeout(() => (this.activePicker = 'YEAR'))
      },

      menu2 (val) {
        val && setTimeout(() => (this.activePicker2 = 'YEAR'))
      },

    },
  
    methods:{


    getUser() {
      axios
        .post('/api/user', { token: this.$store.state.token })
        .then((response) => {
          this.user = response.data.user;
         
        })
        .catch((error) => {
          // this.$toastr.error("Session expired, refresh your page", error);
          // this.$router.push("/login");
        });
    },

  
    
    async  getAllStatuses(){
        await axios.get("/api/allStatuses")
          .then((response) => {
             this.statuses = response.data.allStatuses;
          })
          .catch(() => {
            // this.$toastr.error("Can not load status", "Error");
          
          });
      },
  
  
      async getAllDrugs() {
        await axios.get('api/allDrugs'+'?token='+this.$store.state.token)
          .then((response) => {
             this.allDrugs = response.data.allDrugs;
             this.allDrug2 = response.data.allDrug2;
             this.totalDrugs = response.data.totalDrugs;
            
  
          
          })
          .catch(() => {
            // this.$toastr.error("Can not load status", "Error");
          
          });
      },
  
  
      async searchDrug() {
      
        let query = this.search;
      await   axios.get('/api/search/drug?s='+ query )
          // .get('api/auth/findDesignation?q='+ query + '&token=' + this.$store.state.token )
          .then((response) => {
            this.allDrugs = response.data.allDrugs;
             this.allDrug2 = response.data.allDrug2;
             this.totalDrugs = response.data.totalDrugs;
           
          })
          .catch(() => {
             this.$toastr.error("search failed", "Error");
            
          });
      },
  
      create() {
        this.editMode = false;
        this.form.reset();
        this.btn = "Create New Drug";
        this.btn2 = "Create";
      },
  
  
  searchField() {  
        clearTimeout(this.timeout);
        this.timeout = setTimeout(function () {
          Fire.$emit("searching");
        }, 2000);
      },
  
      
  
      async  createDrug () {
        this.$refs.form.validate()
    
        await this.form.post('api/drugs'+'?token='+this.$store.state.token ).then(() => {

            this.$toastr.success('Drug created successfully', 'Success')
            this.dialog = false;
            Fire.$emit("createDrugEvent");
            this.form.reset()
          })
          .catch(error => {
            this.progress = true
            this.$toastr.error('Can not create an Account', error)
          })
      },
  
  
  
      editDrug(item) {
        this.editMode = true;
        this.form.reset();
        this.btn = "Update Drug";
        this.btn2 = "Update";
        this.form.fill(item);


      //  this.form.status_id = item.status.id;
        
        this.dialog = true;

      
        
      },
  
    
  
      updateDrug(item) {
        Swal.fire({
          title: "Are you sure you want to update?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, update it!",
        }).then((result) => {
          if (result.value) {
            // this.formLoading = "Updating dept";
            this.spinnerLoading = true;
            this.form.put("api/drugs/" + this.form.id+'?token='+this.$store.state.token).then(() => {
                this.$toastr.success("Drug updated successfully", "Success");
                Fire.$emit("updatedDrugEvent"); //update an event
                this.dialog = false;
                
              })
              .catch((error) => {
                this.btn = "Updating Drug";
              
                 this.btn2 = "";
  
  
                this.$toastr.error("Can not update Drug information", "Error");
              });
          }
        });
      },
  
     deleteDrug(item) {
        Swal.fire({
          title: "Are you sure?",
          text:
          item.name +
            " will be deleted permanently" +
            " and it won't be reverted!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.value) {
            this.form.delete("api/drugs/" + item.id +'?token='+this.$store.state.token).then(() => {
                Swal.fire("Deleted!", "Record has been deleted.", "success");
                Fire.$emit("DeleteDrugEvent"); //delete  an event
              })
              .catch((error) => {
                Swal.fire({
                  icon: "error",
                  title: error,
                  text: "Not Deleted, Something went wrong!",
                  footer: "<a href>Why do I have this issue?</a>",
                });
              });
          }
        });
      },
  
  
      
  
     
     
  
  
       
  
      
      
  
     
  
    
  
  
    },
  
  
    created(){

    this.getUser();

  
   this.getAllStatuses();
    this.getAllDrugs();
  
    Fire.$on("searching", () => {
        //listen to searchingField event
       
        this.searchDrug();
      });
    
      Fire.$on(["createDrugEvent", "DeleteDrugEvent", "updatedDrugEvent"], () => {
        //listen to  events
        this.getAllDrugs();
  
      });
    }
  
  
  
    
  }
  </script>
  
  <style lang="scss">
  @import '~@resources/sass/preset/pages/auth.scss';
  </style>
  
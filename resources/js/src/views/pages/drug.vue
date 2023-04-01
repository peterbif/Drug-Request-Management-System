<template>
  <v-card>
    <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="700px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
          @click="create"
        >
          Create New Drug

        </v-btn>

      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">{{btn}}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form   ref="form"
            v-model="valid"
           lazy-validation>

           <v-row>

<v-col
cols="12"
sm="12"
md="12"
>

<v-text-field
v-model="form.gen_id"
label="GEN ID*"
required
persistent-hint
:rules=" [
v => !!v || 'GEN ID is required',
v => (v && v.length <= 199) || 'name must be less than 199 characters',
]"
:counter="199"
class="mb-3"
></v-text-field>
</v-col>
</v-row>
           <v-alert v-if="form.errors.has('name')"     
            dense
            type="error"
            >
           {{form.errors.get('name')}} 
          </v-alert>
        
              <v-row>

                <v-col
                cols="12"
                sm="12"
                md="12"
               >
              
                <v-textarea
              v-model="form.name"
             
              label="Drug*"
            
              required
              persistent-hint
             :rules=" [
        v => !!v || 'Drug Name is required',
        v => (v && v.length <= 199) || 'name must be less than 199 characters',
      ]"
             :counter="199"
              class="mb-3"
            ></v-textarea>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="12"
               >
               <v-alert v-if="form.errors.has('brand_name')"     
            dense
            type="error"
            >
           {{form.errors.get('brand_name')}} 
          </v-alert>
                <v-textarea
              v-model="form.brand_name"
              label="Brand Name*"
              required
              persistent-hint
             :rules="[
        v => !!v || 'Brand name is required',
        v => (v && v.length <= 199) || 'name must be less than 199 characters',
      ]"
             :counter="199"
              class="mb-3"
            ></v-textarea>
              </v-col>

              </v-row>
              <v-row>


<v-col
cols="12"
sm="12"
md="12"
>
<v-alert v-if="form.errors.has('alternative_name')"     
dense
type="error"
>
{{form.errors.get('alternative_name')}} 
</v-alert>
<v-textarea
v-model="form.alternative_name"
label="Alternative Name"
required
persistent-hint

:counter="199"
class="mb-3"
></v-textarea>
</v-col>

</v-row>


              <v-row>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
              <v-alert v-if="form.errors.has('strength')"     
            dense
            type="error"
            >
           {{form.errors.get('strength')}} 
          </v-alert>
                <v-text-field
                  v-model="form.strength"
                  label="Strength*"
                  :counter="199"
                  :rules="[
        v => !!v || 'Strength is required',
        v => (v && v.length <= 199) || 'name must be less than 199 characters',
      ]"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="6"
                 >
                 <v-alert v-if="form.errors.has('presentation')"     
            dense
            type="error"
            >
           {{form.errors.get('presentation')}} 
          </v-alert>
                <v-text-field
                  v-model="form.presentation"
                  label="Presentation*"
                  :rules="[
        v => !!v || 'Presentation is required',
        v => (v && v.length <= 199) || 'name must be less than 199 characters',
      ]"
                  :counter="199"
                  required
                ></v-text-field>
              </v-col>
              </v-row>


            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
              <v-alert v-if="form.errors.has('root')"     
            dense
            type="error"
            >
           {{form.errors.get('root')}} 
          </v-alert>
                <v-text-field
                  v-model="form.root"
                  label="Route"
                  :counter="199"
                  
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="6"
               >
               <v-alert v-if="form.errors.has('status_id')"     
            dense
            type="error"
            >
           {{form.errors.get('status_id')}} 
          </v-alert>
              
          <v-autocomplete
           :items="statuses"
            item-text="status"
            item-value="id"
            label="Drug Status"
            v-model="form.status_id"
             solo
          
           
          ></v-autocomplete>

            </v-col>



            </v-row>
          </v-form></v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red"
            @click="dialog = false"
          >
            Close
          </v-btn>

       

          <v-btn v-if="editMode"
            color="primary"
            @click.prevent="updateDrug()"
            :disabled="!(form.id)">  <v-progress-circular :value="20" v-show="progress"></v-progress-circular
          >
            {{btn2}}
          </v-btn>


          <v-btn v-else
            color="primary"
            @click.prevent="createDrug()"
            :disabled="!(form.gen_id && form.brand_name && form.name && form.presentation && form.strength && form.status_id)">  <v-progress-circular :value="20" v-show="progress"></v-progress-circular
          >
            {{btn2}}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>

  <v-row justify="center">
  
    <v-dialog
      v-model="dialog3"
      persistent
      max-width="500px"
    >
     
      <v-card>
        <v-card-title>
          <span class="text-h5">{{btn}}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form   ref="form"
            v-model="valid"
           lazy-validation>

           <v-row>

<v-col
cols="12"
sm="12"
md="12"
>
<v-file-input
show-size
ref="file"
name="file"
id="drugs"
label="Upload .CV File*"
v-model="file"
required
persistent-hint
:rules="[
v => !!v || 'File is required',

]"
accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" 
class="mb-3"
></v-file-input>
</v-col>
</v-row>
          
              
          </v-form></v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red"
            @click="dialog3 = false"
          >
            Close
          </v-btn>

      
          <v-btn 
            color="primary"
            @click.prevent="submitImportedFile()"
            :disabled="!(file)">  <v-progress-circular :value="20" v-show="progress"></v-progress-circular
          >
            {{btn2}}
          </v-btn>


        </v-card-actions>
      </v-card>
    </v-dialog>


  </v-row>

   <v-row  class="list px-3 mx-auto">
   <v-col  cols="12" md="8">
      <v-text-field v-model="search" label="Search by drug name or brand name" @keyup="searchField"></v-text-field>
    </v-col>

   

    <v-col cols="12" md="2">
      <vue-excel-xlsx
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
    </vue-excel-xlsx>
     
    </v-col>

    <v-col cols="12" md="2">
    <v-btn
          color="primary"
          dark
      
          @click.prevent="importData()"
        >
         import Data
        </v-btn>

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


<template v-slot:[`item.actions`]="{ item }">
<v-icon small style="color: green" class="mr-2" @click="editDrug(item)">mdi-pencil</v-icon>
<v-icon small style="color: red" @click="deleteDrug(item)">mdi-delete</v-icon>
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


  data(){
    
      
return {
  file:"",
    statuses:[],

  columns : [
  {
                        label: "GEN ID",
                        field: "gen_id",
                    },
                    {
                        label: "Name",
                        field: "name",
                    },
                    {
                        label: "Brand Name",
                        field: "brand_name",
          
                    },
                    {
                        label: "Alternative Name",
                        field: "alternative_name",
          
                    },
                    
                    {
                        label: "Strength",
                        field: "strength",
                    },
                    {
                        label: "Route",
                        field: "root",
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
    // dialog3: false,

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
        { text: 'GEN ID', align: 'start', sortable: false, value: 'gen_id' }, 

        { text: 'Drug', align: 'start', sortable: false, value: 'name' }, 
        { text: 'Brand Name', value: 'brand_name', sortable: false },
        { text: 'Alternative Name', value: 'alternative_name', sortable: false },

        { text: 'Strength', value: 'strength', sortable: false },
        { text: 'Route', value: 'root', sortable: false },


        { text: 'Presentation', value: 'presentation', sortable: false },
        { text: 'Status', value: 'status', sortable: false },

        { text: 'Date Created', value: 'created_at', sortable: false },
        { text: 'Action', value: 'actions', sortable: false },
      ],
 
    

  // date_of_appointment: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),

  
  form: new Form({
    id:"",
    gen_id: "",
    name: "",
    brand_name:"",
    alternative_name:"",
    root:"",
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

    this.checkLogin();
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


  // getUser() {
  //   axios
  //     .post('/api/user', { token: this.$store.state.token })
  //     .then((response) => {
  //       this.user = response.data.user;
       
  //     })
  //     .catch((error) => {
  //       // this.$toastr.error("Session expired, refresh your page", error);
  //       // this.$router.push("/login");
  //     });
  // },


  
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
      await axios.get('/api/allDrugs'+'?token='+this.$store.state.token)
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

    importData(){
      this.dialog3 = true;
      this.form.reset();
      this.btn = "Import Drug Details";
      this.btn2 = "Import";
      this.file = "";
    },


    async submitImportedFile() {
  let drugDetails = document.querySelector('#drugs');
  // alert(drugDetails);
  
  let formData = new FormData(drugDetails);
  // formData.append('file', this.$refs.file.files[0]);
 await axios.post('/api/importFile', formData).then(response => {

  //  this.form.post('/api/importFile'+'?token='+this.$store.state.token ).then(() => {
    this.$toastr.success('Drugs uploaded', 'Success')
          this.dialog3 = false;
          Fire.$emit("fileUploaded");
         this.file = "";
  }).catch(error => {
    this.progress = true
     this.$toastr.error('Can not upload file', error)
  });
},
    


searchField() {  
      clearTimeout(this.timeout);
      this.timeout = setTimeout(function () {
        Fire.$emit("searching");
      }, 2000);
    },

    

    async  createDrug () {
      this.$refs.form.validate()
      await this.form.post('/api/drugs'+'?token='+this.$store.state.token ).then(() => {
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
          this.form.put("/api/drugs/" + this.form.id+'?token='+this.$store.state.token).then(() => {
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
          this.form.delete("/api/drugs/" + item.id +'?token='+this.$store.state.token).then(() => {
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

 this.getAllStatuses();
  this.getAllDrugs();

  Fire.$on("searching", () => {
      //listen to searchingField event
     
      this.searchDrug();
    });
  
    Fire.$on(["createDrugEvent", "DeleteDrugEvent", "updatedDrugEvent", "fileUploaded"], () => {
      //listen to  events
      this.getAllDrugs();

    });
  }



  
}
</script>

<style lang="scss">
@import '~@resources/sass/preset/pages/auth.scss';
</style>

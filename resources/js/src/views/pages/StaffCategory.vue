<template>
  <v-card>

    <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
          @click="create"
        >
          Create New Staff Category
        </v-btn>

      
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">{{btn}}f</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form   ref="form"
            v-model="valid"
           lazy-validation>
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
                <v-text-field
                  v-model="form.name"
                  label="Staff Category*"
                  :counter="100"
                  :rules="nameRules"
                  required
                ></v-text-field>
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

      
          <v-btn 
            color="primary"
            @click.prevent="editMode ? updateStaffCategory() : CreateNewStaffCategory()"
            :disabled="!(form.name)">  <v-progress-circular :value="20" v-show="progress"></v-progress-circular
          >
            {{btn2}}
          </v-btn>


        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>

   <v-row  class="list px-3 mx-auto">
   <v-col  cols="12" md="10">
      <v-text-field v-model="search" label="Search name" @keyup="searchField"></v-text-field>
    </v-col>

    <v-col cols="12" md="2">
      <vue-excel-xlsx
        :data="  allStaffCategory"
        :columns="columns"
        :file-name="'Staff'"
        :file-type="'xlsx'"
        :sheet-name="'Staff Nominal Roll'"
        >
       <v-icon
       x-large
       style="color:green"
   
        >
      
        mdi-file-excel
      
      </v-icon>
       Staff Category: {{totalStaff}}
    </vue-excel-xlsx>
     
    </v-col>

</v-row>

  <v-card-title>Staff Category</v-card-title>
         <!-- <v-data-table
          :headers="headers"
          :items="  allStaffCategory"
          disable-pagination
          :hide-default-footer="true"
        >
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon  small style="color: green;" class="mr-2" @click="editStaff(item)">mdi-pencil</v-icon>
            <v-icon small style="color: red;"  @click="deleteStaff(item)">mdi-delete</v-icon>
          </template>
        </v-data-table> -->
        <v-simple-table
       height="250"
      fixed-header
      >
       <template v-slot:default>
      <thead>
        <tr>
          <th>#</th>
          <th class="text-uppercase">
          Name
          </th>
          <th class="text-left text-uppercase">
          Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in   allStaffCategory"
          :key="item.id"
        >
          <td>{{index + 1}}</td>
         
          <td class="text-left">{{ item.name}}</td>
          
          <td class="text-left">  <v-icon  small style="color: green;" class="mr-2" @click="editStaff(item)">mdi-pencil</v-icon>
            <v-icon small style="color: red;"  @click="deleteStaff(item)">mdi-delete</v-icon>
          </td>
        </tr>
      </tbody>
    </template>
    </v-simple-table>


        <!-- <v-card-actions v-if="  allStaffCategory.length > 0">
          <v-btn small color="error" @click="remove  allStaffCategory">
            Remove All
          </v-btn>
        </v-card-actions> -->

     
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


  columns : [
                    {
                        label: "Staff Category",
                        field: "name",
                    },
                    
                ],
    btn:"",
    btn2:"",
    dialog: false,
    
    search: '',
    editMode:false,
    

      allStaffCategory: [],
     

      valid: true,
 
      nameRules: [
        v => !!v || 'Staff Category is required',
        v => (v && v.length <= 100) || 'Staff Category must be less than 199 characters',
      ],

    

  progress:false,

  
  totalStaff:null || 0,

  

  
  form: new Form({
    id:"",
    name: "",
    
   
      
      }),

}
  },

  setup() {
    

  
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
      
      socialLink,
     

     

      icons: {
        mdiEyeOutline,
        mdiEyeOffOutline,
      },
    }
  },


  computed: {
   






     
    

  },

  mounted(){

    this.checkLogin();

  },

  methods:{


    async allStaffCategories() {

    

        await axios.get("/api/allStaffCategory"+'?token='+this.$store.state.token)
        .then((response) => {
           this.allStaffCategory = response.data.allStaffCategory;
           this.totalStaff = response.data.totalStaff;
          
        
        })
        .catch(() => {
          // this.$toastr.error("Can not load status", "Error");
        
        });
    },


    // async allStaffCategory() {

    //   alert(1)
    //   // await axios.get("/api/allStaffCategory"+'?token='+this.$store.state.token)
    //   //   .then((response) => {
    //   //      this.allStaffCategory = response.data.allStaffCategory;
    //   //      this.totalStaff = response.data.totalStaff;
          
        
    //   //   })
    //   //   .catch(() => {
    //   //     // this.$toastr.error("Can not load status", "Error");
        
    //   //   });
    // },


    async searchStaffCategory() {
    
      let query = this.search;
    await   axios.get('/api/search/staffCategory?s='+ query )
        .then((response) => {
          this.allStaffCategory = response.data.allStaffCategory;
         
        })
        .catch(() => {
           this.$toastr.error("search failed", "Error");
          
        });
    },

    create() {
      this.editMode = false;
      this.form.reset();
      this.btn = "Create New Staff Category";
      this.btn2 = "Create";
    },


searchField() {  
      clearTimeout(this.timeout);
      this.timeout = setTimeout(function () {
        Fire.$emit("searching");
      }, 2000);
    },



    async CreateNewStaffCategory(){

      await this.form.post('api/staffCategory'+'?token='+this.$store.state.token ).then(() => {

      this.$toastr.success('Created successfully', 'Success')
      this.dialog = false;
      Fire.$emit("createdStaffEvent");
      this.form.reset()
    })
    .catch(error => {
      this.progress = true
      this.$toastr.error('Can not create an Account', error)
    })
    },



    editStaff(item) {
      this.editMode = true;
      this.form.reset();
      this.btn = "Update Staff Category";
      this.btn2 = "Update";
      this.form.fill(item);
      this.dialog = true;
      // this.form.role_id = dept.roles[0].id;
      // this.btnName = "Update";
    },



      

      updateStaffCategory() {
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
          this.form.put("api/staffCategory/" + this.form.id+ '?token='+this.$store.state.token).then(() => {
              this.$toastr.success("Staff updated successfully", "Success");
              Fire.$emit("updatedStaffEvent"); //update an event
              this.dialog = false;
              
            })
            .catch((error) => {
              this.btn = "Updating Staff";
            
               this.btn2 = "";


              this.$toastr.error("Can not update Staff information", "Error");
            });
        }
      });
    },

   deleteStaff(item) {
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
          this.form.delete("api/staffCategory/" + item.id +'?token='+this.$store.state.token).then(() => {
              Swal.fire("Deleted!", "Record has been deleted.", "success");
              Fire.$emit("DeleteStaffEvent"); //delete  an event
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

  
 this.allStaffCategories();

 
  Fire.$on("searching", () => {
      //listen to searchingField event
     
      this.searchStaffCategory();
    });
  
    Fire.$on(["createdStaffEvent", "DeleteStaffEvent", "updatedStaffEvent"], () => {
      //listen to  events
     this.allStaffCategories();

    });
  }



  
}
</script>

<style lang="scss">
@import '~@resources/sass/preset/pages/auth.scss';
</style>

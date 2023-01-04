<template>
  <v-card>

  <!-- dialog2 -->
    <v-row justify="center">
    <v-dialog
      v-model="dialog2"
      persistent
      max-width="600px"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">Upload Passport</span>
        </v-card-title>
        <v-card-text>
          <v-container>

            <!-- <v-card> -->
           
          
            <!-- </v-card> -->

            <v-form   ref="form"
            v-model="valid"
           lazy-validation>
           <v-alert    v-if="form.errors.has('error')"     
            dense
            type="error"
            >
           {{form.errors.get('error')}} 
          </v-alert>
           
              <v-row id="preview">
                <v-col
                cols="12"
                sm="6"
                md="6"
               >
                <v-img
               
                v-if="urlp" 
                :src="urlp"
              height="125"
              width="125"
              class="grey darken-4"
              ></v-img>

              </v-col>


                <v-col
                cols="12"
                sm="6"
                md="6"
               >
               
             <v-file-input accept="image/*"
             id="passportId"
             outlined 
             label="Upload Passport" 
              class="mb-3"
              v-model="form.passport"
               @change="selectPhoto()
               readURL(this);"
               ></v-file-input>

               </v-col>
            </v-row>
          </v-form></v-container>
          <!-- <small>*indicates required field</small> -->
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red"
            @click="dialog2 = false"
          >
            Close
          </v-btn>

    
          <v-btn
            color="primary"
            @click="uploadPassport" :disabled="!(form.passport)">  <v-progress-circular :value="20" v-show="progress"></v-progress-circular
          >
            Upload
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>


 

    <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }"  v-if="user[0].staffcategory.id === 1">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
          @click="create"
        >
          Create New Staff
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
           <v-alert v-if="form.errors.has('surname')"     
            dense
            type="error"
            >
           {{form.errors.get('surname')}} 
          </v-alert>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  v-model="form.surname"
                  label="Surname*"
                  :counter="199"
                  :rules="surnameRules"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="6"
                 >
                 <v-alert v-if="form.errors.has('firstname')"     
            dense
            type="error"
            >
           {{form.errors.get('firstname')}} 
          </v-alert>
                <v-text-field
                  v-model="form.firstname"
                  label="Firstname*"
                  :rules="firstnameRules"
                  :counter="199"
                  required
                ></v-text-field>
              </v-col>
              </v-row>

              <!-- <v-row>
               
               

                <v-col
                cols="12"
                sm="6"
                md="6"
                 > -->
               <!-- <v-date-picker v-model="form.date_of_appointment"
              required
             :rules="dateOfResumptionRule"
              class="mb-3"
              v-show="show_date_of_resumption">
              </v-date-picker> -->

              <!-- <div class="mb-6">Active picker: <code>{{ activePicker || 'null' }}</code></div> -->
    <!-- <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="form.date_of_appointment"
          label="Date of Appointment"
          prepend-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
        v-model="form.date_of_appointment"
        :active-picker.sync="activePicker"
         min="1950-01-01"
        @change="save"
      ></v-date-picker>
    </v-menu>
               </v-col>
               </v-row> -->


              <v-row>
              <!-- <v-col
                cols="12"
                sm="12"
                md="12"
               >
               <v-alert v-if="form.errors.has('contact_address')"     
            dense
            type="error"
            >
           {{form.errors.get('contact_address')}} 
          </v-alert>
                <v-textarea
              v-model="form.contact_address"
             
              label="Contact Address*"
              hint="Street Number, Area, state" 
              required
              persistent-hint
             :rules="contactAddressRules"
             :counter="199"
              class="mb-3"
            ></v-textarea>
              </v-col> -->

              <!-- <v-col
                cols="12"
                sm="6"
                md="6"
               >
               <v-alert v-if="form.errors.has('phone_no')"     
            dense
            type="error"
            >
           {{form.errors.get('phone_no')}} 
          </v-alert>
              <v-text-field
              v-model="form.phone_no"
              label="Phone No"
              placeholder="08067155307"
              :rules="phoneRules"
              :counter="20"
            ></v-text-field>
            </v-col> -->

                <!-- <v-col
                cols="12"
                sm="6"
                md="6"
               >
               <v-alert v-if="form.errors.has('staff_category_id')"     
            dense
            type="error"
            >
           {{form.errors.get('staff_category_id')}} 
          </v-alert>
               <v-autocomplete
             :items="staff_categories"
              item-text="name"
              item-value="id"
             label="Select Staff Category"
             v-model="form.staff_category_id"
              solo
              :rules="[v => !!v || 'Staff Category is required']"
             
            ></v-autocomplete>

            </v-col> -->

            <v-col
                cols="12"
                sm="12"
                md="12"
               >

               <v-alert v-if="form.errors.has('secret_question_id')"     
            dense
            type="error"
            >
           {{form.errors.get('secret_question_id')}} 
          </v-alert>
            <v-select
             :items="allSecretQuestions"
             item-text="name"
             item-value="id"
             label="Select Secret Question"
             v-model="form.secret_question_id"
              solo
              :rules="[v => !!v || ' Secret Question is required']"
              class="mb-3"
            >

            
           
             </v-select>

            </v-col>


           


               <v-col
                cols="12"
                sm="6"
                md="6"
               >
               <v-alert v-if="form.errors.has('answer')"     
            dense
            type="error"
            >
           {{form.errors.get('answer')}} 
          </v-alert>
               <v-text-field
              v-model="form.answer"
              label="Answer to the secret question"             
              :rules="answerRules"
              class="mb-3"
              ></v-text-field>

               </v-col>

               <v-col
                cols="12"
                sm="6"
                md="6"
               >
               <v-alert v-if="form.errors.has('staff_category_id')"     
            dense
            type="error"
            >
           {{form.errors.get('staff_category_id')}} 
          </v-alert>
               <v-autocomplete
             :items="staff_categories"
              item-text="name"
              item-value="id"
             label="Select Staff Category"
             v-model="form.staff_category_id"
              solo
              :rules="[v => !!v || 'Staff Category is required']"
             
            ></v-autocomplete>

            </v-col>


              <v-col cols="12"
                 sm="12"
                md="12"
              >

              <v-alert v-if="form.errors.has('email')"     
            dense
            type="error"
            >
           {{form.errors.get('email')}} 
          </v-alert>
                
              <v-text-field
              v-model="form.email"
              required
              label="Email*"
              hint="john@example.com"
              persistent-hint
             :rules="emailRules"
              class="mb-3"
            ></v-text-field>

            </v-col>


              <v-col cols="12"
              sm="6"
                md="6">


              <v-alert v-if="form.errors.has('password')"     
            dense
            type="error"
            >
           {{form.errors.get('password')}} 
          </v-alert>
                
              <v-text-field
              v-model="form.password"
             
              :type="isPasswordVisible ? 'text' : 'password'"
              label="Password"
              :counter="8"
              placeholder="············"
              :append-icon="isPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
              :rules="passwordRules"   
                   
              @click:append="isPasswordVisible = !isPasswordVisible"
            ></v-text-field>
            </v-col>

        
            <v-col cols="12"
            sm="6"
                md="6">

                <v-alert v-if="form.errors.has('password_confirmation')"     
            dense
            type="error"
            >
           {{form.errors.get('password_confirmation')}} 
          </v-alert>
            <v-text-field
              v-model="form.password_confirmation"
              
              :type="isPasswordVisible ? 'text' : 'password'"
              label="Confirm Password"
              placeholder="············"
              :append-icon="isPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
              :rules="confirmPasswordRules.concat(passwordConfirmationRule)" 
              @click:append="isPasswordVisible = !isPasswordVisible"
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

       

          <v-btn v-if="editMode"
            color="primary"
            @click.prevent="updateStaff()"
            :disabled="!(form.id)">  <v-progress-circular :value="20" v-show="progress"></v-progress-circular
          >
            {{btn2}}
          </v-btn>


          <v-btn v-else
            color="primary"
            @click.prevent="createstaff()"
            :disabled="!(form.firstname &&  form.secret_question_id  && form.answer &&  form.email && form.password && form.password_confirmation)">  <v-progress-circular :value="20" v-show="progress"></v-progress-circular
          >
            {{btn2}}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>

   <v-row  class="list px-3 mx-auto">
   <v-col  cols="12" md="10">
      <v-text-field v-model="search" label="Search by Surname" @keyup="searchField"></v-text-field>
    </v-col>

    <v-col cols="12" md="2">
      <vue-excel-xlsx
        :data="allStaff2"
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
       Staff: {{totalStaff}}
    </vue-excel-xlsx>
     
    </v-col>

</v-row>

  <v-card-title>Staff</v-card-title>
         <!-- <v-data-table
          :headers="headers"
          :items="allStaff"
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
          Fullname
          </th>
         
          <th class="text-left text-uppercase">
           Email
          </th>
         
         
          <th class="text-left text-uppercase">
          Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in allStaff"
          :key="item.id"
        >
   

          <td>{{index + 1}}</td>
          <td class="text-left"  @click="view(item)">{{ item.surname }}  {{ item.firstname }} </td>

         

          <td class="text-left">{{ item.email }}</td>

       
        
          <td v-if="user[0].staffcategory.id === 1" class="text-left"> 
             <v-icon  small style="color: green;" class="mr-2" @click="editStaff(item)">mdi-pencil</v-icon>
            <v-icon small style="color: red;"  @click="deleteStaff(item)">mdi-delete</v-icon>
          </td>

          <td v-else>

            <v-chip 
style="border-color: red;"
outlined
pill
>    Not Authorized

</v-chip>

          </td>
        </tr>
      </tbody>
    </template>
    </v-simple-table>


        <!-- <v-card-actions v-if="allStaff.length > 0">
          <v-btn small color="error" @click="removeAllStaff">
            Remove All
          </v-btn>
        </v-card-actions> -->

              <!-- dialog3 -->

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

  activePicker: null,
      date: null,
      menu: false,
      user:"",

  
  show_date_of_resumption:false,
  columns : [
                    {
                        label: "Surname",
                        field: "surname",
                    },
                    {
                        label: "Firstname",
                        field: "firstname",
          
                    },
                   
                   
                    {
                        label: "Email",
                        field: "email",
                    },
                  
                ],
    btn:"",
    btn2:"",
    dialog: false,
    dialog2: false,
    search: '',
    editMode:false,
    // headers: [
    //     { text: "Surname", align: "start", sortable: false, value: "surname" },
    //     { text: "Firstname", value: "firstname", sortable: false },
    //     { text: "Staff Category", value: "staff_category_id", sortable: false },
    //     { text: "Email", value: "email", sortable: false },
    //     { text: "Phone NO", value: "phone_no", sortable: false },
    //     { text: "Actions", value: "actions", sortable: false },
    //   ],
        
    allStaff: [ ],
    allStaff2: [ ],

      valid: true,
 
      surnameRules: [
        v => !!v || 'Surname is required',
        v => (v && v.length <= 199) || 'Surname must be less than 199 characters',
      ],

      firstnameRules: [
        v => !!v || 'Firstname is required',
        v => (v && v.length <= 199) || 'Firstname must be less than 199 characters',
      ],

      contactAddressRules: [
        v => !!v || 'Contact Address is required',
        v => (v && v.length <= 199) || 'Firstname must be less than 199 characters',
      ],

      phoneRules:[
      v => !!v || 'Phone No is required',
      v => (v && v.length <= 20) || 'Phone No must be less than 20 characters',
      ],

      dateOfResumptionRule: v => !!v || 'Date of Resumption is required',


      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],

      passwordRules: [
        
    
    v => !!v || "Password is required",
       v => (v && v.length >= 8) || 'Passworfd must be minimum of 8 characters',
      // value => {
      //     const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
      //     return (
      //       pattern.test(value) ||
      //       "Min. 8 characters with at least one capital letter, a number and a special character."
      //     );
      // }

    ],
   
    confirmPasswordRules: [v => !!v || "Password Confrimation  is required"],
      answerRules: [ 
        v => !!v || 'Answer to the  secret question is required',
        
      ],

  staff_categories:[],
  allSecretQuestions:[],
  progress:false,

  urlp: null,
  urlp2: null,

  dialog3:false,
  staff_category:"",
  totalStaff:null || 0,

  // date_of_appointment: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),

  
  form: new Form({
    id:"",
    surname: "",
    firstname:"",
    staff_category_id:"",
    secret_question_id:"",
    answer:"",
    email: "",
    password:"",
    password_confirmation: "",
 
   
   
  

   
      
      }),

}
  },

  setup() {
    const isPasswordVisible = ref(false)
    // const username = ref('')
    // const email = ref('')
    // const password = ref('')

    const staff_categories = ref([])
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
      staff_categories,

      // createstaff,

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


    watch: {
      menu (val) {
        val && setTimeout(() => (this.activePicker = 'YEAR'))
      },
    },

  //   date_of_app(){
  // return this.form.date_of_appointment =   this.date_of_appointment;

  //   },






     
    

  },

  mounted(){

    this.checkLogin();

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


    async getAllStaff() {
      await axios.get("/api/getAllStaff").then((response) => {
           this.allStaff = response.data.allstaff;
           this.allStaff2 = response.data.allstaff2;
           this.totalStaff = response.data.totalStaff;
          // response.data.allStaffCategories.forEach((Object) => {
          //   this.staff_categories.push({ value: Object.id, label: Object.name});
          // });

        
        })
        .catch(() => {
          // this.$toastr.error("Can not load status", "Error");
        
        });
    },


    async searchSuranme() {
    
      let query = this.search;
    await   axios.get('/api/search/staff?s='+ query )
        // .get('api/auth/findDesignation?q='+ query + '&token=' + this.$store.state.token )
        .then((response) => {
          this.allStaff = response.data.allStaff;
         
        })
        .catch(() => {
           this.$toastr.error("search failed", "Error");
          
        });
    },

    create() {
      this.editMode = false;
      this.form.reset();
      this.btn = "Create New Staff";
      this.btn2 = "Create";
    },


searchField() {  
      clearTimeout(this.timeout);
      this.timeout = setTimeout(function () {
        Fire.$emit("searching");
      }, 2000);
    },

    

    async  createstaff () {
      this.$refs.form.validate()
      await this.form
        .post('/api/auth/register')
        .then(() => {
          this.$toastr.success('Account created successfully', 'Success')
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
      this.btn = "Update Staff";
      this.btn2 = "Update";
      this.form.fill(item);
      this.dialog = true;
      // this.form.role_id = dept.roles[0].id;
      // this.btnName = "Update";
    },



      

    updateStaff(item) {
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
          this.form.put("api/staffs/" + this.form.id+'?token='+this.$store.state.token).then(() => {
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
        item.surname +
          " will be deleted permanently" +
          " and it won't be reverted!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.value) {
          this.form.delete("api/staffs/" + item.id +'?token='+this.$store.state.token).then(() => {
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


    async getAllStaffCategories() {
      await axios.get("/api/getAllStaffCategories")
        .then((response) => {
           this.staff_categories = response.data.allStaffCategories;
          // response.data.allStaffCategories.forEach((Object) => {
          //   this.staff_categories.push({ value: Object.id, label: Object.name});
          // });

        
        })
        .catch(() => {
          // this.$toastr.error("Can not load status", "Error");
        
        });
    },
    




    async getAllSecretQuestions() {
      await axios.get("/api/allSecretQuestions")
        .then((response) => {
           this.allSecretQuestions = response.data.allSecretQuestions;
        })
        .catch(() => {
          // this.$toastr.error("Can not load status", "Error");
        
        });
    },

    



  },


  created(){

    this.getUser();
    this.getAllStaffCategories();

  this.getAllSecretQuestions();
  this.getAllStaff();

  Fire.$on("searching", () => {
      //listen to searchingField event
     
      this.searchSuranme();
    });
  
    Fire.$on(["createdStaffEvent", "DeleteStaffEvent", "updatedStaffEvent"], () => {
      //listen to  events
      this.getAllStaff();

    });
  }



  
}
</script>

<style lang="scss">
@import '~@resources/sass/preset/pages/auth.scss';
</style>

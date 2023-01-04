<template>
  <div class="auth-wrapper auth-v1">
    <div class="auth-inner">
      <v-card class="auth-card">
        <!-- logo -->
        <v-card-title class="d-flex align-center justify-center py-7">
          <router-link to="/" class="d-flex align-center">
            <v-img
              :src="require('@/assets/images/logos/logo.svg').default"
              max-height="30px"
              max-width="30px"
              alt="logo"
              contain
              class="me-3"
            ></v-img>

            <h2 class="text-2xl font-weight-semibold">Trado Fashion Home</h2>
          </router-link>
        </v-card-title>

        <!-- title -->
        <v-card-text>
          <p class="text-2xl font-weight-semibold text--primary mb-2">Adventure starts here 🚀</p>
          <p class="mb-2">Make your business management easy and fun!</p>
        </v-card-text>

        <!-- login form -->
        <v-card-text>
          <v-form   ref="form"
            v-model="valid"
           lazy-validation>
           
            <v-alert    v-if="form.errors.has('error')"     
            dense
            type="error"
            >
           {{form.errors.get('error')}} 
          </v-alert>
            <v-text-field
              v-model="form.surname"
              outlined
              label="Surname"
              placeholder="JohnDoe"
              class="mb-3"
              :counter="199"
              :rules="surnameRules"
              required
            ></v-text-field>
            
            <v-text-field
              v-model="form.firstname"
              outlined
              label="Firstname"
              placeholder="JohnDoe"
              :rules="firstnameRules"
              :counter="199"
              class="mb-3"
            ></v-text-field>

            <v-textarea
              v-model="form.contact_address"
              outlined
              label="Contact Address"
              placeholder="No 6 Adeyemi Street"
             :rules="contactAddressRules"
             :counter="199"
              class="mb-3"
            ></v-textarea>

            <v-text-field
              v-model="form.phone_no"
              outlined
              label="Phone No"
              placeholder="08067155307"
              :rules="phoneRules"
              :counter="20"
              class="mb-3"
            ></v-text-field>

            

            <!-- <v-file-input accept="image/*"
             outlined 
             label="Upload Passport" 
              class="mb-3"
               id="passportId"
              v-model="form.passport"
               @change="selectPhoto()"
               ></v-file-input> -->
            <v-select
             :items="staff_categories"
             item-text="name"
            item-value="id"
             label="Select Staff Category"
             v-model="form.staff_category_id"
              solo
              :rules="[v => !!v || 'Staff Category is required']"
              class="mb-3"
            ></v-select>

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

             <v-text-field
              v-model="form.answer"
              outlined
              label="Answer to the secret question"             
              :rules="answerRules"
              class="mb-3"
            ></v-text-field>

            
            <v-text-field
              v-model="form.email"
              outlined
              label="Email"
              placeholder="john@example.com"
             :rules="emailRules"
              class="mb-3"
            ></v-text-field>

            <v-text-field
              v-model="form.password"
              outlined
              :type="isPasswordVisible ? 'text' : 'password'"
              label="Password"
              :counter="8"
              placeholder="············"
              :append-icon="isPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
              :rules="passwordRules"   
                   
              @click:append="isPasswordVisible = !isPasswordVisible"
            ></v-text-field>

        

            <v-text-field
              v-model="form.password_confirmation"
              outlined
              :type="isPasswordVisible ? 'text' : 'password'"
              label="Confirm Password"
              placeholder="············"
              :append-icon="isPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
              :rules="confirmPasswordRules.concat(passwordConfirmationRule)" 
              @click:append="isPasswordVisible = !isPasswordVisible"
            ></v-text-field>


            <!-- <v-checkbox hide-details class="mt-1">
              <template #label>
                <div class="d-flex align-center flex-wrap">
                  <span class="me-2">I agree to</span><a href="javascript:void(0)">privacy policy &amp; terms</a>
                </div>
              </template>
            </v-checkbox> -->

            <v-btn block color="primary" class="mt-6" @click="register" :disabled="!(form.firstname && form.contact_address && form.phone_no && form.staff_category_id && form.secret_question_id  && form.answer &&  form.email && form.password)">  <v-progress-circular :value="20" v-show="progress"></v-progress-circular> Sign Up </v-btn>
          </v-form>
        </v-card-text>

        <!-- create new account  -->
        <v-card-text class="d-flex align-center justify-center flex-wrap mt-2">
          <span class="me-2"> Already have an account? </span>
          <router-link :to="{ name: 'login' }"> Sign in instead </router-link>
        </v-card-text>

        <!-- divider -->
        <v-card-text class="d-flex align-center mt-2">
          <v-divider></v-divider>
          <span class="mx-5">or</span>
          <v-divider></v-divider>
        </v-card-text>

        <!-- social link -->
        <v-card-actions class="d-flex justify-center">
          <v-btn v-for="link in socialLink" :key="link.icon" icon class="ms-1">
            <v-icon :color="$vuetify.theme.dark ? link.colorInDark : link.color">
              {{ link.icon }}
            </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>

    <!-- background triangle shape  -->
    <!-- <img
      class="auth-mask-bg"
      height="190"
      :src="require(`@/assets/images/misc/mask-${$vuetify.theme.dark ? 'dark' : 'light'}.png`).default"
    /> -->

    <!-- tree -->
    <!-- <v-img class="auth-tree" width="247" height="185" :src="require('@/assets/images/misc/tree.png').default"></v-img> -->

    <!-- tree  -->
    <!-- <v-img
      class="auth-tree-3"
      width="377"
      height="289"
      :src="require('@/assets/images/misc/tree-3.png').default"
    ></v-img> -->
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiFacebook, mdiTwitter, mdiGithub, mdiGoogle, mdiEyeOutline, mdiEyeOffOutline } from '@mdi/js'
import { ref } from '@vue/composition-api'
import axios from 'axios'



export default {

  data(){
return {
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


      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],

      passwordRules: [
        
    
    v => !!v || "Password is required",
    //   //  v => (v && v.length >= 8) || 'Passworfd must be minimum of 8 characters',
      value => {
          const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
          return (
            pattern.test(value) ||
            "Min. 8 characters with at least one capital letter, a number and a special character."
          );
      }

    ],
   
    confirmPasswordRules: [v => !!v || "Password Confrimation  is required"],
      answerRules: [ 
        v => !!v || 'Answer to the  secret question is required',
        
      ],

  staff_categories:[],
  allSecretQuestions:[],
  progress:false,
  
  form: new Form({
   
    surname: "",
    firstname:"",
    contact_address:"",
    phone_no:"",
    passport:"",
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

      // register,

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


   
    

  },

  methods:{

    selectPhoto(e) {
      //  let file = e.target.files[0];
      let file = $("#passportId").prop("files")[0];
      //console.log(file);
      let reader = new FileReader();
      //file size not more than 500kb
      //  if(file['size'] < 500000){
      reader.onloadend = (file) => {
        // console.log('Result', reader.result);
        this.form.passport = reader.result;
      };
      reader.readAsDataURL(file);
      //            }
      //            else{
      //                Swal.fire({
      //    icon: 'error',
      //    title: 'Oops...',
      //   text: '.....file can\'t be uploaded, File size is more than 500kb',
      //   footer: '<a href>Why do I have this issue?</a>'
      // })
      //            }
    },
    // readURL(e) {
    //   let fileId = $("#passportId").prop("files")[0];
    //   // const file = e.target.files[0];
    //   this.urlp = URL.createObjectURL(fileId);
    // },

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

    


    async  register () {
      this.$refs.form.validate()
      await this.form
        .post('/api/auth/register')
        .then(() => {
          this.$toastr.success('Account created successfully', 'Success')
          this.$router.push('/')
          this.form.reset()
        })
        .catch(error => {
          this.progress = true
          this.spinnerLoading = true
          this.$toastr.error('Can not create an Account', error)
        })
    }


  },


  created(){

  this.getAllStaffCategories();
  this.getAllSecretQuestions();
  }
}
</script>

<style lang="scss">
@import '~@resources/sass/preset/pages/auth.scss';
</style>

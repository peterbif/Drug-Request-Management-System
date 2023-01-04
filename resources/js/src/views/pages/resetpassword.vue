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
  
              <h1 class="text-2xl font-weight-semibold text-center">Drug Request Management System</h1>
            </router-link>
          </v-card-title>
  
          <!-- title -->
          <v-card-text>
            <p class="text-2xl font-weight-semibold text--primary mb-2 text-center">Reset Password</p>
            <p class="mb-2">Please select the secret question and provide answer to reset password</p>
          </v-card-text>
  
          <!-- resetpassword form -->
          <v-card-text>
            <!-- <h1>{{form.email}}</h1> -->
            <v-form 
            ref="form"
        v-model="valid"
        lazy-validation>
  
             <v-alert    v-if="form.errors.has('error') || form.errors.has('email')"     
              dense
              type="error"
              >
             {{form.errors.get('error') ||  form.errors.get('email') }} 
           </v-alert>

           <v-text-field
              v-model="form.email"
              outlined
              label="Email"
              placeholder="john@example.com"
             :rules="emailRules"
              class="mb-3"
            ></v-text-field>
           <v-select
             :items="allSecretQuestions"
             item-text="name"
             item-value="id"
             label="Select Your Secret Question"
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
              :rules="[ 
           v => !!v || 'Answer to the  secret question is required',
        
           ]"
              class="mb-3"
            ></v-text-field>
  
              <v-text-field
                v-model="form.password"
                outlined
                :type="isPasswordVisible ? 'text' : 'password'"
                label="New Password"
               
                placeholder="············"
                :append-icon="isPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
                :rules="passwordRules"
                required
                @click:append="isPasswordVisible = !isPasswordVisible"
              ></v-text-field>

              <v-text-field
              v-model="form.password_confirmation"
              outlined
              :type="isPasswordVisible ? 'text' : 'password'"
              label="Confirm New Password"
              placeholder="············"
              :append-icon="isPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
              :rules="confirmPasswordRules.concat(passwordConfirmationRule)" 
              @click:append="isPasswordVisible = !isPasswordVisible"
            ></v-text-field>
  
              <!-- <div class="d-flex align-center justify-space-between flex-wrap">
                <v-checkbox label="Remember Me" hide-details class="me-3 mt-1"> </v-checkbox>
   -->
                <!-- forgot link -->
                <!-- <a href="javascript:void(0)" class="mt-1"> Forgot Password? </a>
              </div> -->
  
              <v-btn block color="primary" class="mt-6" @click="resetpassword" :disabled="!(form.email && form.secret_question_id && form.answer && form.password && form.password_confirmation)"> Reset </v-btn>
            </v-form>
          </v-card-text>

              <!-- create new account  -->
        <v-card-text class="d-flex align-center justify-center flex-wrap mt-2">
          <span class="me-2"> Got an Account? </span>
          <router-link :to="{ name: 'login' }"> Login here! </router-link>
        </v-card-text>
  
          <!-- create new account  -->
          <!-- <v-card-text class="d-flex align-center justify-center flex-wrap mt-2">
            <span class="me-2"> New on our platform? </span>
            <router-link :to="{ name: 'register' }"> Create an account </router-link>
          </v-card-text>
   -->
          <!-- divider -->
          <!-- <v-card-text class="d-flex align-center mt-2">
            <v-divider></v-divider>
            <span class="mx-5">or</span>
            <v-divider></v-divider>
          </v-card-text> -->
  
          <!-- social links -->
          <!-- <v-card-actions class="d-flex justify-center">
            <v-btn v-for="link in socialLink" :key="link.icon" icon class="ms-1">
              <v-icon :color="$vuetify.theme.dark ? link.colorInDark : link.color">
                {{ link.icon }}
              </v-icon>
            </v-btn>
          </v-card-actions> -->
        </v-card>
      </div>
  
      <!-- background triangle shape  -->
      <img
        class="auth-mask-bg"
        height="173"
        :src="require(`@/assets/images/misc/mask-${$vuetify.theme.dark ? 'dark' : 'light'}.png`).default"
      />
  
      <!-- tree -->
      <v-img class="auth-tree" width="247" height="185" :src="require('@/assets/images/misc/tree.png').default"></v-img>
  
      <!-- tree  -->
      <v-img
        class="auth-tree-3"
        width="377"
        height="289"
        :src="require('@/assets/images/misc/tree-3.png').default"
      ></v-img>
    </div>
  </template>
  
  <script>
  // eslint-disable-next-line object-curly-newline
  import { mdiFacebook, mdiTwitter, mdiGithub, mdiGoogle, mdiEyeOutline, mdiEyeOffOutline } from '@mdi/js'
  import { ref} from '@vue/composition-api'
  
  import { email, required } from '@vuelidate/validators'
   import { useVuelidate } from '@vuelidate/core'
import axios from 'axios'

  
  export default {
  
  data(){
  return {

    allSecretQuestions:[],
    valid: true,
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
  
  
  
    form: new Form({
          email:"",
          password: "",
          secret_question_id:"",
          answer:"",
          password_confirmation:"",
        
        }),
  
  }
    },
  
    setup() {
      const isPasswordVisible = ref(false)
      const email = ref('')
      const password = ref('')
  
      
     
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
        // email,
        // password,
        socialLink,
        // resetpassword,
        
       
  
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
  

        async getAllSecretQuestions() {
      await axios.get("/api/allSecretQuestions")
        .then((response) => {
           this.allSecretQuestions = response.data.allSecretQuestions;
        })
        .catch(() => {
          // this.$toastr.error("Can not load status", "Error");
        
        });
    },
     
      async resetpassword (){
    this.$refs.form.validate()
       await  this.form
           .post('api/auth/resetPassword')
           .then((response) => {
            if(response.data.success == 'password reset'){
            //   this.$store.commit('setToken', response.data.token);
             this.$toastr.success("reset password successfully", "Success");
              this.$router.push('/login');
              this.form.reset();
            }
           })
           .catch((error) => {
             // this.spinnerLoading = true;
             this.$toastr.error("Can not resetpassword", error);
           });
       }
      
    },

    created(){
        this.getAllSecretQuestions();

    },
  
  
  
  
  
  }


  </script>
  
  <style lang="scss">
  @import '~@resources/sass/preset/pages/auth.scss';
  </style>
  
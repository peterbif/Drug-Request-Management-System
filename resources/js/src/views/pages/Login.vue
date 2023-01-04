<template>
  <div class="auth-wrapper auth-v1" style="background-color: grey">
    <div class="auth-inner">
      <v-card class="auth-card">
        <!-- logo -->
        <v-card-title class="d-flex align-center justify-center py-7">
          <router-link to="/" class="d-flex align-center">
            <!-- <v-img
              :src="require('@/assets/images/logos/logo.svg').default"
              max-height="30px"
              max-width="30px"
              alt="logo"
              contain
              class="me-3"
            ></v-img> -->

            <v-row justify="center">
              <v-col class="md-12 sm-12">
                <v-img :aspect-ratio="16 / 9" width="150" height="150" src="/images/UCH.png">
                  <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-col>
            </v-row>
            <!-- <v-row  justify="center">
    <v-col class="md-12 sm-12">
    <h2 class="text-2xl font-weight-semibold text-center">Trado Fashion Home</h2>
    </v-col>

  </v-row> -->
          </router-link>
        </v-card-title>

        <!-- title -->
        <v-card-text>
          <!-- <p class="text-2xl font-weight-semibold text--primary mb-2">Welcome to Trado! 👋🏻</p> -->
          <h2 class="text-2xl font-weight-semibold text-center">Drug Request Management System 👋🏻</h2>
        </v-card-text>

        <!-- login form -->
        <v-card-text>
          <!-- <h1>{{form.email}}</h1> -->
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-alert v-if="form.errors.has('error') || form.errors.has('email')" dense type="error">
              {{ form.errors.get('error') || form.errors.get('email') }}
            </v-alert>
            <v-text-field
              v-model="form.email"
              name="email"
              required
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
              placeholder="············"
              :append-icon="isPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
              :rules="passwordRules"
              required
              @click:append="isPasswordVisible = !isPasswordVisible"
            ></v-text-field>

            <div class="d-flex align-center justify-space-between flex-wrap">
              <v-checkbox disabled label="Remember Me" hide-details class="me-3 mt-1"> </v-checkbox>

              <!-- forgot link -->
              <!-- <a href="javascript:void(0)" class="mt-1"> Forgot Password? </a> -->

              <router-link :to="{ name: 'resetpassword' }" class="mt-1"> Forgot Password? </router-link>
            </div>

            <v-btn block color="primary" class="mt-6" @click="login" :disabled="!(form.email && form.password)">
              Login
            </v-btn>
          </v-form>
        </v-card-text>

        <!-- create new account  -->
        <v-card-text class="d-flex align-center justify-center flex-wrap mt-2">
          <span class="me-2"> New on this platform? </span>
          <!-- <router-link :to="{ name: 'viewdrug' }" style="font-size:15px"> Search for drug? Click here</router-link> -->

        
          <!-- <router-link :to="{ name: 'register' }"> Create an account </router-link> -->
        </v-card-text>

        <!-- divider -->
        <v-card-text class="d-flex align-center mt-2">
          <v-divider></v-divider>
          <span class="mx-5">or</span>
          <v-divider></v-divider>
        </v-card-text>

        <!-- social links -->
        <v-card-actions class="d-flex justify-center">
          <!-- <v-btn v-for="link in socialLink" :key="link.icon" icon class="ms-1">
            <v-icon :color="$vuetify.theme.dark ? link.colorInDark : link.color">
              {{ link.icon }}
            </v-icon>
          </v-btn> -->

          <router-link :to="{ name: 'viewdrug' }" style="font-size:20px"> Search for drug availability? Click here 
             <v-icon
      large
      color="green darken-2"
    >
      mdi-domain
    </v-icon></router-link>

        </v-card-actions>
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
import { ref } from '@vue/composition-api'

import { email, required } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'

export default {
  data() {
    return {
      valid: true,
      emailRules: [v => !!v || 'E-mail is required', v => /.+@.+\..+/.test(v) || 'E-mail must be valid'],

      passwordRules: [v => !!v || 'Password is required'],

      form: new Form({
        email: '',
        password: '',
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
      // login,

      icons: {
        mdiEyeOutline,
        mdiEyeOffOutline,
      },
    }
  },

  mounted() {},

  methods: {

    async login() {
      this.$refs.form.validate()
      await this.form
        .post('api/auth/login')
        .then(response => {
          if (response.data.success) {
            this.$store.commit('setToken', response.data.token)
            this.$toastr.success('login successfully', 'Success')
            this.$router.push('/user')
            this.form.reset()
          }
        })
        .catch(error => {
          // this.spinnerLoading = true;
          this.$toastr.error('Can not login', error)
        })

      // });
    },

    logout() {
      axios
        .post('/api/logout', { token: this.$store.state.token })
        .then(() => {
          this.$router.push('/login')
          this.$toastr.success('logout successfully', 'Success')
          this.$store.commit('clearToken')
        })
        .catch(error => {
          this.$toastr.error('You just logged out', error)
          this.$router.push('/login')
          this.$store.commit('clearToken')
        })
    },

    // async login(){
    //         this.$refs.form.validate()
    //         this.processing = true
    //         await axios.get('/sanctum/csrf-cookie')
    //         await axios.post('api/auth/login',this.auth).then(({data})=>{
    //             this.signIn()
    //         }).catch(({response:{data}})=>{
    //             alert(data.message)
    //         }).finally(()=>{
    //             this.processing = false
    //         })
    //     },
  },

 
}
</script>

<style lang="scss">
@import '~@resources/sass/preset/pages/auth.scss';
</style>

<template>
  <div >

    <v-row justify="center"  v-if="(allAnniversaries.length > 0) || (allWeddings.length > 0)">
      <v-dialog v-model="dialog" persistent max-width="1200px">
        <v-card>
          <!-- <v-card-title>
            <span class="text-h5">Birthday Celebrants</span>
          </v-card-title> -->
          <v-card-text>
            <v-container>
              

     <v-row class="list px-3 mx-auto" v-if="allAnniversaries.length > 0">
        <v-col cols="12" md="12">
      <v-card-title>Birthday Celebrants &nbsp;&nbsp;

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
      </v-card-title>
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






      <v-row class="list px-3 mx-auto" v-if="allWeddings.length > 0">
        <v-col cols="12" md="12">
      <v-card-title>Wedding Celebrants   &nbsp;&nbsp;   <vue-excel-xlsx
     :data="allWeddings2"
     :columns="column"
     :file-name="'Wedding'"
     :file-type="'xlsx'"
     :sheet-name="'Wedding'"
   >
     <v-icon x-large style="color: green"> mdi-file-excel </v-icon>
     Celebrant(s): {{ totalWeddings }}
   </vue-excel-xlsx>
  </v-card-title>
      <v-data-table :headers="header" :items="allWeddings">
  
        <template v-slot:[`item.sn`]="{ index }">
  
           {{ index + 1 }}
           </template>
      
    
  
        <template v-slot:[`item.customer`]="{ item }">
          {{ item.surname }} {{ item.firstname }}
        </template>
  
        <template v-slot:[`item.wedding_date`]="{ item }">
        <v-chip style="color:forestgreen">  {{ item.wedding_date | birthDay }} </v-chip>
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

            </v-container>
           
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red" @click="dialog = false"> Close </v-btn>

           
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
 
  <v-row>
    <v-col
      cols="12"
      md="4"
    >
      <dashboard-congratulation-john></dashboard-congratulation-john>
    </v-col>
    <v-col
      cols="12"
      md="8"
    >
      <dashboard-statistics-card></dashboard-statistics-card>
    </v-col>

    <v-col
      cols="12"
      sm="6"
      md="4"
    >
      <dashboard-weekly-overview></dashboard-weekly-overview>
    </v-col>

    <v-col
      cols="12"
      md="4"
      sm="6"
    >
      <dashboard-card-total-earning></dashboard-card-total-earning>
    </v-col>

    <v-col
      cols="12"
      md="4"
    >
      <v-row class="match-height">
        <v-col
          cols="12"
          sm="6"
        >
          <statistics-card-vertical
            :change="totalProfit.change"
            :color="totalProfit.color"
            :icon="totalProfit.icon"
            :statistics="totalProfit.statistics"
            :stat-title="totalProfit.statTitle"
            :subtitle="totalProfit.subtitle"
          ></statistics-card-vertical>
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <statistics-card-vertical
            :change="totalSales.change"
            :color="totalSales.color"
            :icon="totalSales.icon"
            :statistics="totalSales.statistics"
            :stat-title="totalSales.statTitle"
            :subtitle="totalSales.subtitle"
          ></statistics-card-vertical>
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <statistics-card-vertical
            :change="newProject.change"
            :color="newProject.color"
            :icon="newProject.icon"
            :statistics="newProject.statistics"
            :stat-title="newProject.statTitle"
            :subtitle="newProject.subtitle"
          ></statistics-card-vertical>
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
          <statistics-card-vertical
            :change="salesQueries.change"
            :color="salesQueries.color"
            :icon="salesQueries.icon"
            :statistics="salesQueries.statistics"
            :stat-title="salesQueries.statTitle"
            :subtitle="salesQueries.subtitle"
          ></statistics-card-vertical>
        </v-col>
      </v-row>
    </v-col>

    <!-- <v-col
      cols="12"
      md="4"
    >
      <dashboard-card-sales-by-countries></dashboard-card-sales-by-countries>
    </v-col>
    <v-col
      cols="12"
      md="8"
    >
      <dashboard-card-deposit-and-withdraw></dashboard-card-deposit-and-withdraw>
    </v-col> -->
    <!-- <v-col cols="12">
      <dashboard-datatable></dashboard-datatable>
    </v-col> -->
  </v-row>
     
</div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiPoll, mdiLabelVariantOutline, mdiCurrencyUsd, mdiHelpCircleOutline } from '@mdi/js'
import StatisticsCardVertical from '@/components/statistics-card/StatisticsCardVertical.vue'

// demos
import DashboardCongratulationJohn from './DashboardCongratulationJohn.vue'
import DashboardStatisticsCard from './DashboardStatisticsCard.vue'
import DashboardCardTotalEarning from './DashboardCardTotalEarning.vue'
import DashboardCardDepositAndWithdraw from './DashboardCardDepositAndWithdraw.vue'
import DashboardCardSalesByCountries from './DashboardCardSalesByCountries.vue'
import DashboardWeeklyOverview from './DashboardWeeklyOverview.vue'
// import DashboardDatatable from './DashboardDatatable.vue'
import axios from 'axios'


export default {


  data(){

    return{

      dialog:false,

      allAnniversaries: [],
      allAnniversaries2:[],

      totalAnniversaries:"",

      totalWeddings:"",
      allWeddings2:[],

      allWeddings:[],
      
      headers: [
        { text: '#', align: 'start', sortable: false, value: 'sn' },
         
          { text: 'Customer', value: 'customer', sortable: false },
          { text: 'Birthday', value: 'birthday', sortable: false },

          { text: 'Phone No', value: 'phone_no', sortable: false },
          { text: 'Email', value: 'email', sortable: false },
        ],

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

        header: [
        { text: '#', align: 'start', sortable: false, value: 'sn' },
         
          { text: 'Customer', value: 'customer', sortable: false },
          { text: 'Wedding Date', value: 'wedding_date', sortable: false },

          { text: 'Phone No', value: 'phone_no', sortable: false },
          { text: 'Email', value: 'email', sortable: false },
        ],

        column: [
         
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


    }
  },
  components: {
    StatisticsCardVertical,
    DashboardCongratulationJohn,
    DashboardStatisticsCard,
    DashboardCardTotalEarning,
    DashboardCardDepositAndWithdraw,
    DashboardCardSalesByCountries,
    DashboardWeeklyOverview,
    // DashboardDatatable,
  },
  setup() {
    const totalProfit = {
      statTitle: 'Total Profit',
      icon: mdiPoll,
      color: 'success',
      subtitle: 'Weekly Project',
      statistics: '$25.6k',
      change: '+42%',
    }

    const totalSales = {
      statTitle: 'Refunds',
      icon: mdiCurrencyUsd,
      color: 'secondary',
      subtitle: 'Past Month',
      statistics: '$78',
      change: '-15%',
    }

    // vertical card options
    const newProject = {
      statTitle: 'New Project',
      icon: mdiLabelVariantOutline,
      color: 'primary',
      subtitle: 'Yearly Project',
      statistics: '862',
      change: '-18%',
    }

    const salesQueries = {
      statTitle: 'Sales Quries',
      icon: mdiHelpCircleOutline,
      color: 'warning',
      subtitle: 'Last week',
      statistics: '15',
      change: '-18%',
    }

    return {
      totalProfit,
      totalSales,
      newProject,
      salesQueries,
    }
  },

 

  mounted(){
    this.checkLogin();
  },

  methods:{


    async getAllAnniversaries() {
        await axios
          .post('api/getAllAnniversaries' + '?token=' + this.$store.state.token)
          .then(response => {
            this.allAnniversaries = response.data.allAnniversaries
            this.allAnniversaries2 = response.data.allAnniversaries2
            this.totalAnniversaries = response.data.totalAnniversaries 
            this.dialog = true;
          
  
          })
          .catch(() => {
            // this.$toastr.error("Can not load status", "Error");
          })
      },
  


  async getAllWeddings() {
        await axios
          .post('api/getAllWeddings' + '?token=' + this.$store.state.token)
          .then(response => {
            this.allWeddings = response.data.allWeddings
            this.allWeddings2 = response.data.allWeddings2
            this.totalWeddings = response.data.totalWeddings 
            this.dialog = true;
  
          })
          .catch(() => {
            // this.$toastr.error("Can not load status", "Error");
          })
      },
  


},


  created(){
 this.getAllAnniversaries();
 this.getAllWeddings();

  }
}
</script>

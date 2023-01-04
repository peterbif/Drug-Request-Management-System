<template>
  <v-card>

    <v-row justify="center"  v-if="(todayDeliveries.length > 0)">
      <v-dialog v-model="dialog4" persistent max-width="1200px">
        <v-card>
          <!-- <v-card-title>
            <span class="text-h5">Birthday Celebrants</span>
          </v-card-title> -->
          <v-card-text>
            <v-container>
              

     <v-row class="list px-3 mx-auto" v-if="todayDeliveries.length > 0">
        <v-col cols="12" md="12">
      <v-card-title>Today Deliver<span v-if="todayDeliveries.length > 1">ies</span> <span v-else>y</span> &nbsp;&nbsp;

        <vue-excel-xlsx
            :data="todayDeliveries2"
            :columns="columns"
            :file-name="'Today Delivery'"
            :file-type="'xlsx'"
            :sheet-name="'Today Delivery'"
          >
            <v-icon x-large style="color: green"> mdi-file-excel </v-icon>
            Deliver<span v-if="todayDeliveries.length > 1">ies</span> <span v-else>y</span>: {{ totalDeliveries }}
          </vue-excel-xlsx>
      </v-card-title>
      <v-data-table :headers="myHeaders" :items="todayDeliveries">
  
        <template v-slot:[`item.sn`]="{ index }">

{{ index + 1 }}
</template>

<template v-slot:[`item.refrenced_no`]="{ item }">
<v-btn > {{ item.refrenced_no }} </v-btn>
</template>

<template v-slot:[`item.fabric`]="{ item }" > {{ item.fabrics_name }} / {{ item.fabrics_length }} </template>

<template v-slot:[`item.customer`]="{ item }">
 {{ item.customer.surname }} {{ item.customer.firstname }}
</template>


<template v-slot:[`item.measurement`]="{ item }">
 {{ item.measurement }} {{ item.measurement }}
</template>

<template v-slot:[`item.delivery_date`]="{ item }">
{{ item.delivery_date | dateReorder2 }} 
</template>


<template v-slot:[`item.status`]="{ item }">

<v-chip v-if="item.status.status_name == 'Very Urgent'"
style="border-color: red;"
outlined
pill
>    {{ item.status.status_name }}

</v-chip>
<v-chip v-else-if="item.status.status_name == 'high Priority'"
style="border-color: orangered;"
outlined
pill
>    {{ item.status.status_name }}

</v-chip>

<v-chip v-else-if="item.status.status_name == 'Completed'"
style="border-color: green;"
outlined
pill
>    {{ item.status.status_name }}

</v-chip>

<v-chip v-else-if="item.status.status_name == 'Delivered'"
style="border-color: green;"
outlined
pill
>    {{ item.status.status_name }}

</v-chip>

<v-chip v-else-if="item.status.status_name == 'Received'"
style="border-color: green;"
outlined
pill
>    {{ item.status.status_name }}

</v-chip>
<v-chip v-else
style="border-color: yellow;"
outlined
pill
>    {{ item.status.status_name }}

</v-chip>
</template>
  
       
       
      </v-data-table>
      </v-col>
      
        </v-row>


            </v-container>
           
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red" @click="dialog4 = !dialog4"> Close </v-btn>

           
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
 

    <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on" @click="create"> Create New Order </v-btn>
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
                        :hint="'Customer Name'"
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
                      <v-alert v-if="form.errors.has('fabrics_name')" dense type="error">
                        {{ form.errors.get('fabrics_name') }}
                      </v-alert>
                      <v-text-field
                        v-model="form.fabrics_name"
                        label="Fabric Name*"
                        :rules="v => !!v || 'Fabric name is required'"
                        :counter="199"
                        required
                      ></v-text-field>
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
                    
                        
                      <v-col cols="12" sm="12" md="12">
                          <v-alert v-if="form.errors.has('measurement')" dense type="error">
                            {{ form.errors.get('measurement') }}
                          </v-alert>
                          <v-text-field
                            v-model="form.measurement"
                            label="Measurement*"
                            :rules="v => !!v || 'Measurement is required'"
                            :counter="255"
                            required
                          ></v-text-field>
                        </v-col>
    
                      </v-row>

                      <v-row>
                    
                      <v-col cols="12" sm="6" md="6">
                      <v-menu
                        ref="menu"
                        v-model="menu"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            v-model="form.delivery_date"
                            label="Delivery Date"
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          v-model="form.delivery_date"
                          :rules="v => !!v || 'Date From is required'"
                          :active-picker.sync="activePicker"
                          min="1950-01-01"
                          @change="save"
                        ></v-date-picker>
                      </v-menu>
                    </v-col>


                    <v-col cols="12" sm="6" md="6">
                      <v-alert v-if="form.errors.has('status_id')" dense type="error">
                        {{ form.errors.get('status_id') }}
                      </v-alert>
  
                      <v-autocomplete
                        :items="statuses"
                        item-value="id"
                        item-text="status_name"
                        label="Select Order Status"
                        v-model="form.status_id"
                        solo
                      >
                        <!-- <template v-slot:item="{ item }">
                          {{ item.surname }} {{ item.firstname }} {{ item.customer_contact.phone_no }}
                        </template> -->
                      </v-autocomplete>
                    </v-col>

                  </v-row>

                 <v-row>
                  <v-col cols="12" sm="12" md="12">
                      <v-alert v-if="form.errors.has('staff_assigned_id')" dense type="error">
                        {{ form.errors.get('staff_assigned_id') }}
                      </v-alert>
  
                      <v-autocomplete
                        :items="allStaff"
                        item-value="id"
                        item-text="surname"
                        label="Assign Staff"
                        v-model="form.staff_assigned_id"
                        solo
                      >
                        <template v-slot:item="{ item }">
                          {{ item.surname }} {{ item.firstname }} {{ item.phone_no }}
                        </template>
                      </v-autocomplete>
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
                        :rules="v => !!v || 'Grand Price is required'"
                        hint="Total Amount to be paid"
                        @keyup="balancePayment"
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
                        @keyup="balancePayment"
                      
                      ></v-text-field>
                    </v-col>
                  </v-row> </v-form
              ></v-container>
              <small v-show="balance" style="color: red; font-size: 20px">Balance of Payment: &#8358;  {{ balance|RoundOffThousand }}</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red" @click="dialog = false"> Close </v-btn>
  
              <v-btn v-if="editMode" color="primary" @click.prevent="updateOrder()" :disabled="!form.id">
                <v-progress-circular :value="20" v-show="progress"></v-progress-circular>
                {{ btn2 }}
              </v-btn>
  
              <v-btn
                v-else
                color="primary"
                @click.prevent="createOrder()"
                :disabled="
                  !(
                    form.customer_id &&
                    form.fabrics_name &&
                    form.fabrics_length &&
                    form.measurement &&
                    form.status_id &&
                    form.delivery_date &&
                    form.staff_assigned_id &&
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
        <v-text-field v-model="form.searchName" label="Search  Customer" @keyup="searchField"></v-text-field>
      </v-col>

      <v-col cols="12" md="3">
        <v-text-field v-model="form.searchReferenceNo" label="Search Reference No" @keyup="searchField"></v-text-field>
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
                          label="Delivery Date from"
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
                          label="Delivery Date To"
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
          


      <v-col cols="12" sm="4" md="3">
                    <v-alert v-if="form.errors.has('status_id')" dense type="error">
                      {{ form.errors.get('status_id') }}
                    </v-alert>

                    <v-autocomplete
                      :items="statuses"
                      item-value="id"
                      item-text="status_name"
                      label="Select Order Status"
                      v-model="form.status_id"
                      solo
                      :rules="v => !!v || 'Status is required'"
                      @change="searchField()"
                    >
                    </v-autocomplete>
                  </v-col>

                  <!-- <v-col cols="12" md="3">
                 <v-btn @click="amount()" color="primary"> Amount</v-btn>
                  </v-col>

                  <v-col cols="12" md="3">
                 <v-chip style="font-size:20px; color:aquamarine">{{amounts}}</v-chip>
                  </v-col> -->

                  <v-col cols="12" md="4">
             <span style="font-size:20px; color:blue" v-show="totalAMount"> Total Amount:  <span>	&#8358; </span> {{totalAMount|RoundOffThousand}}  </span> 
             </v-col>


                  <v-col cols="12" md="3">
                 <v-btn @click="clearForm()" color="primary"> Clear Search</v-btn>
                  </v-col>

                  <v-col cols="12" md="3">
                    </v-col>

       <v-col cols="12" md="3">
        <vue-excel-xlsx
          :data="allOrder2"
          :columns="columns"
          :file-name="'Order'"
          :file-type="'xlsx'"
          :sheet-name="'Order'"
        >
          <v-icon x-large style="color: green"> mdi-file-excel </v-icon>
          Order(s): {{ totalOrders }}
        </vue-excel-xlsx>
      </v-col>

     

    </v-row>

    <!-- <v-row> -->
    <v-card-title>Order</v-card-title>
    <v-data-table :headers="headers" :items="allOrders">

      <template v-slot:[`item.sn`]="{ index }">

         {{ index + 1 }}
         </template>
    
      <template v-slot:[`item.refrenced_no`]="{ item }">
        <v-btn > {{ item.refrenced_no }} </v-btn>
      </template>

      <template v-slot:[`item.fabric`]="{ item }" > {{ item.fabrics_name }} / {{ item.fabrics_length }} </template>

      <template v-slot:[`item.customer`]="{ item }">
       <v-btn  @click="view(item)" color="primary"> {{ item.customer.surname }} {{ item.customer.firstname }}</v-btn>
      </template>


      <template v-slot:[`item.measurement`]="{ item }">
       <v-btn  @click="createNewOrder(item)" color="default"> {{ item.measurement }} {{ item.measurement }}</v-btn>
      </template>

      <template v-slot:[`item.delivery_date`]="{ item }">
        {{ item.delivery_date | dateReorder2 }} 
      </template>


      <template v-slot:[`item.status`]="{ item }">
       
        <v-chip v-if="item.status.status_name == 'Very Urgent'"
       style="border-color: red;"
        outlined
         pill
         >    {{ item.status.status_name }}
    
     </v-chip>
     <v-chip v-else-if="item.status.status_name == 'high Priority'"
     style="border-color: orangered;"
        outlined
         pill
         >    {{ item.status.status_name }}
    
     </v-chip>

     <v-chip v-else-if="item.status.status_name == 'Completed'"
     style="border-color: green;"
        outlined
         pill
         >    {{ item.status.status_name }}
    
     </v-chip>

     <v-chip v-else-if="item.status.status_name == 'Delivered'"
     style="border-color: green;"
        outlined
         pill
         >    {{ item.status.status_name }}
    
     </v-chip>

     <v-chip v-else-if="item.status.status_name == 'Received'"
     style="border-color: green;"
        outlined
         pill
         >    {{ item.status.status_name }}
    
     </v-chip>
     <v-chip v-else
     style="border-color: yellow;"
        outlined
         pill
         >    {{ item.status.status_name }}
    
     </v-chip>
      </template>

      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small style="color: green" class="mr-2" @click="editOrder(item)">mdi-pencil</v-icon>
        <v-icon small style="color: red" @click="deleteOrder(item)">mdi-delete</v-icon>
      </template>
    </v-data-table>
  <!-- </v-row> -->
    <!-- <v-simple-table
      height="250"
      fixed-header
    >
         <template v-slot:default>
        <thead>
          <tr>
            <th>#</th>
            <th class="text-uppercase">
            Order Number
            </th>
           
            <th class="text-uppercase">
            Customer Fullname
            </th>
           
            <th class="text-left text-uppercase">
             Fabric (Length)
            </th>
            <th class="text-left text-uppercase">
             Measurement
            </th>

          
            <th class="text-left text-uppercase">
             Status
            </th>

            <th class="text-left text-uppercase">
             Date of Delivery
            </th>

            
           
            <th class="text-left text-uppercase">
            Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in allOrders"
            :key="item.id"
          >
     
  
            <td>{{index + 1}}</td>
            <td class="text-left">{{item.refrenced_no}} </td>
            <td class="text-left"  @click="view(item);">{{ item.customer.surname }}  {{ item.customer.firstname }} </td>
  
           
           
            <td class="text-left">{{item.fabrics_name}}   ({{item.fabrics_length}})</td>
  
            <td class="text-left">{{ item.measurement }}</td>
            <td class="text-left">{{ item.user.surname }} {{ item.user.firstname }}</td>
            <td class="text-left">{{ item.status_id }}</td>
            <td class="text-left">{{ item.delivery_date }}</td>
            <td class="text-left"> 
       
               <v-btn
            color="primary"
            dark
            
            @click="createPassport(item)"
            small
          >
          
           <v-avatar color="indigo">
        <v-icon dark>
          mdi-account-circle
        </v-icon>
      </v-avatar>
          </v-btn>
        
        </td> 
            <td class="text-left">  <v-icon  small style="color: green;" class="mr-2" @click="editOrder(item)">mdi-pencil</v-icon>
              <v-icon small style="color: red;"  @click="deleteOrder(item)">mdi-delete</v-icon>
            </td>
          </tr>
        </tbody>
      </template>
      </v-simple-table> -->

    <!-- <v-card-actions v-if="allOrder.length > 0">
            <v-btn small color="error" @click="removeAllOrder">
              Remove All
            </v-btn>
          </v-card-actions> -->

    <!-- dialog3 -->

    <v-row justify="center">
      <v-dialog v-model="dialog3" persistent max-width="800px">
        <v-card>
          <v-card-title>
            <span class="text-h4 text-center"> <strong> {{ name }}  Order Details </strong></span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="12" md="12">
                  <span class="text-h5"><strong> Order Reference Number:</strong> {{ refrenced_no }} </span>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="12" md="12">
                  <span class="text-h5"><strong> Fabric Details: </strong> {{ form.fabrics_name }} ( {{ form.fabrics_length }})</span> 
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" sm="12" md="12">
                  <span class="text-h5"> <strong> Measurement: </strong> {{ form.measurement }}</span>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" sm="12" md="12">
                  <span class="text-h5"> <strong> Delivery Date: </strong> {{ form.delivery_date | dateFormat2 }}</span>
                </v-col>

               </v-row>
               <v-row>
                <v-col cols="12" sm="12" md="12"> <span class="text-h5"> <strong> Assigned Staff: </strong> {{ staff }} </span></v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="12" md="12">
                  <span class="text-h5"> <strong> Price: </strong> <span>	&#8358;</span> {{ form.grand_price|RoundOffThousand}}</span>
                  <span class="text-h5"><strong> Amount Paid: </strong> <span>	&#8358;</span> {{ form.payment|RoundOffThousand }}</span>
                </v-col>

                <v-col v-if="bal" cols="12" sm="6" md="6"> </v-col>

                <v-alert border="bottom" color="pink darken-1" dark class="text-h5"> Balance: <span>	&#8358;</span> {{ bal|RoundOffThousand }} </v-alert>
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
      activePicker: null,
      date: null,
      menu: false,
      menu3: false,
      menu4: false,
      dialog4:false,

      activePicker2: null,
      activePicker3: null,
      activePicker4: null,
      date2: null,
      menu2: false,
      allStaff: [],
      allOrders: [],
      statuses: [],
      headers: [
      { text: '#', align: 'start', sortable: false, value: 'sn' },

        { text: 'Order Refrence No', align: 'start', sortable: false, value: 'refrenced_no' },
        { text: 'Customer', value: 'customer', sortable: false },
        { text: 'Fabric Details', value: 'fabric', sortable: false },
        { text: 'Measurement', value: 'measurement', sortable: false },
        { text: 'Delivery Date', value: 'delivery_date', sortable: false },
        { text: 'Status', value: 'status', sortable: false },
        { text: 'Action', value: 'actions', sortable: false },
      ],

      myHeaders:[
      { text: '#', align: 'start', sortable: false, value: 'sn' },

        { text: 'Order Refrence No', align: 'start', sortable: false, value: 'refrenced_no' },
        { text: 'Customer', value: 'customer', sortable: false },
        { text: 'Fabric Details', value: 'fabric', sortable: false },
        { text: 'Measurement', value: 'measurement', sortable: false },
        { text: 'Delivery Date', value: 'delivery_date', sortable: false },
        { text: 'Status', value: 'status', sortable: false },
       
      ],

      // show_date_of_resumption:false,
      columns: [
        {
          label: 'Reference No',
          field: 'refrenced_no',
        },
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
          field: 'fabrics_name',
        },
        {
          label: 'Fabrics length',
          field: 'fabrics_length',
        },

        {
          label: 'Measurement',
          field: 'measurement',
        },

        {
          label: 'Delivery Date',
          field: 'delivery_date',
        },

        {
          label: 'Assigned Staff',
          field: 'user.surname',
        },

        {
          label: 'Grand Price',
          field: 'order_payment.grand_price',
        },

        {
          label: 'Amount Paid',
          field: 'order_payment.payment',
        },

        {
          label: 'Status',
          field: 'status.status_name',
        },

      
      ],
      btn: '',
      btn2: '',
      dialog: false,
      dialog2: false,
      search: '',
      editMode: false,

      allCustomers: [],
      allOrders: [],
      allOrder2: [],
      totalOrders: null || 0,
      staff: '',
      name: '',
      bal: '',
      todayDeliveries:[],
      todayDeliveries2:[],
      totalDeliveries:"",

      valid: true,

     

      progress: false,

      dialog3: false,
      balance: '',
      refrenced_no:"",
      totalAMount:"",

      form: new Form({
        id: '',
        customer_id: '',
        fabrics_name: '',
        fabrics_length: '',
        measurement: '',
        delivery_date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
        status_id: '',
        staff_assigned_id: '',
        grand_price: '',
        payment: '',
        order_payment_id: '',
        searchName:"",
        searchReferenceNo:"",
        date_from:"" ,//new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
        date_to: "",//new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
      }),
    }
  },

  setup() {
    const isPasswordVisible = ref(false)

    const Order_categories = ref([])
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
      Order_categories,

      // createOrder,

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
        // this.balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      }
    },

    async todayDelivery(){
      await axios
        .get('/api/todayDelivery' + '?token=' + this.$store.state.token)
        .then(response => {
          this.todayDeliveries = response.data.todayDelivery
          this.todayDeliveries2 = response.data.todayDeliveries2
          this.totalDeliveries = response.data.totalDeliveries

          
          this.dialog4 = true;
        })
        .catch(() => {
          // this.$toastr.error("Can not load status", "Error");
        })
    },

  


    createNewOrder(item){
      this.editMode = false
      this.balance = ""
      this.dialog = true
      this.form.reset();
      this.form.fill(item)
      this.btn = 'Create New Order'
      this.btn2 = 'Create'
     
},
    amount(){

      this.form.payment = 1;
      this.searchField();

    },

   
    //   getText(item) {`${item.surname} - ${item.text}`

    // },

    async getAllStaff() {
      await axios
        .get('/api/getAllStaff')
        .then(response => {
          this.allStaff = response.data.allstaff
        })
        .catch(() => {
          // this.$toastr.error("Can not load status", "Error");
        })
    },

    async getAllStatuses() {
      await axios
        .get('/api/allStatuses')
        .then(response => {
          this.statuses = response.data.allStatuses
        })
        .catch(() => {
          // this.$toastr.error("Can not load status", "Error");
        })
    },

    save(date) {
      this.$refs.menu.save(date)
    },
    save2(date) {
      this.$refs.menu2.save(date)
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
      this.getAllOrders();

    },


    view(item) {
      this.dialog3 = true
      this.form.fill(item)
      this.name = item.customer.surname + ' ' + item.customer.firstname;

      this.form.grand_price = item.order_payment.grand_price;
      this.form.payment = item.order_payment.payment;
      this.staff = item.user.surname + ' ' + item.user.firstname;
      this.refrenced_no = item.refrenced_no;

      if (this.form.grand_price && this.form.payment) {
        this.bal = this.form.grand_price - this.form.payment
      }
    },

    // stateOfOrigin(item){

    //   const index =  this.states.findIndex(function(obj) {

    //           return obj.id === item.Order_contact.state_of_origin_id;
    //       });

    //    return   this.state_of_origin = this.states[index].state;

    // },

    // stateOfResidence(item){

    //   const index =  this.states.findIndex(function(obj) {

    //           return obj.id === item.Order_contact.state_of_residence_id;
    //       });

    //    return   this.state_of_residence = this.states[index].state;

    // },

    async getAllCustomers() {
      await axios
        .get('api/getAllCustomers' + '?token=' + this.$store.state.token)
        .then(response => {
          this.allCustomers = response.data.allCustomers
        })
        .catch(() => {
          // this.$toastr.error("Can not load status", "Error");
        })
    },

    async getAllOrders() {
      await axios
        .get('api/getAllOrders' + '?token=' + this.$store.state.token)
        .then(response => {
          this.allOrders = response.data.allOrders
          this.allOrder2 = response.data.allOrders2
          this.totalOrders = response.data.totalOrders 
           this.totalAMount = response.data.totalAMount;

        })
        .catch(() => {
          // this.$toastr.error("Can not load status", "Error");
        })
    },

    // async getAllOrders() {
    //   await axios.get('api/getAllOrders'+'?token='+this.$store.state.token)
    //     .then((response) => {
    //        this.allOrders = response.data.allOrders;

    //     })
    //     .catch(() => {
    //       // this.$toastr.error("Can not load status", "Error");

    //     });
    // },

    async searchOrder() {
      let query = this.search
      this.form.
        post('/api/search/order')
        // .get('api/auth/findDesignation?q='+ query + '&token=' + this.$store.state.token )
        .then(response => {
          this.allOrders = response.data.allOrders
          this.allOrder2 = response.data.allOrders2
          this.totalOrders = response.data.totalOrders
          this.totalAMount = response.data.totalAMount;

        })
        .catch(() => {
          this.$toastr.error('search failed', 'Error')
        })
    },

    create() {
      this.editMode = false
      this.form.reset()
      this.btn = 'Create New Order'
      this.btn2 = 'Create'
    },

    searchField() {
      clearTimeout(this.timeout)
      this.timeout = setTimeout(function () {
        Fire.$emit('searching')
      }, 2000)
    },

    async createOrder() {
      this.$refs.form.validate()

      this.form.grand_price = parseFloat(this.form.grand_price)
      this.form.payment = parseFloat(this.form.payment)

      await this.form
        .post('api/orders' + '?token=' + this.$store.state.token)
        .then(() => {
          this.$toastr.success('Order created successfully', 'Success')
          this.dialog = false
          Fire.$emit('createOrderEvent')
          this.form.reset()
        })
        .catch(error => {
          this.progress = true
          this.$toastr.error('Can not create order', error)
        })
    },

    editOrder(item) {
      this.editMode = true
      this.form.reset()
      this.btn = 'Update Order'
      this.btn2 = 'Update'
      this.form.fill(item)
      this.form.customer_id = item.customer_id
      this.form.staff_assigned_id = item.staff_assigned_id
      this.form.grand_price = item.order_payment.grand_price
      this.form.order_payment_id = item.order_payment.id

      this.form.payment = item.order_payment.payment

      this.dialog = true
    },

    updateOrder(item) {
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
            .put('api/orders/' + this.form.id + '?token=' + this.$store.state.token)
            .then(() => {
              this.$toastr.success('Order updated successfully', 'Success')
              Fire.$emit('updatedOrderEvent') //update an event
              this.dialog = false
            })
            .catch(error => {
              this.btn = 'Updating Order'

              this.btn2 = ''

              this.$toastr.error('Can not update Order information', 'Error')
            })
        }
      })
    },

    deleteOrder(item) {
      Swal.fire({
        title: 'Are you sure?',
        text: item.refrenced_no + ' will be deleted permanently' + " and it won't be reverted!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then(result => {
        if (result.value) {
          this.form
            .delete('api/orders/' + item.id + '?token=' + this.$store.state.token)
            .then(() => {
              Swal.fire('Deleted!', 'Record has been deleted.', 'success')
              Fire.$emit('DeleteOrderEvent') //delete  an event
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
    this.getAllStatuses()
    this.getAllOrders()
    this.getAllCustomers()
    this.getAllStaff()
    this.todayDelivery()

    Fire.$on('searching', () => {
      //listen to searchingField event

      this.searchOrder()
    })

    Fire.$on(['createOrderEvent', 'DeleteOrderEvent', 'updatedOrderEvent'], () => {
      //listen to  events
      this.getAllOrders()
    })
  },
}
</script>

<style lang="scss">
@import '~@resources/sass/preset/pages/auth.scss';
</style>

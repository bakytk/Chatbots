<template>
  <div>
	  
	  <div v-if="!smallDevice">
		  
		  <div class="hero" 
			   :style="{ background: 'url(' + image + ') repeat-y center' }">


			  <div style="text-align:center; padding-bottom: 5%;">
					<div style="font-size: 30px; 
								padding-top: 5%;"> 
						<p class="header-text"> {{ headers[0] }} </p>
					</div>
					<!-- <div style="font-size: 25px; padding-top: 2%;"> 
						<p style="color: #01233f;"> {{ subheader }} </p>
					</div> -->
			  </div>
			  
			  <div style="padding-bottom: 5%;" 
				   v-for="(w, idx) in mddata" :key="idx"> 
				   <template>
				   		<project 
							  :header=w.header :release=w.release 
							  :des=w.des :image=w.image
							  :buttonText=w.buttonText :link=w.link>
					   </project>
				   </template>
			  </div>

			  <div style="text-align:center; padding-bottom: 5%;">
					<div style="font-size: 30px; 
								padding-top: 5%;"> 
						<p class="header-text"> {{ headers[1] }} </p>
					</div>
					<!-- <div style="font-size: 25px; padding-top: 2%;"> 
						<p style="color: #01233f;"> {{ subheader }} </p>
					</div> -->
			  </div>
			  
			  <div style="padding-bottom: 5%;" 
				   v-for="(w, idx) in projectdata" :key="idx"> 
				   <template>
				   		<project 
							  :header=w.header :release=w.release 
							  :des=w.des :image=w.image
							  :buttonText=w.buttonText :link=w.link>
					   </project>
				   </template>
			  </div>
			  
		  </div>
	  </div>

	  <div v-if="smallDevice">
		  <div class="hero" 
			   :style="{ background: 'url(' + image + ') repeat-y center' }">


			   <div style="text-align:center; padding-top: 10%; padding-bottom: 5%;">
					<div style="font-size: 25px; 
								padding-top: 5%;"> 
						<p class="header-text"> {{ headers[0] }} </p>
					</div>
					<!-- <div style="font-size: 20px; padding-top: 2%;"> 
						<p style="color: #01233f;"> {{ subheader }} </p>
					</div> -->
			  </div>
			  
			  <div style="padding-bottom: 5%;" 
				   v-for="(w, idx) in mddata" :key="idx"> 
				   <template>
				   		<project 
							  :header=w.header :release=w.release 
							  :des=w.des :image=w.image
							  :buttonText=w.buttonText :link=w.link>
					   </project>
				   </template>
			  </div>

			  <div style="text-align:center; padding-top: 10%; padding-bottom: 5%;">
					<div style="font-size: 25px; 
								padding-top: 5%;"> 
						<p class="header-text"> {{ headers[1] }} </p>
					</div>
					<!-- <div style="font-size: 20px; padding-top: 2%;"> 
						<p style="color: #01233f;"> {{ subheader }} </p>
					</div> -->
			  </div>
			  
			  <div style="padding-bottom: 5%;" 
				   v-for="(w, idx) in projectdata" :key="idx"> 
				   <template>
				   		<project 
							  :header=w.header :release=w.release 
							  :des=w.des :image=w.image
							  :buttonText=w.buttonText :link=w.link>
					   </project>
				   </template>
			  </div>
			  
		  </div>
	  </div>
	  
  </div>
	
</template>

<script>
	
import project from '@/components/slots/Project.vue';
	
export default {
	
   components: {	
		project,
 	},

  data () {
	return {
	
		smallDevice: false,
	
		image: 'https://i.ibb.co/fFG1NQm/gray.jpg',
	
		headers: [
			"ML resources",
			"Web apps and Messengers" ],

		subheader: "Below are the prototypes that have been developed so far",

		mddata:  [{  
					"header": "Classic models overview",
					"release": "Release date: November, 2020", 
					"des": "Originally meant to be part of an introductory Data anaytics course on Python, these notes are an overview of main machine learning topics, including regression, SVM, gradient boosting, hypothesis testing, etc. For those who are familiar with them, it can be a good refresher ",
					"image": "https://i.ibb.co/GW30qrs/ml1.jpg",
					"buttonText": "Go to website",
					"link": "/Md"
				   }
				   ],
	
		projectdata:  [
				   {  
					"header": "Pizzeria website",
					"release": "Release date: July, 2020", 
					"des": "This generic design template was developed for the food category. Shop owners can view all their incoming orders and edit their products from the web dashboard. Session and cart data is stored server-side in Redis and Mongo databases, respectively",
					"image": "https://i.ibb.co/QXsdwqk/pizza3.jpg",
					"buttonText": "Go to website",
					"link": "/Pizzeria"
				   },
				   {  
					"header": "Flower shop on Facebook",
					"release": "Release date: March, 2020", 
					"des": "This messenger bot was designed to address small flower shop owners that can add their merchandize in real-time through web UI, but receive orders on Facebook. Client orders can be viewed on the admin dashboard. Since client data is retained, shops can re-target their clients",
					"image": "https://i.ibb.co/Yjsy9kg/fwer2.jpg",
					"buttonText": "Re-factor in progress",
					"link": "/Data"
				   },
				   {  
					"header": "Barber shop on Telegram",
					"release": "Release date: January, 2020", 
					"des": "This messenger bot is for small barber shops, managing appointments from Telegram. Other solutions, eg web forms, take more time and steps, irritating clients. Messenger apps handles appointment task more neatly and allows for personalized customer engagement",
					"image": "https://i.ibb.co/Qfs7ZHS/barber.jpg",
					"buttonText": "Go to bot",
					"link": "/Telegram"
				   },
		]
	}
  },
	
  computed: {
  },
	
  mounted () {

		if (this.$mq ==='mobile' || this.$mq ==='tablet') { this.smallDevice = true; }
  },
}
	
</script>

<style scoped>
	
@import '../css/global.css';


</style>

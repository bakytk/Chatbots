<template>
  <div>
		  
		  <div class="hero" 
			   :style="{ background: 'url(' + image + ') repeat-y center' }">

			  <div style="text-align:center; padding-bottom: 5%;">
					<div style="font-size: 30px; 
								padding-top: 5%;"> 
						<p class="header-text"> {{ text }} </p>
					</div>
					<p style="font-size: 20px;padding-top: 2%;"> 
							<router-link to="/Facebook">
								<div class="button"> 
									<span style="font-size: 17px;">
										{{ buttonText }} 
									</span>
								</div>
							</router-link>
						</p> 
					<div style="font-size: 17px; padding-top: 5%;
								text-align: justify;"> 
						<template>
					   		<privacyText></privacyText>
					    </template>
					</div>
			  </div>
			  
			  
		  </div>
	  
  </div>
</template>

<script>

import privacyText from '@/components/slots/Text.vue';
	
	
export default {
	
   components: {	
   		privacyText
 	},

  data () {
	return {
	
		smallDevice: false,
	
		image: 'https://i.ibb.co/fFG1NQm/gray.jpg',
	
		text: "Data Privacy Terms and Conditions",
		buttonText: "Accept and Continue",
	}
  },
	
  computed: {
  },
	
  mounted () {

		//if (this.$mq ==='mobile' || this.$mq ==='tablet') { this.smallDevice = true; }
  },
}
	
</script>

<style scoped>
	
@import '../css/global.css';


</style>

<template>
	<div>

		<!-- WEB --> 
		<div v-if="!smallDevice">
			
			<div style="height: 500px" 
			   :style="{ background: 'url(' + backgroundImage + ') repeat-y center' }">

			  <div style="text-align:center; padding-bottom: 5%;">
					<div style="font-size: 30px; 
								padding-top: 5%;"> 
						<p class="header-text"> {{ header }} </p>
					</div>
			  </div>
			
			   <div style="text-align: center; float: left; 
							padding-right: 5%; padding-left: 10%;">
					<b-img-lazy :src="image" v-bind="imgProps" alt="Image"></b-img-lazy>
			   </div>
				
			   <div>
					<div style="padding-left: 20%;padding-right: 10%;">		
							<p class="paragraf-text"> {{ text }}</p>
							<p class="paragraf-text"> 
								<span style="color: blue;">info@bot-hub.co </span >
				   			</p> 
					</div>
				</div>
				
				
			</div>
		</div>
		
		
		<!-- MOBILE --> 
		<div v-if="smallDevice">
			
			<div style="height: 600px" 
			   :style="{ background: 'url(' + backgroundImage + ') repeat-y center' }">
			
				<div style="text-align:center; padding-bottom: 5%;">
					<div style="font-size: 30px; 
								padding-top: 5%;"> 
						<p class="header-text"> {{ header }} </p>
					</div>
			   </div>
			
			   <div style="text-align: center;">
					<b-img-lazy :src="image" v-bind="imgProps" alt="Image"></b-img-lazy>
			   </div>
				
			   <div>
					<div style="text-align:center; padding-top: 10%;
								padding-bottom: 5%;">		
							<p class="paragraf-text"> {{ text }}</p>
							<p class="paragraf-text"> 
								<span style="color: blue;">info@bot-hub.co </span >
				   			</p> 
					</div>
				</div>

			</div>
			
		</div>
		
		
	</div>
</template>

<script>
	
export default {
	
	data () {
		return{
	
			smallDevice: false,
	
			backgroundImage: 'https://i.ibb.co/fFG1NQm/gray.jpg',
	
			header: "Author",
			image: 'https://i.ibb.co/x6TBkg9/fot.png',
			text: "Presently, this project is a single-person effort. My experience in IT is about 4 years: I started learning Python in 2016, registering for a online course on Coursera, then working in a bank as data analyst for 1,5 year. Over the last year, I took a dive into full-stack web-dev with this project on Vue.js-Node.js stack. If you have any queries, please refer to the following email:",
				
			imgProps: { blank: true, blankColor: 'grey', 
				width: 150, height: 150, class: 'img-circle' }
		}
	},
	
	methods: {
	},
	
	mounted () {

		if (this.$mq ==='mobile' || this.$mq ==='tablet') { this.smallDevice = true; }	
	},
};
</script>

<style scoped>

@import '../css/global.css';
	
</style>
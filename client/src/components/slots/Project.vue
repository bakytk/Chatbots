<template>
	<div>

		<!-- WEB --> 
		<div v-if="!smallDevice">
			<div style="text-align: center; float: left; 
						padding-right: 5%; padding-left: 10%;">
				<b-img-lazy :src="image" v-bind="imgProps" alt="Image"></b-img-lazy>
			</div>
			<div>
				<div style="padding-left: 20%;padding-right: 10%;">	
						<p class="header-text">
							<span style="font-size: 20px;"> {{ header }} </span></p>	
						<p class="paragraf-text"> {{ release }}</p>
						<p class="paragraf-text"> {{ des }}
							
						</p> 
						<p style="padding-left: 30%; padding-top: 2%;"> 
							<router-link :to="link">
									<div class="button"> {{ buttonText }} </div>
							</router-link>
						</p> 
				</div>
			</div>
		</div>
		
		
		<!-- MOBILE --> 
		<div v-if="smallDevice">
			<div style="text-align: center; padding-bottom: 5%">
				<b-img-lazy :src="image" v-bind="imgProps" alt="Image"></b-img-lazy>
			</div>
			<div>
				<div style="text-align: center; 
							padding-top: 10%; padding-bottom: 10%;">
					
						<p class="header-text">
							<span style="font-size: 20px;"> {{ header }} </span></p>	
						<p class="paragraf-text"> {{ release }}</p>
						<p class="paragraf-text"> {{ des }}
							
						</p> 
						<p style=""> 
							<router-link :to="link">
									<div class="button"> {{ buttonText }} </div>
							</router-link>
						</p> 
				</div>
			</div>
		</div>
		
		
	</div>
</template>

<script>
	
export default {
	
	data () {
		return{
	
			show: false,
			smallDevice: false,	
			
			imgProps: { blank: true, blankColor: 'grey', 
				width: 150, height: 150, class: 'img-circle' }
		}
	},
	
	computed : {
	},
	
	props: {
	
	  header: {
		type: String,
		default: 'Web'
	  },
	
	  release: {
		type: String,
		default: '2020'
	  },
	
	  des: {
		type: String,
		default: 'Text'
	  },
	
	  image: {
		type: String,
		default: 'Img'
	  },
	
	  buttonText: {
		type: String,
		default: 'Img'
	  },
	
	  link: {
		type: String,
		default: 'Img'
	  },
	},
	
	methods: {
	},
	
	mounted () {

		if (this.$mq ==='mobile' || this.$mq ==='tablet') { this.smallDevice = true; }	
	},
};
</script>

<style scoped>
	
@import '../../css/global.css';

</style>
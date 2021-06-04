<template>
  <div>
	  
	  <div v-if="!smallDevice">
		  <div class="hero" 
			   :style="{ background: 'url(' + images[0]+ ') no-repeat center' }">

			<div style="text-align: center">
				<div style="font-size: 30px; padding-top: 25%; ">
					<div style="padding-left: 30%; padding-right: 30%;"> 
						<p class="header-text"> 
							<span style="">{{ text }} </span>
						</p>
					</div>
				</div>
		    </div>
			  
		  </div>
	  </div>

	  <div v-if="smallDevice">
		  <div class="hero" 
			   :style="{ background: 'url(' + images[1]+ ') no-repeat center' }">

			<div style="text-align: center"> 
				<div style="font-size: 20px; padding-top: 30%; ">
					<p class="header-text"> {{ text }} </p>
				</div>
			</div>
		  </div>
	  </div>
	  
  </div>
	
</template>

<script>
	
import fetchPhoto from '@/mixins/PhotoAPI'
	
export default {

  data () {
	return {
	
		smallDevice: false,
	
		imgID: [442574, 2528118],
		images: [],
	
		text: "Concept stage startup, aiming to build messenger bots that can help SME's automate their routines"
	}
  },
	
  computed: {
  },
	
  created () {
	
		try { fetchPhoto (this.imgID, this.images); } 
		catch(e) { console.error (e); }
		//color: white;
   },
	
  mounted () {

		if (this.$mq ==='mobile' || this.$mq ==='tablet') { this.smallDevice = true; }
  },
}
	
</script>

<style scoped>
	
@import '../css/global.css';
	
.hero {
	width: 100%;
    height: 800px;
    background-size: cover;
	Z-index:0;
}


</style>

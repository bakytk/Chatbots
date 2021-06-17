<template>
  <div>
	 
	 <hero></hero>
	 <chatform></chatform>
	 
	 
  </div>
</template>

<script>
	
import hero from '@/components/Hero.vue';
import chatform from '@/components/ChatForm.vue';
	
export default {

  components: {	
		hero,
		chatform
 	},
}
</script>

<style scoped>

</style>

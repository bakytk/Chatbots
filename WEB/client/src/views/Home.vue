<template>
  <div>
	 
	 <hero></hero>
	 <proto></proto>
  	 <author></author>
	  
  </div>
</template>

<script>
	
import hero from '@/components/Hero.vue';
import proto from '@/components/Proto.vue';
import author from '@/components/Author.vue';
	
export default {

  components: {	
		hero,
		proto,
		author
 	},
}
	
</script>

<style scoped>

</style>

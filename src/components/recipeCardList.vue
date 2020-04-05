<template>
  <div>
    <b-card-group>
      <recipeCard
        v-for="(r, index) in recipes"
        :key="index"
        :src="r.src"
        :title="r.name"
        :ingredients_amounts="r.ingredients_amounts"
        :instructions="r.instructions"
      ></recipeCard>
    </b-card-group>
  </div>
</template>

<script>
import recipeCard from "@/components/recipeCard.vue";
import server from "@/server.js";
// console.log(data);

export default {
  components: {
    recipeCard
  },
  data() {
    return {
      recipes: server.getAllRecipesData()
    };
  }
};
</script>

<style></style>

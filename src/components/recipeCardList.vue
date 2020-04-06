<template>
  <div>
    <b-card-group>
      <recipeCard
        v-for="(r, index) in recipes"
        :key="index"
        :src="r.src"
        :title="r.name"
        :username="r.username"
      ></recipeCard>
    </b-card-group>
  </div>
</template>

<script>
import recipeCard from "@/components/recipeCard.vue";
import server from "@/server.js";

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

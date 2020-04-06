<template>
  <div>
    <!-- {{ author }} - {{ recipeName }} -->
    <recipeCard :src="r.src" :title="r.name">
      <b-row>
        <b-col>
          <b-container>
            <b-row v-for="(i_a, index) in r.ingredients_amounts" :key="index">
              <b-col>{{ i_a.ingredient_name }} - {{ i_a.amount }}</b-col>
            </b-row>
          </b-container>
        </b-col>
        <b-col>
          <b-container>
            <b-row v-for="(i, index) in r.instructions" :key="index">
              <b-col>{{ i.instruction_index }} </b-col>
              <b-col>{{ i.instruction }}</b-col>
            </b-row>
          </b-container>
        </b-col>
      </b-row>
    </recipeCard>
  </div>
</template>

<script>
import recipeCard from "@/components/recipeCard.vue";
import server from "@/server.js";

export default {
  components: {
    recipeCard
  },
  props: {
    author: {
      required: true
    },
    recipeName: {
      required: true
    }
  },
  data() {
    return {
      r: Object
    };
  },
  mounted() {
    try {
      this.r = server.getRecipeData(this.author, this.recipeName);
    } catch {
      this.$router.push("/notFound");
    }
  }
};
</script>

<style lang="scss" scoped></style>

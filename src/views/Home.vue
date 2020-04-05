<template>
  <div class="home">
    <recipeCardList />
  </div>
</template>

<script>
// @ is an alias to /src
import recipeCardList from "@/components/recipeCardList.vue";
export default {
  name: "Home",
  components: {
    recipeCardList
  }
};
</script>

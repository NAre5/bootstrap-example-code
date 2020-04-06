<template>
  <div>
    <b-card
      :img-src="src"
      img-alt="Image"
      img-height="400px"
      style="max-width: 30rem;"
    >
      <b-card-title>
        <router-link :to="'recipe/' + username + '/' + title">{{
          title
        }}</router-link>
      </b-card-title>
      <slot></slot>
      <!-- <b-row>
        <b-col>
          <b-container>
            <b-row v-for="(i_a, index) in ingredients_amounts" :key="index">
              <b-col>{{ i_a.ingredient_name }} - {{ i_a.amount }}</b-col>
            </b-row>
          </b-container>
        </b-col>
        <b-col>
          <b-container>
            <b-row v-for="(i, index) in instructions" :key="index">
              <b-col>{{ i.instruction_index }} </b-col>
              <b-col>{{ i.instruction }}</b-col>
            </b-row>
          </b-container>
        </b-col>
      </b-row> -->
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    src: String,
    title: String,
    username: String
    // ingredients_amounts: Array,
    // instructions: Array
  },
  mounted() {
    // console.log(this.title);
  }
};
</script>

<style></style>

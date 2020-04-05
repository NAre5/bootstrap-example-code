<template>
  <div>
    <b-card
      :title="title"
      :img-src="src"
      img-alt="Image"
      img-height="400px"
      style="max-width: 30rem;"
    >
      <b-row>
        <b-col>
          <b-container>
            <b-row v-for="(i_a, index) in ingredients_amounts" :key="index">
              <b-col>{{ i_a.ingredient_name }} - {{ i_a.amount }}</b-col>
            </b-row>
          </b-container>
        </b-col>
        <b-col>
          <!-- {{ instructions }} -->
          <b-container>
            <b-row v-for="(i, index) in instructions" :key="index">
              <b-col>{{ i.instruction_index }} </b-col>
              <b-col>{{ i.instruction }}</b-col>
            </b-row>
          </b-container>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    src: String,
    title: String,
    ingredients_amounts: Array,
    instructions: Array
  }
};
</script>

<style></style>

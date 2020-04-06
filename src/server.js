const db = {
  ingredients: [
    { name: "tomato" },
    { name: "water" },
    { name: "egg" },
    { name: "carrot" },
    { name: "chicken" }
  ],
  recipes: [
    {
      name: "marak-kneidalahc",
      username: "eran",
      date_created: Date.now(),
      level_of_difficulty: "medium",
      estimated_ammount_of_time_to_make: 45,
      src: require(`@/assets/marak-kneidalahc.jpg`)
    },
    {
      name: "shakshoka",
      username: "eran",
      date_created: Date.now(),
      level_of_difficulty: "easy",
      estimated_ammount_of_time_to_make: 20,
      src: require(`@/assets/shakshoka.jpg`)
    }
  ],
  ingredients_amounts: [
    {
      ingredient_name: "carrot",
      recipe_name: "marak-kneidalahc",
      username: "eran",
      amount: "1 whole"
    },
    {
      ingredient_name: "water",
      recipe_name: "marak-kneidalahc",
      username: "eran",
      amount: "5 liters"
    },
    {
      ingredient_name: "chicken",
      recipe_name: "marak-kneidalahc",
      username: "eran",
      amount: "1 whole"
    },
    {
      ingredient_name: "tomato",
      recipe_name: "shakshoka",
      username: "eran",
      amount: "5 whole"
    },
    {
      ingredient_name: "water",
      recipe_name: "shakshoka",
      username: "eran",
      amount: "250 ml"
    },
    {
      ingredient_name: "egg",
      recipe_name: "shakshoka",
      username: "eran",
      amount: "3 whole"
    }
  ],
  instructions: [
    {
      recipe_name: "marak-kneidalahc",
      username: "eran",
      instruction_index: 1,
      instruction: "boil water"
    },
    {
      recipe_name: "marak-kneidalahc",
      username: "eran",
      instruction_index: 2,
      instruction: "insert carrot and chicken"
    },
    {
      recipe_name: "marak-kneidalahc",
      username: "eran",
      instruction_index: 3,
      instruction: "set fire on low"
    },
    {
      recipe_name: "marak-kneidalahc",
      username: "eran",
      instruction_index: 4,
      instruction: "after 30 minutes serve"
    },
    {
      recipe_name: "shakshoka",
      username: "eran",
      instruction_index: 1,
      instruction: "cut tomatoes"
    },
    {
      recipe_name: "shakshoka",
      username: "eran",
      instruction_index: 2,
      instruction: "cook tomatoes on low hit for 15 minutes"
    },
    {
      recipe_name: "shakshoka",
      username: "eran",
      instruction_index: 3,
      instruction: "add water and cook for more 15 minutes"
    },
    {
      recipe_name: "shakshoka",
      username: "eran",
      instruction_index: 4,
      instruction:
        "break the eggs into the pan ontop of the sauce and cook for 5 minutes"
    }
  ],
  users: [{ username: "eran", password: "abcd" }]
};

// console.log(db);

const server = {
  getAllRecipes() {
    return db.recipes;
  },

  getRecipeData(username, recipe_name) {
    let r = db.recipes.find(
      r => r.name === recipe_name && r.username === username
    );
    if (r === undefined) throw "there is no such recipe";
    return {
      ...r,
      ingredients_amounts: db.ingredients_amounts
        .filter(
          i_a => i_a.recipe_name === r.name && i_a.username === r.username
        )
        .map(i_a => {
          return { ingredient_name: i_a.ingredient_name, amount: i_a.amount };
        }),
      instructions: db.instructions
        .filter(i => i.recipe_name === r.name && i.username === r.username)
        .map(i => {
          return {
            instruction_index: i.instruction_index,
            instruction: i.instruction
          };
        })
        .sort((a, b) => a.instruction_index - b.instruction_index)
    };
  },

  getAllRecipesData() {
    return db.recipes.map(r => {
      return {
        ...r,
        ingredients_amounts: db.ingredients_amounts
          .filter(
            i_a => i_a.recipe_name === r.name && i_a.username === r.username
          )
          .map(i_a => {
            return { ingredient_name: i_a.ingredient_name, amount: i_a.amount };
          }),
        instructions: db.instructions
          .filter(i => i.recipe_name === r.name && i.username === r.username)
          .map(i => {
            return {
              instruction_index: i.instruction_index,
              instruction: i.instruction
            };
          })
          .sort((a, b) => a.instruction_index - b.instruction_index)
      };
    });
  },

  // getRecipesThatHaveIngredient(ingredient_name) {
  //   //short but good
  //   return this.getAllRecipesData().filter(r =>
  //     r.ingredients_amounts
  //       .map(i_a => i_a.ingredient_name)
  //       .includes(ingredient_name)
  //   );
  // },

  getRecipesThatMadeByUser(username) {
    //short but good
    return this.getAllRecipes().filter(r => r.username === username);
  },

  getAllIngredients() {
    return db.ingredients;
  }
};

export default server;

// const data = [
//   {
//     id: 0,
//     src: require(`@/assets/marak-kneidalahc.jpg`),
//     title: "marak-kneidalahc",
//     ingredient_amount: [
//       "carrot - 1 whole",
//       "water - 5 liters",
//       "chicken - 1 whole"
//     ],
//     instructions: [
//       "boil water",
//       "insert carrot and chicken",
//       "set fire on low",
//       "after 30 minutes serve"
//     ]
//   },
//   {
//     id: 1,
//     src: require(`@/assets/shakshoka.jpg`),
//     title: "shakshoka",
//     ingredient_amount: ["tomato - 5 whole", "water - 250 ml", "egg - 3 whole"],
//     instructions: [
//       "cut tomatoes",
//       "cook tomatoes on low hit for 15 minutes",
//       "add water and cook for more 15 minutes",
//       "break the eggs into the pan ontop of the sauce and cook for 5 minutes"
//     ]
//   }
// ];

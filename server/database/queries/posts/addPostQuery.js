const connection = require("../../config/connection");

const addPostQuery = ({ username, title, content, categories }) =>
  connection
    .query({
      text: "INSERT INTO posts(username, title,content) values ($1,$2,$3) RETURNING *",
      values: [username, title, content],
    })
    .then((data) => data.rows[0])
    .then((row) => {
      if (categories?.length) {
        const elements = categories
          .map((ele, index) => {
            return `($1, $${index + 2})`;
          })
          .join(",");

        const insertCategoriesQuery = {
          text: `
            with cp as (insert into category_post(post_id,category_id) values ${elements} returning category_id)
            select c.id, c.name, c.color from cp join categories c on cp.category_id = c.id 
        `,
          values: [row.id, ...categories],
        };

        // if you run the tests you will see the query in the console
        // and you will see the result of this
        console.log(insertCategoriesQuery);

        return connection
          .query(insertCategoriesQuery)
          .then((data) => data.rows)
          .then((categoriesRows) => {
            row.categories = categoriesRows;
            return row;
          });
      } else {
        return row;
      }
    });

module.exports = addPostQuery;

const connection = require("../../config/connection");

const getPostsQuery = () =>
  connection.query({
    text: `
        SELECT 
            p.id,
            p.username,
            p.title,
            p.content,
            json_agg(c.*) as categories
        FROM
          posts p
          left join category_post cp on p.id = cp.post_id
          left join categories c on c.id = cp.category_id 
          group by p.id 
        `,
  });

module.exports = getPostsQuery;

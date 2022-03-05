BEGIN;

-- drop tables
DROP TABLE IF EXISTS posts, comments, categories, category_post CASCADE;


CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL
);

CREATE TABLE comments(
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    post_id int,
    foreign key (post_id) REFERENCES posts(id)
);

CREATE TABLE categories(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    color VARCHAR(255)
);

CREATE TABLE category_post(
    post_id int NOT NULL,
    category_id int NOT NULL,
    foreign key (post_id) REFERENCES posts(id),
    foreign key (category_id) REFERENCES categories(id),

    PRIMARY KEY (post_id, category_id)
);


INSERT INTO posts(username, title, content) VALUES 
    ('abdallah','Hello from DB', 'bla bla blablablabla'),
    ('monther','Hello from express', 'bla bla blablablabla');

INSERT INTO comments(username, content, post_id) VALUES 
    ('ali','Hello from DB', 1),
    ('monther','Hello from express', 1);


COMMIT;
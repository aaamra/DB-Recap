begin;

DROP TABLE IF EXISTS posts, comments, categories, category_post CASCADE;

CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    username varchar(50) NOT NULL,
    title varchar(100) NOT NULL,
    content TEXT NOT NULL
);

CREATE TABLE comments(
    id SERIAL PRIMARY KEY,
    username varchar(50) not null,
    content TEXT NOT NULL,
    post_id int,
    FOREIGN KEY (post_id) REFERENCES posts(id)
);

CREATE TABLE categories(
    id SERIAL PRIMARY KEY,
    name varchar(20) not null,
    color varchar(20)
);

CREATE TABLE category_post(
    id SERIAL PRIMARY KEY,
    category_id int,
    post_id int,
    FOREIGN KEY (post_id) REFERENCES posts(id),
    FOREIGN KEY (category_id) REFERENCES categories(id)
);


insert into posts(title,content,username) values('hello','bla dsadasdasd', 'ali') , ('hello2','bla dsadasdasd', 'ali2');
insert into comments(content,username, post_id) values('comment 1', 'ali', 1), ('comment 2', 'ahmed', 1) , ('hello comment', 'ali2', 2);

commit;
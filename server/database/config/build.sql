begin;

drop table if exists posts, categories, category_post, comments cascade;

create table posts(
    id serial primary key,
    username varchar(100) not null,
    title varchar(100) not null,
    content text not null
);

create table categories(
    id serial primary key,
    name varchar(100) not null,
    color varchar(100) default 'red'
);

create table category_post(
    id serial primary key,
    post_id int,
    category_id int,
    foreign key (post_id) references posts(id),
    constraint fk_category_id foreign key (category_id) references categories(id)
    -- primary key(post_id, category_id)
);

create table comments(
    id serial primary key,
    username varchar(100),
    content text,
    post_id int,
    foreign key (post_id) references posts(id) on delete cascade
);


insert into posts(username, title,content) values('ali', 'IDK', 'hello world'), ('ahmed', 'IDK2', 'hello world2');
insert into categories(name) values('news'),('sports'), ('music');
insert into comments(username, content,post_id) values('ahmed', 'idk', 1),('abdallah', 'idk', 1);

insert into category_post(post_id, category_id) values(1, 1),(1, 2);

commit;
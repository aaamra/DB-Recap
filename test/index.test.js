const connection = require('../server/database/config/connection');
const build = require('../server/database/config/build');
const { getPostsQuery, getPostCommentsQuery, addPostQuery } = require('../server/database/queries');


beforeEach(() => {
    return build();
});

describe('posts queries', () => {
    test('get all posts', () => {
        const expected = [
            {
                id: 1,
                username: 'abdallah',
                title: 'Hello from DB',
                content: 'bla bla blablablabla'
            },
            {
                id: 2,
                username: 'monther',
                title: 'Hello from express',
                content: 'bla bla blablablabla'
            }
        ];

        return getPostsQuery().then((data) => {
            expect(data.rows).toEqual(expected);
        });

    });

    test('get all posts', () => {
        const expected = [
            { 
                id: 1, 
                username: 'ali', 
                content: 'Hello from DB', 
                post_id: 1 
            },
            {
              id: 2,
              username: 'monther',
              content: 'Hello from express',
              post_id: 1
            }
          ];

        return getPostCommentsQuery(1).then((data) => {
            expect(data.rows).toEqual(expected);
        });

    });

    test('add new post', () => {
        const expected = { 
            username: 'ali', 
            title: 'new Post', 
            content: 'new content' 
        };

        return addPostQuery(expected).then((data) => {
            expect(data.rows[0].username).toEqual(expected.username);
            expect(data.rows[0].title).toEqual(expected.title);
            expect(data.rows[0].content).toEqual(expected.content);
        });

    });
});


afterAll(() => {
    return connection.end();
});
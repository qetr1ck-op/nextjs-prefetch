import React from 'react';

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

interface Post {
  id: number;
  title: string;
  content: string;
}

const fetchPosts = async (): Promise<Post[]> => {
  return new Promise((resolve) => {
    resolve([
      { id: 1, title: 'Post 1', content: 'This is the first post.' },
      { id: 2, title: 'Post 2', content: 'This is the second post.' },
    ]);
  });
};

const Posts = async () => {
  await wait(3000);

  const posts = await fetchPosts();

  return (
    <div>
      <h1>Posts</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.title}</td>
              <td>{post.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Posts;

function BlogDetails(props) {
  var blogs = [
    {
      id: 1001,
      name: "React Learning",
      author: "Nikitha",
      desc: "Welcome to our Blog"
    },
    {
      id: 1002,
      name: "Installation",
      author: "Schewdzdenier",
      desc: "You cn install React from npm"
    }
  ];
  return (
    <div>
      <h1>Blog Details</h1>
      <Blog blogs={blogs} />
    </div>
  );
}
function Blog(props) {
  return props.blogs.map((blog) => {
    return (
      <div>
      <h2>{blog.name}</h2>
      <b>{blog.author}</b>
      <p>{blog.desc}</p>
    </div>
  );
});
}
export default BlogDetails;
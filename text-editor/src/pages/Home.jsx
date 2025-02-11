import React from 'react'

const Home = () => {
  return (
    <div>Home</div>
  )
}

export default Home





// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import 'tailwindcss/tailwind.css';

// const blogs = [
//   { id: 1, title: 'Blog 1', gist: 'This is the gist of blog 1', content: 'Full content of blog 1' },
//   { id: 2, title: 'Blog 2', gist: 'This is the gist of blog 2', content: 'Full content of blog 2' },
//   // Add more blogs as needed
// ];

// const Navbar = () => (
//   <nav className="bg-blue-500 p-4 text-white">
//     <h1 className="text-2xl">Blog Site</h1>
//   </nav>
// );

// const Sidebar = () => (
//   <aside className="w-1/4 bg-gray-200 p-4">
//     <ul>
//       {blogs.map(blog => (
//         <li key={blog.id} className="mb-2">
//           <Link to={`/blog/${blog.id}`} className="text-blue-500">{blog.title}</Link>
//         </li>
//       ))}
//     </ul>
//   </aside>
// );

// const BlogList = () => (
//   <div className="w-3/4 p-4">
//     {blogs.map(blog => (
//       <div key={blog.id} className="mb-4">
//         <h2 className="text-xl font-bold">{blog.title}</h2>
//         <p>{blog.gist}</p>
//         <Link to={`/blog/${blog.id}`} className="text-blue-500">Read more</Link>
//       </div>
//     ))}
//   </div>
// );

// const BlogDetail = ({ match }) => {
//   const blog = blogs.find(b => b.id === parseInt(match.params.id));
//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold">{blog.title}</h2>
//       <p>{blog.content}</p>
//     </div>
//   );
// };

// const Home = () => (
//   <Router>
//     <div className="min-h-screen flex flex-col">
//       <Navbar />
//       <div className="flex flex-1">
//         <Sidebar />
//         <Route path="/" exact component={BlogList} />
//         <Route path="/blog/:id" component={BlogDetail} />
//       </div>
//     </div>
//   </Router>
// );

// export default Home;
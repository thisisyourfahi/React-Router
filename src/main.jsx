import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home'
import HomeDefault from './components/Main/HomeDefault'
import Users from './components/Main/Users/Users'
import Posts from './components/Main/Posts/Posts'
import Comments from './components/Main/Comments/Comments'
import ToDos from './components/Main/ToDo/ToDos'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
    children: [
      { index: true, Component: HomeDefault },
      {
        path: 'users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
      },
      {
        path: 'posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        Component: Posts
      },
      {
        path: 'comments',
        loader: () => fetch('https://jsonplaceholder.typicode.com/comments'),
        Component: Comments
      },
      {
        path: 'todos',
        loader: () => fetch('https://jsonplaceholder.typicode.com/todos'),
        Component: ToDos
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

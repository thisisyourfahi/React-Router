import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home'
import HomeDefault from './components/Main/HomeDefault'
import Users from './components/Main/Users/Users'
import Posts from './components/Main/Posts/Posts'
import Comments from './components/Main/Comments/Comments'
import ToDos from './components/Main/ToDo/ToDos'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'
import PostCardDetails from './components/Main/Posts/PostCardDetails'
import UserCardDetails from './components/Main/Users/UserCardDetails'

const usersPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
const postsPromise = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());
const commentsPromise = fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json());
const todosPromise = fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json());

const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
    children: [
      { index: true, Component: HomeDefault },
      {
        path: 'users',
        element: <Suspense fallback={<LoadingSpinner />}>
          <Users usersPromise={usersPromise}></Users>
        </Suspense>
      },
      {
        path: 'users/:id',
        loader: ({params}) =>  fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
        Component: UserCardDetails
      },
      {
        path: 'posts',
        element: <Suspense fallback={<LoadingSpinner />}>
          <Posts postsPromise={postsPromise} usersPromise={usersPromise}></Posts>
        </Suspense>
      },
      {
        path: 'comments',
        element: <Suspense fallback={<LoadingSpinner />}>
          <Comments commentsPromise={commentsPromise}></Comments>
        </Suspense>
      },
      {
        path: 'todos',
        element: <Suspense fallback={<LoadingSpinner />}>
          <ToDos todosPromise={todosPromise}></ToDos>
        </Suspense>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

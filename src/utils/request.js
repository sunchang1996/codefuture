import fetch from 'isomorphic-fetch'
import localStore from 'store'
import router from '@/router'
// import { HOST } from './index'
const HOST = 'http://127.0.0.1:3000'

const getOptions = ({
  method,
  body,
  headers,
}) => {
  let bodyString = null
  if (Object.keys(body).length) {
    bodyString = JSON.stringify(body)
  }
  return {
    method,
    headers,
    body: bodyString,
    credentials: 'same-origin'
  }
}

const getQueryString = ({
  query = {}
}) => {
  let qs = `?time=${Date.now()}`
  if (Object.keys(query).length !== 0) {
    Object.keys(query).forEach((key) => {
      qs += `&${key}=${query[key] !== undefined ? query[key] : ''}`
    })
  }
  return qs
}

const getToken = () => localStore.get('FUTURE_WEB_TOKEN');
const removeToken = () => localStore.remove('FUTURE_WEB_TOKEN');

export default async (
  method,
  path,
  query = {},
  body = {},
  headers = {
    'Content-Type': 'application/json; charset=utf-8',
    Authorization: getToken()
  },
) => {
  if (!path) {
    throw new Error('path is required!')
  }
  const res = await fetch(encodeURI(`${HOST}${path}${getQueryString({
    query,
  })}`), getOptions({
    method,
    body,
    headers,
  }))

  const data = await res.json()
  if (res.status === 401) {
    removeToken()
    setTimeout(() => {
      const state = btoa(encodeURIComponent(`${location.pathname}${location.search}`))
      router.push(`/auth?state=${state}`)
    }, 100)
  }
  if (!res.ok) { throw new Error(data.msg) }
  return data
}

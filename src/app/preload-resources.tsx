'use client'
 
import ReactDOM from 'react-dom'
 
export function PreloadResources() {
  ReactDOM.preload('https://fonts.googleapis.com')
  ReactDOM.preload('https://fonts.gstatic.com')
 
  return null
}
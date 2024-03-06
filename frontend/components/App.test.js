import AppFunctional from './AppFunctional'
import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import React from 'react'
// Write your tests here
beforeEach(()=>{
  render (<AppFunctional />)
})

describe('App F Component', ()=>{
  test('renders reset button', ()=>{
    const resetB = screen.queryByText('reset')
    
    expect(resetB).toBeVisible()
    expect(resetB).toBeInTheDocument()
    
  })
  test('right button renders', ()=>{
    const rightB = screen.queryByText('RIGHT')
    expect(rightB).toBeInTheDocument()
    expect(rightB).toBeVisible()
  })
  test('left button renders', ()=>{
    const leftB = screen.queryByText('LEFT')
    expect(leftB).toBeInTheDocument()
    expect(leftB).toBeVisible()
  })
  test('renders coordinates heading', ()=>{
    const coords = screen.queryByText('Coordinates', {exact: false})
    expect(coords).toBeInTheDocument()
    expect(coords).toBeVisible()
   
  })
  test('up button renders', ()=>{
    const upB = screen.queryByText('UP')
    expect(upB).toBeInTheDocument()
    expect(upB).toBeVisible()
    //screen.debug()
  })
})
// test('sanity', () => {
//   expect(true).toBe(false)
//   //test passes
// })

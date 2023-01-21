import {render , screen } from '@testing-library/react'
import { it } from 'node:test'
import Welcome from '../../components/Welcome'

describe('Welcome',()=>{
    it('Welcome sign exists',()=>{
        render(<Welcome/>)
        const headingElement=screen.getByText("Welcome")
        expect(headingElement).toBeInTheDocument(); 
    })
})
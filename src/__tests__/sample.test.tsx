import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Sample Test', () => {
  it('renders without crashing', () => {
    render(<div>Test Component</div>)
    expect(screen.getByText('Test Component')).toBeInTheDocument()
  })

  it('uses custom matcher', () => {
    render(<div className="test-class another-class">Test Classes</div>)
    const element = screen.getByText('Test Classes')
    expect(element).toHaveClasses('test-class', 'another-class')
  })
}) 
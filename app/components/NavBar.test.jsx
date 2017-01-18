import React from 'react'
import chai, {expect} from 'chai'
chai.use(require('chai-enzyme')())
import {shallow} from 'enzyme'

import NavBar from './NavBar'

describe('<NavBar />', () => {
  const user = {
    name: 'Michelle',
    email: 'michelle@example.gov',
    password: '1234',
    isAdmin: true
  }

  let root
  beforeEach('render the root', () =>
    root = shallow(<NavBar />)
  )

  it('shows a "Welcome" text', () => {
    root.setState({ user })
    //expect(root.find('li')).to.have.length(1)
    expect(root.find('li').text()).equal('Welcome, Michelle')
  })

  xit("doesn't show the answer when state.answered=false", () => {
    root.setState({ joke, answered: false })
    expect(root.find('h2')).to.have.length(0)
  })

  xit('shows the answer when state.answered=true', () => {
    root.setState({ joke, answered: true })
    expect(root.find('h2')).to.have.length(1)
    expect(root.find('h2').text()).to.equal(joke.a)
  })

  xit('when tapped, sets state.answered=true', () => {
    root.setState({ joke, answered: false })
    root.simulate('click')
    expect(root.state().answered).to.be.true
  })
})

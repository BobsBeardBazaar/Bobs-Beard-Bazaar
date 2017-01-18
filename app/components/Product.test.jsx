import React from 'react'
import chai, {expect} from 'chai'
chai.use(require('chai-enzyme')())
import {shallow} from 'enzyme'
import {spy} from 'sinon'
chai.use(require('sinon-chai'))
import {createStore} from 'redux'

import Product from './Product'

describe('<Product />', () => {
  const product1 = {
    name: `Joe's fabulous mustache`,
    image: 'http://dailypicksandflicks.com/wp-content/uploads/2011/03/Awesome-mustache.jpg',
    description: 'There are no words to explain',
    quantity: '3',
    price: '87.12',
    category_id: 2
  }

  const product2 = {
    name: `Beard`,
    image: 'http://pixel.nymag.com/content/dam/daily/intelligencer/2013/05/02/02-hipster-beard.jpg',
    description: 'Keeps you nice and warm',
    quantity: '5',
    price: '10.00',
    category_id: 1
  }

  let root;
  beforeEach('render a product', () =>
    root = shallow(<Product product={product1} />)
  )

  it('shows product name', () => {
    expect(root.text()).to.contain(product1.name)
    //expect(root.text()).to.contain(review.Author.name)
  })

  xit('calls props.logout when logout is tapped', () => {
    root.find('button.logout').simulate('click')
    expect(logout).to.have.been.called
  })
})

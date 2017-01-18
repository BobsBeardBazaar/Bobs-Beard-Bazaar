import React from 'react'
import chai, {expect} from 'chai'
chai.use(require('chai-enzyme')())
import {shallow} from 'enzyme'
import {spy} from 'sinon'
chai.use(require('sinon-chai'))
import {createStore} from 'redux'

import Review from './Review'

describe('<Review />', () => {
  const review1 = {
    comment: `So cool`,
    rating: 5,
    title: `Beard is sweet`,
    product_id: 1,
    author_id: 2
  }

  let root;
  beforeEach('render a review', () =>
    root = shallow(<Review review={review1} />)
  )

  it('shows review title', () => {
    expect(root.text()).to.contain(review.title)
    //expect(root.text()).to.contain(review.Author.name)
  })

  xit('calls props.logout when logout is tapped', () => {
    root.find('button.logout').simulate('click')
    expect(logout).to.have.been.called
  })
})

xdescribe("<Review />'s connection", () => {
  const state = {
    review: {
      comment: `It's meh`,
      rating: 2,
      title: `It's ok`,
      product_id: 1,
      author_id: 2
    }
  }

  let root, store, dispatch
  beforeEach('create store and render the review', () => {
    store = createStore(state => state, state)
    dispatch = spy(store, 'dispatch')
    root = shallow(<WhoAmIContainer store={store}/>)
  })

  it('gets prop.user from state.auth', () => {
    expect(root.find(WhoAmI)).to.have.prop('user').eql(state.auth)
  })
})

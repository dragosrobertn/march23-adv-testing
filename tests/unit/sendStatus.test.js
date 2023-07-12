const { expect } = require('chai');
const sinon = require('sinon');
const { sendStatus } = require('../../src/controllers/sendStatus');

describe('sendStatus', () => {
  it('returns a 200 status code', () => {
    const request = {}
    const response = { sendStatus: sinon.spy() }
    
    sendStatus(request, response)
    
    expect(response.sendStatus.calledOnce).to.be.true
    expect(response.sendStatus.calledWith(201)).to.be.true
  })
})
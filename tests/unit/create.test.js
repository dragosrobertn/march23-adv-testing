const { expect } = require('chai')
const sinon = require('sinon')
const db = require('../../db')
const { create } = require('../../src/controllers/user')

// describe('create', () => {
//   it('returns a 201 status code', async () => {
//     const request = { body: { email: 'email', password: 'password' } }
//     const response = {}   

//     response.status = sinon.stub().returns(response)
//     response.json = sinon.spy()

//     const data = {
//       rows: [
//         {
//           id: 1,
//           email: 'dragos-email@test.com',
//           password: 'secretpassword'
//         }
//       ]
//     }

//     // =====
//     sinon.stub(db, 'query').returns(Promise.resolve(data))
 
//     await create(request, response)
    
//     expect(response.status.calledWith(201)).to.be.true
//     expect(response.json.calledWith({
//       id: 1,
//       email: 'dragos-email@test.com',
//       password: 'secretpassword'
//     })).to.be.true 
//   })
// })

it('passes the correct SQL to the db', async () => {
  const request = { body: { email: 'drnemail', password: 'drnpassword' } }
  const response = {}   
  response.status = sinon.stub().returns(response)
  response.json = sinon.stub()

  const data = {
    rows: [
      {
       id: 1,
        email: 'email',
        password: 'password'
      }
    ]
  }
  
  const mockDB = sinon.mock(db).expects('query').once().withArgs(
    'INSERT INTO Users(email, password) VALUES ($1, $2) RETURNING *',
      ['drnemail', 'drnpassword'] 
  ).returns(Promise.resolve(data))

  await create(request, response)

  mockDB.verify()
}) 
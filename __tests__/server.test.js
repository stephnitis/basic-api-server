'use strict';

const supertest = require('supertest');
const {app} = require('../src/server');
const { sequelizeDatabase } = require('../src/models');

const request = supertest(app);

beforeAll(async () => {
  await sequelizeDatabase.sync();
});

afterAll(async () => {
  await sequelizeDatabase.drop();
});

describe('API Server', () => {

  it('handles invalid requests', async () => {
    const response = await request.get('/foo');

    expect(response.status).toEqual(404);
  });

  it('handles errors', async () => {
    const response = await request.get('/bad');

    expect(response.status).toEqual(500);
    expect(response.body.route).toEqual('/bad');
    expect(response.body.message).toEqual('this route is bad');
  });

  it('handles root path', async () => {
    const response = await request.get('/');

    expect(response.status).toBe(200);
    expect(response.text).toEqual('hello');
  });


});

describe('Testing Mountain CRUD', () => {

  it('Creates a mountain', async() => {
    let responseOne = await request.post('/mountains').send({
      name: 'test one',
      summit: 111,
      tripType: 'day hike',
    });
    let responseTwo = await request.post('/mountains').send({
      name: 'test two',
      summit: 222,
      tripType: 'backpack',
    });

    expect(responseOne.status).toEqual(200);
    expect(responseOne.body.name).toEqual('test one');
    expect(responseOne.body.summit).toEqual(111);
    expect(responseOne.body.tripType).toEqual('day hike');
    expect(responseTwo.status).toEqual(200);
    expect(responseTwo.body.name).toEqual('test two');
    expect(responseTwo.body.summit).toEqual(222);
    expect(responseTwo.body.tripType).toEqual('backpack');

  });

  test('Reads All Mountains', async () => {
    let response = await request.get('/mountains');
    console.log('should be two test records', response.body);
    expect(response.body.length).toBe(2);
    expect(response.body[0].name).toEqual('test one');
    expect(response.body[0].summit).toEqual(111);
    expect(response.body[0].tripType).toEqual('day hike');
    expect(response.body[1].name).toEqual('test two');
    expect(response.body[1].summit).toEqual(222);
    expect(response.body[1].tripType).toEqual('backpack');

  });

  test('Reads Single Mountain', async () => {
    let response = await request.get('/mountains/1');

    expect(response.body.name).toEqual('test one');
    expect(response.body.summit).toEqual(111);
    expect(response.body.tripType).toEqual('day hike');
  });

  test('Updates a mountain', async () => {
    let response = await request.put('/mountains/2').send({
      name: 'test update',
      summit: 333,
      tripType: 'mountaineering',
    });

    expect(response.body.name).toEqual('test update');
    expect(response.body.summit).toEqual(333);
    expect(response.body.tripType).toEqual('mountaineering');
  });

  test('Delete a mountain', async () => {
    await request.delete('/mountains/1');
    let response = await request.get('/mountains');
    console.log('should have 1 record', response.body);

    expect(response.body.length).toBe(1);
  });

});

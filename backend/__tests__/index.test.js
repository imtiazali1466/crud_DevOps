const request = require('supertest');
const express = require('express');

// Mock your app if backend/index.js exports the app
// const app = require('../index');

const app = express();
app.use(express.json());

// Example endpoints for demonstration
app.get('/', (req, res) => res.status(200).send('Hello World'));
app.get('/healthz', (req, res) => res.json({ status: 'ok' }));
app.get('/users', (req, res) => res.json([{ id: 1, name: 'Alice' }]));
app.post('/users', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'Name is required' });
  res.status(201).json({ id: 2, name });
});

describe('GET /', () => {
  it('should return Hello World', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello World');
  });
});

describe('GET /healthz', () => {
  it('should return status ok', async () => {
    const res = await request(app).get('/healthz');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });
});

describe('GET /users', () => {
  it('should return an array of users', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ id: 1, name: 'Alice' }]);
  });
});

describe('POST /users', () => {
  it('should create a new user', async () => {
    const res = await request(app)
      .post('/users')
      .send({ name: 'Bob' });
    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual({ id: 2, name: 'Bob' });
  });

  it('should return 400 if name is missing', async () => {
    const res = await request(app)
      .post('/users')
      .send({});
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual({ error: 'Name is required' });
  });
});
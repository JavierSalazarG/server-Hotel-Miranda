const supertest = require('supertest')
import  app  from '../server'

describe('Login', () => {
    it('Datos de login mal, devuelve error: 400', async () => {
        const res = await supertest(app).post('/login').send({ "email": "email", "password": "password" })

        expect(res.statusCode).toEqual(401)
       
    }, 5000)
    it('Datos de login estan bien, devuelve 200', async () => {
        const res = await supertest(app).post('/login').send({ "email": "admin@admin.com", "password": "admin" })

        expect(res.statusCode).toEqual(200)
       
    }, 5000)
})

describe('bookin', () => {
    
})
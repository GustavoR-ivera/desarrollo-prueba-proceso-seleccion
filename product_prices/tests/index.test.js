import app from '../app.js';
import request from 'supertest';

//set of tests for the principal endpoint
/*
1. date given is not in the range of the rates
2. product_id is not registered
*/
describe('GET /get-final-price/parametros', () => {
    test('it should respond 404 status when the given date it is not in the range for the registered rates', async ()=>{
        const response = await request(app).get('/get-final-price/35455/2025-01-01 00:00:00').send();
        expect(response.status).toBe(404);
    });

    test('it should respond 404 status when the product_id is not registered', async ()=>{
        const response = await request(app).get('/get-final-price/789/2020-06-16 21:00:00').send();
        expect(response.status).toBe(404);
    });
});

/* 
1. we check the response and validate the data for the first test suggested in the document
*/
describe('GET /get-final-price/35455/2020-06-14 10:00:00', () => {
    const expectedRes = {
        "product_id": 35455,
        "store_id": 1,
        "rate_id": 1,
        "start_date": "2020-06-14 00:00:00",
        "end_date": "2020-12-31 23:59:59",
        "final_price": 35.5
    }
    test('it should respond with product_id: 35455, store_id: 1, rate_id: 1, start_date: 2020-06-14 00:00:00, end_date: 2020-12-31 23:59:59, final_price : 35.5' , async ()=>{
        const response = await request(app).get('/get-final-price/35455/2020-06-14 10:00:00').send();
        expect(response.body[0].product_id).toBe(35455);
        expect(response.body[0].store_id).toBe(1);
        expect(response.body[0].rate_id).toBe(1);
        expect(response.body[0].start_date).toBe("2020-06-14 00:00:00");
        expect(response.body[0].end_date).toBe("2020-12-31 23:59:59");
        expect(response.body[0].final_price).toBe(35.5);
    });
    
});

//2
describe('GET /get-final-price/35455/2020-06-14 16:00:00', () => {
    const expectedRes = {
        "product_id": 35455,
        "store_id": 1,
        "rate_id": 2,
        "start_date": "2020-06-14 15:00:00",
        "end_date": "2020-06-14 18:30:00",
        "final_price": 25.45
    }
    test('check test data' , async ()=>{
        const response = await request(app).get('/get-final-price/35455/2020-06-14 16:00:00').send();
        expect(response.body[0].product_id).toBe(35455);
        expect(response.body[0].store_id).toBe(1);
        expect(response.body[0].rate_id).toBe(2);
        expect(response.body[0].start_date).toBe("2020-06-14 15:00:00");
        expect(response.body[0].end_date).toBe("2020-06-14 18:30:00");
        expect(response.body[0].final_price).toBe(25.45);
    });
    
});

//3
describe('GET /get-final-price/35455/2020-06-14 21:00:00', () => {
    const expectedRes =  {
        "product_id": 35455,
        "store_id": 1,
        "rate_id": 1,
        "start_date": "2020-06-14 00:00:00",
        "end_date": "2020-12-31 23:59:59",
        "final_price": 35.5
    }
    test('check test data' , async ()=>{
        const response = await request(app).get('/get-final-price/35455/2020-06-14 21:00:00').send();
        expect(response.body[0].product_id).toBe(35455);
        expect(response.body[0].store_id).toBe(1);
        expect(response.body[0].rate_id).toBe(1);
        expect(response.body[0].start_date).toBe("2020-06-14 00:00:00");
        expect(response.body[0].end_date).toBe("2020-12-31 23:59:59");
        expect(response.body[0].final_price).toBe(35.5);
    });
    
});

//4
describe('GET /get-final-price/35455/2020-06-15 10:00:00', () => {
    const expectedRes =  {
        "product_id": 35455,
        "store_id": 1,
        "rate_id": 3,
        "start_date": "2020-06-15 00:00:00",
        "end_date": "2020-06-15 11:00:00",
        "final_price": 30.5
    }
    test('check test data' , async ()=>{
        const response = await request(app).get('/get-final-price/35455/2020-06-15 10:00:00').send();
        expect(response.body[0].product_id).toBe(35455);
        expect(response.body[0].store_id).toBe(1);
        expect(response.body[0].rate_id).toBe(3);
        expect(response.body[0].start_date).toBe("2020-06-15 00:00:00");
        expect(response.body[0].end_date).toBe("2020-06-15 11:00:00");
        expect(response.body[0].final_price).toBe(30.5);
    });
    
});

//5
describe('GET /get-final-price/35455/2020-06-16 21:00:00', () => {
    const expectedRes =    {
        "product_id": 35455,
        "store_id": 1,
        "rate_id": 4,
        "start_date": "2020-06-15 16:00:00",
        "end_date": "2020-12-31 23:59:59",
        "final_price": 38.95
    }
    test('check test data' , async ()=>{
        const response = await request(app).get('/get-final-price/35455/2020-06-16 21:00:00').send();
        expect(response.body[0].product_id).toBe(35455);
        expect(response.body[0].store_id).toBe(1);
        expect(response.body[0].rate_id).toBe(4);
        expect(response.body[0].start_date).toBe("2020-06-15 16:00:00");
        expect(response.body[0].end_date).toBe("2020-12-31 23:59:59");
        expect(response.body[0].final_price).toBe(38.95);
    });
    
});
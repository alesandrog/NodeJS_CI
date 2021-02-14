const assert = require("assert");
const request = require("supertest")
const app = require("../app");


describe("Unit tests to API", () => {
    it('Receive response from main endpoint', (done) =>{
        request(app)
            .get('/api')
            .expect(200)
            .expect("Welcome to port 3000!")
            .end((err)=>{
                if (err) return done(err);
                done();
            })
    });

    it('Receive response from home', (done) =>{
        request(app)
            .get('/api/home')
            .expect(200)
            .expect("Response from home")
            .end((err)=>{
                if (err) return done(err);
                done();
            })
    });

    it('Failure on non existing endpoint', (done) =>{
        request(app)
            .get('/apis')
            .expect(404)
            .end((err)=>{
                if (err) return done(err);
                done();
            })
    });

    it('Receive response from test should fail ', (done) =>{
        request(app)
            .get('/api/test')
            .expect(200)
            .expect("Response from test")
            .end((err)=>{
                if (err) return done(err);
                done();
            })
    });
})

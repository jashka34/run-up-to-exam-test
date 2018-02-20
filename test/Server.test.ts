import * as mocha from 'mocha';
import {should as should, expect as expect} from 'chai';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import server from '../src/lib/Server';

chai.use(chaiHttp);

describe(`Server`, () => {

    it(`Header`, (done) => {

        chai.request(server)
        .get("/")
        .end((err, res) => {
            //console.log("header / res: ", res);
            expect(res.text, "Содержит строку").contain('Заголовок');
            expect(res).to.have.header('x-powered-by','Express');
            expect(res).to.have.header('content-type','text/html; charset=utf-8');
            expect(res).to.have.status(200); 
            done();
        });

    });

    it(`Wrong path`, (done) => {

        chai.request(server)
        .get("/asdfasdfasdfa")
        .end((err, res) => {
            // console.log("header / res: ", res);
            expect(res).to.have.status(404);
            done();
        });

    });

    it(`Первый hw`, (done) => {

        chai.request(server)
        .get("/hw")
        // .then( res => {
        //     //console.log("res:", res);
        //     expect(res.text, "Текст hw").be.equal("Hello world!");
        // })
        .end((err, res) => {
            expect(res.text, "Текст hw").be.equal("Hello world!");
            expect(res).to.have.status(200);
            done();
        });

    });

})

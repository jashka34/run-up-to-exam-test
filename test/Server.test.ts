import * as mocha from 'mocha';
import {should as should, expect as expect} from 'chai';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import server from '../src/Server';

chai.use(chaiHttp);

describe(`Hello world`, () => {

    it(`Первый hw`, (done) => {

        chai.request(server)
        .get("/")
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

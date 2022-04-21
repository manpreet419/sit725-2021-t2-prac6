// var expect = require('chai').expect;
// var request = require('request');
// const { data } = require('../config.ts')
import { expect } from 'chai';
import request from 'request';
import {data} from '../test/config.js';

describe("Testing Calculator App", function() {
    var addurl= data.url+data.add[0]+data.add[2]+"/"+data.add[1]
    var subtracturl= data.url+data.subtract[0]+data.subtract[2]+"/"+data.subtract[1]
    var multiplyurl= data.url+data.multiply[0]+data.multiply[2]+"/"+data.multiply[1]
    var divideurl= data.url+data.divide[0]+data.divide[2]+"/"+data.divide[1]
    it('Adding two Numbers', function(done) {
        request(addurl, function(error, response, body) {
            expect(Number(body)).to.equal(data.add[2]+data.add[1]);
            done();
        });
    });
    it('Subtracting two Numbers', function(done) {
        request(subtracturl, function(error, response, body) {
            expect(Number(body)).to.equal(data.subtract[2]-data.subtract[1]);
            done();
        });
    });
    it('Multiplying two Numbers', function(done) {
        request(multiplyurl, function(error, response, body) {
            expect(Number(body)).to.equal(data.multiply[2]*data.multiply[1]);
            done();
        });
    });
    it('Dividing two Numbers', function(done) {
        request(divideurl, function(error, response, body) {
            expect(Number(body)).to.equal(data.divide[2]/data.divide[1]);
            done();
        });
    });
})

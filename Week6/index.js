var expect = chai.expect;

describe('myFunction', function() {
    describe('doSomething', function()
    it ('should concatenate the two paramters'), function() {
        var x = doSomething('Hello', 5);
        expect(x).to.equal('Hello5');
    });

    it('should throw in an other error if first parameter is not a string', function() {
        expect(function() {
            doSOmething(5,5);
        }).to.throw(Error);
    });
    });
const expect =  require('expect');

//import real string
const {isRealString} = require('./validation');


//isrealstring
describe('isRealString', () =>{
  it('Should reject non-string values', () =>{
    var res = isRealString(98);
    expect(res).toBe(false);
  });

  it('should reject string with only spaces', () =>{
    var res = isRealString('   ');
    expect(res).toBe(false);
  });

  it('should allow with non-space characters', () =>{
    var res = isRealString('  Andrew  ');
    expect(res).toBe(true);
  })
})
  //should reject string with only spaces
  //should reject string with only spaces
  //should allow with non-space characters
valueOf(1+1).shouldBe(2); valueOf(1*3).shouldNotBe(4); 
valueOf(2).shouldBeGreaterThan(1); valueOf(Ti.App).shouldBeObject();
 valueOf(userAgent).shouldContain('Titanium/'); valueOf('a').shouldBeOneOf(['a','b','c']); 
 valueOf([1, 2, 3]).shouldMatchArray([1, 2, 3]); valueOf(function() { throw new Exception("error"); 
 }).shouldThrowException();
'use strict';

describe('Service: ProducService', function () {

  // load the service's module
  beforeEach(module('demoAngularApp'));

  // instantiate service
  var ProducService;
  beforeEach(inject(function (_ProducService_) {
    ProducService = _ProducService_;
  }));

  it('should do something', function () {
    expect(!!ProducService).toBe(true);
  });

});

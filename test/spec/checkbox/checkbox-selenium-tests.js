/***************************
 * Checkbox - Selenium Tests
 * These tests run using webdriverJS and Selenium, in a true browser environment
***************************/

var runner;

function serializationHelper() {
  return $('#checkbox-serialization-test').serialize();
}

describe('Checkbox [selenium]', function(){
  this.timeout(99999999);

  before(function(done){
    runner = globals.setup(undefined, '/tests/checkboxes');
    runner.client
      .execute('window.hnl = {};')
      // NOTE: Had to set a specific window size to prevent failures
      // in PhantomJS regarding UI element clicks.
      .windowHandleSize({
          width: 1024,
          height: 768
      })
      .call(done);
  });

  // TODO: Move to accessibility-specific test suite?
  it('should have a matching label with a "for" attribute referencing an existing input ID', function(done) {
    runner.client
      .getAttribute('#cssOnly label:first-of-type', 'for', function(err, result) {
        globals.noError(err);
        should.exist(result);
        result.should.equal('starts-unchecked');
      })
      .call(done);
  });

  it('cannot be changed if its disabled', function(done) {
    runner.client
      .click('#starts-disabled-checked', globals.noError)
      // result should not have changed
      .getAttribute('#starts-disabled-checked', 'checked', function(err, result) {
        globals.noError(err);
        should.exist(result);
        result.should.equal('true');
      })
      .call(done);
  });

  it('can have its state changed programatically', function(done) {
    runner.client
      .getAttribute('#starts-disabled', 'disabled', function(err, disabled) {
        globals.noError(err);
        should.exist(disabled);
        disabled.should.equal('true');
      })
      .execute('$("#starts-disabled").prop("disabled", false);', globals.noError)
      .getAttribute('#starts-disabled', 'disabled', function(err, disabled) {
        globals.noError(err);
        should.not.exist(disabled);
      })
      .execute('$("#starts-disabled").prop("disabled", true);', globals.noError)
      .getAttribute('#starts-disabled', 'disabled', function(err, disabled) {
        globals.noError(err);
        should.exist(disabled);
        disabled.should.equal('true');
      })
      .call(done);
  });

  it('can be serialized as part of a form', function(done) {
    runner.client
      // runs $(form).serialize(); returns the result.
      .execute(serializationHelper, function(err, result) {
        globals.noError(err);
        should.exist(result);
        result.value.should.equal('checkbox-serialized=on');
      })
      .call(done);
  });

  // Just does a basic check to see if the tooltip has been invoked by checking attributes.
  // WebdriverIO can't currently check for hover events.
  it('functions properly when used with a tooltip', function(done) {
    runner.client
      .getAttribute('#checkbox-has-tooltip + label', 'aria-describedby', function(err, result) {
        globals.noError(err);
        should.exist(result);
        result.should.equal('tooltip');
      })
      .call(done);
  });

  // TODO: Complete this test when we have RTL implemented
  it.skip('correctly places its label to the opposite side when RTL is implemented', function(done) {
    // navigate to another test page with RTL enabled?
    runner.client
      .call(done);
  });

  // TODO: Fix this test when we get a fix from the WebdriverIO Dev for testing pseudo-elements
  // https://github.com/webdriverio/webdriverio/issues/295
  it.skip('should operate correctly if defined as an ASP checkbox', function(done) {
    runner.client
      // Check the background color on the label's :before pseudo element to see if the box rendered.
      .getCssProperty('label[for="checkbox-enable-ssl"]', 'background', function(err, result) {
        globals.noError(err);
        console.log(result);
        should.exist(result);
        result.value.should.equal('#0086e6');
      })
      .click('label[for="checkbox-enable-ssl"]:before', globals.noError)
      .getCssProperty('label[for="checkbox-enable-ssl"]', 'background', function(err, result) {
        globals.noError(err);
        console.log(result);
        should.exist(result);
        result.value.should.equal('');
      })
      .call(done);
  });

});

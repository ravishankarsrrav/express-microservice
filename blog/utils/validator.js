var validator = {
  /**
  * function checks if the passed variable value is present 
  * @params {string, string} inputText, inputName
  * @return {boolean, string} valid, error
  */
  isRequired : (inputText, inputName) => {
    let error = '', valid = true;
    if (!inputText || inputText == "") {
      error = `The ${inputName} is required.`;
      valid = false;
    }
    return [valid,error];
  }
}

/**
* @module validator
* module contains all the validation functions
*/
module.exports = validator;
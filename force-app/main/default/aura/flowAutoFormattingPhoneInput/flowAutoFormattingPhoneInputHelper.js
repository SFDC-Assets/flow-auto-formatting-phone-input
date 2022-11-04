({
    hlpCheckValidity: function (component, event) {
        
        component.set("v.validate", function () {

            console.log('Starting hlpCheckValidity');
            
            var selectedValue = component.get("v.propertyValue");
            console.log('selectedValue = ' + selectedValue);
            
            var isRequired = component.get("v.propertyRequired");
            console.log('isRequired = ' + isRequired);

            const regex = /^\d{3}-\d{3}-\d{4}$/;
            console.log(regex.test(selectedValue));

            const errorPattern = "Your entry does not match the allowed pattern (e.g. 555-555-5555).";
            const errorEmpty = "Complete this field.";
            
            if(isRequired == true) {
                // input is required
                console.log('REQUIRED');

                if(!$A.util.isEmpty(selectedValue)) {
                    // there's a value, but the pattern needs to be checked
                    if(!regex.test(selectedValue)){
                        // FAILED
                        console.log('REQUIRED - REGEX CHECK - FAILED');
                        return {
                            // doesn't match the regex pattern, not a valid value
                            isValid: false,
                            errorMessage: errorPattern
                        };
                    } else {
                        // PASSED
                        console.log('REQUIRED - REGEX CHECK - PASSED');
                        return {
                            // matches the regex pattern
                            isValid: true
                        };
                    }
                }
                else {
                    // no value, set to invalid
                    console.log('REQUIRED - EMPTY - FAILED');
                    return {
                        // doesn't match the regex pattern, not a valid value
                        isValid: false,
                        errorMessage: errorEmpty
                    };
                }
            }
            
            else {
                // input is NOT required
                console.log('NOT REQUIRED');
                
                if(!$A.util.isEmpty(selectedValue)) {
                    // there's a value, but the pattern needs to be checked
                    if(!regex.test(selectedValue)){
                        // FAILED
                        console.log('NOT REQUIRED - REGEX CHECK - FAILED');
                        return {
                            // doesn't match the regex pattern, not a valid value
                            isValid: false,
                            errorMessage: errorPattern
                        };
                    } else {
                        // PASSED
                        console.log('NOT REQUIRED - REGEX CHECK - PASSED');
                        return {
                            // matches the regex pattern
                            isValid: true
                        };
                    }
                }
                else {
                    // no value, set to valid (because it's not required)
                    console.log('NOT REQUIRED - EMPTY - PASSED');
                    return {
                        isValid: true
                    };
                }
            }
            
        })

    }
})
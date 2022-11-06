({
    doInit : function(component, event, helper) {
        component.set("v.validate", function () {
            
            // get requisite design attributes
            var selectedValue = component.get("v.phoneValue");
            var isRequired = component.get("v.phoneRequired");
            
            // set constants necessary for validating input value
            const regex = /^\d{3}-\d{3}-\d{4}$/;
            const errorPattern = component.get("v.patternErrorMessage");
            const errorEmpty = component.get("v.emptyErrorMessage");
            
            if(isRequired == true) {
                // input is required
                if(!$A.util.isEmpty(selectedValue)) {
                    // there's a value, but the pattern needs to be checked
                    if(!regex.test(selectedValue)){
                        // FAILED
                        return {
                            // doesn't match the regex pattern, not a valid value
                            isValid: false,
                            errorMessage: errorPattern
                        };
                    } else {
                        // PASSED
                        return {
                            // matches the regex pattern
                            isValid: true
                        };
                    }
                }
                else {
                    // no value, set to invalid
                    return {
                        // doesn't match the regex pattern, not a valid value
                        isValid: false,
                        errorMessage: errorEmpty
                    };
                }
            }
            
            else {
                // input is NOT required
                
                if(!$A.util.isEmpty(selectedValue)) {
                    // there's a value, but the pattern needs to be checked
                    if(!regex.test(selectedValue)){
                        // FAILED
                        return {
                            // doesn't match the regex pattern, not a valid value
                            isValid: false,
                            errorMessage: errorPattern
                        };
                    } else {
                        // PASSED
                        return {
                            // matches the regex pattern
                            isValid: true
                        };
                    }
                }
                else {
                    // no value, set to valid (because it's not required)
                    return {
                        isValid: true
                    };
                }
            }
            
        })
    },
    
    formatPhoneNumber : function(component) {
        // get user's latest value in the phone input
        let inputValue = component.get("v.phoneValue");
        
        let updatedValue;
        
        // clean
        const phoneNumber = inputValue.replace(/[^\d]/g, '');
        
        // Area Code only... XXX
        // if phoneNumberLength is less than 4,
        // do not show a hyphen
        if (phoneNumber.length < 4) {
            updatedValue = phoneNumber;
        }
        
        // Area Code + Prefix... XXX-XXX
        // if phoneNumberLength >= 4 but less than 7,
        // show the first hyphen
        if (phoneNumber.length >= 4 && phoneNumber.length < 7) {
            updatedValue = phoneNumber.substring(0, 3) + '-' + phoneNumber.substring(3);
        }
        
        // Area Code + Prefix + Line Number... XXX-XXX-XXXX
        // if phoneNumberLength >= 7,
        // add the last hyphen; this also enforces a max length for the line number, which takes care of any extraneous digits added by the user
        if (phoneNumber.length >= 7) {
            updatedValue = phoneNumber.substring(0, 3) + '-' + phoneNumber.substring(3,6) + '-' + phoneNumber.substring(6, 10);
        }
        
        // Update the input with the formatted value of the phone number
        component.set("v.phoneValue", updatedValue);
	}
})
({
    doInit : function(component, event, helper) {
        helper.hlpCheckValidity(component, event);
    },
    
    formatPhoneNumber : function(component) {
        console.log("formatPhoneNumber triggered");
        
        // get user's latest value in the phone input
        let inputValue = component.get("v.propertyValue");
        console.log('inputValue = ' + inputValue);
        
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
        console.log('updatedValue = ' + updatedValue);
        component.set("v.propertyValue", updatedValue);
        console.log('propertyValue attribute = ' + component.get("v.propertyValue"));
	}
})
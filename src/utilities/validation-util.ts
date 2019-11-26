export class ValidationUtil {

    static validateCompanyName(companyName: string): any {
        if(companyName.length < 2) {
            return 'The company name field must be at least 2 characters'
        } else if(companyName.length > 50) {
            return 'The company name field cannot be more than 50 characters'
        } else if (!/^[a-z0-9]{2,50}$/.test(companyName)) {
            return 'The company field must contain only alphabet and numbers'
        } else {
            return ''
        }
    }

    static validatePhone(phoneNumber: string): any {

        if(!/^[0-9]{1,20}$/.test(phoneNumber)) {
            return 'Invalid phone number entered'
        } else if(phoneNumber.length < 6) {
            return 'The phone number cannot be less 6 digits'
        } else if (phoneNumber.length > 20) {
            return 'The phone number cannot be more than 20 digits'
        } else {
            return ''
        }
    }

    static validateName(name: string): any {
        if(name.length < 2) {
            return 'This field must be at least 2 characters'
        } else if(name.length > 40) {
            return 'This field cannot be more than 40 characters'
        } else if(!/^[a-z-'.]{2,40}$/.test(name)) {
            return `Only Alphabet and special characters like apostrophe and dash`
        } else {
            return ''
        }
    }

    static validateEmail(email: string): any {
        if (/^[A-Za-z0-9._%-]{1,}@[a-zA-Z0-9]{2,}([.]{1}[a-zA-Z]{1,}|[.]{1}[a-zA-Z]{1,}[.]{1}[a-zA-Z]{1,})/.test(email)) {
            return true;
        } else {
            return false;
        }
    }

    static validatePassword(password: string) {

        let passCount = 0;

        if(password.length >= 8) {
            passCount += 20;
        }

        if(password.match(/[a-z]/)) {
            passCount += 20
        }

        if(password.match(/[A-Z]/)) {
            passCount += 20
        }

        if(password.match(/\d+/)) {
            passCount += 20
        }

        if(password.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) {
            passCount += 20
        }

        return passCount;

    }

}

export default ValidationUtil
export class ValidationUtil {

    static validateCompanyName(companyName: string): any {
        if (/^[a-z0-9]{2,50}$/.test(companyName)) {
            return true
        } else {
            return false
        }
    }

    static validatePhone(phoneNumber: string): any {
        if (/^[0-9]{6,20}$/.test(phoneNumber)) {
            return true
        } else {
            return false
        }
    }

    static validateName(name: string): any {
        if (/^[a-z-'.]{3,50}$/.test(name)) {
            return true
        } else {
            return false
        }
    }

    static validateEmail(email: string): any {
        if (/^[A-Za-z0-9._%-]{2,}@[a-zA-Z]{2,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})/.test(email)) {
            return true;
        } else {
            return false;
        }
    }

}

export default ValidationUtil
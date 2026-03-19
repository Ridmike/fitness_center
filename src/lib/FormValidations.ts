interface Validations {
    required ?: boolean,
    maxLength ?: number,
    minLength ?: number,
    pattern ?: RegExp,
    customMessage ?: string,
    [key: string]: Validations | string | boolean | number | RegExp | undefined
}

const FormValidations: Validations = {
    email: {
        required: true,
        pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        customMessage: "Please enter a valid email address"
    },
    name: {
        required: true,
        minLength: 2,
        maxLength: 100,
        pattern: /^[a-zA-Z ]{2,}$/,
        customMessage: "Name must be between 2 and 100 characters long"
    },
    phone: {
        required: true,
        pattern: /^\d{10}$/,
        customMessage: "Please enter a valid phone number"
    },
    message: {
        required: true,
        minLength: 10,
        maxLength: 500,
        customMessage: "Message must be between 10 and 500 characters long"
    }
}

export const formValidation = (field: string, value: string): string => {
    const rules: any = (FormValidations as any)[field]

    if (!rules) return ""

    // Check required
    if (rules.required && !value.trim()) {
        return `${field.charAt(0).toUpperCase() + field.slice(1)} is required`
    }

    // Check minLength
    if (rules.minLength && value.length < rules.minLength) {
        return `${field} must be at least ${rules.minLength} characters`
    }

    // Check maxLength
    if (rules.maxLength && value.length > rules.maxLength) {
        return `${field} must not exceed ${rules.maxLength} characters`
    }

    // Check pattern
    if (rules.pattern && !rules.pattern.test(value)) {
        return rules.customMessage || `${field} is not in the correct format`
    }

    return ""

}

export default FormValidations
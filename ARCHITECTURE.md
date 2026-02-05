# Registration Integration - Architecture & Security Diagram

## System Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          SIGNUP COMPONENT (UI)                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │ Form State Management                                                │  │
│  ├──────────────────────────────────────────────────────────────────────┤  │
│  │ • formData: { username, email, phoneNumber, password }               │  │
│  │ • userRole: "patient" | "provider" | ""                             │  │
│  │ • isLoading: boolean                                                 │  │
│  │ • errors: ValidationError[]                                          │  │
│  │ • passwordStrength: { strength, percentage }                         │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │ Real-time Validation on Input Change                                │  │
│  ├──────────────────────────────────────────────────────────────────────┤  │
│  │ handleInputChange(field, value) →                                    │  │
│  │   ├─ Update formData                                                │  │
│  │   ├─ Clear errors for this field                                    │  │
│  │   ├─ Calculate password strength if password field                  │  │
│  │   └─ Update UI with feedback                                        │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │ Form Submission Handler                                              │  │
│  ├──────────────────────────────────────────────────────────────────────┤  │
│  │ handleSubmit(event) →                                                │  │
│  │   ├─ Validate checkbox agreements                                   │  │
│  │   ├─ Validate user role selection                                   │  │
│  │   ├─ Call authService.register()                                    │  │
│  │   ├─ Handle success → navigate to verification                      │  │
│  │   └─ Handle error → display errors                                  │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
└─────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ↓
┌─────────────────────────────────────────────────────────────────────────────┐
│                    AUTHSERVICE (Business Logic Layer)                         │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │ register(data: RegisterRequest)                                      │  │
│  ├──────────────────────────────────────────────────────────────────────┤  │
│  │ STEP 1: INPUT SANITIZATION                                          │  │
│  │   ├─ sanitizeEmail(email)                                           │  │
│  │   ├─ sanitizeUsername(username)                                     │  │
│  │   ├─ sanitizePhoneNumber(phoneNumber)                               │  │
│  │   └─ password → NO SANITIZATION (kept as-is)                        │  │
│  │                                                                       │  │
│  │ STEP 2: VALIDATION                                                  │  │
│  │   ├─ validateInput() called with sanitized data                     │  │
│  │   │   ├─ isValidEmail()                                             │  │
│  │   │   ├─ isValidUsername()                                          │  │
│  │   │   ├─ isValidPassword() (detailed error messages)                │  │
│  │   │   └─ isValidPhoneNumber()                                       │  │
│  │   └─ If validation fails → Return errors array                      │  │
│  │                                                                       │  │
│  │ STEP 3: NETWORK REQUEST                                             │  │
│  │   ├─ Create AbortController for timeout                             │  │
│  │   ├─ Set 10-second timeout                                          │  │
│  │   ├─ Fetch API call with:                                           │  │
│  │   │   ├─ Method: POST                                               │  │
│  │   │   ├─ URL: http://localhost:8080/api/v1/auth/register           │  │
│  │   │   ├─ Headers: Content-Type, X-Requested-With (CSRF)            │  │
│  │   │   ├─ Body: JSON stringify of sanitized data                     │  │
│  │   │   └─ Credentials: include (for sessions)                        │  │
│  │   └─ Handle timeout → Return timeout error                          │  │
│  │                                                                       │  │
│  │ STEP 4: RESPONSE HANDLING                                           │  │
│  │   ├─ Status 409 (Conflict) → Duplicate email                        │  │
│  │   ├─ Status 400 (Bad Request) → Invalid data                        │  │
│  │   ├─ Status 200/201 (Success) → Validate & return response          │  │
│  │   │   ├─ Check required fields: userId, email, username             │  │
│  │   │   └─ If invalid structure → Return error                        │  │
│  │   └─ Other errors → Return with message                             │  │
│  │                                                                       │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │ InputSanitizer (Static Utility Methods)                             │  │
│  ├──────────────────────────────────────────────────────────────────────┤  │
│  │                                                                       │  │
│  │ sanitizeEmail(email: string): string                                 │  │
│  │   └─ Trim → Lowercase → Remove <>"'`;()                             │  │
│  │                                                                       │  │
│  │ sanitizeUsername(username: string): string                           │  │
│  │   └─ Trim → Keep only [a-zA-Z0-9_-]                                │  │
│  │                                                                       │  │
│  │ sanitizePhoneNumber(phone: string): string                           │  │
│  │   └─ Keep only [0-9+\-() ]                                          │  │
│  │                                                                       │  │
│  │ isValidEmail(email: string): boolean                                │  │
│  │   └─ Regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ && length ≤ 254            │  │
│  │                                                                       │  │
│  │ isValidPassword(password: string): { isValid, errors }              │  │
│  │   ├─ Length ≥ 8 && ≤ 128                                            │  │
│  │   ├─ Contains [A-Z]                                                 │  │
│  │   ├─ Contains [0-9]                                                 │  │
│  │   └─ Contains [!@#$%^&*()_+-=[]{}';:"\\|,.<>/?]                     │  │
│  │                                                                       │  │
│  │ isValidUsername(username: string): boolean                          │  │
│  │   └─ Length 3-30 && Regex: /^[a-zA-Z0-9_-]+$/                      │  │
│  │                                                                       │  │
│  │ isValidPhoneNumber(phone: string): boolean                          │  │
│  │   ├─ Regex pattern for international formats                        │  │
│  │   └─ Minimum 10 digits                                              │  │
│  │                                                                       │  │
│  │ getPasswordStrength(password: string)                               │  │
│  │   └─ Returns { strength: "weak"|"medium"|"strong", percentage }     │  │
│  │                                                                       │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
└─────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ↓
┌─────────────────────────────────────────────────────────────────────────────┐
│                         BACKEND API SERVICE                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│  POST http://localhost:8080/api/v1/auth/register                            │
│                                                                               │
│  Request: {email, username, password, phoneNumber}                          │
│  Response: {email, message, success, userId, username}                      │
│                                                                               │
│  Server-side Processing:                                                     │
│  ├─ RE-VALIDATE all inputs (never trust client)                             │
│  ├─ Hash password                                                            │
│  ├─ Check for duplicate email                                               │
│  ├─ Store in database                                                        │
│  └─ Return userId for verification                                          │
│                                                                               │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Data Flow Diagram

```
User Input
    │
    ├─→ [Email]          [Username]       [Password]       [Phone]
    │        │                │                │                │
    │        ↓                ↓                ↓                ↓
    │    Lowercase        Remove           No change      Remove
    │    + Trim           invalid          (for security)  invalid
    │    + Remove         chars
    │      special
    │
    ├─→ VALIDATION CHECK
    │        │
    │        ├─ Email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ && length ≤ 254
    │        ├─ Username: 3-30 chars, [a-zA-Z0-9_-]
    │        ├─ Password: 8+ chars, [A-Z], [0-9], [special]
    │        └─ Phone: 10+ digits, supported formats
    │
    ├─ ALL VALID? NO → Return errors to UI
    │
    ├─ ALL VALID? YES → Continue
    │        │
    │        ↓
    ├─→ NETWORK REQUEST
    │    POST to API with sanitized data
    │
    ├─→ RESPONSE PARSING
    │        │
    │        ├─ Status 409? → Duplicate email error
    │        ├─ Status 400? → Invalid data error
    │        ├─ Status 201? → Validate response structure
    │        │                └─ Check: userId, email, username
    │        └─ Other?    → General error
    │
    └─→ RESULT HANDLING
        ├─ Success? → Clear form, navigate to verification
        └─ Error?   → Display error messages to user
```

---

## Security Layers

```
┌─────────────────────────────────────────────────────────────────┐
│ LAYER 1: CLIENT-SIDE INPUT VALIDATION                           │
├─────────────────────────────────────────────────────────────────┤
│ • Real-time feedback as user types                              │
│ • Format validation                                              │
│ • Length validation                                              │
│ • Strength validation (password)                                 │
│ Purpose: Better UX, quick feedback                              │
└─────────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────────┐
│ LAYER 2: INPUT SANITIZATION                                     │
├─────────────────────────────────────────────────────────────────┤
│ • Remove dangerous characters: <>"'`;()                          │
│ • Normalize formats (lowercase emails)                           │
│ • Trim whitespace                                                │
│ Purpose: XSS prevention, format normalization                   │
└─────────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────────┐
│ LAYER 3: DETAILED VALIDATION                                    │
├─────────────────────────────────────────────────────────────────┤
│ • Email pattern matching                                         │
│ • Password strength requirements                                 │
│ • Phone number format validation                                 │
│ Purpose: Ensure valid data format                                │
└─────────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────────┐
│ LAYER 4: NETWORK SECURITY                                       │
├─────────────────────────────────────────────────────────────────┤
│ • HTTPS in production                                            │
│ • CSRF tokens (X-Requested-With header)                         │
│ • 10-second timeout protection                                   │
│ • Proper Content-Type headers                                    │
│ Purpose: Secure transmission                                     │
└─────────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────────┐
│ LAYER 5: RESPONSE VALIDATION                                    │
├─────────────────────────────────────────────────────────────────┤
│ • Verify response structure                                      │
│ • Check required fields                                          │
│ • Type safety with TypeScript                                    │
│ Purpose: Ensure valid response                                   │
└─────────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────────┐
│ LAYER 6: SERVER-SIDE VALIDATION (ALWAYS TRUSTED)               │
├─────────────────────────────────────────────────────────────────┤
│ • RE-VALIDATE all inputs                                         │
│ • Hash passwords with salt                                       │
│ • Check database constraints                                     │
│ • Log and audit attempts                                         │
│ Purpose: Final security boundary                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Password Strength Calculation

```
Input: password string

Count Features:
  ✓ Length ≥ 8?           → +1 point
  ✓ Length ≥ 12?          → +1 point  (total 2)
  ✓ Has [A-Z]?            → +1 point  (total 3)
  ✓ Has [0-9]?            → +1 point  (total 4)
  ✓ Has [!@#$%^&*...]?    → +1 point  (total 5)

Strength Levels:
  0-1 points:  WEAK       (20%)
  2 points:    WEAK       (40%)
  3 points:    MEDIUM     (60%)
  4 points:    MEDIUM     (80%)
  5 points:    STRONG     (90%)
  All features: STRONG    (100%)

UI Display:
  Weak:   Red color, 0-40% bar
  Medium: Orange color, 60-80% bar
  Strong: Green color, 90-100% bar
```

---

## Error Response Mapping

```
API Response Status Code → UI Error Display
           │
           ├─ 409 Conflict
           │  └─ { field: "email", message: "Account already exists" }
           │
           ├─ 400 Bad Request
           │  └─ { field: "password", message: "Invalid format" }
           │
           ├─ 401 Unauthorized
           │  └─ { message: "Invalid credentials" }
           │
           ├─ 500+ Server Error
           │  └─ { message: "Server error. Try again later" }
           │
           └─ Network Error
              └─ { message: "Network error. Check connection" }
           
           └─ Timeout (10s)
              └─ { message: "Request timed out. Try again" }
```

---

## Type Safety

```typescript
// Input Interface
interface RegisterRequest {
  email: string;
  username: string;
  password: string;
  phoneNumber: string;
}

// Success Response Interface
interface RegisterResponse {
  email: string;
  message: string;
  success: boolean;
  userId: string;
  username: string;
}

// Error Interface
interface ValidationError {
  field: string;
  message: string;
}

// Service Response
{
  success: boolean;
  data?: RegisterResponse;
  errors?: ValidationError[];
  message?: string;
}
```

---

## Testing Matrix

```
┌──────────────────┬────────────────────┬────────────────────┐
│ Input            │ Validation Result  │ Expected UI        │
├──────────────────┼────────────────────┼────────────────────┤
│ Valid all        │ ✓ All pass         │ Submit enabled     │
│ Invalid email    │ ✗ Email            │ Field error        │
│ Weak password    │ ✗ Password         │ Multiple errors    │
│ Short username   │ ✗ Username         │ Length error       │
│ Bad phone        │ ✗ Phone            │ Format error       │
│ All invalid      │ ✗ All              │ All errors shown   │
│ Duplicate email  │ ✓ Valid (API fail) │ General error      │
│ Timeout          │ - Network error    │ Timeout message    │
└──────────────────┴────────────────────┴────────────────────┘
```

---

## Performance Metrics

```
Operation                          Time Target
─────────────────────────────────  ──────────────
Real-time validation              < 50ms
Password strength calculation     < 10ms
Form submission                   < 100ms
API call                         2-5 seconds (network dependent)
Response parsing                 < 50ms
UI update                        < 100ms

Total registration flow:          ~2-6 seconds (most time is API)
```

---

## Browser DevTools Testing

```
Network Tab:
  Request:  POST /api/v1/auth/register
  Headers:  Content-Type: application/json
            X-Requested-With: XMLHttpRequest
  Body:     {email, username, password, phoneNumber}
  Status:   201 (success) or 4xx/5xx (error)

Console Tab:
  authService.register({...}) → Promise
  Returns: { success: true/false, data/errors/message }

Application Tab:
  Check localStorage for session token (if stored)
  Verify cookies are set properly
```

---

This comprehensive architecture ensures:
✅ High security with multiple validation layers
✅ Great user experience with real-time feedback
✅ Type safety with TypeScript
✅ Performance optimization
✅ Proper error handling and recovery

# Testing Guide - HealthAI Authentication System

## Overview

This guide provides comprehensive testing instructions for the newly implemented authentication system with axios, HTTP-only cookies, and hybrid persistence.

---

## Prerequisites

Before testing, ensure:
- ✅ Backend server running at `http://localhost:8080`
- ✅ Dependencies installed: `npm install`
- ✅ Frontend dev server running: `npm run dev`
- ✅ Browser DevTools open (F12) - Network and Application tabs visible

---

## Test Environment Setup

### 1. Environment Variables

Verify `.env` file contains:
```env
VITE_BASE_URL=http://localhost:8080/api/v1
```

### 2. Test User Accounts

Create test accounts for each role:
- **Admin User**: admin@test.com / Test@123
- **Health Provider**: provider@test.com / Test@123
- **Regular User**: user@test.com / Test@123

---

## Test Scenarios

### ✅ Test 1: User Registration

**Steps:**
1. Navigate to `http://localhost:5173/signup`
2. Fill registration form:
   - Username: `testuser123`
   - Email: `test@example.com`
   - Phone: `+1234567890`
   - Password: `Test@1234` (meets all requirements)
   - Select role: `Patient`
   - Accept terms and HIPAA notice
3. Click "Create Account"

**Expected Results:**
- ✅ Registration successful message displayed
- ✅ Network tab shows POST to `/auth/register`
- ✅ Response includes `userId`, `username`, `email`
- ✅ Verification email/OTP sent message appears
- ✅ No client-side errors in console

**Verify Input Validation:**
- Try weak password → Shows error "Password must contain..."
- Try duplicate email → Shows "Account already exists"
- Try 6 rapid registrations → Rate limiting triggers after 3 attempts

---

### ✅ Test 2: User Login - Success Flow

**Steps:**
1. Navigate to `http://localhost:5173/login`
2. Enter valid credentials:
   - Email/Username: `test@example.com`
   - Password: `Test@1234`
3. Click "Login"

**Expected Results:**
- ✅ Loading state shows "Logging in..." with spinner
- ✅ Network tab shows POST to `/auth/login`
- ✅ Response status: 200 OK
- ✅ Cookies set in Application tab:
  - `access_token` (HTTP-only, 7 days)
  - `refresh_token` (HTTP-only, 30 days)
- ✅ User redirected based on role:
  - ADMIN → `/admin`
  - HEALTH_PROVIDER → `/docter-dashboard`
  - USER → `/`
- ✅ sessionStorage contains `healthai_user` key with user data
- ✅ localStorage contains updated `healthai_preferences` with `lastVisitedPage`

---

### ✅ Test 3: User Login - Error Handling

**Test Invalid Credentials:**
1. Enter wrong password
2. Click "Login"

**Expected Results:**
- ✅ Error message displayed: "Invalid username or password"
- ✅ No cookies set
- ✅ User remains on login page
- ✅ Network response: 401 Unauthorized

**Test Rate Limiting:**
1. Enter wrong credentials 4 times rapidly

**Expected Results:**
- ✅ After 3 attempts, error shows: "Too many attempts. Please try again in 15 minutes."
- ✅ Button disabled during lockout
- ✅ Client-side rate limiting prevents further requests

---

### ✅ Test 4: Session Persistence

**Test Page Reload:**
1. Login successfully
2. Refresh page (F5)

**Expected Results:**
- ✅ User remains logged in
- ✅ Dashboard still visible
- ✅ No redirect to login page
- ✅ Network shows POST to `/auth/refresh` on mount
- ✅ sessionStorage still has `healthai_user`

**Test Browser Close:**
1. Login successfully
2. Close browser tab (not just refresh)
3. Reopen `http://localhost:5173/`

**Expected Results:**
- ✅ User logged out (sessionStorage cleared on tab close)
- ✅ Redirected to landing page
- ✅ Cookies still present (but no user data to restore)

---

### ✅ Test 5: Protected Routes - Authentication Check

**Test Unauthenticated Access:**
1. Clear cookies and sessionStorage
2. Navigate directly to `http://localhost:5173/admin`

**Expected Results:**
- ✅ Immediately redirected to `/login`
- ✅ URL includes state: `?from=/admin` (or similar mechanism)
- ✅ After login, redirected back to `/admin` (if authorized)

---

### ✅ Test 6: Protected Routes - Role-Based Access

**Test Role Mismatch:**
1. Login as USER (regular patient)
2. Navigate to `http://localhost:5173/admin`

**Expected Results:**
- ✅ Redirected to `/unauthorized`
- ✅ Shows "Access Denied" page with blocked icon
- ✅ "Go Back to Dashboard" button navigates to `/` (USER home)
- ✅ Console shows no errors

**Test Correct Role:**
1. Login as ADMIN
2. Navigate to `http://localhost:5173/admin`

**Expected Results:**
- ✅ Admin dashboard loads successfully
- ✅ No redirects
- ✅ User can access all admin routes

**Role Matrix:**
| Route | USER | HEALTH_PROVIDER | ADMIN |
|-------|------|-----------------|-------|
| `/` | ✅ | ✅ | ✅ |
| `/admin` | ❌ → unauthorized | ❌ → unauthorized | ✅ |
| `/docter-dashboard` | ❌ → unauthorized | ✅ | ❌ → unauthorized |

---

### ✅ Test 7: Token Refresh (Automatic)

**Simulate Token Expiry:**
1. Login successfully
2. In DevTools → Application → Cookies, delete `access_token` (keep `refresh_token`)
3. Navigate to protected route or make API call

**Expected Results:**
- ✅ Network shows POST to `/auth/refresh` (automatic)
- ✅ New `access_token` cookie set
- ✅ Original request retried and succeeds
- ✅ User stays logged in
- ✅ No visible interruption to user experience

**Simulate Refresh Token Expiry:**
1. Delete both `access_token` and `refresh_token`
2. Refresh page

**Expected Results:**
- ✅ Session validation fails
- ✅ User logged out
- ✅ Redirected to `/login`
- ✅ sessionStorage cleared
- ✅ CustomEvent `auth:logout` dispatched

---

### ✅ Test 8: Logout Flow

**Steps:**
1. Login successfully
2. Navigate to dashboard (admin or provider)
3. Click "Logout" button in sidebar

**Expected Results:**
- ✅ Button shows "Logging out..." during request
- ✅ Network shows POST to `/auth/logout`
- ✅ Response: 200 OK
- ✅ All cookies cleared
- ✅ sessionStorage `healthai_user` removed
- ✅ Form drafts in sessionStorage cleared
- ✅ IndexedDB user data cleared (if applicable)
- ✅ Redirected to `/login`
- ✅ Attempting to access protected route now redirects to login

---

### ✅ Test 9: Storage Utilities

**Test localStorage (Preferences):**
1. Login and change theme to dark mode (if implemented)
2. Close browser and reopen
3. Preferences should persist

**Expected Results:**
- ✅ localStorage key `healthai_preferences` exists
- ✅ Contains theme, language, lastVisitedPage
- ✅ Preferences survive browser restart

**Test sessionStorage (Form Drafts):**
1. Navigate to a form page
2. Fill out partial data
3. Refresh page (within same tab)

**Expected Results:**
- ✅ Form data restored from sessionStorage
- ✅ Auto-expiry after 2 hours
- ✅ Cleared on tab close

**Test IndexedDB (Medical Records):**
1. Login and view/create medical record (if implemented)
2. Refresh page

**Expected Results:**
- ✅ IndexedDB database `healthai_db` exists
- ✅ Object stores: `medicalRecords`, `offlineQueue`
- ✅ Data persists across page reloads
- ✅ Cleared on logout (per user)

---

### ✅ Test 10: Security Validations

**Test XSS Prevention:**
1. Register with username: `<script>alert('XSS')</script>`
2. Login

**Expected Results:**
- ✅ Script tags sanitized (removed)
- ✅ Username becomes: `scriptalertXSSscript`
- ✅ No alert popup appears
- ✅ Input sanitization working

**Test CSRF Protection:**
1. Check all authenticated requests in Network tab

**Expected Results:**
- ✅ Every request has header: `X-Requested-With: XMLHttpRequest`
- ✅ Backend validates this header
- ✅ Cookies sent with `SameSite=Strict` or `SameSite=Lax`

**Test HTTP-Only Cookies:**
1. Open DevTools → Console
2. Type: `document.cookie`

**Expected Results:**
- ✅ `access_token` and `refresh_token` NOT visible in console
- ✅ Only non-HTTP-only cookies (if any) appear
- ✅ Tokens cannot be accessed via JavaScript

---

### ✅ Test 11: Error Scenarios

**Test Network Failure:**
1. Disconnect internet
2. Try to login

**Expected Results:**
- ✅ Error message: "Network error. Please check your connection."
- ✅ No unhandled errors in console
- ✅ User-friendly error display

**Test Backend Server Down:**
1. Stop backend server
2. Try to login

**Expected Results:**
- ✅ Error message displayed
- ✅ No app crash
- ✅ Network tab shows request timeout or connection refused

**Test Invalid Response:**
1. (Requires backend modification) Return malformed JSON
2. Login

**Expected Results:**
- ✅ Error caught gracefully
- ✅ Generic error message shown
- ✅ No console errors leaked to production

---

### ✅ Test 12: Cross-Tab Synchronization

**Test Logout Sync:**
1. Login in Tab 1
2. Open Tab 2, navigate to protected route (should be logged in)
3. Logout in Tab 1

**Expected Results:**
- ✅ Tab 2 detects logout (via storage event or periodic check)
- ✅ Tab 2 user logged out automatically
- ✅ Both tabs redirect to login

**Test Preference Sync:**
1. Open 2 tabs
2. Change theme in Tab 1

**Expected Results:**
- ✅ Tab 2 theme updates (via `storage` event listener)
- ✅ Synchronized within 1-2 seconds

---

## Performance Testing

### Test 13: API Response Times

**Acceptance Criteria:**
- Login: < 500ms (local), < 2s (production)
- Token refresh: < 300ms (silent, in background)
- Logout: < 200ms
- Session validation: < 400ms

**How to Test:**
1. Open Network tab
2. Perform each action
3. Check "Time" column for request duration

---

### Test 14: Bundle Size

**Check axios impact:**
1. Build production bundle: `npm run build`
2. Check `dist/` folder size
3. Analyze with: `npm run build -- --analyze` (if configured)

**Expected Results:**
- ✅ Axios adds ~32KB gzipped
- ✅ idb adds ~5KB gzipped
- ✅ Total bundle size < 500KB (reasonable for health app)

---

## Browser Compatibility

### Test 15: Cross-Browser Testing

**Test on:**
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (Chrome mobile, Safari iOS)

**Key Tests per Browser:**
- Login/logout flow
- Cookie handling
- sessionStorage persistence
- IndexedDB support

---

## Edge Cases

### Test 16: Simultaneous Login Attempts

**Steps:**
1. Open 2 browser windows side-by-side
2. Login with same credentials simultaneously

**Expected Results:**
- ✅ Both sessions authenticated
- ✅ Separate cookies for each tab
- ✅ No race conditions in token refresh queue

---

### Test 17: Password Strength Indicator

**Steps:**
1. Navigate to `/signup`
2. Type passwords of varying strength

**Test Cases:**
- `test` → Weak (20%)
- `Test1234` → Medium (60%)
- `Test@1234` → Strong (100%)

**Expected Results:**
- ✅ Real-time strength indicator updates
- ✅ Debounced validation (no lag)
- ✅ Error messages for weak passwords on submit

---

## API Integration Testing

### Test 18: All Backend Endpoints

**Checklist:**
- [x] POST `/auth/register` - Registration working ✅
- [x] POST `/auth/login` - Login working ✅
- [x] POST `/auth/logout` - Logout working ✅
- [x] POST `/auth/refresh` - Token refresh working ✅
- [ ] GET `/auth/verify-email?token=...` - Email verification
- [ ] POST `/auth/send-email-verification` - Resend email verification
- [ ] POST `/auth/send-phone-verification` - Send OTP
- [ ] POST `/auth/verify-phone` - Verify OTP
- [ ] POST `/auth/reset-password` - Password reset
- [ ] GET `/oauth2/authorization/google` - OAuth login

---

## Regression Testing

### Test 19: Ensure Existing Features Still Work

**Test non-auth pages:**
- [ ] Landing page loads
- [ ] Pricing page navigable
- [ ] Contact form submits
- [ ] Public routes accessible without auth

**Test SignUp flow:**
- [ ] SignUp page still redirects to verification
- [ ] Password strength indicator functional
- [ ] Google OAuth button present (disabled with tooltip)

---

## Security Audit

### Test 20: OWASP Top 10 Checklist

**A1: Injection**
- ✅ Input sanitization implemented
- ✅ Email, username, phone number sanitized
- ✅ SQL injection prevented (backend uses parameterized queries)

**A2: Broken Authentication**
- ✅ Rate limiting (3 attempts/minute, 15-min lockout)
- ✅ Secure password policy enforced
- ✅ HTTP-only cookies for tokens
- ✅ Token expiry (7 days access, 30 days refresh)

**A3: Sensitive Data Exposure**
- ✅ Tokens never exposed to JavaScript
- ✅ HTTPS enforced (production)
- ✅ No passwords logged

**A4: XML External Entities (XXE)**
- N/A (no XML parsing in frontend)

**A5: Broken Access Control**
- ✅ Role-based route protection
- ✅ Backend validates roles (not just frontend)

**A6: Security Misconfiguration**
- ✅ No default passwords
- ✅ Error messages don't leak system info
- ✅ CORS configured properly

**A7: Cross-Site Scripting (XSS)**
- ✅ Input sanitization removes dangerous characters
- ✅ React escapes output by default

**A8: Insecure Deserialization**
- ✅ JSON parsing with validation

**A9: Using Components with Known Vulnerabilities**
- ✅ Dependencies up to date: `npm audit`
- ✅ No critical vulnerabilities

**A10: Insufficient Logging & Monitoring**
- ✅ Login attempts logged (client-side rate limiting)
- ✅ Failed logins tracked
- ⚠️ Consider adding backend audit logs for HIPAA

---

## Manual Testing Checklist

Before deploying to production, verify:

### Authentication
- [ ] User can register new account
- [ ] User receives verification email/OTP
- [ ] User can verify email via link
- [ ] User can verify phone via OTP
- [ ] User can login with email/password
- [ ] User can login with phone/password
- [ ] User can logout
- [ ] User can reset forgotten password
- [ ] Rate limiting prevents brute force
- [ ] Invalid credentials show appropriate error

### Session Management
- [ ] Session persists across page reloads
- [ ] Session cleared on tab close (sessionStorage)
- [ ] Preferences persist across browser restarts (localStorage)
- [ ] Token refresh happens automatically
- [ ] User logged out when refresh token expires
- [ ] Cross-tab logout synchronization works

### Route Protection
- [ ] Unauthenticated users redirected to login
- [ ] Users with wrong role redirected to unauthorized
- [ ] Admin routes only accessible to ADMIN
- [ ] Provider routes only accessible to HEALTH_PROVIDER
- [ ] Unauthorized page shows correct back navigation

### Security
- [ ] Cookies are HTTP-only
- [ ] CSRF header sent with all requests
- [ ] Input sanitization prevents XSS
- [ ] No sensitive data in localStorage
- [ ] No tokens exposed to JavaScript console
- [ ] HTTPS enforced (production)

### UI/UX
- [ ] Login button shows loading state
- [ ] Errors displayed clearly
- [ ] Password visibility toggle works
- [ ] Form inputs disabled during submission
- [ ] Success messages appear after actions
- [ ] Mobile responsive design verified

---

## Common Issues & Fixes

### Issue: "Network error" on login
**Cause:** Backend not running or CORS misconfigured
**Fix:**
1. Start backend: `./mvnw spring-boot:run`
2. Verify baseURL in axios.config.ts
3. Check backend CORS allows `http://localhost:5173`

### Issue: Login successful but not redirected
**Cause:** User role not returned from backend
**Fix:** Check backend login response includes `role` field

### Issue: Session not persisting on reload
**Cause:** sessionStorage cleared or /auth/refresh failing
**Fix:**
1. Check sessionStorage has `healthai_user`
2. Verify `/auth/refresh` endpoint working
3. Check cookies not expired

### Issue: "Too many attempts" immediately
**Cause:** Client-side rate limiter not resetting
**Fix:** Clear localStorage or wait 15 minutes

---

## Automated Testing (Optional)

### Recommended Tools
- **E2E**: Playwright or Cypress
- **Unit**: Vitest (already configured)
- **API**: Postman/Newman

### Sample E2E Test (Playwright)

```typescript
test('user can login and access dashboard', async ({ page }) => {
  await page.goto('http://localhost:5173/login');
  await page.fill('input[type="email"]', 'test@example.com');
  await page.fill('input[type="password"]', 'Test@1234');
  await page.click('button[type="submit"]');

  await expect(page).toHaveURL(/\/admin|\/docter-dashboard|\//);
  await expect(page.locator('text=Logout')).toBeVisible();
});
```

---

## Performance Benchmarks

| Metric | Target | Actual |
|--------|--------|--------|
| Login response time | < 500ms | ☐ Test |
| Token refresh | < 300ms | ☐ Test |
| Page load (authenticated) | < 2s | ☐ Test |
| Bundle size (gzipped) | < 200KB | ☐ Test |
| Lighthouse score | > 90 | ☐ Test |

---

## Production Deployment Checklist

Before deploying:
- [ ] Environment variables configured (VITE_BASE_URL)
- [ ] HTTPS enabled
- [ ] Backend CORS configured for production domain
- [ ] Cookie SameSite=None; Secure (if cross-domain)
- [ ] Error logging service integrated (Sentry, LogRocket)
- [ ] Analytics tracking login/logout events
- [ ] Rate limiting thresholds adjusted for production traffic
- [ ] Database backups enabled
- [ ] Health check endpoint monitored
- [ ] HIPAA compliance audit completed
- [ ] Privacy policy and ToS updated

---

## Testing Sign-Off

**Tester Name:** _________________________
**Date:** _________________________
**Version:** 1.0
**Status:** ☐ Passed ☐ Failed ☐ Needs Fixes

**Critical Issues Found:**
1. ___________________________________
2. ___________________________________
3. ___________________________________

**Notes:**
_____________________________________________
_____________________________________________

---

**Last Updated:** 2026-02-11
**Maintained By:** HealthAI Development Team

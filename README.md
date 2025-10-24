<img width="1882" height="1061" alt="image" src="https://github.com/user-attachments/assets/1d02f20a-71b0-4c42-a787-6e08c1b438c7" /># Dzhusik Engineering College Website

A modern, responsive brochure website for Dzhusik Engineering College, built with HTML5, CSS3, Bootstrap 5, and vanilla JavaScript.

## 🌐 Live Demo

**Live URL:** [https://yourusername.github.io/dzhusik-engineering-college/](https://yourusername.github.io/dzhusik-engineering-college/)

**GitHub Repository:** [https://github.com/yourusername/dzhusik-engineering-college](https://github.com/yourusername/dzhusik-engineering-college)

---

## 📋 Project Overview

This website serves as the digital presence for Dzhusik Engineering College, providing prospective students with comprehensive information about programs, admissions, campus life, and registration processes. The site is fully responsive, accessible, and built following modern web development best practices.

### Key Features

- **Responsive Design:** Mobile-first approach that adapts seamlessly across all device sizes
- **Accessible:** WCAG 2.1 compliant with proper semantic HTML, ARIA labels, and keyboard navigation
- **Interactive Forms:** Advanced registration form with real-time validation and contact form with anti-spam protection
- **Modern UI/UX:** Clean, professional design with consistent branding using yellow (#F7C80F) and black (#1a1a1a) color scheme
- **Progressive Enhancement:** All content accessible without JavaScript; JS enhances the experience

---

## 📁 Site Structure (Information Architecture)

### Page Map

```
├── index.html              # Home - Hero section, stats, featured programs
├── programs.html           # Programs - All academic programs with filtering
├── admissions.html         # Admissions - Process, requirements, tuition, dates
├── student-life.html       # Student Life - Clubs, events, news, facilities
├── contact.html            # Contact - Contact information and message form
├── registration/
│   └── registration.html   # Registration - Advanced application form
├── styles.css              # Global styles
├── script.js               # Global scripts
├── registration/
│   ├── registration-styles.css  # Registration-specific styles
│   └── registration.js          # Registration form logic
└── images/
    └── logoNoBG.png        # College logo (favicon)
```

### Navigation Structure

All pages share a consistent fixed-top navigation bar with active states indicating current page:
- Home
- Programs
- Admissions
- Student Life
- Contact
- Register (in registration subfolder)

---

## ✨ Features Implemented

### 1. Advanced Registration Form
**Location:** `registration/registration.html`

- **Required Fields:**
  - Full Name (minimum 2 characters)
  - Email Address (validated format)
  - Phone Number (minimum 10 digits)
  - Desired Program (dropdown with 9 options)
  - Study Mode (radio: Full-Time, Part-Time, Online)
  - Intended Intake Date (date picker, min: today)
  - Password (8+ chars, uppercase, lowercase, number, special char)
  - Confirm Password (must match)
  - Terms & Conditions Agreement (checkbox)

- **Optional Field:**
  - Scholarship Interest (5 options)

- **Validation Features:**
  - Real-time inline validation with color-coded feedback (red/green)
  - Password strength indicator (weak/medium/strong)
  - Form submission prevention until all required fields valid
  - Scrolls to first invalid field on submission
  - Success message with form hiding after submission
  - Full keyboard accessibility with proper ARIA labels

### 2. Basic Contact Form
**Location:** `contact.html`

- **Required Fields:**
  - Full Name
  - Email Address
  - Subject
  - Message

- **Features:**
  - Simple anti-spam verification (math problem: 5 + 3 = ?)
  - Client-side validation
  - Success/error message feedback
  - Form reset after successful submission
  - Auto-hide success message after 5 seconds

### 3. Interactive Feature #1: Program Filtering Tabs
**Location:** `programs.html`

- Three-way tab filter: All Programs / Undergraduate / Graduate
- Dynamically clones and populates filtered cards using vanilla JavaScript
- Bootstrap tabs for accessible navigation
- Smooth transitions between views

### 4. Interactive Feature #2: Accordion Components
**Location:** `admissions.html`

- Collapsible admission requirements sections
- Three categories: Undergraduate, Graduate, International Students
- Bootstrap accordion with smooth animations
- Keyboard accessible (Space/Enter to toggle)

### 5. Responsive Navigation
**All Pages**

- Fixed-top navigation bar
- Collapsible hamburger menu on mobile devices
- Active state highlighting for current page
- Keyboard navigable with focus indicators

### 6. Additional Enhancements
- **Password Visibility Toggle:** Show/hide password buttons on registration form
- **Auto-format Phone Number:** Automatically adds country code (+996) if needed
- **Google Maps Integration:** Embedded map on contact page
- **Smooth Scrolling:** Navigation and form feedback with smooth scroll behavior
- **Loading States:** Submit buttons show spinner during processing

---

## 🎨 Design & Branding

### Color Palette
- **Primary Yellow:** `#F7C80F` - Used for branding, accents, CTAs
- **Primary Black:** `#1a1a1a` - Used for text, header, footer
- **Grey Shades:** 
  - `#6c757d` (text)
  - `#f8f9fa` (backgrounds)
  - `#343a40` (dark accents)

### Typography
- **Font Family:** 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- **Headings:** Bold weights (600-700)
- **Body Text:** Line height 1.6 for readability
- **Consistent Scale:** H1 (3.5rem desktop, 2rem mobile) down to body (1rem)

### Spacing System
- Consistent padding/margins using Bootstrap's spacing utilities
- Card-based layouts with consistent gaps (g-4)
- Section padding: 5rem (desktop) / 3rem (mobile)

---

## 📱 Responsiveness

### Breakpoints
- **Mobile:** < 576px
- **Tablet:** 576px - 768px
- **Desktop:** > 768px

### Responsive Features
- Mobile-first CSS approach
- Collapsible navigation on mobile
- Stacked layouts on small screens
- Responsive typography scaling
- Touch-friendly button sizes (min 44x44px)
- No horizontal scrolling at any breakpoint

---

## ♿ Accessibility Features

- **Semantic HTML:** Proper use of header, nav, main, section, footer elements
- **Heading Hierarchy:** Logical H1-H6 structure on all pages
- **ARIA Labels:** All interactive elements properly labeled
- **Alt Text:** Descriptive text for icons and images
- **Color Contrast:** Minimum 4.5:1 ratio for body text
- **Focus States:** Visible focus indicators on all interactive elements
- **Keyboard Navigation:** Full site navigable without mouse
- **Form Labels:** All inputs associated with labels
- **Error Messages:** Clear, descriptive validation feedback

---

## 🛠️ Technologies Used

### Core Technologies
- **HTML5:** Semantic markup
- **CSS3:** Custom styling with CSS variables
- **Bootstrap 5.3.2:** Layout, components, utilities
- **Vanilla JavaScript (ES6+):** Form validation, interactivity

### External Libraries (CDN)
- **Bootstrap 5.3.2:** [https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/](https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/)
- **Font Awesome 6.4.0:** [https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/)

---

## 📂 File Structure

```
dzhusik-engineering-college/
│
├── index.html
├── programs.html
├── admissions.html
├── student-life.html
├── contact.html
├── styles.css
├── script.js (optional global scripts)
│
├── registration/
│   ├── registration.html
│   ├── registration-styles.css
│   └── registration.js
│
├── images/
│   └── logoNoBG.png
│
└── README.md
```

---

## 🚀 How to Navigate the Site

1. **Home Page** (`index.html`)
   - View hero section with college mission
   - See quick statistics
   - Explore featured programs
   - Click "Start Your Journey" to go to registration

2. **Programs Page** (`programs.html`)
   - Browse all 9 engineering programs
   - Use tabs to filter by Undergraduate/Graduate
   - View program details (duration, degree type)

3. **Admissions Page** (`admissions.html`)
   - Learn about the 6-step application process
   - Expand accordions for detailed requirements
   - View tuition & fees table
   - Check important dates

4. **Student Life Page** (`student-life.html`)
   - Discover 6+ student organizations
   - Read latest campus news and events
   - Explore 8 campus facilities

5. **Contact Page** (`contact.html`)
   - View contact information
   - Fill out contact form with anti-spam verification
   - See location on embedded Google Map

6. **Registration Page** (`registration/registration.html`)
   - Complete advanced registration form
   - Experience real-time validation
   - View password strength indicator
   - Receive success confirmation

---

## ⚠️ Known Limitations

1. **Form Submission:** Forms use simulated submission (setTimeout) as there is no backend server. In production, these would POST to a server endpoint.

2. **Image Optimization:** Currently using SVG data URIs for hero backgrounds and Font Awesome icons. Actual photos would require optimization.

3. **Browser Storage:** No localStorage/sessionStorage used as per requirements. Form data is not persisted between sessions.

4. **Search Functionality:** No site-wide search feature implemented (not required).

5. **CMS Integration:** Content is hardcoded in HTML. A production site would use a CMS for content management.

6. **Email Functionality:** Contact form doesn't actually send emails (requires server-side processing).

---

## 🎯 Requirements Checklist

### Pages (✓ All Required)
- ✅ Home page with hero section
- ✅ Programs page with card layout
- ✅ Admissions with process steps & tuition table
- ✅ Student Life with clubs & events
- ✅ Contact with form
- ✅ Registration with advanced form

### Forms (✓ Both Completed)
- ✅ Advanced Registration Form (11 fields, validation, success state)
- ✅ Basic Contact Form (anti-spam, validation, feedback)

### Interactivity (✓ 2+ Features)
- ✅ Program filtering tabs
- ✅ Admission requirements accordions
- ✅ Password strength indicator
- ✅ Form validation

### Technical Requirements
- ✅ Responsive (mobile-first)
- ✅ Accessible (semantic HTML, ARIA, keyboard nav)
- ✅ Bootstrap 5 utilized
- ✅ Vanilla JavaScript only
- ✅ Fixed-top navigation
- ✅ Active navigation states

---

## 📸 Screenshots

_(See submitted PDF "Quality Evidence" for annotated screenshots)_

1. Home page - Desktop view
2. Home page - Mobile view
3. Navigation - Mobile collapsed/expanded
4. Registration form - Invalid state
5. Registration form - Valid state
6. Registration form - Success confirmation
7. Contact form - Submission feedback
8. Programs page - Tab filtering in action


<img width="1904" height="976" alt="image" src="https://github.com/user-attachments/assets/418fc784-c9a2-429d-b630-2ea72ae5e935" />
<img width="1846" height="946" alt="image" src="https://github.com/user-attachments/assets/d86a9e7d-3ed7-4939-8711-f6ea005c7428" />
<img width="1882" height="1061" alt="image" src="https://github.com/user-attachments/assets/a6ba69bc-7d06-49d5-aba8-5d08c8a5f199" />

![1](https://github.com/user-attachments/assets/1c59b54d-01da-4598-a80b-bee11fa8ce80)
![2](https://github.com/user-attachments/assets/52a5b21c-8da8-4a8e-a60b-5bc6c51f43be)
![4](https://github.com/user-attachments/assets/0eff3431-3097-4e37-8568-56054f3a3887)
![5](https://github.com/user-attachments/assets/a44892d1-dd59-4a8f-a719-082a6ab989a2)

![6](https://github.com/user-attachments/assets/167dfc18-0979-44a5-88e7-cc85f5625362)

![88](https://github.com/user-attachments/assets/f744e429-faee-4db4-98b6-5cd40ec7740f)




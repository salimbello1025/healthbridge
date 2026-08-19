# HealthBridge 🩺

**HealthBridge** is a responsive healthcare web application concept that helps Nigerians find nearby doctors, book appointments, consult via telemedicine, track medication, and manage personal health records — all in one platform.

Built as a Capstone Project for the **eHealth Africa Academy** Design Phase Cohort (2026) by **Salim Bello Muhammad**.

🔗 **Live site:** https://healthbridge-salim.netlify.app
🎨 **Figma design:** https://www.figma.com/design/szEPEyNlh9p0z76Fq4EvWE/Salim-Bello-Muhammad-s-team-library?node-id=3358-3&t=xXoTlKEVW0hRuRPL-1

---

## The Problem

Many Nigerians struggle to access quality healthcare because of long queues, limited information about nearby doctors, and no easy way to track appointments, prescriptions, or medical history. HealthBridge addresses this by putting doctor discovery, booking, telemedicine, and health records in one simple, mobile-friendly platform.

## Features

| Page | What it does |
|---|---|
| **Home** (`index.html`) | Hero search, featured doctors, service overview, how-it-works, telemedicine demo, medication reminders, health records, emergency access, testimonials |
| **Find a Doctor** (`doctor-search.html`) | Search and filter verified doctors by specialty, location, availability, and rating |
| **Doctor Profile** (`doctor-profile.html`) | Doctor bio, credentials, reviews, and a live appointment-booking widget |
| **Booking Confirmation** (`booking-confirmation.html`) | Appointment summary with a generated booking reference and next steps |
| **Nearby Hospitals** (`hospital-locator.html`) | Live GPS-based hospital locator — interactive map, real distance calculation, one-tap directions and calling |
| **Login / Sign Up** (`login.html`) | Client-side auth simulation with validation, stored per-device |
| **Doctor Portal — Sign In** (`doctor-login.html`) | Separate doctor login/registration |
| **Doctor Dashboard** (`doctor-dashboard.html`) | Doctors see patient appointment requests, accept/decline, and leave a note that instantly appears on the patient's own dashboard |
| **Admin Panel** (`admin.html`) | Owner-only, passphrase-gated page to approve or reject new doctor registrations before they can access the site |
| **Analytics Dashboard** (`analytics.html`) | Owner-only view of real usage data: bookings by specialty/status, most-reported symptoms, symptom-guidance outcomes, review ratings, and a one-click full data export (JSON) |
| **My Dashboard** (`dashboard.html`) | Patient overview — upcoming appointments (pulled from real bookings), quick actions, records summary |
| **Symptom Guidance** (`symptom-checker.html`) | Non-diagnostic triage tool — select symptoms/severity/duration and get a next-step recommendation (self-care, book soon, or emergency) |
| **First Aid Guides** (`first-aid.html`) | Expandable step-by-step guidance for choking, burns, bleeding, fractures, snake bites, heat exhaustion |
| **Maternal & Child Health** (`maternal-child.html`) | Pregnancy stage guide and child growth/vaccination milestones |
| **Health Tips** (`health-tips.html`) | Filterable everyday wellness tips across nutrition, hygiene, disease prevention, and mental wellbeing |

### Interactive elements (JavaScript)
- Mobile hamburger navigation
- Homepage search bar that carries the query into the doctor search results page
- Live filtering and sorting of doctor search results
- A working date/time picker in the booking widget that only enables "Confirm" once both are selected
- A booking confirmation page that reads the selected doctor/date/time from the URL and generates a reference number
- A live hospital locator: requests the browser's Geolocation API, calculates real straight-line distance to each hospital (Haversine formula), sorts the list nearest-first, and renders everything on an interactive Leaflet/OpenStreetMap map with custom markers
- A small telemedicine chat demo where typed messages append to the conversation
- Medication reminders you can mark as "taken" with one click
- A working sign-in/sign-up flow and patient dashboard using the browser's local storage (no backend server — appointments booked in this browser will appear on the dashboard)
- A 4-language switcher (English, Hausa, Yoruba, Igbo) covering navigation and key headings across every page, remembered between visits

## Tech Stack

- **HTML5** — semantic markup, `<main>`/`<nav>`/`<footer>` landmarks
- **CSS3** — custom properties—free, hand-written responsive layout (flexbox + grid), no frameworks
- **Vanilla JavaScript** — no dependencies
- **Figma** — wireframes and high-fidelity screens for all four pages above

## Accessibility

- Skip-to-content link on every page
- Visible keyboard focus states
- Labels programmatically associated with form fields
- `prefers-reduced-motion` respected
- Responsive down to small mobile screens (tested at 375px width)

## Honesty & Accuracy
- Makes no claims of government or third-party endorsement
- Uses a real, working review system — testimonials only appear when a visitor actually submits one
- Verifies passwords correctly at sign-in (an earlier version had a bug where any password was accepted — this is fixed and tested)
- Requires every new doctor registration to be approved by the site owner via `admin.html` before that doctor can sign in or appear as active

## Known Limitations (Static Site, No Backend)

This project is intentionally a static HTML/CSS/JS site with no server, by design of the capstone brief. That means:
- **Accounts and appointments are stored per-browser** (via localStorage), not in a shared database — they won't sync across two different devices.
- **The "Forgot Password" flow is clearly labeled as a demo.** Real SMS/email delivery requires a backend and a paid provider (e.g. Twilio, SendGrid) with secret keys, which a static frontend cannot safely do. The demo flow explains this rather than faking a real send.
- **The admin passphrase gate is a convenience lock, not real security** — genuine authentication requires a server. It's suitable for a capstone demo, not for handling real patient data in production.

## A Note on the Language Switcher

The EN/HA/YO/IG switcher is real and functional — it translates navigation labels and main page headings on every page, and remembers your choice between visits. Full paragraph-level translation of every sentence on every page was intentionally out of scope for this timeline; extending `assets/lang.js` with more `data-i18n` keys is straightforward if that's ever needed.

## Getting Started Locally

```bash
git clone https://github.com/<your-username>/healthbridge.git
cd healthbridge
```

Then just open `index.html` in your browser — no build step or dependencies required.

## Project Structure

```
healthbridge/
├── index.html                 # Homepage
├── doctor-search.html         # Doctor search results
├── doctor-profile.html        # Doctor profile + booking
├── booking-confirmation.html  # Booking confirmation
├── hospital-locator.html      # Live GPS hospital locator + map
├── login.html                 # Sign in / sign up
├── dashboard.html             # Patient dashboard
├── doctor-login.html          # Doctor sign in / registration
├── doctor-dashboard.html      # Doctor dashboard — accept/decline, reply to patients
├── admin.html                 # Owner-only doctor approval panel
├── analytics.html             # Owner-only usage/data analytics dashboard
├── symptom-checker.html       # Symptom guidance / triage
├── first-aid.html             # First aid guides
├── maternal-child.html        # Maternal & child health
├── health-tips.html           # Health tips
├── assets/
│   └── lang.js                # Shared multi-language engine (EN/HA/YO/IG)
└── README.md
```

## Design Process

1. Defined the problem: healthcare access and appointment booking friction in Nigeria.
2. Designed wireframes and high-fidelity screens in Figma for the core user flow (search → profile → book → confirm).
3. Built a working HTML/CSS/JS version matching the Figma design system (colors, type, spacing).
4. Tested responsiveness and basic accessibility across breakpoints.
5. Deployed and documented for review.

## Color Palette

| Name | Hex |
|---|---|
| Primary Blue | `#1565c0` |
| Dark Navy | `#0a1628` / `#0d47a1` |
| Light Blue | `#e3f2fd` |
| White | `#ffffff` |
| Background | `#f0f5fb` |

## Author

**Salim Bello Muhammad**
UI/UX Design Student, eHealth Africa Academy — Kano, Nigeria

## Acknowledgments

Built as part of the eHealth Africa Academy Capstone Project (July–August 2026).

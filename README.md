# BirthdayJet Express

A train-ticket style party app for Anna & Zoli's birthday tour through Vienna:
live timetable with delays, a real street map, seat booking in two wagons (80 seats),
and a food menu paid in toasts. Works on any phone browser.

## Files
- `index.html` – the whole app
- `firebase-config.js` – your Firebase keys and admin emails
- `firestore.rules` – who may change what (paste into Firebase → Firestore → Rules)

Without a Firebase config the site runs in demo mode: everything works, but data stays on each phone.

## Admin
Tap the lock icon and log in with one of the admin accounts created in
Firebase → Authentication → Users. Admins can edit times and delays, share their live
location, move stops on the map, change food prices and pictures, and manage bookings and orders.

Map tiles © OpenStreetMap contributors © CARTO.

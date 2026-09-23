# Banya 163 — website

Statische site (Eleventy) met Pages CMS voor teksten en foto's, gehost op Netlify. Alles gratis, behalve de domeinnaam.

## Eenmalig online zetten

1. **GitHub** — maak een gratis account en een nieuwe (private) repository `banya163`. Upload de inhoud van deze map (Add file → Upload files, sleep alles erin, ook `.pages.yml`).
2. **Netlify** — log in met GitHub → *Add new site → Import an existing project* → kies `banya163`. De instellingen staan al in `netlify.toml`; klik Deploy. Na ~1 minuut staat de site online.
3. **Domein** — in Netlify: *Domain management → Add domain* (bijv. banya163.nl) en volg de DNS-instructies van je registrar.
4. **Contactformulier** — in Netlify: *Forms* → zet formulierdetectie aan en stel onder *Form notifications* een e-mailmelding in naar info@banya163.nl.
5. **CMS** — ga naar app.pagescms.org, log in met GitHub en open `banya163`. Nodig de tweede beheerder uit via *Settings → Collaborators* (die heeft geen GitHub-account nodig; login gaat via e-mail).

## Dagelijks beheer

- Open app.pagescms.org, kies een pagina, pas aan, klik **Save**. Netlify bouwt de site automatisch opnieuw; na ~1 minuut staat de wijziging live.
- Tekstvak: een lege regel = nieuwe alinea.
- Foto's: upload gewoon het origineel, de site verkleint ze automatisch.
- Een foto-veld leeg laten = er verschijnt een beige vak met de omschrijving. Vul ze allemaal voor livegang.

## Smoobu

- Kalender: `_includes/smoobu-kalender.njk` (staat erin).
- Boekformulier: `_includes/smoobu-boeken.njk` — vervang de inhoud door de code uit Smoobu (*Booking Engine → Embed in Website*).
- Prijzen, beschikbaarheid en minimaal verblijf beheer je in Smoobu; de tarieventabel op de site is alleen een indicatie.

## Lokaal bekijken (optioneel)

`npm install` en daarna `npm start` → http://localhost:8080

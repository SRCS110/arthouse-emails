import { useState, useCallback } from "react";

const HERO_IMAGE = "https://arthousesantarosa.com/wp-content/uploads/2025/08/5288b-art-house-northwest_wakely.webp";

const MONTHS = [
  {
    id: 1, name: "January", tagline: "A Creative Escape to Start the Year",
    heroSubject: "New Year, New Suite — Art House Santa Rosa",
    preheader: "The largest rooms in Santa Rosa. Art. Culture. Wine Country.",
    heroCaption: "Modern Luxury Suites in Downtown Santa Rosa",
    introCopy: "Welcome to Art House Hotel & Suites — Santa Rosa's most spacious and artfully designed boutique hotel. This January, trade the ordinary for something extraordinary. Our studio and apartment-style suites, on-site art gallery, and downtown location make us the perfect base for your Wine Country escape.",
    ctaTagline: "Book direct for our best rates — no hidden fees, ever.",
    thingsToDo: [
      { icon: "🎨", title: "On-Site Art Gallery", desc: "January is the perfect time to slow down and appreciate our rotating gallery of local Sonoma County artists — right here in the hotel lobby." },
      { icon: "🍷", title: "Winter Wine Tasting", desc: "January is intimate wine country — fewer crowds, warmer tasting rooms. Explore 400+ Sonoma wineries just minutes from Art House." },
      { icon: "🌲", title: "Armstrong Redwoods", desc: "Hike through ancient old-growth redwoods just 30 minutes away. The forest is lush and quiet in January — one of the best times to visit." },
    ],
    events: [
      { name: "Sonoma County Restaurant Week", date: "Mid-January", detail: "Local chefs craft special prix-fixe menus across the county. Perfect for a culinary evening after exploring downtown Santa Rosa." },
      { name: "Luther Burbank Center Performances", date: "Throughout January", detail: "World-class performances at the city's premier performing arts venue, just minutes from Art House." },
      { name: "Wine Road Winter Passport", date: "January Weekends", detail: "Sip your way through Alexander Valley and Dry Creek Valley wineries with the Wine Road weekend tasting passport." },
    ],
    cta: "Book Your January Suite", accentColor: "#1B3A6B", accentLight: "#E8EEF8", season: "Winter",
  },
  {
    id: 2, name: "February", tagline: "Romance, Art & Wine Country",
    heroSubject: "Valentine's in a Suite — Art House Santa Rosa",
    preheader: "800 sq ft of romance in the heart of Wine Country.",
    heroCaption: "The Most Spacious Valentine's Getaway in Santa Rosa",
    introCopy: "Give your Valentine something truly special — an apartment-style suite with floor-to-ceiling windows, a Nespresso in the morning, and all of Sonoma Wine Country right outside the door. Art House Hotel & Suites is the most romantic upgrade in downtown Santa Rosa.",
    ctaTagline: "Book direct for our best rates — no hidden fees, ever.",
    thingsToDo: [
      { icon: "🍾", title: "Wine & Art Evening", desc: "Spend an evening in our gallery lounge, then step out to explore downtown Santa Rosa's wine bars and restaurants — all walkable from Art House." },
      { icon: "🌊", title: "Bodega Bay Coastal Drive", desc: "30 minutes west, the Pacific coast offers dramatic cliffs, fresh seafood, and sweeping ocean views — perfect for a Valentine's day trip." },
      { icon: "🧀", title: "Artisan Cheese & Wine", desc: "Sonoma County is home to world-class creameries and wineries. Pick up local cheese and a bottle from a nearby tasting room for an in-suite date night." },
    ],
    events: [
      { name: "Cloverdale Citrus Fair", date: "Feb 13–16, 2026", detail: "Live music, carnival rides, 4-H shows, and a parade — a charming small-town fair just north of Santa Rosa." },
      { name: "Wine Road Barrel Tasting", date: "February Weekends", detail: "Taste wines straight from the barrel before they're bottled — an intimate winery experience across Sonoma County." },
      { name: "Valentine's Dinners Downtown", date: "Feb 14", detail: "Downtown Santa Rosa's restaurants offer special Valentine's menus steps from Art House's front door." },
    ],
    cta: "Reserve Your Valentine's Suite", accentColor: "#7A1F35", accentLight: "#FAE8EC", season: "Winter",
  },
  {
    id: 3, name: "March", tagline: "Spring Has Arrived in Wine Country",
    heroSubject: "Spring Suites — Art House Santa Rosa",
    preheader: "Mustard fields, open tasting rooms, and the largest rooms in Santa Rosa.",
    heroCaption: "Your Spring Wine Country Studio Awaits",
    introCopy: "March in Sonoma is spectacular — the hills turn green, mustard blooms between the vines, and tasting rooms open for the season. Art House Hotel & Suites puts you at the center of it all with spacious suites, free breakfast, and a downtown location steps from everything.",
    ctaTagline: "Book direct for our best rates — no hidden fees, ever.",
    thingsToDo: [
      { icon: "🌸", title: "Mustard Fields & Vineyards", desc: "Drive Highway 12 or Westside Road through Alexander Valley for breathtaking views of yellow mustard blooming between dormant vines." },
      { icon: "🎭", title: "Downtown Arts Scene", desc: "March brings new gallery openings across downtown Santa Rosa. Check in at Art House and explore the local art scene on foot." },
      { icon: "🚴", title: "Wine Country Cycling", desc: "The rolling hills around Santa Rosa are ideal for cycling in spring. Rent bikes and explore the Laguna de Santa Rosa trail or head into the valleys." },
    ],
    events: [
      { name: "Sonoma County Restaurant Week", date: "Mid-March", detail: "Curated multi-course menus celebrating the county's vibrant culinary scene at special pricing across dozens of restaurants." },
      { name: "Wine Road Barrel Tasting", date: "March Weekends", detail: "A beloved insider experience — taste wines directly from the barrel at wineries across Alexander Valley and Dry Creek." },
      { name: "Quarterly Artist Reception", date: "April 16, 2026", detail: "Art House's next on-site artist reception is coming up — a perfect reason to plan your spring visit now." },
    ],
    cta: "Book Your Spring Stay", accentColor: "#2E6B3A", accentLight: "#E8F5EC", season: "Spring",
  },
  {
    id: 4, name: "April", tagline: "Festivals, Art Receptions & Coastal Adventures",
    heroSubject: "April in Sonoma — Stay at Art House Santa Rosa",
    preheader: "Festivals, art, and the Sonoma coast — April has it all.",
    heroCaption: "Downtown Santa Rosa's Most Artful Hotel",
    introCopy: "April is one of the best months to visit Sonoma — festivals are in full swing, the coast is dramatic after winter rains, and Art House Hotel is hosting its Quarterly Artist Reception. Our studio and apartment suites give you the space to truly settle in and enjoy the season.",
    ctaTagline: "Book direct for our best rates — no hidden fees, ever.",
    thingsToDo: [
      { icon: "🖼️", title: "Quarterly Artist Reception", desc: "Join us April 16 for Art House's on-site Quarterly Artist Reception — meet local Sonoma County artists and enjoy the gallery in a social setting." },
      { icon: "🌊", title: "Sonoma Coastline", desc: "April brings clear skies and dramatic surf to Bodega Bay and Goat Rock. Just 30 minutes from Art House — a perfect day trip." },
      { icon: "🍺", title: "4th Street Walkable Scene", desc: "Art House sits steps from 4th Street's independent shops, craft breweries, and local restaurants. April's weather makes it perfect for a stroll." },
    ],
    events: [
      { name: "Art House Quarterly Artist Reception", date: "April 16, 2026", detail: "Our on-site gallery hosts local Sonoma County artists — guests are welcome to attend and explore the exhibition during their stay." },
      { name: "Butter & Egg Days Parade", date: "April 18, 2026", detail: "Petaluma's beloved spring festival with food, arts, crafts, and live music across four city blocks." },
      { name: "Sebastopol Apple Blossom Festival", date: "April 25–26, 2026", detail: "A colorful weekend of live music, arts vendors, food and drink just 20 minutes from Art House." },
    ],
    cta: "Plan Your April Visit", accentColor: "#5B3D8A", accentLight: "#F0EAFA", season: "Spring",
  },
  {
    id: 5, name: "May", tagline: "Open Studios, Outdoor Music & Wine",
    heroSubject: "May at Art House — Suites, Studios & Sonoma",
    preheader: "Summer season opens. The largest suites in Santa Rosa await.",
    heroCaption: "Art House Hotel — Where Creativity Meets Comfort",
    introCopy: "May marks the start of Sonoma's golden season — open studio weekends, outdoor music, and the vineyards at their most vibrant. Art House Hotel & Suites is the ideal base, with apartment-style rooms that give you space to relax after a full day of exploring Wine Country.",
    ctaTagline: "Book direct for our best rates — no hidden fees, ever.",
    thingsToDo: [
      { icon: "🎨", title: "Art at the Source Open Studios", desc: "Local artists open their studios across Sebastopol in June — preview the scene in May by visiting Art House's gallery and downtown Santa Rosa's art district." },
      { icon: "🎵", title: "Acoustic Sunsets", desc: "Weekly live music at Sonoma Botanical Garden begins in May — bring a picnic, enjoy wine tastings, and unwind among the gardens every Wednesday." },
      { icon: "🍷", title: "Wine Itinerary Packages", desc: "Explore Dry Creek Valley, Highway 12, or stay close and sip through Santa Rosa's tasting rooms. Our concierge team can help plan the perfect wine day." },
    ],
    events: [
      { name: "Bodega Bay Fisherman's Festival", date: "May 2–3, 2026", detail: "A beloved coastal tradition since 1973 — craft booths, live music, great seafood, and maritime entertainment at Bodega Bay." },
      { name: "American Graffiti Car Show", date: "May 14–16, 2026", detail: "400+ classic and custom cars fill Petaluma's streets alongside vendors, food, and special happenings." },
      { name: "Sonoma County Matsuri Festival", date: "May 17, 2026", detail: "A free celebration of Japanese arts, culture, and food right in Santa Rosa — a wonderful cultural event for all ages." },
    ],
    cta: "Book May at Art House", accentColor: "#1F6B5A", accentLight: "#E6F5F1", season: "Spring",
  },
  {
    id: 6, name: "June", tagline: "Summer, Open Studios & Country Music",
    heroSubject: "June in Wine Country — Art House Santa Rosa",
    preheader: "Country Summer, open studios, and Sonoma at its best.",
    heroCaption: "Spacious Suites Steps from Santa Rosa's Summer Events",
    introCopy: "June is when Sonoma County truly comes alive — music festivals, art studio weekends, and long evenings on the patio. Art House Hotel & Suites gives you the space and comfort to make the most of the season, with suites up to 800 sq ft and a location right in the heart of it all.",
    ctaTagline: "Book direct for our best rates — no hidden fees, ever.",
    thingsToDo: [
      { icon: "🎤", title: "Luther Burbank Concerts", desc: "Summer brings world-class acts to the Luther Burbank Performing Arts Center — check the June lineup and book your Art House stay around a show." },
      { icon: "🏖️", title: "Sonoma Coast Beaches", desc: "June's warm, clear days are ideal for Doran Beach, Goat Rock, and the wild Sonoma coastline just 30 minutes from Art House." },
      { icon: "🖼️", title: "Art at the Source", desc: "Local Sebastopol artists open their studios across two weekends — a unique window into Sonoma County's creative community." },
    ],
    events: [
      { name: "Country Summer Music Festival", date: "June 12–14, 2026", detail: "Northern California's biggest country music festival returns to Santa Rosa for three days of top headliners and Sonoma vibes." },
      { name: "Sonoma County Pride", date: "June 5–7, 2026", detail: "A parade and festival celebrating Sonoma County's LGBT+ community with live performances and local organizations." },
      { name: "Art at the Source Open Studios", date: "June 6–7 & 13–14, 2026", detail: "Sebastopol Center for the Arts' beloved non-juried open studio event showcases local artists across two weekends." },
      { name: "Broadway Under the Stars", date: "June 12–28, 2026", detail: "Award-winning Broadway-inspired concerts and musicals performed outdoors in Sonoma's Wine Country setting." },
    ],
    cta: "Book Your June Suite", accentColor: "#7A5A1F", accentLight: "#FAF4E6", season: "Summer",
  },
  {
    id: 7, name: "July", tagline: "4th of July, Balloons & Summer in Sonoma",
    heroSubject: "July 4th in Wine Country — Stay at Art House",
    preheader: "Fireworks, hot air balloons, and 800 sq ft of summer comfort.",
    heroCaption: "Art House Hotel — Your Summer Sonoma Headquarters",
    introCopy: "July is Sonoma County's most festive month — fireworks over downtown Santa Rosa, the Hot Air Balloon Classic, and warm evenings on restaurant patios. Art House Hotel & Suites puts you in the center of it all, with the most spacious rooms in the city and free parking in our indoor garage.",
    ctaTagline: "Book direct for our best rates — no hidden fees, ever.",
    thingsToDo: [
      { icon: "🎆", title: "4th of July Celebrations", desc: "Downtown Santa Rosa hosts 4th of July festivities you can walk to from Art House. Fireworks, community events, and a lively street scene." },
      { icon: "🏄", title: "Russian River Swimming", desc: "The Russian River is the classic Sonoma summer escape — float, kayak, or swim at Guerneville, just 30 minutes from Art House." },
      { icon: "🌅", title: "Hot Air Balloon Rides", desc: "Rise above the vineyards at sunrise — hot air balloon tours depart from the Santa Rosa area and offer unforgettable views of Sonoma County." },
    ],
    events: [
      { name: "4th of July Fireworks", date: "July 4, 2026", detail: "Multiple fireworks celebrations across Sonoma County — downtown Santa Rosa's festivities are walkable from Art House." },
      { name: "Family Movies On The Green", date: "Tuesdays July 7–Aug 4", detail: "Free outdoor film screenings in Windsor — a fun family night out just north of Santa Rosa." },
      { name: "Sonoma County Hot Air Balloon Classic", date: "July 18–19, 2026", detail: "Watch balloon launches, get up close, and take tethered rides at this beloved two-day Santa Rosa festival." },
      { name: "Fort Ross Festival", date: "July 25, 2026", detail: "Kashia Pomo ceremonial dancing, Alaska Native crafts, and Russian performances on the stunning Sonoma coast at Jenner." },
    ],
    cta: "Book Your July Stay", accentColor: "#1A4B6B", accentLight: "#E6F0F8", season: "Summer",
  },
  {
    id: 8, name: "August", tagline: "County Fair, Apple Season & Summer Peak",
    heroSubject: "August at Art House — Fair Season in Santa Rosa",
    preheader: "The Sonoma County Fair runs Aug 7–16. Your suite is ready.",
    heroCaption: "Santa Rosa's Most Spacious Hotel During Fair Season",
    introCopy: "August is Sonoma County's biggest month — the County Fair, the Gravenstein Apple Fair, and the Cotati Accordion Festival all pack the calendar. Art House Hotel & Suites is the smart choice: the most space, free breakfast, and indoor parking, all in downtown Santa Rosa.",
    ctaTagline: "Book direct for our best rates — no hidden fees, ever.",
    thingsToDo: [
      { icon: "🎡", title: "Sonoma County Fair", desc: "The county's biggest annual event runs Aug 7–16 — carnival rides, the Hall of Flowers, horse racing, and food just minutes from Art House." },
      { icon: "🍎", title: "Gravenstein Apple Country", desc: "August is peak Gravenstein season. Drive 20 minutes to Sebastopol for fresh-picked apples, homemade pies, and local farm stands." },
      { icon: "🎶", title: "Summer Music Series", desc: "August brings back-to-back outdoor concerts across Sonoma County. B.R. Cohn Winery's summer series runs every weekend through October." },
    ],
    events: [
      { name: "Sonoma County Fair", date: "August 7–16, 2026", detail: "Carnival rides, the Hall of Flowers, arts and crafts, agricultural exhibits, wine country horse racing, and tons of food." },
      { name: "Gravenstein Apple Fair", date: "August 8–9, 2026", detail: "Celebrate the iconic Gravenstein apple with local food, live music, and farm-to-table fun at Ragle Ranch Park in Sebastopol." },
      { name: "Cotati Accordion Festival", date: "August 15–16, 2026", detail: "A joyful, multi-generational, multi-cultural musical extravaganza at La Plaza Park in Cotati — uniquely Sonoma County." },
    ],
    cta: "Book During Fair Season", accentColor: "#5A3A1A", accentLight: "#FAF0E6", season: "Summer",
  },
  {
    id: 9, name: "September", tagline: "Harvest Season & Local Art",
    heroSubject: "Harvest Month at Art House — Santa Rosa Suites",
    preheader: "Crush season, harvest dinners, and the most beautiful month in Sonoma.",
    heroCaption: "Art House Hotel — Boutique Luxury During Harvest Season",
    introCopy: "September is Sonoma's most magical month — the grapes come in, the air smells of harvest, and the county celebrates with special dinners and winery events. Art House Hotel & Suites is your home base for it all, with spacious studio and apartment suites designed for the discerning traveler.",
    ctaTagline: "Book direct for our best rates — no hidden fees, ever.",
    thingsToDo: [
      { icon: "🍇", title: "Crush Season at the Wineries", desc: "September is when the grapes are harvested and pressed. Many Sonoma wineries offer special crush experiences and barrel tastings during this time." },
      { icon: "🚶", title: "Annadel State Park", desc: "Hike through golden oak woodlands at Annadel — Santa Rosa's own state park — when the late-season light makes the trails magical." },
      { icon: "🎨", title: "Downtown Gallery Scene", desc: "Santa Rosa's downtown galleries kick into gear in fall. Pair an art walk with dinner on 4th Street, all steps from Art House." },
    ],
    events: [
      { name: "Railroad Square Music Festival", date: "September 20, 2026", detail: "A free day of live music on 4 stages, local food, wine, craft beer, family activities, and 20+ artisans in Santa Rosa's Railroad Square." },
      { name: "Acoustic Sunsets Final Weeks", date: "Through Sept 16", detail: "The last evenings of Sonoma Botanical Garden's beloved Wednesday night music series — wine, picnics, and live music al fresco." },
      { name: "Harvest Season Winery Events", date: "All September", detail: "Harvest dinners, crush parties, and barrel tastings at wineries throughout Sonoma County. Check individual winery calendars." },
    ],
    cta: "Book Your Harvest Escape", accentColor: "#6B2E1A", accentLight: "#FAF0EB", season: "Fall",
  },
  {
    id: 10, name: "October", tagline: "Harvest Fair, Fall Colors & Grape Stomping",
    heroSubject: "October Wine Country — Art House Santa Rosa",
    preheader: "Harvest Fair, fall foliage, and Sonoma at peak season.",
    heroCaption: "Art House Hotel — Fall's Most Creative Retreat",
    introCopy: "October is Sonoma County at its finest — the Harvest Fair, fall foliage drives through Alexander Valley, and Halloween in downtown Santa Rosa. Art House Hotel & Suites gives you a modern, artful home base with the most space in the city and all the fall fun right outside your door.",
    ctaTagline: "Book direct for our best rates — no hidden fees, ever.",
    thingsToDo: [
      { icon: "🍂", title: "Fall Foliage Drives", desc: "October transforms Sonoma's wine country into a palette of gold and red. Drive Highway 128 through Alexander Valley for peak fall color." },
      { icon: "🎃", title: "Halloween Downtown", desc: "Downtown Santa Rosa goes all-out for Halloween — costume events, pop-up markets, and a festive street scene steps from Art House." },
      { icon: "🖼️", title: "Fall Gallery Openings", desc: "October brings new exhibitions to Art House's gallery and downtown Santa Rosa's art spaces. A great time to explore the local creative scene." },
    ],
    events: [
      { name: "Sonoma County Harvest Fair", date: "October 10, 2026", detail: "The Grand Tasting Pavilion and the KZST World Championship Grape Stomp make this one of Sonoma's most beloved fall traditions." },
      { name: "Halloween & Día de los Muertos", date: "Late October", detail: "Special events across Sonoma County celebrate these holidays — watch for downtown Santa Rosa and Petaluma offerings." },
      { name: "Winery Fall Releases", date: "Throughout October", detail: "New vintage releases across Sonoma's wine regions mean special tastings and exclusive access at tasting rooms countywide." },
    ],
    cta: "Book Your October Suite", accentColor: "#7A3A10", accentLight: "#FAF0E8", season: "Fall",
  },
  {
    id: 11, name: "November", tagline: "Thanksgiving Wine Country & Gallery Season",
    heroSubject: "Thanksgiving at Art House — Sonoma Wine Country Suites",
    preheader: "A spacious, artful retreat for your holiday weekend.",
    heroCaption: "Art House Hotel — Your Thanksgiving Wine Country Home",
    introCopy: "Thanksgiving in Wine Country is a tradition unlike any other — wineries open their doors, local restaurants craft special menus, and downtown Santa Rosa takes on a cozy, festive glow. Art House Hotel & Suites is the perfect retreat, with apartment-style suites that feel like a home away from home.",
    ctaTagline: "Book direct for our best rates — no hidden fees, ever.",
    thingsToDo: [
      { icon: "🦃", title: "Thanksgiving Winery Weekends", desc: "Sonoma County wineries open for special Thanksgiving tastings — one of the most beloved annual wine traditions in the region." },
      { icon: "🌊", title: "Winter Coast at Bodega Bay", desc: "November's storm season makes the Sonoma coast dramatic and wild. Walk the headlands at Bodega Bay for spectacular Pacific views." },
      { icon: "🛍️", title: "Shop Small on 4th Street", desc: "Art House is steps from 4th Street's locally owned boutiques and galleries. Make Small Business Saturday a walking adventure." },
    ],
    events: [
      { name: "Thanksgiving Wine Road Weekend", date: "Thanksgiving Weekend", detail: "Wineries across Sonoma open for special tastings — one of the year's most popular wine weekends, bookended by great food." },
      { name: "Luther Burbank Holiday Season Opens", date: "November Onward", detail: "Holiday concerts, dance performances, and seasonal specials fill the performing arts calendar through December." },
      { name: "Shop Small Santa Rosa", date: "Late November", detail: "Downtown Santa Rosa's independent shops, galleries, and restaurants celebrate Small Business Saturday steps from Art House." },
    ],
    cta: "Book Your Holiday Suite", accentColor: "#3A2A1A", accentLight: "#F5EDE8", season: "Fall",
  },
  {
    id: 12, name: "December", tagline: "Holiday Magic, Art & Wine Country Christmas",
    heroSubject: "Holiday Suites at Art House — A Santa Rosa Christmas",
    preheader: "The largest rooms in Santa Rosa. The most festive season.",
    heroCaption: "Celebrate the Season at Art House Hotel & Suites",
    introCopy: "December at Art House Hotel & Suites is something special — festive lights along 4th Street, holiday performances at the Luther Burbank Center, and our gallery showcasing its winter exhibition. With apartment-style suites up to 800 sq ft, this is the holiday accommodation Santa Rosa has been missing.",
    ctaTagline: "Book direct for our best rates — no hidden fees, ever.",
    thingsToDo: [
      { icon: "🎄", title: "Holiday Lights on 4th Street", desc: "Art House's downtown location puts you steps from Santa Rosa's festive holiday lighting, decorated storefronts, and seasonal street scene." },
      { icon: "🎭", title: "Holiday Performances", desc: "The Luther Burbank Center presents its packed holiday entertainment calendar — from the Nutcracker to holiday concerts and special shows." },
      { icon: "🖼️", title: "Winter Gallery Exhibition", desc: "Art House's on-site gallery presents its winter show — a perfect complement to the season's creative energy in downtown Santa Rosa." },
    ],
    events: [
      { name: "Lighted Boat Parade", date: "December 2026 (TBD)", detail: "Festive lighted boats, kayaks, and paddleboards travel from Petaluma Marina to the Downtown Turning Basin — a magical winter spectacle." },
      { name: "New Year's Eve in Wine Country", date: "December 31", detail: "Ring in the New Year in your Art House suite — or step out to downtown Santa Rosa's festive restaurant and bar scene." },
      { name: "Charles M. Schulz Museum Holiday", date: "December", detail: "The beloved Snoopy-themed museum hosts special holiday exhibits and programming just minutes from Art House." },
    ],
    cta: "Book Your Holiday Suite", accentColor: "#1A3B2A", accentLight: "#E6F2EC", season: "Winter",
  },
];

const SEASON_ICONS = { Winter: "❄️", Spring: "🌸", Summer: "☀️", Fall: "🍂" };

// ─── EDITABLE FIELD ────────────────────────────────────────────────────────────
function EditableField({ value, onChange, multiline, style }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value);

  const commit = () => { onChange(draft); setEditing(false); };
  const cancel = () => { setDraft(value); setEditing(false); };

  if (editing) {
    return multiline ? (
      <textarea
        autoFocus value={draft}
        rows={Math.max(3, Math.ceil(draft.length / 60))}
        onChange={e => setDraft(e.target.value)}
        onBlur={commit}
        onKeyDown={e => { if (e.key === "Escape") cancel(); }}
        style={{ ...style, width: "100%", boxSizing: "border-box", border: "2px solid #4A7FA5", borderRadius: "4px", padding: "6px 8px", resize: "vertical", fontFamily: "inherit", fontSize: "inherit", lineHeight: "inherit", background: "#F8FBFF", outline: "none", color: "inherit" }}
      />
    ) : (
      <input
        autoFocus type="text" value={draft}
        onChange={e => setDraft(e.target.value)}
        onBlur={commit}
        onKeyDown={e => { if (e.key === "Enter") commit(); if (e.key === "Escape") cancel(); }}
        style={{ ...style, width: "100%", boxSizing: "border-box", border: "2px solid #4A7FA5", borderRadius: "4px", padding: "4px 8px", fontFamily: "inherit", fontSize: "inherit", background: "#F8FBFF", outline: "none", color: "inherit" }}
      />
    );
  }

  return (
    <span
      title="✏️ Click to edit"
      onClick={() => { setDraft(value); setEditing(true); }}
      style={{ ...style, cursor: "text", display: "block", borderRadius: "3px", padding: "2px 4px", margin: "-2px -4px", border: "1px dashed transparent", transition: "border-color 0.15s, background 0.15s" }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = "#4A7FA5"; e.currentTarget.style.background = "#F0F6FF"; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = "transparent"; e.currentTarget.style.background = "transparent"; }}
    >
      {value}
    </span>
  );
}

// ─── HTML GENERATOR ────────────────────────────────────────────────────────────
function generateEmailHTML(month, edits) {
  const ac = month.accentColor;
  const al = month.accentLight;
  const g = (key) => edits[key] !== undefined ? edits[key] : month[key];
  const gt = (section, i, key) => { const k = `${section}_${i}_${key}`; return edits[k] !== undefined ? edits[k] : month[section][i][key]; };

  const todoRows = month.thingsToDo.map((item, i) => `
    <tr><td style="padding:0 0 12px 0;">
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${al};border-left:3px solid ${ac};border-radius:6px;">
        <tr>
          <td width="52" valign="top" style="padding:16px 0 16px 16px;font-size:22px;">${item.icon}</td>
          <td style="padding:16px;">
            <div style="font-family:Arial,sans-serif;font-size:15px;font-weight:600;color:#1A1A1A;margin-bottom:4px;">${gt("thingsToDo", i, "title")}</div>
            <div style="font-family:Arial,sans-serif;font-size:13px;color:#555;line-height:1.6;">${gt("thingsToDo", i, "desc")}</div>
          </td>
        </tr>
      </table>
    </td></tr>`).join("");

  const icons = ["🗓️","🎉","🎵","🌟"];
  const eventRows = month.events.map((ev, i) => `
    <tr><td style="padding:0 0 12px 0;">
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#FAFAFA;border:1px solid #E0E4E8;border-radius:6px;">
        <tr>
          <td width="52" valign="top" style="padding:16px 0 16px 16px;">
            <div style="width:36px;height:36px;background:${ac};border-radius:50%;text-align:center;line-height:36px;font-size:16px;">${icons[i % 4]}</div>
          </td>
          <td style="padding:16px;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="font-family:Arial,sans-serif;font-size:15px;font-weight:600;color:#1A1A1A;padding-bottom:4px;">${gt("events", i, "name")}</td>
                <td align="right"><span style="font-family:Arial,sans-serif;font-size:11px;color:${ac};background:${al};padding:2px 10px;border-radius:12px;font-weight:600;">${gt("events", i, "date")}</span></td>
              </tr>
              <tr><td colspan="2" style="font-family:Arial,sans-serif;font-size:13px;color:#666;line-height:1.6;">${gt("events", i, "detail")}</td></tr>
            </table>
          </td>
        </tr>
      </table>
    </td></tr>`).join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
  <title>${g("heroSubject")}</title>
</head>
<body style="margin:0;padding:0;background:#F4F6F8;font-family:Arial,sans-serif;">
<div style="display:none;max-height:0;overflow:hidden;">${g("preheader")}</div>
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#F4F6F8;">
<tr><td align="center" style="padding:24px 16px;">
<table width="620" cellpadding="0" cellspacing="0" border="0" style="max-width:620px;background:#fff;border:1px solid #E0E4E8;border-radius:8px;overflow:hidden;">

  <!-- Top Bar -->
  <tr><td style="background:#1A1A1A;padding:12px 24px;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
      <td style="font-family:Arial,sans-serif;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#9DB8D0;">Art House Santa Rosa</td>
      <td align="right" style="font-family:Arial,sans-serif;font-size:11px;color:#666;">reservations@arthousesantarosa.com</td>
    </tr></table>
  </td></tr>

  <!-- Hero Image -->
  <tr><td style="padding:0;">
    <img src="${HERO_IMAGE}" alt="Art House Santa Rosa" width="620" style="display:block;width:100%;max-width:620px;height:300px;object-fit:cover;"/>
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${ac};">
      <tr><td style="padding:20px 32px 24px;">
        <div style="font-family:Arial,sans-serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:rgba(255,255,255,0.7);margin-bottom:8px;">${SEASON_ICONS[month.season]} ${month.season} &middot; ${month.name} 2026</div>
        <div style="font-family:Georgia,serif;font-size:28px;color:#fff;line-height:1.25;margin-bottom:6px;">${g("tagline")}</div>
        <div style="font-family:Arial,sans-serif;font-size:13px;color:rgba(255,255,255,0.8);font-style:italic;">${g("heroCaption")}</div>
      </td></tr>
    </table>
  </td></tr>

  <!-- Intro -->
  <tr><td style="padding:36px 32px 8px;text-align:center;">
    <div style="font-family:Arial,sans-serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:${ac};margin-bottom:12px;">620 7th Street &middot; Downtown Santa Rosa</div>
    <p style="font-family:Georgia,serif;font-size:15px;color:#444;line-height:1.7;margin:0 0 24px;text-align:left;">${g("introCopy")}</p>
    <a href="https://arthousesantarosa.com/Accommodations/" style="display:inline-block;background:${ac};color:#fff;padding:13px 32px;border-radius:2px;text-decoration:none;font-family:Arial,sans-serif;font-size:12px;letter-spacing:2px;text-transform:uppercase;font-weight:700;">${g("cta")}</a>
  </td></tr>

  <tr><td style="padding:28px 32px 0;"><hr style="border:none;border-top:1px solid #E0E4E8;margin:0;"/></td></tr>

  <!-- Things To Do -->
  <tr><td style="padding:32px 32px 8px;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr><td align="center" style="padding-bottom:24px;">
        <div style="font-family:Arial,sans-serif;font-size:10px;letter-spacing:3px;text-transform:uppercase;color:#888;margin-bottom:8px;">Things To Do</div>
        <div style="font-family:Georgia,serif;font-size:24px;color:#1A1A1A;">Explore Sonoma in ${month.name}</div>
      </td></tr>
      ${todoRows}
    </table>
  </td></tr>

  <tr><td style="padding:16px 32px 0;"><hr style="border:none;border-top:1px solid #E0E4E8;margin:0;"/></td></tr>

  <!-- Events -->
  <tr><td style="padding:32px 32px 8px;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr><td align="center" style="padding-bottom:24px;">
        <div style="font-family:Arial,sans-serif;font-size:10px;letter-spacing:3px;text-transform:uppercase;color:#888;margin-bottom:8px;">Area Events</div>
        <div style="font-family:Georgia,serif;font-size:24px;color:#1A1A1A;">Don't Miss in ${month.name}</div>
      </td></tr>
      ${eventRows}
    </table>
  </td></tr>

  <!-- Amenities -->
  <tr><td style="padding:16px 32px 24px;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#FAFAFA;border:1px solid #E0E4E8;border-radius:6px;">
      <tr><td align="center" style="padding:20px 12px;">
        <table cellpadding="0" cellspacing="0" border="0"><tr>
          ${[{icon:"☕",label:"Free Breakfast",sub:"Daily 6:30–10AM"},{icon:"🖼️",label:"Art Gallery",sub:"On-site & rotating"},{icon:"🚗",label:"Indoor Parking",sub:"$25/night"},{icon:"🐾",label:"Pet Friendly",sub:"Under 50lbs"}]
            .map(a=>`<td align="center" style="padding:0 14px;font-family:Arial,sans-serif;"><div style="font-size:20px;margin-bottom:4px;">${a.icon}</div><div style="font-size:12px;font-weight:600;color:#1A1A1A;">${a.label}</div><div style="font-size:11px;color:#999;">${a.sub}</div></td>`).join("")}
        </tr></table>
      </td></tr>
    </table>
  </td></tr>

  <!-- Final CTA -->
  <tr><td style="background:${ac};padding:40px 32px;text-align:center;">
    <div style="font-family:Arial,sans-serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:rgba(255,255,255,0.65);margin-bottom:12px;">${month.name} 2026</div>
    <div style="font-family:Georgia,serif;font-size:28px;color:#fff;margin-bottom:12px;">Experience Sonoma Differently</div>
    <p style="font-family:Arial,sans-serif;font-size:14px;color:rgba(255,255,255,0.85);margin:0 0 24px;line-height:1.6;">${g("ctaTagline")}</p>
    <a href="https://arthousesantarosa.com/Accommodations/" style="display:inline-block;background:#fff;color:${ac};padding:13px 36px;border-radius:2px;text-decoration:none;font-family:Arial,sans-serif;font-size:12px;letter-spacing:2px;text-transform:uppercase;font-weight:700;">${g("cta")}</a>
  </td></tr>

  <!-- Footer -->
  <tr><td style="background:#1A1A1A;padding:24px 32px;text-align:center;font-family:Arial,sans-serif;">
    <div style="color:#9DB8D0;font-size:14px;letter-spacing:1px;margin-bottom:8px;">Art House Hotel &amp; Suites</div>
    <div style="color:#666;font-size:12px;line-height:1.8;">620 7th Street &middot; Santa Rosa, CA 95404<br/>(707) 545-5400 &middot; reservations@arthousesantarosa.com</div>
    <div style="margin-top:16px;font-size:11px;color:#555;">
      You're receiving this because you subscribed to Art House news and offers.<br/>
      <a href="#" style="color:#9DB8D0;">Unsubscribe</a> &middot; <a href="https://arthousesantarosa.com" style="color:#9DB8D0;">Visit Website</a>
    </div>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>`;
}

function downloadHTML(month, edits) {
  const html = generateEmailHTML(month, edits);
  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `arthouse-${month.name.toLowerCase()}-2026.html`;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function downloadAllHTML(allEdits) {
  MONTHS.forEach((month, i) => setTimeout(() => downloadHTML(month, allEdits[i] || {}), i * 200));
}

// ─── MAIN APP ──────────────────────────────────────────────────────────────────
export default function ArtHouseEmailCampaign() {
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [view, setView] = useState("preview");
  const [downloaded, setDownloaded] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [allEdits, setAllEdits] = useState(() => MONTHS.map(() => ({})));

  const month = MONTHS[selectedMonth];
  const accent = month.accentColor;
  const accentLight = month.accentLight;
  const edits = allEdits[selectedMonth];

  const setEdit = useCallback((key, val) => {
    setAllEdits(prev => { const next = [...prev]; next[selectedMonth] = { ...next[selectedMonth], [key]: val }; return next; });
  }, [selectedMonth]);

  const setNestedEdit = useCallback((section, i, key, val) => {
    setEdit(`${section}_${i}_${key}`, val);
  }, [setEdit]);

  const g = (key) => edits[key] !== undefined ? edits[key] : month[key];
  const gt = (section, i, key) => { const k = `${section}_${i}_${key}`; return edits[k] !== undefined ? edits[k] : month[section][i][key]; };
  const hasEdits = Object.keys(edits).length > 0;

  function handleDownloadCurrent() {
    downloadHTML(month, edits);
    setDownloaded(month.name);
    setTimeout(() => setDownloaded(null), 2500);
  }

  const E = ({ fieldKey, multiline, style }) =>
    editMode ? <EditableField value={g(fieldKey)} onChange={v => setEdit(fieldKey, v)} multiline={multiline} style={style} />
             : <span style={style}>{g(fieldKey)}</span>;

  const EN = ({ section, i, fieldKey, multiline, style }) =>
    editMode ? <EditableField value={gt(section, i, fieldKey)} onChange={v => setNestedEdit(section, i, fieldKey, v)} multiline={multiline} style={style} />
             : <span style={style}>{gt(section, i, fieldKey)}</span>;

  return (
    <div style={{ fontFamily: "'Georgia', serif", background: "#F4F6F8", minHeight: "100vh" }}>

      {/* Header */}
      <div style={{ background: "#1A1A1A", color: "#fff", padding: "14px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "10px" }}>
        <div>
          <div style={{ fontSize: "11px", letterSpacing: "2px", color: "#9DB8D0", textTransform: "uppercase", marginBottom: "2px" }}>Art House Santa Rosa</div>
          <div style={{ fontSize: "17px", fontWeight: "300", letterSpacing: "1px" }}>2026 Email Campaign</div>
        </div>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
          <button onClick={() => setView("list")} style={{ padding: "6px 13px", borderRadius: "4px", border: "1px solid #444", background: view === "list" ? "#4A7FA5" : "transparent", color: "#fff", cursor: "pointer", fontSize: "12px" }}>All Months</button>
          <button onClick={() => setView("preview")} style={{ padding: "6px 13px", borderRadius: "4px", border: "1px solid #444", background: view === "preview" ? "#4A7FA5" : "transparent", color: "#fff", cursor: "pointer", fontSize: "12px" }}>Preview</button>
          <button onClick={() => setEditMode(m => !m)} style={{ padding: "6px 13px", borderRadius: "4px", border: `1px solid ${editMode ? "#F0B429" : "#666"}`, background: editMode ? "#F0B429" : "transparent", color: editMode ? "#1A1A1A" : "#F0B429", cursor: "pointer", fontSize: "12px", fontFamily: "sans-serif", fontWeight: editMode ? "700" : "400" }}>
            {editMode ? "✏️ Editing On" : "✏️ Edit Text"}
          </button>
          <button onClick={() => { downloadAllHTML(allEdits); setDownloaded("all"); setTimeout(() => setDownloaded(null), 3000); }} style={{ padding: "6px 13px", borderRadius: "4px", border: "1px solid #9DB8D0", background: downloaded === "all" ? "#4A7FA5" : "transparent", color: downloaded === "all" ? "#fff" : "#9DB8D0", cursor: "pointer", fontSize: "12px", fontFamily: "sans-serif" }}>
            {downloaded === "all" ? "⬇ Downloading…" : "⬇ All 12"}
          </button>
        </div>
      </div>

      {editMode && (
        <div style={{ background: "#FFFBEA", borderBottom: "1px solid #F0B429", padding: "8px 24px", fontFamily: "sans-serif", fontSize: "13px", color: "#7A5700", display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
          <span>✏️ <strong>Edit mode on</strong> — click any text in the email to edit it. Press Enter or click away to save.</span>
          {hasEdits && <button onClick={() => setAllEdits(prev => { const n=[...prev]; n[selectedMonth]={}; return n; })} style={{ padding: "3px 10px", fontSize: "12px", background: "#fff", border: "1px solid #F0B429", borderRadius: "4px", color: "#7A5700", cursor: "pointer" }}>Reset {month.name} edits</button>}
        </div>
      )}

      {view === "list" ? (
        <div style={{ padding: "28px 24px", maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "19px", fontWeight: "400", color: "#333", marginBottom: "20px" }}>All 12 Campaigns</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))", gap: "14px" }}>
            {MONTHS.map((m, i) => (
              <div key={m.id} style={{ background: "#fff", border: `2px solid ${selectedMonth === i ? m.accentColor : "#E0E4E8"}`, borderRadius: "8px", padding: "18px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                  <span style={{ fontSize: "11px", color: m.accentColor, fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "1px" }}>{m.name}</span>
                  {Object.keys(allEdits[i]).length > 0 && <span style={{ fontSize: "10px", background: "#FFFBEA", color: "#7A5700", padding: "1px 6px", borderRadius: "8px", fontFamily: "sans-serif" }}>edited</span>}
                </div>
                <div style={{ fontSize: "13px", color: "#555", fontStyle: "italic", marginBottom: "14px" }}>"{m.tagline}"</div>
                <div style={{ display: "flex", gap: "8px" }}>
                  <button onClick={() => { setSelectedMonth(i); setView("preview"); }} style={{ flex: 1, padding: "7px 0", background: m.accentLight, color: m.accentColor, border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "12px", fontFamily: "sans-serif", fontWeight: "600" }}>Preview</button>
                  <button onClick={() => downloadHTML(m, allEdits[i] || {})} style={{ flex: 1, padding: "7px 0", background: m.accentColor, color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "12px", fontFamily: "sans-serif", fontWeight: "600" }}>⬇ HTML</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div style={{ display: "flex", maxWidth: "1200px", margin: "0 auto" }}>

          {/* Sidebar */}
          <div style={{ width: "148px", flexShrink: 0, background: "#fff", borderRight: "1px solid #E0E4E8", minHeight: "calc(100vh - 62px)" }}>
            {MONTHS.map((m, i) => (
              <button key={m.id} onClick={() => setSelectedMonth(i)} style={{ display: "block", width: "100%", padding: "9px 12px", textAlign: "left", background: selectedMonth === i ? m.accentLight : "transparent", border: "none", borderLeft: `3px solid ${selectedMonth === i ? m.accentColor : "transparent"}`, cursor: "pointer", fontSize: "13px", color: selectedMonth === i ? m.accentColor : "#555", fontWeight: selectedMonth === i ? "600" : "400", fontFamily: "sans-serif", position: "relative" }}>
                {m.name}
                {Object.keys(allEdits[i]).length > 0 && <span style={{ position: "absolute", right: "8px", top: "50%", transform: "translateY(-50%)", width: "6px", height: "6px", borderRadius: "50%", background: "#F0B429" }} />}
              </button>
            ))}
          </div>

          {/* Preview */}
          <div style={{ flex: 1, padding: "18px 22px", overflowY: "auto" }}>

            {/* Meta bar */}
            <div style={{ background: "#fff", border: "1px solid #E0E4E8", borderRadius: "8px", padding: "12px 18px", marginBottom: "16px", display: "flex", flexWrap: "wrap", gap: "14px", alignItems: "center", justifyContent: "space-between", fontFamily: "sans-serif" }}>
              <div style={{ flex: 1, minWidth: "180px" }}>
                <div style={{ fontSize: "10px", color: "#999", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "2px" }}>Subject Line</div>
                {editMode ? <EditableField value={g("heroSubject")} onChange={v => setEdit("heroSubject", v)} style={{ fontSize: "13px", fontWeight: "500", color: "#1A1A1A" }} /> : <div style={{ fontSize: "13px", fontWeight: "500", color: "#1A1A1A" }}>{g("heroSubject")}</div>}
                <div style={{ fontSize: "10px", color: "#999", textTransform: "uppercase", letterSpacing: "1px", marginTop: "6px", marginBottom: "2px" }}>Preview Text</div>
                {editMode ? <EditableField value={g("preheader")} onChange={v => setEdit("preheader", v)} style={{ fontSize: "12px", color: "#666" }} /> : <div style={{ fontSize: "12px", color: "#666" }}>{g("preheader")}</div>}
              </div>
              <button onClick={handleDownloadCurrent} style={{ padding: "9px 18px", background: downloaded === month.name ? "#2E6B3A" : accent, color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "13px", fontFamily: "sans-serif", fontWeight: "600", whiteSpace: "nowrap" }}>
                {downloaded === month.name ? "✓ Downloaded!" : `⬇ Download ${month.name} HTML`}
              </button>
            </div>

            {/* Email Preview */}
            <div style={{ maxWidth: "620px", margin: "0 auto", background: "#fff", border: "1px solid #E0E4E8", borderRadius: "8px", overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>

              <div style={{ background: "#1A1A1A", padding: "12px 24px", display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "#9DB8D0", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase" }}>Art House Santa Rosa</span>
                <span style={{ color: "#666", fontSize: "11px" }}>reservations@arthousesantarosa.com</span>
              </div>

              <div style={{ position: "relative" }}>
                <img src={HERO_IMAGE} alt="Art House Santa Rosa" style={{ width: "100%", height: "260px", objectFit: "cover", display: "block" }} />
                <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to bottom, ${accent}11, ${accent}CC)` }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 32px", background: accent }}>
                  <div style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", fontFamily: "sans-serif", marginBottom: "6px" }}>{SEASON_ICONS[month.season]} {month.season} · {month.name} 2026</div>
                  <div style={{ fontSize: "26px", fontWeight: "400", color: "#fff", lineHeight: 1.2, marginBottom: "5px" }}><E fieldKey="tagline" style={{ color: "#fff", fontSize: "26px" }} /></div>
                  <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.85)", fontStyle: "italic" }}><E fieldKey="heroCaption" style={{ fontSize: "13px" }} /></div>
                </div>
              </div>

              <div style={{ padding: "28px 32px 8px", textAlign: "center" }}>
                <div style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: accent, fontFamily: "sans-serif", marginBottom: "10px" }}>620 7th Street · Downtown Santa Rosa</div>
                <div style={{ color: "#444", lineHeight: 1.7, fontSize: "15px", margin: "0 0 18px", textAlign: "left" }}><E fieldKey="introCopy" multiline style={{ fontSize: "15px", color: "#444", lineHeight: 1.7 }} /></div>
                <div style={{ display: "inline-block", background: accent, color: "#fff", padding: "12px 28px", borderRadius: "2px", fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", fontFamily: "sans-serif", fontWeight: "700" }}><E fieldKey="cta" style={{ color: "#fff", fontSize: "12px" }} /></div>
              </div>

              <div style={{ margin: "24px 32px 0", borderTop: "1px solid #E0E4E8" }} />

              <div style={{ padding: "24px 32px 8px" }}>
                <div style={{ textAlign: "center", marginBottom: "20px" }}>
                  <div style={{ fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: "#888", fontFamily: "sans-serif", marginBottom: "6px" }}>Things To Do</div>
                  <div style={{ fontSize: "21px", fontWeight: "400", color: "#1A1A1A" }}>Explore Sonoma in {month.name}</div>
                </div>
                {month.thingsToDo.map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "12px", marginBottom: "12px", padding: "14px", background: accentLight, borderRadius: "6px", borderLeft: `3px solid ${accent}` }}>
                    <span style={{ fontSize: "20px", flexShrink: 0 }}>{item.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: "14px", fontWeight: "600", color: "#1A1A1A", marginBottom: "3px" }}><EN section="thingsToDo" i={i} fieldKey="title" style={{ fontSize: "14px", fontWeight: "600", color: "#1A1A1A" }} /></div>
                      <div style={{ fontSize: "13px", color: "#555", lineHeight: 1.6 }}><EN section="thingsToDo" i={i} fieldKey="desc" multiline style={{ fontSize: "13px", color: "#555" }} /></div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ margin: "12px 32px 0", borderTop: "1px solid #E0E4E8" }} />

              <div style={{ padding: "24px 32px 8px" }}>
                <div style={{ textAlign: "center", marginBottom: "20px" }}>
                  <div style={{ fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: "#888", fontFamily: "sans-serif", marginBottom: "6px" }}>Area Events</div>
                  <div style={{ fontSize: "21px", fontWeight: "400", color: "#1A1A1A" }}>Don't Miss in {month.name}</div>
                </div>
                {month.events.map((event, i) => (
                  <div key={i} style={{ marginBottom: "10px", padding: "14px", background: "#FAFAFA", border: "1px solid #E0E4E8", borderRadius: "6px", display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <div style={{ background: accent, color: "#fff", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", flexShrink: 0 }}>{["🗓️","🎉","🎵","🌟"][i % 4]}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "4px", marginBottom: "4px" }}>
                        <span style={{ fontSize: "14px", fontWeight: "600", color: "#1A1A1A" }}><EN section="events" i={i} fieldKey="name" style={{ fontSize: "14px", fontWeight: "600", color: "#1A1A1A" }} /></span>
                        <span style={{ fontSize: "11px", color: accent, background: accentLight, padding: "2px 10px", borderRadius: "12px", fontFamily: "sans-serif", fontWeight: "600" }}><EN section="events" i={i} fieldKey="date" style={{ fontSize: "11px", color: accent }} /></span>
                      </div>
                      <div style={{ fontSize: "13px", color: "#666", lineHeight: 1.6 }}><EN section="events" i={i} fieldKey="detail" multiline style={{ fontSize: "13px", color: "#666" }} /></div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ margin: "12px 32px 18px", background: "#FAFAFA", border: "1px solid #E0E4E8", borderRadius: "6px", padding: "16px", display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "space-around", fontFamily: "sans-serif" }}>
                {[{icon:"☕",label:"Free Breakfast",sub:"6:30–10AM"},{icon:"🖼️",label:"Art Gallery",sub:"On-site"},{icon:"🚗",label:"Indoor Parking",sub:"$25/night"},{icon:"🐾",label:"Pet Friendly",sub:"Under 50lbs"}].map((a,i)=>(
                  <div key={i} style={{ textAlign: "center", minWidth: "65px" }}>
                    <div style={{ fontSize: "19px", marginBottom: "2px" }}>{a.icon}</div>
                    <div style={{ fontSize: "11px", fontWeight: "600", color: "#1A1A1A" }}>{a.label}</div>
                    <div style={{ fontSize: "10px", color: "#999" }}>{a.sub}</div>
                  </div>
                ))}
              </div>

              <div style={{ background: accent, padding: "32px", textAlign: "center" }}>
                <div style={{ color: "rgba(255,255,255,0.65)", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", fontFamily: "sans-serif", marginBottom: "10px" }}>{month.name} 2026</div>
                <div style={{ color: "#fff", fontSize: "24px", fontWeight: "400", marginBottom: "10px" }}>Experience Sonoma Differently</div>
                <div style={{ color: "rgba(255,255,255,0.85)", fontSize: "14px", margin: "0 0 20px", lineHeight: 1.6 }}><E fieldKey="ctaTagline" multiline style={{ fontSize: "14px" }} /></div>
                <div style={{ display: "inline-block", background: "#fff", color: accent, padding: "12px 32px", borderRadius: "2px", fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", fontFamily: "sans-serif", fontWeight: "700" }}><E fieldKey="cta" style={{ color: accent, fontSize: "12px" }} /></div>
              </div>

              <div style={{ background: "#1A1A1A", padding: "20px 32px", textAlign: "center", fontFamily: "sans-serif" }}>
                <div style={{ color: "#9DB8D0", fontSize: "13px", letterSpacing: "1px", marginBottom: "8px" }}>Art House Hotel & Suites</div>
                <div style={{ color: "#666", fontSize: "12px", lineHeight: 1.8 }}>620 7th Street · Santa Rosa, CA 95404<br />(707) 545-5400 · reservations@arthousesantarosa.com</div>
                <div style={{ marginTop: "12px", color: "#555", fontSize: "11px" }}>
                  <a href="#" style={{ color: "#9DB8D0" }}>Unsubscribe</a> · <a href="https://arthousesantarosa.com" style={{ color: "#9DB8D0" }}>Visit Website</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

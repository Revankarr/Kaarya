// All copy and business details for the site live here, so edits never touch layout code.

export const site = {
  name: 'Kaarya',
  url: 'https://www.kaarya.co',
  tagline: 'Coworking Space – JP Nagar, Bangalore',
  phone: '+91 99016 41122',
  phoneHref: 'tel:+919901641122',
  whatsappHref: 'https://wa.me/919901641122',
  email: 'info@kaarya.co',
  address: [
    'Kaarya Shared Workspaces',
    '2nd Floor, Eterna, 788, 15th Cross Rd',
    'Nagarjun Enclave, 1st Phase, J.\u00a0P.\u00a0Nagar',
    'Bengaluru, Karnataka 560078',
  ],
  hours: 'Mon – Fri · 9:00 AM – 9:00 PM',
  // Google Business Profile listing "Kaarya Shared Workspaces".
  googleBusiness: 'https://share.google/sNoNhbz4NyQ3MdNZB',
  mapEmbed: 'https://www.google.com/maps?q=Kaarya+Shared+Workspaces,+Eterna,+788,+15th+Cross+Rd,+J.+P.+Nagar+1st+Phase,+Bengaluru+560078&output=embed',
  social: {
    instagram: 'https://www.instagram.com/kaarya.co/',
    linkedin: 'https://www.linkedin.com/company/kaarya-shared-workspaces/',
  },
  // Google Apps Script web app URL (see apps-script/README.md). Bookings go to the Google Sheet
  // and are emailed to the team. Left empty, the form opens a pre-filled email instead.
  bookingEndpoint: 'https://script.google.com/macros/s/AKfycbwRsb2b4SrOTufFI_s15mp8YhbyaQSIdoxbirfpeYIECZaZrFtVdONSDwLOnGEVot07og/exec',
};

export const nav = [
  { to: '/about', label: 'About' },
  { to: '/spaces', label: 'Spaces' },
  { to: '/events', label: 'Events' },
  { to: '/policies', label: 'Policies' },
];

// Per-route SEO, used both at prerender time and on client navigation.
export const meta = {
  '/': {
    title: 'Kaarya Coworking Space – JP Nagar, Bangalore',
    description:
      'Kaarya is Bangalore’s first traditionally native coworking space in JP Nagar. Day passes, monthly memberships, meeting rooms and a 10,000 sq. ft. workspace rooted in Indian design.',
  },
  '/about': {
    title: 'About Kaarya – Where Tradition Meets Tomorrow | Coworking in Bangalore',
    description:
      'Kaarya means action in Sanskrit. Discover the story behind Bangalore’s first culturally rooted coworking space.',
  },
  '/spaces': {
    title: 'Coworking Spaces & Meeting Rooms in JP Nagar, Bangalore | Kaarya',
    description:
      'Explore Kaarya’s 10,000 sq. ft. coworking space in JP Nagar, Bangalore: flexible desks, private cabins, a coffee & chai café, parking and meeting rooms bookable by the hour.',
  },
  '/events': {
    title: 'Events, Workshops & Meetups in Bangalore | Kaarya Coworking',
    description:
      'Industry talks, networking evenings, skill-building workshops and cultural celebrations every week at Kaarya Coworking, JP Nagar.',
  },
  '/book': {
    title: 'Book a Coworking Space or Tour | Kaarya JP Nagar, Bangalore',
    description:
      'Book a day pass, monthly membership, meeting room or a tour of Kaarya Coworking Space in JP Nagar, Bangalore.',
  },
  '/policies': {
    title: 'Booking, Usage, Payment & Refund Policies | Kaarya Coworking',
    description:
      'Everything members should know about bookings, workspace etiquette, payments and refunds at Kaarya Coworking Space, Bangalore.',
  },
};

export const offeringsTicker = [
  'Podcast Room',
  'Comfort Seating',
  'Café',
  'Managerial Cabins',
  'Board & Conference Rooms',
  'High-speed Internet',
  'Event Spaces',
];

export const home = {
  hero: {
    eyebrow: 'Kaarya Coworking Space — JP Nagar, Bangalore',
    title: 'Your co-working space, reimagined',
    body: 'For Indians, work isn’t just a job; it’s a sacred act of creation. So, we nurtured a coworking space that echoes this sentiment, celebrating hard work, innovation, and the pursuit of your true calling.',
  },
  rooted: {
    eyebrow: 'Rooted in Tradition',
    quote: 'Work is a form of worship, and your workspace should reflect that.',
    body: 'Tired of the same old, glass-walled co-working spaces that feel more like tech campuses? At Kaarya, we believe work is a form of worship, and your workspace should reflect that.',
  },
  who: {
    eyebrow: 'Who We Are',
    title: 'Perfect blend of modern and traditional',
    body: [
      'We have all the essentials you would want in your co-working space, from high-speed Wi-Fi, comprehensively equipped offices, parking, and meeting rooms, to a café corner serving freshly brewed chai and coffee all day!',
      'Escape the ordinary cubicle and step into a coworking space where tradition meets innovation. Breathe in the calming melodies, surrounded by beautiful Indian design elements and a sense of community that will make working truly enjoyable.',
    ],
  },
  plans: {
    eyebrow: 'Plans',
    items: [
      {
        name: 'Monthly Membership',
        icon: 'calendar',
        perfectFor: 'Entrepreneurs, freelancers, and businesses seeking a regular workspace.',
        points: ['Monthly, quarterly & annual terms', 'Hot desk, dedicated desk or private cabin', 'Wi-Fi, utilities, tea & coffee included'],
      },
      {
        name: 'Day Pass',
        icon: 'sun',
        perfectFor: 'Occasional users, remote workers, or people needing temporary workspace.',
        points: ['Walk in, plug in, get to work', 'Full access to shared amenities', 'Book 24 hours in advance'],
      },
    ],
  },
  why: {
    eyebrow: 'Why Kaarya',
    title: 'Why Kaarya co-working space in Bangalore?',
    items: [
      { icon: 'flex', title: 'Flexible Options', body: 'Choose between daily passes and monthly plans with no hidden fees or long-term commitments.' },
      { icon: 'key', title: 'Complete Access', body: 'Work on your own schedule with complete access to the co-working space and available amenities.' },
      { icon: 'diya', title: 'A Touch of Home', body: 'Forget sterile walls and harsh lighting. Immerse yourself in calming music, hand-painted art, and warm hospitality that reflects the spirit of India.' },
      { icon: 'community', title: 'Community that Cares', body: 'We are not just a collection of desks; we are a vibrant community of passionate individuals who support, collaborate, and celebrate each other’s successes.' },
      { icon: 'spark', title: 'Events that Spark', body: 'We host workshops, talks, and meetups that feed your mind and fuel your hustle. Connect with inspiring individuals, learn new skills, and find your tribe.' },
    ],
  },
  cta: {
    title: 'Experience Kaarya firsthand.',
    body: 'Call now to get a tour of our incredible coworking space.',
  },
};

export const about = {
  hero: {
    eyebrow: 'About Us',
    title: 'Where tradition meets tomorrow',
  },
  meaning: {
    word: 'Kaarya',
    script: 'कार्य',
    body: 'With its roots in Sanskrit, Kaarya means action or work. It signifies the power to turn ideas into reality, the energy that fuels progress, and the satisfaction of seeing your efforts come to fruition.',
  },
  story: {
    eyebrow: 'Our Story',
    title: 'Born from a simple observation',
    body: [
      'Kaarya wasn’t born out of a boardroom meeting but from a simple observation: Indians have a unique way of working and thriving. We believe that creativity blossoms when nurtured by familiarity and that inspiration strikes when surrounded by cultural touchstones.',
      'We are the first traditionally native co-working space in Bangalore, and we are proud to offer a work environment that is uniquely Indian, undeniably comfortable, and infinitely inspiring.',
    ],
  },
  mission: {
    eyebrow: 'Our Mission',
    title: 'A nationwide network of co-working spaces',
    body: 'Our mission is to empower the entrepreneurial spirit of India by establishing a network of culturally rich co-working spaces in all major metro cities across the nation. We aim to cultivate a national network of innovation hubs, fostering collaboration, connection, and growth for individuals and businesses across the country.',
  },
};

export const spaces = {
  hero: {
    eyebrow: 'The Kaarya Concept',
    title: 'A space designed just for you',
    body: 'Our 10,000 sq. ft. coworking space in Bangalore is carefully planned for your productivity and comfort. We have flexible workspaces, meeting rooms, a coffee & chai café, blazing-fast Wi-Fi, and even parking spaces!',
  },
  stats: [
    { value: '10,000', unit: 'sq. ft.', label: 'of thoughtfully planned space' },
    { value: '5', unit: 'days', label: 'a week, 9 AM to 9 PM' },
    { value: '1', unit: 'café', label: 'for your chai, coffee & more' },
  ],
  features: [
    { icon: 'pin', image: 'reception', title: 'Prime Location', body: 'Nestled in the heart of JP Nagar, Bangalore, our co-working space offers easy access and excellent connectivity, ensuring you are never far from the essentials. It’s the perfect spot to hustle, collaborate, and make things happen.' },
    { icon: 'cup', image: 'cafeteria', title: 'Coffee & Chai Café', body: 'Treat yourself to freshly brewed coffee or tea anytime you need a pick-me-up. Our café corner is the perfect spot to recharge, catch up with fellow members, or take a well-earned break between tasks.' },
    { icon: 'desk', image: 'open-seating', title: 'Professional Office Facilities', body: 'Whether you need a dedicated desk, hot desk, or private office, we have a coworking space to suit your work needs. Our ergonomic furniture and organised workstations guarantee a comfortable and productive environment.' },
    { icon: 'community', image: 'open-seating-2', title: 'Community & Events', body: 'Forget isolated cubicles! We help you get together with like-minded individuals through our cultural events, workshops, networking opportunities, and more to build your network and spark new collaborations.' },
    { icon: 'flex', image: 'open-seating-3', title: 'Budget-Friendly & Flexible', body: 'Whether you are a freelancer, startup, or seasoned professional, we have affordable monthly packages as well as day passes to suit your needs. Every journey is different, and we are here to make sure you truly enjoy your work.' },
  ],
  offerings: {
    eyebrow: 'Offerings',
    title: 'Workspace, your way',
    items: [
      { title: 'Hybrid', body: 'Devise a hybrid solution using a combination of our dedicated spaces and subscription-based access solutions.' },
      { title: 'Flexible', body: 'Optimise your property portfolio with flexible terms: up-size or right-size as needed with flexible and agile terms and solutions.' },
      { title: 'Managed & Customized', body: 'We provide the highest level of exclusivity and privacy with a selection of assets, design, build, workspace branding, conference rooms, executive offices, security and customised IT solutions based on your team’s work styles, design preferences and business needs.' },
    ],
    also: [
      'High-speed internet',
      'Comfortable workstations',
      'Private meeting rooms',
      'Event spaces',
      'Networking with a dynamic community',
      'Quarterly startup incubations & seed funding',
      'Complimentary artisanal coffee & refreshments',
    ],
  },
  groups: {
    eyebrow: 'Our Spaces',
    title: 'A room for every kind of work',
    body: 'Meet, host, focus or record: each space at Kaarya is designed for what you need to get done.',
    items: [
      {
        id: 'meeting-room',
        name: 'Meeting Room',
        title: 'Brainstorm, strategize, seal the deal',
        body: 'Forget the sterile white walls and fluorescent lighting of ordinary conference spaces. At Kaarya, even your meetings get a vibrant cultural twist. Step into innovation and tradition in our thoughtfully designed meeting rooms, where creativity thrives and ideas take flight.',
        images: ['conference-room'],
        points: [
          { icon: 'sizes', label: 'Huddle rooms to conference rooms' },
          { icon: 'wifi', label: 'Wi-Fi, whiteboard or projector' },
          { icon: 'screen', label: 'AV for seamless video calls' },
          { icon: 'sun', label: 'Airy rooms with natural light' },
          { icon: 'clock', label: 'Bookable by the hour' },
        ],
        cta: 'Book a Meeting Room',
        plan: 'Meeting Room',
      },
      {
        id: 'event-space',
        name: 'Event Space',
        title: 'Host gatherings that spark ideas',
        body: 'Our event hall’s tiered seating turns into an amphitheatre for talks, workshops, meetups and cultural celebrations. Warm wood, exposed brick and natural light make every gathering feel like an occasion, not a conference.',
        images: ['event-hall', 'happening-event-2', 'happening-event'],
        points: [
          { icon: 'community', label: 'Tiered amphitheatre seating' },
          { icon: 'mic', label: 'Talks, workshops & meetups' },
          { icon: 'lotus', label: 'Cultural celebrations & food fests' },
          { icon: 'calendar', label: 'Host your own event' },
        ],
        cta: 'Enquire About Events',
        plan: 'Event Space',
      },
      {
        id: 'private-cabins',
        name: 'Private Cabins',
        title: 'A door you can close',
        body: 'Glass-walled managerial cabins for teams that need focus and privacy, with the community just outside. Move into a ready-to-use cabin, or let us customise one around your team’s work style, branding and IT needs.',
        images: ['private-cabin'],
        points: [
          { icon: 'key', label: 'Managerial & executive cabins' },
          { icon: 'desk', label: 'Ergonomic, organised workstations' },
          { icon: 'tools', label: 'Branding & custom IT on request' },
          { icon: 'flex', label: 'Monthly, quarterly or annual terms' },
        ],
        cta: 'Ask About Cabins',
        plan: 'Private Cabin',
      },
      {
        id: 'podcast-space',
        name: 'Podcast Space',
        title: 'Record your next conversation',
        body: 'A tucked-away, brick-walled room for recording podcasts, interviews and conversations, away from the buzz of the main floor. Pull up a hand-carved chair, hit record and let the ideas flow.',
        images: ['podcast-space'],
        points: [
          { icon: 'mic', label: 'Podcasts, interviews & voice-overs' },
          { icon: 'diya', label: 'Quiet, tucked-away room' },
          { icon: 'wifi', label: 'High-speed internet' },
        ],
        cta: 'Book the Podcast Space',
        plan: 'Podcast Space',
      },
    ],
  },
  gallery: ['hallway', 'lounge', 'signage', 'bar', 'nook', 'lounge-wide'],
  cta: {
    title: 'Experience Kaarya',
    body: 'Come experience the energy, connect with like-minded peers, and discover a space that inspires your success.',
  },
};

export const events = {
  hero: {
    eyebrow: 'Events',
    title: 'Expand your network, gain new insights',
    body: 'We host a diverse range of events at our co-working space every week, designed to connect, educate, and empower our members and the broader Bangalore community.',
  },
  intro: 'Here’s what you can expect',
  items: [
    { icon: 'mic', title: 'Industry Talks & Workshops', body: 'Learn from renowned speakers and industry experts on a variety of topics relevant to entrepreneurs, freelancers, and professionals of all levels.' },
    { icon: 'handshake', title: 'Networking Events', body: 'Mingle with like-minded individuals, build connections, and expand your professional network at our engaging meetings and social gatherings.' },
    { icon: 'tools', title: 'Skill-Building Workshops', body: 'Sharpen your skills and gain practical knowledge through workshops covering topics like marketing, finance, productivity, and more.' },
    { icon: 'lotus', title: 'Cultural Celebrations', body: 'Immerse yourself in Indian culture through traditional art demonstrations, music performances, and food fests.' },
  ],
  cta: {
    title: 'Explore our weekly events calendar',
    body: 'From insightful workshops and industry talks to engaging meets and cultural celebrations, there’s something for everyone at Kaarya.',
  },
};

export const book = {
  hero: {
    eyebrow: 'Booking',
    title: 'Book your co-working space',
    body: 'Experience a vibrant community, modern amenities, and a unique blend of Indian heritage and innovation. Choose your plan, book online, and start working in your new haven.',
  },
  plans: ['Book a Tour', 'Day Pass', 'Monthly Membership', 'Meeting Room', 'Private Cabin', 'Event Space', 'Podcast Space'],
  // Only these can be booked on Saturdays and Sundays; the calendar blocks weekends for everything else.
  weekendPlans: ['Event Space'],
  notes: [
    'Bookings are made at least 24 hours in advance.',
    'Cancel up to 12 hours before at no charge.',
    'Groups larger than 6 need 48 hours’ notice.',
    'Desk and room bookings are capped at 8 hours a day.',
  ],
};

export const policies = [
  {
    id: 'booking',
    title: 'Booking Policy',
    items: [
      ['Eligibility', 'Only registered members or authorized guests may book and use the coworking space.'],
      ['Advance Booking', 'Bookings must be made at least 24 hours in advance through the official website, app, or reception desk.'],
      ['Cancellation', 'Users may cancel a booking up to 12 hours before the scheduled time with no penalty. Later cancellations may incur a fee equivalent to one hour’s usage.'],
      ['No-Show Policy', 'Three consecutive no-shows may result in temporary suspension of booking privileges.'],
      ['Duration Limits', 'Desk and conference room bookings are limited to 8 hours per day per user.'],
      ['Group Bookings', 'For groups larger than 6 people, advance notice of 48 hours is required, subject to space availability.'],
    ],
  },
  {
    id: 'usage',
    title: 'Usage Policy',
    items: [
      ['Check-In/Out', 'Members must check-in at reception or via the app upon arrival and check-out when leaving.'],
      ['Operating Hours', 'The coworking space is open Monday to Friday from 9:00 AM to 9:00 PM. Weekends are reserved for Event Space bookings. Special arrangements for after-hours access must be requested and approved in advance.'],
      ['Workspace Etiquette', 'Maintain a quiet environment; use headphones for calls and video meetings. Clean your workspace after use and dispose of waste in designated bins. Shared resources (printers, café, conference rooms) should be used considerately and left clean for the next user.'],
      ['Guest Policy', 'Members are allowed to bring one guest. Additional guests must be registered in advance and may be subject to a fee.'],
      ['Food & Beverages', 'Light snacks and beverages are permitted. Meals should be consumed only in designated dining areas.'],
      ['Prohibited Activities', 'Smoking, alcohol, illegal substances, and disruptive behavior are strictly prohibited.'],
      ['Personal Belongings', 'The coworking space is not responsible for lost or stolen items; members are advised to keep valuables secure.'],
      ['Internet Usage', 'High-speed WiFi is available, but downloading pirated or illegal content is strictly prohibited.'],
      ['Facilities Care', 'Report any damages to staff immediately. Users may be held accountable for damages caused during their occupancy.'],
    ],
  },
  {
    id: 'safety',
    title: 'Health & Safety',
    items: [
      ['Emergency Procedures', 'Familiarize yourself with fire exits and emergency protocols displayed at the venue.'],
      ['Hygiene', 'Sanitizers are provided throughout the facility. Please maintain personal hygiene and avoid using the facility if unwell.'],
    ],
  },
  {
    id: 'payment',
    title: 'Payment Policy',
    items: [
      ['Payment Methods', 'Members can pay using UPI, credit/debit cards, net banking, or through in-app payments. Cash payments are accepted at selected locations only.'],
      ['Flexible Plans', 'Payment frequency options include monthly, quarterly, and annual plans, allowing members to choose what best fits their requirements.'],
      ['Comprehensive Billing', 'Fees include workspace rental and basic amenities (WiFi, utilities, tea/coffee). Customizations or extra services (locker rentals, parking, extended meeting room usage) are charged separately.'],
      ['Invoicing', 'Invoices are generated after every successful payment and are emailed to the registered member.'],
      ['Due Dates', 'Payments for ongoing memberships are due by the 5th of each month. Late payments may result in a late fee and/or suspension of access.'],
      ['Late Payment', 'Overdue balances beyond 7 days may result in suspension of access.'],
      ['Security Deposit', 'For long-term or private space bookings, a refundable security deposit equivalent to one month’s rent may be required.'],
    ],
  },
  {
    id: 'refunds',
    title: 'Refund Policy',
    items: [
      ['Day Passes & Short-Term Bookings', 'Cancellations made at least 12 hours prior to the booking time are eligible for a full refund. Cancellations after this period are not refunded.'],
      ['Memberships', 'Monthly memberships are non-refundable once the billing cycle has started.'],
      ['Long-Term Plans', 'For quarterly or annual plans, members who cancel their plans with more than 30 days’ notice may receive a partial pro-rata refund (minus any applicable discounts or promotional offers availed).'],
      ['Security Deposits', 'Refunded within 15 business days after membership termination, provided no outstanding dues or damages.'],
      ['Refund Process', 'Refunds are processed using the original payment method within 5–15 working days, depending on the bank or payment gateway.'],
      ['Non-Refundable Fees', 'Registration/setup charges, penalties for no-shows/late cancellations, and charges for customizations are non-refundable.'],
    ],
  },
  {
    id: 'amendments',
    title: 'Amendments',
    items: [
      ['Policy Changes', 'The management reserves the right to amend these policies at any time; members will be notified of significant changes.'],
    ],
  },
];

export const images = {
  hall: { src: '/media/hall.jpg', alt: 'Kaarya’s main work hall with carved wooden ceiling beams, crystal chandeliers and a live-edge counter' },
  signage: { src: '/media/signage.jpg', alt: 'Copper KAARYA lettering suspended against a textured curved wall and exposed brick' },
  lounge: { src: '/media/lounge.jpg', alt: 'Lounge with carved wooden sofas in crane-print upholstery beside a wrought-iron screen and brick wall' },
  'lounge-wide': { src: '/media/lounge-wide.jpg', alt: 'Raised lounge platform with antique-style sofas and wood-panelled walls' },
  nook: { src: '/media/nook.jpg', alt: 'A quiet work nook with a laptop and notebook on a wooden table under a pendant lamp' },
  counter: { src: '/media/counter.jpg', position: '72% 50%', alt: 'Live-edge wooden counter with high chairs by the window and a terracotta flask' },
  tables: { src: '/media/tables.jpg', position: '78% 50%', alt: 'Teak tables and cream upholstered chairs in a warmly lit workspace' },
  reception: { src: '/media/reception.jpg', width: 960, height: 1280, alt: 'Curved teak reception desk beside a textured pillar with KAARYA lettering and exposed brick' },
  cafeteria: { src: '/media/cafeteria.jpg', width: 960, height: 1280, alt: 'Cafeteria with teak dining tables, a live-edge counter, chandeliers and a coffee machine' },
  'open-seating': { src: '/media/open-seating.jpg', width: 960, height: 1280, alt: 'Teak work table and upholstered chair by a perforated white screen under a copper pendant lamp' },
  'open-seating-2': { src: '/media/open-seating-2.jpg', width: 960, height: 1280, alt: 'View through a wrought-iron screen to open seating, tiered platforms and long work tables' },
  'open-seating-3': { src: '/media/open-seating-3.jpg', width: 960, height: 1280, alt: 'Round teak table with cane-seated captain’s chairs near the reception' },
  'conference-room': { src: '/media/conference-room.jpg', width: 960, height: 1280, alt: 'Conference room with an eight-seat wooden table, ergonomic chairs and a light-filtering perforated screen' },
  'event-hall': { src: '/media/event-hall.jpg', width: 960, height: 1280, alt: 'Event hall with tiered stone seating, long tables and exposed brick' },
  'happening-event': { src: '/media/happening-event.jpg', width: 1280, height: 960, alt: 'A speaker addressing a packed room of attendees seated around long tables and on the floor' },
  'happening-event-2': { src: '/media/happening-event-2.jpg', width: 1280, height: 960, alt: 'A full house on the tiered seating listening to a talk in the Kaarya event hall' },
  'private-cabin': { src: '/media/private-cabin.jpg', width: 960, height: 1280, alt: 'Private cabin with frosted glass walls on a stone-tiled floor' },
  'podcast-space': { src: '/media/podcast-space.jpg', width: 960, height: 1280, alt: 'Podcast space with hand-carved wooden chairs and tables between curved exposed-brick walls' },
  hallway: { src: '/media/hallway.jpg', width: 960, height: 1280, alt: 'Stone-paved hallway curving into warm wooden flooring past brick-walled cabins' },
  bar: { src: '/media/bar.jpg', alt: 'Long work counter with wooden bar stools and chandeliers overhead' },
};

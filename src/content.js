// All copy and business details for the site live here, so edits never touch layout code.

export const site = {
  name: 'Kaarya',
  url: 'https://www.kaarya.co',
  tagline: 'Coworking Space – JP Nagar, Bangalore',
  // TODO: replace with the real phone number, email and street address before launch.
  phone: '+91 00000 00000',
  phoneHref: 'tel:+910000000000',
  whatsappHref: 'https://wa.me/910000000000',
  email: 'hello@kaarya.co',
  address: ['Kaarya Coworking Space', 'JP Nagar', 'Bengaluru, Karnataka'],
  hours: 'Mon – Sat · 8:00 AM – 8:00 PM',
  // TODO: paste the Google Business Profile link once it is connected.
  googleBusiness: 'https://www.google.com/maps/search/?api=1&query=Kaarya+Coworking+Space+JP+Nagar+Bangalore',
  mapEmbed: 'https://www.google.com/maps?q=Kaarya+Coworking+Space+JP+Nagar+Bangalore&output=embed',
  social: {
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/',
  },
  // Optional: set to a Formspree (or similar) endpoint to receive bookings directly.
  // Left empty, the booking form opens a pre-filled email instead.
  formEndpoint: '',
};

export const nav = [
  { to: '/about', label: 'About' },
  { to: '/spaces', label: 'Spaces' },
  { to: '/meeting-rooms', label: 'Meeting Rooms' },
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
      'Kaarya means action in Sanskrit. Meet the story and the architect, Ajay JS, behind Bangalore’s first culturally rooted coworking space.',
  },
  '/spaces': {
    title: 'Our Spaces – Hot Desks, Private Offices & Kitchen | Kaarya JP Nagar',
    description:
      'Explore Kaarya’s 10,000 sq. ft. coworking space in JP Nagar, Bangalore: flexible desks, private cabins, meeting rooms, a fully-equipped kitchen and parking.',
  },
  '/meeting-rooms': {
    title: 'Meeting Rooms in Bangalore – Bookable by the Hour | Kaarya',
    description:
      'Book naturally lit, tech-enabled meeting rooms in JP Nagar, Bangalore. Huddle rooms to conference rooms, with Wi-Fi, projector and AV for video calls.',
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
  'Dedicated Calling Booths',
  'Artisanal Coffee',
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
      'We have all the essentials you would want in your co-working space, from high-speed Wi-Fi, comprehensively equipped offices, parking, and meeting rooms, to a completely functional kitchen where you can make your favourite chai or coffee!',
      'Escape the ordinary cubicle and step into a coworking space where tradition meets innovation. Breathe in the calming melodies, surrounded by beautiful Indian design elements and a sense of community that will make working truly enjoyable.',
    ],
  },
  plans: {
    eyebrow: 'Plans',
    title: 'Monthly memberships & day passes',
    body: 'Whether you are a freelancer needing occasional workspace or a growing startup requiring dedicated space, we have options to suit your needs.',
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
  testimonials: {
    eyebrow: 'Members',
    title: 'Hear from our thriving community',
    body: 'Wondering what it’s like to work at Kaarya? Dive into our members’ experiences and discover why Kaarya is more than just a co-working space in Bangalore.',
    // PLACEHOLDER: replace with real member reviews (e.g. from Google Business) before launch.
    items: [
      { quote: 'The first coworking space that doesn’t feel like an office park. Chai on tap, music in the air, and I genuinely get more done here.', name: 'Member name', role: 'Independent designer' },
      { quote: 'We moved our five-person team in for a month and stayed for a year. The meeting rooms are flooded with light and clients love the space.', name: 'Member name', role: 'Startup founder' },
      { quote: 'Warm people, beautiful interiors and a community that actually shows up for each other’s events. It feels like home with better Wi-Fi.', name: 'Member name', role: 'Content creator' },
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
  founder: {
    eyebrow: 'The Architect Behind Kaarya',
    name: 'Ajay JS',
    body: [
      'After spending six years running a successful multi-disciplinary architecture firm, our founder, Ajay JS, like many, craved a workspace that fostered creativity and a sense of community.',
      'He poured his heart and soul into creating Kaarya. A space that blended the best of modern amenities with the rich cultural heritage of India.',
    ],
    quote: 'When you walk into Kaarya, you are not just entering a co-working space; you are stepping into the realisation of a dream built on the foundation of passion, purpose, and a whole lot of chai!',
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
    body: 'Our 10,000 sq. ft. coworking space in Bangalore is carefully planned for your productivity and comfort. We have flexible workspaces, meeting rooms, a fully-equipped kitchen, blazing-fast Wi-Fi, and even parking spaces!',
  },
  stats: [
    { value: '10,000', unit: 'sq. ft.', label: 'of thoughtfully planned space' },
    { value: '6', unit: 'days', label: 'a week, 8 AM to 8 PM' },
    { value: '1', unit: 'kitchen', label: 'for your chai, coffee & more' },
  ],
  features: [
    { icon: 'pin', image: 'hall', title: 'Prime Location', body: 'Nestled in the heart of JP Nagar, Bangalore, our co-working space offers easy access and excellent connectivity, ensuring you are never far from the essentials. It’s the perfect spot to hustle, collaborate, and make things happen.' },
    { icon: 'cup', image: 'counter', title: 'Fully-Equipped Kitchen', body: 'Treat yourself to freshly brewed coffee or tea anytime you need a pick-me-up and easy access to all the basic appliances you need to whip up something delicious whenever hunger strikes.' },
    { icon: 'desk', image: 'tables', title: 'Professional Office Facilities', body: 'Whether you need a dedicated desk, hot desk, or private office, we have a coworking space to suit your work needs. Our ergonomic furniture and organised workstations guarantee a comfortable and productive environment.' },
    { icon: 'community', image: 'lounge', title: 'Community & Events', body: 'Forget isolated cubicles! We help you get together with like-minded individuals through our cultural events, workshops, networking opportunities, and more to build your network and spark new collaborations.' },
    { icon: 'flex', image: 'bar', title: 'Budget-Friendly & Flexible', body: 'Whether you are a freelancer, startup, or seasoned professional, we have affordable monthly packages as well as day passes to suit your needs. Every journey is different, and we are here to make sure you truly enjoy your work.' },
    { icon: 'table', image: 'nook', title: 'Meeting Space on Demand', body: 'Have an important client meeting or presentation? Book one of our modern and well-equipped meeting rooms, perfect for presentations, workshops, or any collaboration needs.' },
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
      'Dedicated calling booths',
    ],
  },
  cta: {
    title: 'Experience Kaarya',
    body: 'Come experience the energy, connect with like-minded peers, and discover a space that inspires your success.',
  },
};

export const meetingRooms = {
  hero: {
    eyebrow: 'Meeting Rooms in Bangalore',
    title: 'Brainstorm, strategize, seal the deal',
    body: 'Forget the sterile white walls and fluorescent lighting of ordinary conference spaces. At Kaarya, even your meetings get a vibrant cultural twist. Step into innovation and tradition in our thoughtfully designed meeting rooms, where creativity thrives and ideas take flight.',
  },
  features: [
    { icon: 'sizes', title: 'Variety of Sizes', body: 'From intimate huddle rooms for brainstorming sessions to spacious conference rooms for presentations, we have spaces to fit your team size and meeting style.' },
    { icon: 'wifi', title: 'Fully Equipped', body: 'Each room comes equipped with high-speed Wi-Fi, a whiteboard or projector, and comfortable seating.' },
    { icon: 'screen', title: 'Tech-Enabled', body: 'Need to present remotely? Our rooms have the necessary AV equipment to facilitate seamless video conferencing.' },
    { icon: 'sun', title: 'Natural Light', body: 'Experience the difference that natural light can make in your next meeting with our airy and spacious meeting rooms.' },
    { icon: 'clock', title: 'Bookable by the Hour', body: 'Pay competitive rates only for the time you need, making our meeting rooms perfect for both short and extended sessions.' },
  ],
  cta: {
    title: 'Make your next meeting a success',
    body: 'Ditch the dull conference rooms and step into a space brimming with natural light and creative energy.',
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
  plans: ['Book a Tour', 'Day Pass', 'Monthly Membership', 'Meeting Room', 'Private Cabin', 'Event Space'],
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
      ['Operating Hours', 'The coworking space is open Monday to Saturday from 8:00 AM to 8:00 PM. Special arrangements for after-hours access must be requested and approved in advance.'],
      ['Workspace Etiquette', 'Maintain a quiet environment; use headphones for calls and video meetings. Clean your workspace after use and dispose of waste in designated bins. Shared resources (printers, kitchen, conference rooms) should be used considerately and left clean for the next user.'],
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
  counter: { src: '/media/counter.jpg', alt: 'Live-edge wooden counter with high chairs by the window and a terracotta flask' },
  tables: { src: '/media/tables.jpg', position: '78% 50%', alt: 'Teak tables and cream upholstered chairs in a warmly lit workspace' },
  bar: { src: '/media/bar.jpg', alt: 'Long work counter with wooden bar stools and chandeliers overhead' },
};

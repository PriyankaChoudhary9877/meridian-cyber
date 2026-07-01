export const nav = [
  { label: 'Services', href: '/#services' },
  { label: 'Process', href: '/#process' },
  { label: 'Industries', href: '/#industries' },
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/about' },
];

export const services = [
  {
    code: 'MDR',
    title: 'Managed Detection & Response',
    description:
      'A team watching your environment around the clock, correlating signal across endpoints, identity, and cloud, and acting before an incident becomes a breach.',
    points: ['24/7 SOC coverage', 'Mean time to contain under 18 minutes', 'Direct analyst access, no ticket queue'],
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop',
  },
  {
    code: 'PEN',
    title: 'Penetration Testing',
    description:
      'Manual testing of your networks, applications, and cloud configuration by people who have spent careers breaking into systems for a living.',
    points: ['Network, web, and API coverage', 'Retesting included at no extra cost', 'Findings ranked by business impact'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop',
  },
  {
    code: 'GRC',
    title: 'Governance, Risk & Compliance',
    description:
      'Audit-ready programs built around the frameworks your customers and regulators actually ask about, without the binder full of policies no one reads.',
    points: ['SOC 2, ISO 27001, HIPAA, PCI DSS', 'Continuous control monitoring', 'Auditor liaison included'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop',
  },
  {
    code: 'IR',
    title: 'Incident Response',
    description:
      'When something has already gone wrong, a retained team that can be on a call within the hour to contain, investigate, and help you recover.',
    points: ['One-hour response SLA', 'Forensics and root cause reporting', 'Coordination with legal and insurers'],
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop',
  },
  {
    code: 'CLD',
    title: 'Cloud Security',
    description:
      'Configuration review and continuous monitoring across AWS, Azure, and GCP, focused on the misconfigurations that actually get exploited.',
    points: ['Identity and access hardening', 'Infrastructure-as-code review', 'Drift detection and alerts'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop',
  },
  {
    code: 'ADV',
    title: 'Virtual CISO Advisory',
    description:
      'Senior security leadership for organizations that need the judgment of a CISO without carrying a full-time executive headcount.',
    points: ['Board and exec reporting', 'Security roadmap and budget planning', 'Vendor and tooling review'],
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop',
  },
];

export const process = [
  {
    n: '01',
    title: 'Assess',
    body: 'We map your environment, identity surface, and existing controls to understand where real exposure sits, not just what a scanner flags.',
  },
  {
    n: '02',
    title: 'Prioritize',
    body: 'Findings are ranked by what would actually hurt your business, so your team fixes the five things that matter before the fifty that don\u2019t.',
  },
  {
    n: '03',
    title: 'Contain',
    body: 'For active threats, our analysts isolate affected systems and cut off attacker access while preserving evidence for investigation.',
  },
  {
    n: '04',
    title: 'Remediate',
    body: 'We work alongside your engineers to close the gap, whether that\u2019s a config change, a patch cycle, or a process your team adopts going forward.',
  },
  {
    n: '05',
    title: 'Report',
    body: 'Clear documentation for your team and your board: what happened, what we did about it, and what it means for next quarter\u2019s plan.',
  },
];

export const industries = [
  { name: 'Financial Services', detail: 'Core banking, payments, and trading infrastructure under continuous regulatory scrutiny.' },
  { name: 'Healthcare', detail: 'Patient data, connected devices, and HIPAA obligations across distributed care networks.' },
  { name: 'SaaS & Technology', detail: 'Multi-tenant platforms where a single misconfiguration can expose every customer at once.' },
  { name: 'Critical Infrastructure', detail: 'Operational technology environments where downtime carries physical consequences.' },
  { name: 'Retail & E-commerce', detail: 'Payment card environments and customer data at scale during peak transaction periods.' },
  { name: 'Public Sector', detail: 'Agencies operating under FedRAMP, CJIS, and state-level data protection mandates.' },
];

export const stats = [
  { value: 412, suffix: '+', label: 'Enterprise clients defended' },
  { value: 18, suffix: ' min', label: 'Average time to contain' },
  { value: 99.98, suffix: '%', label: 'SOC uptime since 2016' },
  { value: 6, suffix: '', label: 'Continents with active coverage' },
];

export const testimonials = [
  {
    quote:
      'They found a privilege escalation path our own team had missed twice. The fix shipped before our next board meeting, and the writeup was something I could actually hand to the audit committee.',
    name: 'Renata Oyelaran',
    role: 'CISO, Northbridge Financial',
  },
  {
    quote:
      'What changed for us wasn\u2019t the tooling, it was having someone pick up the phone at 2am who already understood our environment. That\u2019s the part you can\u2019t buy off a feature list.',
    name: 'Daniel Cho',
    role: 'VP Engineering, Lattice Health',
  },
  {
    quote:
      'Our SOC 2 renewal took six weeks instead of four months because the controls were already monitored, not retrofitted the week before the audit.',
    name: 'Priya Nathan',
    role: 'Head of IT, Forge Commerce',
  },
];

export const caseStudies = [
  {
    title: 'Containing a ransomware intrusion before encryption began',
    client: 'Regional healthcare network',
    summary:
      'Detected lateral movement from a compromised vendor account within four minutes of first contact, isolated affected hosts, and closed the access path before any data was encrypted.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1600&auto=format&fit=crop',
    tag: 'Incident Response',
  },
  {
    title: 'Cutting SOC 2 renewal time from four months to six weeks',
    client: 'Series C SaaS platform',
    summary:
      'Replaced a spreadsheet-based compliance process with continuous control monitoring, giving the audit team live evidence instead of a quarter-end scramble.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop',
    tag: 'Compliance',
  },
  {
    title: 'Closing a cloud misconfiguration exposed to the public internet',
    client: 'Logistics and fulfillment company',
    summary:
      'A routine cloud review surfaced an unauthenticated storage bucket holding shipment manifests. Remediated and re-tested within nine hours of discovery.',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1600&auto=format&fit=crop',
    tag: 'Cloud Security',
  },
];

export const blogPosts = [
  {
    title: 'Why most breaches start with identity, not malware',
    excerpt: 'A look at three years of incident data and what it tells us about where defensive budgets should actually go.',
    date: 'May 14, 2026',
    readTime: '7 min read',
  },
  {
    title: 'Reading a SOC 2 report like an attacker would',
    excerpt: 'The sections most reviewers skip, and why they\u2019re the ones that matter most.',
    date: 'April 22, 2026',
    readTime: '5 min read',
  },
  {
    title: 'What changes when your incident responder is on retainer',
    excerpt: 'The difference between hiring help after an incident and already having it on the line.',
    date: 'March 9, 2026',
    readTime: '6 min read',
  },
];

export const faqs = [
  {
    q: 'How quickly can you respond to an active incident?',
    a: 'Retained clients reach a live analyst within the hour, any time of day. For new clients without a retainer, we typically begin triage within four hours of first contact, depending on current case load.',
  },
  {
    q: 'Do you replace our internal security team or work alongside them?',
    a: 'Most clients keep their internal team and use us to extend coverage, whether that\u2019s overnight monitoring, specialized testing, or surge capacity during an incident. We build around your existing structure rather than replacing it.',
  },
  {
    q: 'Which compliance frameworks do you support?',
    a: 'SOC 2, ISO 27001, HIPAA, PCI DSS, and FedRAMP are the ones we work with most often. If you\u2019re working toward something less common, ask, and we\u2019ll tell you directly whether it\u2019s a fit.',
  },
  {
    q: 'How is pricing structured?',
    a: 'Managed detection and advisory work is priced as a monthly retainer based on environment size. Penetration testing and assessments are scoped and quoted per engagement. You\u2019ll get a fixed number before any work begins.',
  },
  {
    q: 'Can you work with our existing security tools?',
    a: 'Yes. We integrate with the major SIEM, EDR, and cloud security platforms already in use across our client base, and we\u2019ll tell you upfront if something in your stack needs to change.',
  },
];

export const tickerEvents = [
  '02:14:09  endpoint isolated  host-finance-prd-12',
  '02:14:41  anomalous auth blocked  region: ap-southeast',
  '02:15:03  threat signature matched  CVE-2026-31142',
  '02:15:58  lateral movement contained  segment: payments-vpc',
  '02:16:22  credential rotation triggered  service: identity-core',
  '02:17:01  alert triaged  severity: high  analyst: on-call',
  '02:17:45  patch deployment verified  cluster: edge-eu-1',
];

export const trustedCompanies = [
  'Northbridge Financial', 'Lattice Health', 'Forge Commerce', 'Halyard Logistics', 'Cobalt Insurance', 'Meridian Public Schools',
];

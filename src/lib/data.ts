export type CaseStudy = {
  slug: string;
  index: string;
  title: string;
  client: string;
  tagline: string;
  year: string;
  sector: string;
  role: string;
  type: string;
  summary: string;
  problem: string;
  pullQuote?: string;
  pullQuoteAttribution?: string;
  approach: string[];
  outcome: string;
  metrics?: { label: string; value: string }[];
  tools?: string;
  /**
   * Deeper detail rendered below the core narrative. Each section may carry
   * its own imagery so a screen or diagram sits with the point it illustrates.
   */
  sections?: {
    heading: string;
    body?: string;
    items?: string[];
    /**
     * Numbered callouts tying a specific point on the screenshot to an
     * explanation and the design-pattern/heuristic it follows: renders as
     * numbered pins on the image (positioned by x/y percent) matched to a
     * numbered list with a pattern tag alongside the image, instead of a
     * plain bullet list. Use instead of `items` when `media.sideBySide` is set.
     */
    callouts?: {
      text: string;
      tag: string;
      /** Position of the matching pin on the image, as a percent from the left/top. */
      x: number;
      y: number;
    }[];
    media?: {
      images: {
        src: string;
        alt: string;
        label?: string;
        w: number;
        h: number;
        /** Render at full container width uncropped: for desktop/dashboard screens, not narrow phone shots. */
        full?: boolean;
      }[];
      /** Fit each image uncropped within its frame instead of cropping to a shared ratio: for designed graphics (posters, screenshots) where cropping would cut off content. */
      contain?: boolean;
      /** Render the heading/body/items in one column and the image in an adjacent column, instead of stacking the image full-width below the text. Keeps tall single screenshots from eating a whole scroll with little text visible alongside. */
      sideBySide?: boolean;
      caption?: string;
    };
    /** Renders a row of persona cards (portrait + quote + pains/gains) instead of items/media. */
    personas?: {
      name: string;
      subtitle?: string;
      quote: string;
      pains: string[];
      gains: string[];
      image: string;
      imageAlt: string;
      w: number;
      h: number;
    }[];
  }[];
  image: string;
  imageAlt: string;
  /** Cover is already a finished graphic (illustration/diagram): skip the grayscale + duotone photo treatment. */
  vivid?: boolean;
  /** Signature colour for this project: drives its duotone, mark, and case page. */
  accent: string;
  nda?: boolean;
  /** Shown as a small italic note under the header meta, e.g. confidentiality/anonymisation terms. */
  confidentialityNote?: string;
  /** Everything past the overview (problem, approach, sections, outcome, metrics) is withheld server-side until a password is entered. */
  locked?: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "mmbl",
    index: "01",
    title: "MMBL Dost App Redesign",
    client: "MMBL (Mobilink Microfinance Bank) × Ideate Innovation",
    tagline: "A ground-up redesign of MMBL's Dost app, grounded in field research with Pakistan's least-served customers.",
    year: "2024–2025",
    sector: "Fintech / Financial Inclusion",
    role: "UI/UX Design Lead & Researcher",
    type: "End-to-end product design",
    summary:
      "Mobilink Microfinance is one of Pakistan's largest digital banks, but a wave of negative feedback was pointing at something a new feature couldn't fix. People didn't trust the app, and a large part of the user base couldn't really use it. Many of these customers have low digital literacy, low vision, or low numeracy, and some are using a banking app for the first time.",
    problem:
      "MMBL's brief asked for a redesign, but the negative feedback pointed somewhere deeper. It wasn't about adding to the app. It was about making it clear, usable, and trustworthy for the people who find banking hardest, at the exact moments where money was on the line.",
    pullQuote: "The brief needed a redesign. The real job was to make people trust it and use it.",
    approach: [
      "Start in the field, not in Figma: a heuristic audit, stakeholder interviews, and 20 hours with customers surfaced the real problems, then rebuild the conventional app around trust and access.",
      "Then extend the same tested foundation into a full Sharia-compliant experience, without forking the product.",
    ],
    outcome:
      "A banking product that treats comprehension as a core design constraint, not an accessibility afterthought, built for the customer MMBL actually serves, across both conventional and Islamic banking, and grounded in research the team could point back to for every decision.",
    metrics: [
      { label: "Interviews", value: "20+" },
      { label: "Locations", value: "3" },
      { label: "Moderated tests", value: "10" },
    ],
    tools: "Figma · Maze",
    sections: [
      {
        heading: "Part One: rebuilding the core app around trust and access",
        body: "To start, we ran an internal heuristic audit, interviewed stakeholders, and spent 20 hours testing the app in the field with 15 customers. The same three problems came up again and again.",
        items: [
          "App frustrations: people valued high transfer limits and loans, but hit constant friction in onboarding and confusing content.",
          "Trust & technical issues: slow OTPs, crashes, and unclear errors eroded trust and pushed users toward competitor apps.",
          "Demand for new tools: strong appetite for digitised loan management, repayment calculators, installment reminders, and transparent fees.",
        ],
        media: {
          images: [
            {
              src: "/work/mmbl/field-research.jpg",
              alt: "Field research session with a Dost customer, reviewing the app on a mobile phone.",
              w: 2000,
              h: 1246,
            },
            {
              src: "/work/mmbl/loan-detail-heatmap.jpg",
              alt: "A loan detail screen and its usability-testing heatmap, showing where attention landed.",
              w: 2000,
              h: 1361,
            },
          ],
          caption: "Twenty hours in the field with real customers, testing real loan screens, not a lab study.",
        },
      },
      {
        heading: "We chose legible over flashy",
        body: "An early direction used gradient-filled icons: modern in a review, but muddy on the low-resolution, small screens most of these customers use. We moved to flat, high-contrast icons that hold up at small sizes and pass accessibility standards. Less flashy, far more usable.",
        media: {
          images: [
            {
              src: "/work/mmbl/icons-explored.jpg",
              alt: "An early gradient-filled icon set, explored but not shipped.",
              label: "Explored, not shipped",
              w: 2000,
              h: 1093,
            },
            {
              src: "/work/mmbl/icons.jpg",
              alt: "The flat, high-contrast MMBL icon set that shipped.",
              label: "Shipped",
              w: 2000,
              h: 1121,
            },
          ],
          contain: true,
          caption: "Gradient icons looked modern but blurred on low-res screens; the flat set held up at small sizes and passed contrast checks.",
        },
      },
      {
        heading: "Accessibility, proven",
        body: "Accessibility was a constraint we tested against, not a checkbox after the fact. Every colour pairing was checked for WCAG contrast and assigned a role: high-contrast shades for text and buttons, softer hues for gradients and surfaces.",
        items: [
          "Terra Red #C24D4D: grounded and dependable, for financial confidence.",
          "Auburn #A02626: a bold, inviting red that encourages action.",
          "Deep Cosmos #5A1919: a warm brown-red adding depth and reliability.",
          "Saffron Gold #E6B93D: an optimistic gold for growth and success.",
        ],
        media: {
          images: [
            {
              src: "/work/mmbl/contrast-tested.jpg",
              alt: "WCAG contrast ratios documented for the Terra Red, Deep Cosmos, and Auburn pairings.",
              label: "Tested",
              w: 2000,
              h: 917,
            },
            {
              src: "/work/mmbl/contrast-shipped.jpg",
              alt: "WCAG contrast ratios documented for the Teal and Saffron Gold pairings used in the Islamic experience.",
              label: "Shipped",
              w: 2000,
              h: 1273,
            },
          ],
          contain: true,
          caption: "Real contrast ratios per pairing. Every combination cleared WCAG AA/AAA before it shipped.",
        },
      },
      {
        heading: "Tested in the field",
        body: "We ran moderated tests on the high-fidelity prototype in Maze with 10 users in Lahore, split across everyday-banking and loan customers. The heatmaps showed where attention landed and where it didn't, and confirmed which decisions were working before handoff.",
        media: {
          images: [
            {
              src: "/work/mmbl/onboarding-heatmap.jpg",
              alt: "Onboarding heatmap: the structured walkthrough removed uncertainty, though users expected swipe progression alongside the button.",
              label: "Onboarding",
              w: 2000,
              h: 917,
            },
            {
              src: "/work/mmbl/account-opening-heatmap.jpg",
              alt: "Account opening heatmap: the select-account control was hard to spot, so it became a clearer, higher-contrast tick.",
              label: "Account opening",
              w: 2000,
              h: 917,
            },
            {
              src: "/work/mmbl/send-money-heatmap.jpg",
              alt: "Send money heatmap: the easiest task to complete, thanks to familiar icons and positioning.",
              label: "Send money",
              w: 2000,
              h: 917,
            },
            {
              src: "/work/mmbl/topup-heatmap.jpg",
              alt: "Top-up heatmap: hard to locate, which pointed to relabelling it \"Mobile Load / Packages.\"",
              label: "Top up",
              w: 2000,
              h: 917,
            },
          ],
          caption: "Four moderated tests, four fixes, from a clearer select-account control to a relabelled top-up entry point.",
        },
      },
      {
        heading: "Designing for low numeracy",
        body: "Users with low numeracy couldn't reliably tell 300,000 from 30,00,000, and mistook the monthly installment for an editable field. Testing showed the long scroll hid the total while the slider moved, and the loan calculator CTA was ignored entirely. The fix: min and max bounds on the input, a read-only installment, comma-grouped digits, and a slider reworked to show the amount changing clearly.",
        media: {
          images: [
            {
              src: "/work/mmbl/low-numeracy-heatmap.jpg",
              alt: "Heatmap from testing the loan calculator: attention stuck on the amount field, not the calculator CTA.",
              w: 2000,
              h: 917,
            },
          ],
          caption: "Heatmap from testing: attention stuck on the amount, not the calculator CTA.",
        },
      },
      {
        heading: "Part Two: one app, two banks",
        body: "After the first release, MMBL brought us back. This time the ask was an Islamic banking experience inside the same app, for customers who bank according to Sharia. That isn't a skin over the conventional version. Interest can't just be renamed, the product set is different, and for many of these customers that difference is the whole reason they bank where they do. So the first question wasn't visual. It was how the app decides which version of itself to show: a splash-screen check routes each account before anything loads, conventional to red, Islamic to green, while customers with both accounts get a toggle and new users choose before sign-up.",
        items: [
          "Stayed the same: navigation & information architecture, the core flows (transfer, top-up, bills), the component library, and the patterns tested in phase one.",
          "Changed on top: visual identity (red vs. green), the home screen & offerings, the product set, and the language around money.",
        ],
        media: {
          images: [
            {
              src: "/work/mmbl/two-banks-diagram.svg",
              alt: "Diagram showing the splash screen checking account type, then routing to either the conventional red experience or the Islamic green experience.",
              full: true,
              w: 1600,
              h: 820,
            },
          ],
          caption: "One entry point, before anything loads. Then the app routes to the identity that matches the account.",
        },
      },
      {
        heading: "Two identities, one journey",
        body: "The same structure, the same journey, told in each customer's own terms.",
        media: {
          images: [
            {
              src: "/work/mmbl/home-conventional.jpg",
              alt: "The conventional Dost home screen in the red visual identity.",
              label: "Conventional",
              w: 620,
              h: 1400,
            },
            {
              src: "/work/mmbl/home-islamic.jpg",
              alt: "The Islamic Dost home screen in the teal visual identity, showing Murabaha Financing and Takaful.",
              label: "Islamic",
              w: 651,
              h: 1400,
            },
          ],
          caption: "Same structure underneath. Two identities on top.",
        },
      },
      {
        heading: "Onboarding, in each customer's terms",
        media: {
          images: [
            {
              src: "/work/mmbl/onboarding-conventional.jpg",
              alt: "The conventional Dost login screen.",
              label: "Conventional",
              w: 620,
              h: 1400,
            },
            {
              src: "/work/mmbl/onboarding-islamic.jpg",
              alt: "The Islamic Dost onboarding screen introducing Shariah Banking and Murabaha Financing.",
              label: "Islamic",
              w: 415,
              h: 900,
            },
          ],
          caption: "The same onboarding journey, told in each customer's own terms.",
        },
      },
      {
        heading: "Real products, not relabelled ones",
        body: "Someone opening the Islamic side should recognise it as theirs, not as the regular app with a different name.",
        items: [
          "Murabaha financing",
          "Takaful",
          "Profit-sharing, no riba",
          "Zakat & Sadaqah tools",
          "Inheritance calculator",
        ],
      },
      {
        heading: "The shipped app",
        body: "We handed off a documented Figma file with the full design system, components, and styles, so the dev team could build it accurately. To close the project, I presented the recommendation report and findings to the CEO and senior leadership.",
        media: {
          images: [
            {
              src: "/work/mmbl/loans-intro.jpg",
              alt: "Onboarding screen introducing loans made for the customer.",
              w: 646,
              h: 1400,
            },
            {
              src: "/work/mmbl/onboarding.jpg",
              alt: "Onboarding screen confirming identity verification, with account setup progress steps.",
              w: 646,
              h: 1400,
            },
            {
              src: "/work/mmbl/onboarding-conventional.jpg",
              alt: "The conventional Dost login screen.",
              w: 620,
              h: 1400,
            },
            {
              src: "/work/mmbl/home-conventional.jpg",
              alt: "The conventional Dost home screen, fully shipped.",
              w: 620,
              h: 1400,
            },
          ],
          caption: "From first screen to verified identity to the home screen: the flow that shipped, start to finish.",
        },
      },
    ],
    image: "/work/mmbl/two-banks-diagram.svg",
    imageAlt: "Illustration of the Dost app splash screen routing to either the conventional red app or the Islamic teal app.",
    vivid: true,
    accent: "#2f5ef2",
  },
  {
    slug: "healthops",
    index: "02",
    title: "HealthOps Reporting Dashboard",
    client: "HealthOps (under NDA) × Ideate Innovation",
    tagline:
      "A planning platform where every report doesn't just show the numbers. It tells leadership what they mean, and stays current on its own.",
    year: "2025–2026",
    sector: "Healthcare · Data viz · Reporting UX",
    role: "UI & Design Direction",
    type: "Planning platform · Data viz · Reporting UX",
    tools: "Figma",
    confidentialityNote:
      "Delivered through Ideate Innovation for HealthOps under NDA. Product name (SystemSight) and screens are shown for portfolio purposes; all figures visible in the interface are placeholder or anonymised, not real client data.",
    summary:
      "HealthOps is a national healthcare planning platform. The screens here are a few of the views designed across it. The full system runs much wider, all built on one shared design system and handed off in Figma.",
    problem:
      "The brief asked for a reporting tool, but the team already had reports. What they didn't have was a way to tell what any of it meant, or what to do with them. Exports were accurate the day they ran and out of date soon after, and none of them got a planner closer to a decision. So the work was less about building reports and more about making the data explain itself, so someone who isn't an analyst can look at a screen and know what's going on and what needs attention.",
    pullQuote:
      "Exports were accurate the day they ran, and out of date by the time anyone read them.",
    approach: [
      "Anchored the whole platform on one idea: show the number, then tell the reader what it means, and carried it through every screen.",
      "Built four decision surfaces (executive outlook, access & wait times, report library, data quality) on a single design system, rebuilt from the client's real brand tokens in Figma.",
    ],
    outcome:
      "A platform that briefs its reader. The screens shown are a few of the views designed across a much wider system, all held together by the same move: show the number, then tell the reader what it means.",
    metrics: [
      { label: "Decision surfaces designed", value: "4" },
      { label: "Shared design system", value: "1" },
      { label: "Usability heuristics applied", value: "5+" },
    ],
    sections: [
      {
        heading: "01: Insights, not just the line",
        body: "The Executive Outlook is a top-level read on whether the system can meet demand; from here the platform splits into four pillars: beds, workforce, clinical services, and budget. We led with a single interactive forecast chart instead of a grid of widgets, because that projection is what leadership needs before anything else. Colour-coded points, a defined stroke on the active item, and cards set one section apart from the next; the key insights below carry the rest of the story in plain language.",
        callouts: [
          {
            text: "The forecast chart, front and centre.",
            tag: "Visibility of System Status",
            x: 6,
            y: 30,
          },
          {
            text: "Marked points along the line signal hover detail.",
            tag: "Recognition Over Recall",
            x: 67,
            y: 43,
          },
          {
            text: "Insights written as conclusions, not chart labels.",
            tag: "Match Between System & Real World",
            x: 4,
            y: 85,
          },
        ],
        media: {
          images: [
            {
              src: "/work/healthops/executive-outlook.jpg",
              alt: "Executive Outlook screen with an interactive capacity-vs-demand forecast chart.",
              w: 1019,
              h: 1400,
            },
          ],
          sideBySide: true,
          caption: "Executive outlook · a single forecast leads, with the projection marked along the line.",
        },
      },
      {
        heading: "02: Status language anyone can read",
        body: "The Access & Wait Times screen shows how long patients wait across services and facilities; planners use it to decide where capacity needs to move, so the job is to surface the worst cases fast. We showed severity as colour rather than a number, so the critical rows register before you've read a value. The table sorts by longest waits by default, letting the order do the triage, and a short plain-language summary underneath names the pattern.",
        callouts: [
          {
            text: "Longest waits sorted to the top.",
            tag: "Visibility of System Status",
            x: 7,
            y: 35,
          },
          {
            text: "A colour-coded severity column.",
            tag: "Recognition Over Recall",
            x: 89,
            y: 35,
          },
          {
            text: "The plain-language summary below.",
            tag: "Match Between System & Real World",
            x: 3,
            y: 88,
          },
        ],
        media: {
          images: [
            {
              src: "/work/healthops/access-wait-times.jpg",
              alt: "Access & Wait Times screen comparing waiting times across population groups, with a colour-coded severity column.",
              w: 1208,
              h: 1400,
            },
          ],
          sideBySide: true,
          caption: "Access & wait times · severity reads as colour, and the table sorts itself into a triage order.",
        },
      },
      {
        heading: "03: Reports that stay alive",
        body: "The Report Library is where teams keep the reports they rely on: the system's standard ones and their own custom requests. The risk with any reporting tool is that saved reports quietly go stale, so we set them to refresh on a schedule and kept that state visible. The data reads as current instead of something to double-check. System and custom reports look the same and sit on one shelf, so where a report came from never becomes a thing to think about; filters sit to the left, where scanning starts.",
        callouts: [
          {
            text: "A visible refresh status indicator.",
            tag: "Visibility of System Status",
            x: 7,
            y: 24,
          },
          {
            text: "System and custom reports on one shelf.",
            tag: "Consistency & Standards",
            x: 27,
            y: 32,
          },
          {
            text: "Filters placed where scanning begins.",
            tag: "Match Between System & Real World",
            x: 13,
            y: 32,
          },
        ],
        media: {
          images: [
            {
              src: "/work/healthops/report-library.jpg",
              alt: "Report Library screen showing saved report templates that refresh automatically, with filters on the left.",
              w: 1400,
              h: 1179,
            },
          ],
          sideBySide: true,
          caption: "Report library · saved reports refresh on a schedule, and that state stays visible.",
        },
      },
      {
        heading: "04: High-stakes data, organised for clarity",
        body: "Every number in the platform depends on the data underneath it being clean. The Data Quality Hub is where teams catch mismatches and validation errors before they reach a report, so the screen carries a lot of dense information at once. We carried the same status language from the rest of the platform in, so nothing has to be relearned, and validation reads as pass or fail rather than a score to interpret. Each row resolves at a glance.",
        callouts: [
          {
            text: "Consistent status badges.",
            tag: "Consistency & Standards",
            x: 21,
            y: 39,
          },
          {
            text: "A pass / fail validation column.",
            tag: "Recognition Over Recall",
            x: 69,
            y: 63,
          },
        ],
        media: {
          images: [
            {
              src: "/work/healthops/data-quality-hub.jpg",
              alt: "Data Quality Hub screen for reviewing and resolving mismatches in provider data, with pass/fail validation badges.",
              w: 1138,
              h: 1400,
            },
          ],
          sideBySide: true,
          caption: "Data quality hub · dense validation data, resolved at a glance through pass/fail badges.",
        },
      },
    ],
    image: "/work/healthops/login.jpg",
    imageAlt: "The HealthOps / SystemSight planning platform login screen.",
    accent: "#7048d6",
  },
  {
    slug: "climate-finance-accelerator",
    index: "03",
    title: "Climate Finance Accelerator Launch",
    client: "CFA Pakistan (under NDA) × DAI, with PwC & UK Government (FCDO)",
    tagline: "Coordinating government, investors, and businesses behind a national climate finance launch.",
    year: "2026",
    sector: "Climate Finance / Public Sector",
    role: "Communications Lead & Event Expert",
    type: "Service design & engagement strategy",
    summary:
      "CFA is a UK Government programme that helps climate businesses become investment-ready. On paper it's an application process. In practice, none of it happens unless three groups arrive at the same time: project developers who need finance, the investors and banks who might provide it, and the government voices that make the whole thing credible. As Communications Lead for Phase II, I owned the narrative and the channels across the full launch cycle.",
    problem:
      "Communications wasn't a matter of posting updates. It was building one clear narrative and the coordination behind it, so a UK-funded programme would land as a real, deal-oriented opportunity and convert into a pipeline, not just awareness among three audiences who rarely sit at the same table.",
    pullQuote: "An accelerator only works if government, investors, and businesses move together.",
    approach: [
      "Strategy: a Phase II communications plan with conversion-focused objectives, audience mapping, and integrated outreach across digital, direct networks, and media.",
      "Campaign & brand: application-drive visuals and a women-led innovation campaign timed to International Women's Day, plus countdown banners and webinar promotions on CFA/UK Government branding.",
      "Stakeholder engagement: a soft-launch event coordinating the British High Commission and Ministry of Climate Change, with high-level video endorsements.",
      "Launch phases: a four-stage cycle, pre-launch re-ignition, soft-launch visibility, call-for-proposals pipeline development, and cohort announcement.",
    ],
    sections: [
      {
        heading: "01: A plan built around conversion",
        body: "I wrote the Phase II strategic communications plan: objectives, audience map, key messages, and an integrated outreach approach across digital, direct network activation, strategic engagement, and media. It set the through-line for everything that followed, reigniting the alumni network as ambassadors and leaning on high-level endorsement to open the call.",
        items: [
          "Audiences & channels: LinkedIn, partners, alumni, media.",
          "Awareness: the call made visible across every table.",
          "Interest: Q&A webinars and regional sessions.",
          "Conversion: ~55 applications, resolving into a cohort of 11.",
        ],
      },
      {
        heading: "02: The visuals that opened the call",
        body: "I created the campaign that opened the Call for Proposals: the application drive, the women-led innovation push timed to International Women's Day, countdown banners, and the Q&A webinar promotion, all in the CFA and UK Government brand system, published across LinkedIn and the programme's channels.",
        media: {
          images: [
            {
              src: "/work/climate-finance-accelerator/poster-call-for-proposals.jpg",
              alt: "Call for Proposals campaign poster with eligibility criteria and deadline.",
              w: 935,
              h: 1200,
            },
            {
              src: "/work/climate-finance-accelerator/poster-impact.jpg",
              alt: "Impact-at-a-glance poster: $40 million mobilized, 22 projects supported.",
              w: 1200,
              h: 1200,
            },
            {
              src: "/work/climate-finance-accelerator/poster-women-led.jpg",
              alt: "Investment Support for Climate Leaders & Women-Led Innovation poster, timed to International Women's Day.",
              w: 1200,
              h: 1200,
            },
            {
              src: "/work/climate-finance-accelerator/poster-closing-soon.jpg",
              alt: "Applications Closing Soon countdown poster with deadline.",
              w: 1200,
              h: 1200,
            },
          ],
          contain: true,
          caption:
            "Public campaign posters. The women-led-innovation drive set the deadline on International Women's Day; countdown creative carried the closing week.",
        },
      },
      {
        heading: "03: Getting the right people in the room",
        body: "I organised the soft-launch event, bringing the British High Commission and the Ministry of Climate Change together to open the cycle, and coordinated high-level video endorsements across BHC, PwC, DAI and MoCC so the launch carried weight. To sustain it, I ran stakeholder endorsement interviews and turned them into social content that put credible voices behind the programme.",
        media: {
          images: [
            {
              src: "/work/climate-finance-accelerator/handshake.jpg",
              alt: "British High Commission and Ministry of Climate Change officials at the CFA soft-launch event.",
              w: 1600,
              h: 1066,
            },
          ],
          caption: "The Ministry of Climate Change and British High Commission at the soft-launch event.",
        },
      },
      {
        heading: "04: Four phases, one cycle",
        body: "The launch ran in four phases, each with its own comms job, from reigniting past cohorts to announcing the new one.",
        items: [
          "I · Pre-launch: Re-ignition. Teaser content from past cycles, the website and portal readied, alumni primed as ambassadors, press lined up. (Jan)",
          "II · Soft launch: Visibility. In-person event at MoCC with the BHC, the call opens, high-level video endorsements released, media captured. (Late Jan)",
          "III · Call for Proposals: Pipeline. Regional sessions across Karachi, Lahore and Peshawar, Q&A webinars, countdown creative, partner toolkits. (Jan–Feb)",
          "IV · Selection: Announce. Thank-yous to all applicants, then the cohort reveal: the climate businesses CFA would support. (Mar)",
        ],
      },
    ],
    outcome:
      "A single, unified strategy executed end-to-end across four coordinated partners, turning a complex, multi-stakeholder mechanism into a pipeline first-time applicants could actually follow.",
    metrics: [
      { label: "Applications received", value: "~55" },
      { label: "Businesses selected", value: "11" },
      { label: "Partners coordinated", value: "4" },
    ],
    image: "/work/climate-finance-accelerator.jpg",
    imageAlt: "The Climate Finance Accelerator Pakistan launch event, with the programme's opening slide projected to the room.",
    accent: "#1f9d6b",
    confidentialityNote:
      "Delivered as Communications Lead on CFA Pakistan, a UK Government (FCDO) programme implemented by DAI. Campaign materials shown are public. The strategic communications plan is confidential and is described here, not reproduced.",
  },
  {
    slug: "what-she-carried",
    index: "04",
    title: "What She Carried",
    client: "NYU ITP · Thesis",
    tagline: "A VR archive of memory and migration, built from the objects that crossed a border in 1947.",
    year: "2022–2024",
    sector: "Speculative Design / Immersive",
    role: "Designer, Researcher & Maker",
    type: "Thesis project: VR archive + participatory research",
    summary:
      "A VR archive examining memory and migration through personal objects carried across the 1947 Partition of India and Pakistan. Participants weren't treated as research subjects. They were collaborators with agency over how their own narratives would be preserved and shared.",
    problem:
      "Partition is remembered in numbers: fourteen million displaced, hundreds of thousands killed, borders drawn in six weeks. What the numbers don't hold are the keys kept for houses that no longer exist, the shawls folded into suitcases that crossed in both directions, and the photographs that became the only record of people left behind. What She Carried begins there, with objects.",
    pullQuote:
      "Rooms that feel grounded and suspended at the same time, where objects float in symbolic space.",
    approach: [
      "Used photogrammetry to render real, carried objects in three-dimensional space rather than illustrate or reenact them.",
      "Layered spatial audio, ambient soundscapes with interview excerpts, to capture not just what people remember, but the manner of remembering, hesitations and silences included.",
      "Took a trauma-informed approach throughout: avoided graphic reenactment, embraced fragmentation and absence, and built a contemplative rather than immersive-for-its-own-sake space.",
    ],
    sections: [
      {
        heading: "The things that crossed over",
        body: "Through in-depth interviews with families across Pakistan, India, and Bangladesh, I gathered personal histories tied to the everyday things that survived the 1947 Partition: objects that were carried, hidden, inherited, and quietly passed on. Participants were collaborators, not subjects: they were involved in how their stories would be held and shared, and consent and care sat at the centre of every research decision.",
      },
      {
        heading: "Grounded and suspended at once",
        body: "Those objects and voices became the material for a VR experience built in Unity, using photogrammetry to bring real artifacts into immersive 3D space. The environments are deliberately neither realistic nor abstract: rooms that feel grounded and suspended at the same time, where objects float in symbolic space and ask to be looked at rather than handled. Users move slowly through objects that each hold a single story, with photorealistic textures set against minimal surroundings, so the emotional weight of the objects stays central.",
      },
      {
        heading: "Not just what is remembered, but how",
        body: "Sound does as much work as space. Spatial audio layers ambient soundscapes with excerpts from the interviews, carrying not just what is remembered but how it is remembered: the pauses, the corrections, and the things that still don't have words.",
      },
      {
        heading: "Some wounds resist narration",
        body: "Guided by trauma-informed design, the experience avoids graphic reenactment. It makes room for fragmentation, silence, and absence, recognising that some stories stay incomplete and some wounds resist being told. The aim is reflection without retraumatisation: a space to engage with memory carefully rather than relive it.",
      },
    ],
    outcome:
      "An installation that functions as both digital memorial and speculative archive, letting visitors engage with large-scale history through individual objects and testimonies, presented at ITP's thesis showcase. As I put it: \"The most powerful thing a designer can do is sometimes simply make space, for memory, for absence, for what couldn't be brought across but wasn't forgotten either.\"",
    tools: "Unity · Blender · Photogrammetry · Spatial Audio",
    image: "/work/what-she-carried.jpg",
    imageAlt: "Visitors experiencing the What She Carried VR archive with headsets.",
    accent: "#d98324",
  },
  {
    slug: "biofutures",
    index: "05",
    title: "Biofutures: Design Thinking for the Planet and Beyond",
    client: "Ideate Innovation × Precision Medicine Lab",
    tagline:
      "A three-phase futuring programme for World Interaction Design Day 2024: designers and scientists built fictional worlds together, turned them into a card deck, and used it to teach a room in Peshawar to imagine biofutures.",
    year: "2024",
    sector: "Speculative Design / Facilitation",
    role: "Workshop Designer & Lead Facilitator",
    type: "Futuring workshops · Card deck · Community programme",
    tools: "Figma · Miro",
    summary:
      "World Interaction Design Day 2024 asked what new dimensions should be added to design. At Ideate, I chose biology, and partnered with Precision Medicine Lab, a federally funded research lab in Peshawar, to build a programme around it. The result was three layered workshops: an internal one that built the toolkit, a public one that used it, and a retro that dissected what happened.",
    problem:
      "Biotech is widely called the next wave after AI, but the local design community has almost no shared vocabulary with the scientists driving it. And the stakes are real: 96% of medicines in Pakistan are not tailored to the local population, because clinical trials are run and approved elsewhere. Before anyone can design better biofutures, they need practice imagining them at all.",
    pullQuote: "The future exists first in imagination, then in will, then in reality.",
    pullQuoteAttribution: "Barbara Marx Hubbard, from the workshop's opening",
    approach: [
      "Start in the lab, not the studio: an introductory call and a full-day visit to Precision Medicine Lab, meeting the scientists and touring the wet lab, data lab, space biology, and skunkworks teams.",
      "Design and facilitate an internal worldbuilding workshop where designers and scientists imagine future worlds together, then turn that raw material into a futures card deck.",
      "Host the public workshop in Peshawar, where interdisciplinary teams use the deck to build worlds and pitch biodesign interventions, then close the loop with a public retro on Interaction Design Day itself.",
    ],
    sections: [
      {
        heading: "Starting in the lab, not the studio",
        body: "IxDD's 2024 theme was Adding Dimensions. I pitched biology as ours, and reached out to Dr. Faisal Khan at Precision Medicine Lab, a research lab sitting inside one of the region's largest medical hubs. Before designing anything, I spent a day there: the space biology team studying astronaut health, the wet lab growing cell cultures from local biopsies, the data lab training AI to detect cancer, and skunkworks turning microbes into pigments. That visit set the brief. The lab had world-class science and no design community around it; we had designers who had never spoken to a scientist.",
      },
      {
        heading: "Phase one: building worlds with scientists",
        body: "In September, I ran a virtual worldbuilding session with thirteen co-designers: Ideate's design team and PML's scientists in one Miro board. In small groups we built fictional future worlds, defined what was causing big changes in each, and identified the tensions worth designing for. The scientists kept the biology honest; the designers kept the worlds habitable. Everything produced here became raw material for the next phase.",
        media: {
          images: [
            {
              src: "/work/biofutures/miro-board.jpg",
              alt: "The Miro board from the internal worldbuilding workshop, with four groups' card clusters and world descriptions.",
              w: 1800,
              h: 808,
            },
          ],
          caption: "The phase-one Miro board: four groups, four worlds, and the raw material for the card deck.",
        },
      },
      {
        heading: "A card deck built from those worlds",
        body: "I distilled the worlds, drivers, and signals from phase one into a futures card deck, designed in Figma and printed for the event. Cards are grouped into categories and revealed in stages: teams get two to set the scene, one to complicate it, and two more to complete their world. The staged reveal keeps groups improvising together instead of settling on their first idea.",
        media: {
          images: [
            {
              src: "/work/biofutures/cards-1.jpg",
              alt: "The printed futures cards on a workshop table, surrounded by handwritten sticky notes.",
              w: 1600,
              h: 1200,
            },
            {
              src: "/work/biofutures/cards-2.jpg",
              alt: "A team's drawn cards laid out next to their notebook during the worldbuilding exercise.",
              w: 1600,
              h: 1200,
            },
          ],
          caption: "The deck in play: category cards drawn in stages, annotated and argued over.",
        },
      },
      {
        heading: "Five categories, one system",
        body: "The finished deck spans seven categories of change; five of them are shown here. Each card names a single future, from circular economies to CRISPR to space migration, so a team can hold a whole world in one hand of cards instead of an abstract brief.",
        media: {
          images: [
            {
              src: "/work/biofutures/deck/economic.jpg",
              alt: "The Economic Models category board: a grid of teal futures cards about circular economies, automation, and resource distribution.",
              w: 2000,
              h: 1682,
            },
            {
              src: "/work/biofutures/deck/emerging.jpg",
              alt: "The Emerging Technologies category board: a grid of blue futures cards about DNA sequencing, CRISPR, and space travel.",
              w: 2000,
              h: 1635,
            },
            {
              src: "/work/biofutures/deck/food.jpg",
              alt: "The Food Security category board: a grid of green futures cards about hydroponics and redistributed food systems.",
              w: 1999,
              h: 1292,
            },
            {
              src: "/work/biofutures/deck/govt.jpg",
              alt: "The Government and Policy category board: a grid of maroon futures cards about biotech regulation and space migration quotas.",
              w: 2000,
              h: 1655,
            },
            {
              src: "/work/biofutures/deck/health.jpg",
              alt: "The Healthcare category board: a grid of dark futures cards about personalized medicine and disease eradication.",
              w: 2000,
              h: 1062,
            },
          ],
          caption: "The final deck, category by category: Economic Models, Emerging Technologies, Food Security, Government & Policy, and Healthcare.",
        },
      },
      {
        heading: "Phase two: the workshop in Peshawar",
        body: "Around twenty participants came to the public workshop: designers, researchers, architects, and policy people. Dr. Faisal opened with the science; I ran the futuring. Teams drew their cards, built their worlds, visualized them, and pitched biodesign interventions for the futures they had imagined, each answering one question: what is one thing you can do today to make your world a reality?",
        media: {
          images: [
            {
              src: "/work/biofutures/poster.jpg",
              alt: "The Biofutures workshop poster, with a flower under a bell jar and the host and facilitator names.",
              w: 1400,
              h: 1400,
            },
          ],
          caption: "The invitation, for the public event hosted at RMI in Peshawar with Precision Medicine Lab.",
        },
      },
      {
        heading: "What the teams made",
        body: "Every group presented a coherent world with a biodesign intervention inside it. The tables filled with worksheets, systems maps, and sticky-note storms.",
        media: {
          images: [
            {
              src: "/work/biofutures/artifact-worksheet.jpg",
              alt: "A team's mind map naming their world The Untidy Eutopia, branching into food, health, social life, and care.",
              w: 1600,
              h: 1200,
            },
            {
              src: "/work/biofutures/artifact-systems-map.jpg",
              alt: "A systems map drawn on a window with colored sticky dots and connecting lines.",
              w: 1600,
              h: 1200,
            },
            {
              src: "/work/biofutures/artifact-notes.jpg",
              alt: "Two pages of handwritten worldbuilding notes covering family structure, food, transport, and energy.",
              w: 1600,
              h: 1200,
            },
          ],
          caption: "Participant artifacts: worlds sketched, mapped, and argued onto paper in ninety minutes.",
        },
      },
      {
        heading: "Phase three: dissecting design",
        body: "On September 26, Interaction Design Day itself, we closed the loop with Dissecting Design, our online discussion series. With PML we unpacked what happens when biodesign's constraints meet design thinking's optimism, which industries feel it first, and what a design community owes the planet it designs on.",
      },
    ],
    outcome:
      "Around twenty people from design, research, architecture, and policy spent an afternoon building futures they had never been asked to imagine, and left with a method they could reuse. The deck survives as a standalone toolkit, and the collaboration built a working bridge between Peshawar's design and biotech communities on the day the global design calendar was watching.",
    metrics: [
      { label: "Workshops run", value: "3" },
      { label: "Co-designers", value: "13" },
      { label: "Participants", value: "~20" },
    ],
    image: "/work/biofutures/hero.jpg",
    imageAlt: "The printed futures cards spread across a workshop table with sticky notes during the Biofutures event.",
    accent: "#0e94a0",
  },
  {
    slug: "maternal-health-research",
    index: "06",
    title: "Maternal Health Supplement Research",
    client: "Global Health Foundation (under NDA) × Ideate Innovation",
    tagline:
      "Qualitative research into why low-income pregnant women in Pakistan start, skip, or stop prenatal supplements, and what it means for the products meant to help them.",
    year: "2026",
    sector: "Healthcare / Research",
    role: "UI/UX Design Lead & Researcher",
    type: "Qualitative research · Synthesis · Personas & journeys",
    tools: "FGDs, interviews, home observation",
    confidentialityNote:
      "Delivered through Ideate Innovation for a global health foundation under NDA. The end client and research partner are not named. All participant data is anonymised: no real names, ages, photographs, or identifying details are shown, in line with the study's confidentiality terms. Personas are composite archetypes drawn from aggregated findings.",
    summary:
      "A qualitative research project examining why low-income pregnant women in Pakistan start, skip, or stop taking prenatal supplements. This is the Pakistan arm of a wider multi-country study, commissioned by a global health foundation (anonymised under NDA) through Ideate Innovation.",
    problem:
      "The easy assumption is that women miss doses because they forget. The research found something harder: a missed dose is usually a rational response to a real constraint: the clinic gave three days' supply and the next dose costs money the household doesn't have, the iron tablet causes a burning that taking it with milk only hides, an elder believes the pills will make the baby too large, or there is simply no energy left after a day of labour. So the question for the product wasn't how to remind women. It was how to fit a supplement into lives defined by financial strain, medical fear, and family decision-making, so that taking it stops being a thing to decide.",
    pullQuote:
      "When there is more trouble, one feels like taking medicine. But when there is no reach, then I leave it.",
    pullQuoteAttribution: "Study participant, anonymised",
    approach: [
      "Went into homes, not surveys: 36 in-depth interviews with pregnant women, 4 co-creative focus groups, 10 influencer interviews (husbands, mothers-in-law, sisters), 10 community health worker interviews, and 10 in-home observations of real routines.",
      "Mapped a real day to find where a dose could realistically land, then mapped the decision path for irregular users to find exactly where the product loses them.",
    ],
    outcome:
      "The findings pointed at the product, not just the messaging. Six specific, research-grounded recommendations, covering format, recognition, price, ritual, pill size, and household activation, turned into a design brief a health foundation could act on directly, not a generic call for better reminders.",
    metrics: [
      { label: "Participants", value: "66+" },
      { label: "Personas to design against", value: "3" },
      { label: "Countries in wider study", value: "3" },
    ],
    sections: [
      {
        heading: "Grounded in research",
        body: "The fieldwork happened in homes, not on survey forms: sitting with women through a routine day, not just asking about it. That meant real neighbourhoods, real kitchens, real interruptions, and the kind of detail a structured questionnaire never surfaces.",
        media: {
          images: [
            {
              src: "/work/maternal-health-research/field-1.jpg",
              alt: "Street view of a clinic in the Pakistani neighbourhood where fieldwork took place.",
              w: 675,
              h: 900,
            },
            {
              src: "/work/maternal-health-research/field-2.jpg",
              alt: "Residential alley in the neighbourhood where in-home observations took place.",
              w: 900,
              h: 818,
            },
          ],
          caption: "The neighbourhoods where interviews and in-home observations took place.",
        },
      },
      {
        heading: "Three women the product has to work for",
        body: "Composite archetypes, built from the interviews. No real individuals are shown.",
        personas: [
          {
            name: "The Over-Burdened Labourer",
            subtitle: "Keep functioning so the household doesn't fall apart.",
            quote:
              "I force myself to take my supplements so my health doesn't fail, but the workload and the money make it hard.",
            pains: [
              "A meagre income makes food and medicine a luxury.",
              "Labour doesn't stop for fainting spells or pain.",
              "Deep anxiety from a traumatic obstetric history.",
            ],
            gains: [
              "Anything that lets her keep doing her work.",
              "Nominal-cost clinic meds that feel manageable.",
              "Reassurance the baby will be born healthy.",
            ],
            image: "/work/maternal-health-research/persona-labourer.jpg",
            imageAlt: "Representative portrait for the Over-Burdened Labourer persona.",
            w: 500,
            h: 399,
          },
          {
            name: "The Influenced Skeptic",
            subtitle: "Avoid complications and harsh pain.",
            quote:
              "I'm scared of medicines, so I try to keep my diet healthy, but it's hard to afford meat and fruit.",
            pains: [
              "Belief that supplements make the baby “too large.”",
              "Stops the moment she feels any side effect.",
              "Decisions sit with a mother-in-law, not her.",
            ],
            gains: [
              "Natural substitutes she trusts, like milk or lemon water.",
              "Formats that feel like a drink, not a “scary pill.”",
              "Rest, when an elder is supportive.",
            ],
            image: "/work/maternal-health-research/persona-skeptic.jpg",
            imageAlt: "Representative portrait for the Influenced Skeptic persona.",
            w: 500,
            h: 328,
          },
          {
            name: "The Anxious First-Time Learner",
            subtitle: "Get through a first pregnancy safely.",
            quote:
              "I try to follow medical advice so I know things are going well, but money and the walk to the clinic are hard.",
            pains: [
              "Can't swallow large pills; iron smell triggers nausea.",
              "High fear of loss and of a traumatic delivery.",
              "Too shy to ask the doctor direct questions.",
            ],
            gains: [
              "An elder who manages her schedule and explains things.",
              "Strong motivation to protect the baby's development.",
              "Family involvement that lets her rest.",
            ],
            image: "/work/maternal-health-research/persona-learner.jpg",
            imageAlt: "Representative portrait for the Anxious First-Time Learner persona.",
            w: 500,
            h: 382,
          },
        ],
      },
      {
        heading: "Where a dose has to fit",
        body: "For an experienced mother, health is managed reactively, around labour that never pauses. Mapping a real day showed the few narrow windows where a supplement could realistically land: only two or three in a fourteen-hour day, and most depend on someone else remembering, or on a supply she may not have.",
        items: [
          "6:00, Fajr: wakes for prayer, severe morning sickness. No dose.",
          "7:00, Breakfast: cooks for the children; may take folic acid or iron after eating, if she remembers and owns it.",
          "9:30, Chores: washing, sweeping, numbness, shortness of breath. No dose.",
          "2:00, Rest: a short moment to herself before the children return. No dose.",
          "4:00, Clinic: walks 20–30 minutes in heat for an IV drip; collects 3–5 days of supplements.",
          "9:30, Night: in-laws “keep the pill in her hand” as a reminder; iron or folic acid, prompted by family.",
        ],
      },
      {
        heading: "The path from symptom to dose, or not",
        body: "For irregular users, supplement decisions are reactive. Mapping the path showed where the product loses them: at the doubts, and at the moment the free supply runs out.",
        items: [
          "Triggers: full exhaustion or weakness, a test showing low iron, a doctor's warning about the baby.",
          "Doubts: cultural belief the baby will be harmed, side effects like heartburn and body heat, and “when it runs out, who pays for the next?”",
          "Options weighed: home remedies like dates, fruit, and milk; short-term relief like an IV drip; free clinic meds such as folic acid and Calc-C.",
          "Decision: choose immediate relief over a long course, lean on self-knowledge and what's free, and weigh it all against cost and a doctor's word.",
        ],
      },
      {
        heading: "Design recommendations",
        items: [
          "Make it feel like a drink, not a drug: the effervescent sachet was loved because it felt like juice, not medicine; skeptical women accepted it where they refused pills.",
          "Design for colour, not names: women recognise “the small yellow tablet” and “the black one,” never brands. Colour and shape carry recognition and recall.",
          "Treat price as a feature: the ~150 Rs folic acid was “one of the few they can afford.” Cost is the adherence gate, not an afterthought.",
          "Anchor to a ritual: doses tied to breakfast or sleep stuck; stored out of sight meant forgotten, so visible storage matters as much as the pill.",
          "Shrink the pill, or pour it: large capsules caused real fear of swallowing; smaller forms and syrups kept women on a course they'd otherwise abandon.",
          "Win the household, not just the woman: awareness was entirely family-driven. If a sister or mother-in-law hadn't heard of it, she never started. Endorsement is the activation lever.",
        ],
      },
    ],
    image: "/work/maternal-health-research.jpg",
    imageAlt: "Prenatal supplements, including folic acid and calcium lactate, on a pharmacy shelf during field research in Pakistan.",
    accent: "#cf3d73",
  },
  {
    slug: "max",
    index: "07",
    title: "Max: Gaming Community Platform",
    client: "Gaming Engagement Platform (under NDA) × Ideate Innovation",
    tagline: "A no-code page builder and AI-powered analytics platform helping gaming brands turn their Discord communities into interactive, rewarding experiences.",
    year: "2025",
    sector: "Gaming / Marketing Technology",
    role: "Product Designer, equal collaboration with two other designers",
    type: "SaaS platform design · Web app + analytics dashboard",
    summary:
      "Gaming brands build huge, active communities on Discord, but Discord itself gives them no ownable space to showcase a brand, run rewards, or actually see who their best fans are. This product lets a brand spin up a branded, interactive page connected to that community in minutes, then shows them what's happening inside it.",
    problem:
      "A brand's community already exists. What it doesn't have is a home: somewhere to bring a 3D item drop, a live chat, a poll, and a rewards balance together under its own look and feel, without engineering effort. And once that page exists, the brand still can't answer a basic question: which fans actually matter, and what should we do for them next?",
    pullQuote: "Gaming brands already have their community. What they don't have is a place to reward it.",
    approach: [
      "Mapped the flow end to end: connect a Discord server, brand a page in minutes, build it from templates or from scratch, then read what the audience does on it.",
      "Designed a widget-based creation system (3D interaction, live chat, polls, rewards) that reskins cleanly across light and dark, so one page structure works for very different brand identities.",
      "Built the analytics layer, MAX Core, around AI-generated insight and segment-level recommendations, not just charts.",
    ],
    outcome:
      "A complete, validated concept spanning onboarding, page creation, and analytics, handed off as a documented Figma system. The client paused the initiative before build, so this reflects the design work as delivered, not a shipped product.",
    metrics: [
      { label: "Core surfaces designed", value: "3" },
      { label: "Page templates shipped", value: "3" },
      { label: "Designers, equal collaboration", value: "3" },
    ],
    tools: "Figma",
    confidentialityNote:
      "Delivered through Ideate Innovation; the commissioning client is anonymised under NDA and the initiative was paused before launch. Brand content shown (e.g. Valorant) is illustrative example content used during design, not a confirmed partner. Designed in equal collaboration with two other Ideate designers.",
    locked: true,
    sections: [
      {
        heading: "One page, built for the community",
        body: "The pitch was simple to say and hard to deliver: give a brand a single page that pulls its community's favourite things (a chat, a poll, a reward) into one place, styled like the brand and not like a template. The landing experience had to sell that in one scroll, to a marketing lead who has never used a page builder before.",
        media: {
          images: [
            {
              src: "/work/max/landing.jpg",
              alt: "Max marketing landing page: 'Engage with your audience', with audience insight cards and a mascot character.",
              w: 1800,
              h: 1125,
            },
          ],
          caption: "The pitch, in one scroll: audience insight, community rewards, and a branded mascot doing the explaining.",
        },
      },
      {
        heading: "Branding a page in minutes",
        body: "Setup asks for exactly what's needed to make a page feel like the brand's own: a project name, the Discord server and channel it lives inside, a logo, an accent colour, a theme, a font. Nothing here is a Max concept the user has to learn first.",
        media: {
          images: [
            {
              src: "/work/max/onboarding-branding.jpg",
              alt: "Welcome to Max onboarding screen: project name, Discord server selection, logo upload, accent colour, theme, and font.",
              w: 1800,
              h: 1125,
            },
          ],
          caption: "Setup speaks the brand's language first: Discord server, logo, accent colour, font.",
        },
      },
      {
        heading: "Templates that fit the moment",
        body: "Not every brand needs the same page. A single-drop launch wants one hero moment; a brand running several rewards at once wants them all visible; a brand mostly broadcasting news wants a feed. Three starting layouts cover those cases, each named for the job it does rather than for what it looks like.",
        items: [
          "Center-Stage: for highlighting a single brand experience.",
          "Bento: for showcasing multiple rewards and interactions.",
          "Notice-board: for listing broadcasts and announcements.",
        ],
        media: {
          images: [
            {
              src: "/work/max/template-picker.jpg",
              alt: "Template picker showing three starting layouts: Center-Stage, Bento, and Notice-board.",
              w: 1800,
              h: 1125,
            },
          ],
          caption: "Three layouts, each named for the job it does, not the shape it makes.",
        },
      },
      {
        heading: "A builder that reskins itself",
        body: "The creation surface is a widget canvas: 3D object interaction, live chat backed by an AI assistant, a player profile, polls, rewards, all dropped onto a page and restyled with a background and accent colour. The same widget set had to hold up equally well against a soft pastel background and a full-bleed, in-universe game illustration, since brands would want both.",
        media: {
          images: [
            {
              src: "/work/max/editor-light.jpg",
              alt: "Max Creation editor in a light pink theme, showing 3D interaction, live chat, and poll widgets for a Valorant page.",
              label: "Light theme",
              w: 1800,
              h: 1125,
            },
            {
              src: "/work/max/editor-dark.jpg",
              alt: "The same Max Creation editor restyled with a dramatic dark, full-bleed game illustration background.",
              label: "Dark theme",
              w: 1800,
              h: 1125,
            },
          ],
          caption: "Same widgets, same layout logic, two completely different brand moods.",
        },
      },
      {
        heading: "Campaign controls that stay out of the way",
        body: "Publishing a page isn't a single action, it's a set of decisions a brand needs to keep making: is this campaign live or still a draft, is there a player limit, what happens in each integration. Those controls sit in their own tabbed settings panel rather than crowding the creative canvas.",
        media: {
          images: [
            {
              src: "/work/max/campaign-settings.jpg",
              alt: "Campaign Settings panel with tabs for Campaign Settings, Theme & Branding, Content, Integrations, Advanced, and Publishing, plus a Draft/Live toggle.",
              w: 1800,
              h: 1125,
            },
          ],
          caption: "Draft and Live sit side by side as an explicit choice, not a hidden publish state.",
        },
      },
      {
        heading: "Turning community data into direction",
        body: "MAX Core is the half of the product that answers 'so what do we do now?' Every metric is paired with a plain-language read of it, and every audience segment comes with a suggested next action rather than a raw number.",
        items: [
          "Total audience, active-this-week, session time, and retention, each with an AI-confidence score attached.",
          "A MAX Recommendation surfaced directly under the headline number: which segment to act on, and why.",
          "Four audience segments (Top Fans, Frequent Claimers, Dormant Players, Influencers), each with its own engagement, growth, and a one-click action.",
        ],
        media: {
          images: [
            {
              src: "/work/max/analytics-dashboard.jpg",
              alt: "MAX Core analytics dashboard: total audience, AI insight and recommendation, and four audience segments (Top Fans, Frequent Claimers, Dormant Players, Influencers).",
              w: 1183,
              h: 1800,
            },
          ],
          sideBySide: true,
          caption: "MAX Core: Audience Overview, with an AI recommendation surfaced above the segments themselves.",
        },
      },
    ],
    image: "/work/max/hero-creation-dark.jpg",
    imageAlt: "The Max Creation editor restyled with a dark, full-bleed game illustration background, showing live chat, 3D interaction, and player profile widgets.",
    accent: "#f2542d",
  },
];

// Clients & partners. Each maps to zero or more projects, revealed on hover
// (clients with no slugs render as a static, non-linking logo). `logo` is an
// optional path to a logo asset in /public/logos, rendered as a flat mask so
// it inherits the same ink/faint/accent colour treatment as the text
// wordmarks (rest colour at rest, project accent on hover) rather than
// showing the brand's own colour. `logoAspect` (width / height) sizes the
// mask box; when `logo` is absent the client's name is rendered as a
// wordmark instead.
export const clients: {
  name: string;
  slugs?: string[];
  logo?: string;
  logoAspect?: number;
}[] = [
  { name: "MMBL", slugs: ["mmbl"], logo: "/logos/mmbl.svg", logoAspect: 4.43 },
  { name: "UK Government (FCDO)", slugs: ["climate-finance-accelerator"] },
  { name: "DAI", slugs: ["climate-finance-accelerator"], logo: "/logos/dai.png", logoAspect: 3.6 },
  { name: "PwC", slugs: ["climate-finance-accelerator"] },
  {
    name: "Ideate Innovation",
    slugs: ["mmbl", "healthops", "maternal-health-research", "max"],
    logo: "/logos/ideate.svg",
    logoAspect: 3.59,
  },
  { name: "NYU ITP", slugs: ["what-she-carried"] },
  {
    name: "Precision Medicine Lab",
    slugs: ["biofutures"],
    logo: "/logos/precision-medicine-lab.png",
    logoAspect: 1,
  },
  { name: "Global Health Foundation", slugs: ["maternal-health-research"] },
  { name: "UNICEF", logo: "/logos/unicef.svg", logoAspect: 4.14 },
  { name: "Fulbright", logo: "/logos/fulbright.svg", logoAspect: 5.34 },
  { name: "Impetus", logo: "/logos/impetus.svg", logoAspect: 3.31 },
  { name: "Jack Morton", logo: "/logos/jackmorton.svg", logoAspect: 4.55 },
];

export const testimonials: {
  quote: string;
  /** Verbatim substring of `quote` to render in bold, for a stronger scan-read. */
  highlight?: string;
  name: string;
  role: string;
  company?: string;
  accent: string;
  linkedin?: string;
  image?: string;
}[] = [
  {
    quote:
      "I had the absolute pleasure of managing Aliza at Ideate, and I can confidently say she is as good as they come. As a brilliant Fulbright scholar, Aliza brings a rare blend of sharp intellect and dedication to everything she touches. She is fully engaged across the entire design spectrum: effortlessly moving from user research to product design. What truly sets Aliza apart is how incredibly observant and skillful she is: she catches the subtle nuances others miss and translates them into brilliant user experiences. Any team would be incredibly lucky to have her sharp mind and dedicated work ethic, and I cannot recommend her highly enough.",
    highlight: "she is as good as they come",
    name: "Umair Abbasi",
    role: "Creative Director & Adjunct Professor of Design",
    company: "Ideate Innovation",
    accent: "#2f5ef2",
    linkedin: "https://www.linkedin.com/in/umairabbasii/",
  },
  {
    quote:
      "Aliza consistently demonstrated exceptional creativity and innovation in her designs, playing a pivotal role in revamping our company's brand guidelines. She also led the design of two of our flagship products, showcasing her ability to blend aesthetics with functionality seamlessly.",
    highlight: "exceptional creativity and innovation",
    name: "Waleed Waseem",
    role: "Founder & CEO",
    company: "Productbox",
    accent: "#d98324",
    linkedin: "https://www.linkedin.com/in/waleed-waseem-2b625270/",
  },
  {
    quote:
      "Aliza quickly reached out when my team posted a creative, technical role that we'd had a tough time finding the right talent for. She was a great fit: reliably available, technically savvy, with a designer's eye, and always constructive with the resources available. Looking forward to seeing all that Aliza takes on from here!",
    highlight: "reliably available, technically savvy, with a designer's eye",
    name: "Sarah Shulman",
    role: "Executive Producer",
    company: "Jack Morton",
    accent: "#1f9d6b",
    linkedin: "https://www.linkedin.com/in/sarahshulman/",
  },
  {
    quote:
      "As a colleague, I found Aliza to be dedicated, professional and taking a hands-on approach on the different projects she got to work on. She is a curious and motivated person who's constantly learning and improving her skills. Outside of work, I know Aliza to be a very kind and empathetic person.",
    highlight: "dedicated, professional and taking a hands-on approach",
    name: "Masna bin Umeed",
    role: "Product Design & Design Systems",
    accent: "#cf3d73",
    linkedin: "https://www.linkedin.com/in/masnabinumeed/",
  },
];

export const services = [
  {
    tag: "UX & Product",
    items: ["Research", "Information architecture", "UI/UX design", "Interaction design"],
  },
  {
    tag: "Creative Technology",
    items: ["Rapid prototyping", "Systems design", "No-code / low-code", "Physical computing"],
  },
  {
    tag: "Strategy & Systems",
    items: ["Design audits", "Accessibility review", "Service blueprinting", "Systems mapping"],
  },
  {
    tag: "Facilitation",
    items: ["Workshops", "Training", "Mentorship", "Design sprints"],
  },
];

export const profile = {
  name: "Aliza Habib",
  title: "Senior Product Designer & Communications Lead",
  tagline: "Shaping systems, services, and speculative futures.",
  /** Portrait shown on the About page sidebar. Falls back to a gradient panel when unset. */
  photo: undefined as string | undefined,
  location: "Islamabad, Pakistan",
  education: "M.P.S., Interactive Telecommunications Program (ITP), NYU",
  email: "aliza.habib@nyu.edu",
  linkedin: "https://www.linkedin.com/in/alizasyed/",
  behance: "https://www.behance.net/alizaaasyed",
  heroLine:
    "Senior product design across fintech, climate finance, and healthcare, for the people existing systems tend to leave out.",
  bio: "Senior Product Designer & Communications Strategist driving systemic change across fintech, climate finance, and healthcare. At Ideate Innovation, I lead end-to-end product strategy, transforming complex user requirements into scalable, accessible interfaces. As Communications Lead for DAI Pakistan, I orchestrate high-level engagement strategies that align government bodies, investors, and startups.",
  longBio: [
    "I work at the point where product design, systems thinking, and communication strategy meet, building for the people existing systems tend to leave out.",
    "At Ideate Innovation, that means leading end-to-end product strategy for clients like MMBL and HealthOps: financial and health products built for users that most digital tooling quietly assumes away. Comprehension, trust, and access are treated as design constraints from day one, not retrofitted later.",
    "As Communications Lead for DAI Pakistan, I orchestrate engagement strategy for initiatives like the Climate Finance Accelerator, a UK Government (FCDO) initiative built with DAI and PwC, aligning government bodies, investors, and startups behind a single, coordinated launch.",
    "As a Fulbright Scholar, I completed my thesis at NYU's Interactive Telecommunications Program: What She Carried, a VR archive built from photogrammetry and oral history, a reminder that speculative, hands-on making is still one of the sharpest tools for understanding a system before you try to redesign it. Earlier roles as a product designer at Productbox and a creative technologist with Jack Morton shaped that range.",
  ],
};

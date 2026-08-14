Milton Public School --- Website PRD

Client: Milton Public School, Manvi
Development Company: SK TECH SOLUTIONS
Project: Responsive School Website
Status: In Development
Version: 1.0
Date: August 14, 2026

1. Project Overview

Milton Public School requires a professional, modern and responsive
website representing the school's identity, academics, student
activities, events, community engagement and school environment.

The website must provide a clear experience for parents, students,
visitors and prospective parents across desktop, tablet and mobile
devices.

2. Confirmed School Information

School: Milton Public School

Location: Manvi

Established: 2009--10

Medium: English Medium

Curriculum: Karnataka State Board

Classes: Baby Class to 10th Standard

School hours currently presented: 9:30 AM -- 4:15 PM

Do not invent additional school information unless confirmed by the
client.

3. Brand Identity

Role               Colour                  HEX

Primary Blue       Strong cyan-blue        #0090C0
Deep Blue          Institutional blue      #0078B0
Light Blue         Supporting blue         #50A0D0
Accent Red         Secondary accent        #D02010
White              Main background         #FFFFFF
Light Background   Supporting background   #F4FAFC
Dark Text          Main text               #16323F

Recommended visual balance:

White: ~70%

Blue: ~20%

Light Blue: ~7%

Red: ~3%

Red should remain an accent, not the dominant website colour.

4. Typography

Headings: Merriweather

Body/UI: Poppins

Use the two-font system consistently.

5. Website Goals

Present Milton Public School professionally.

Communicate school identity and academic offering clearly.

Help parents understand the school environment.

Showcase real school activities and experiences.

Make important school information easy to access.

Provide a strong mobile-first experience.

Build a maintainable foundation for future pages.

6. Target Audience

Parents

Prospective parents

Students

Existing students

School visitors

Community members

7. Planned Website Structure

Navbar
  ↓
Hero
  ↓
About School
  ↓
Academics
  ↓
Statistics / School Information
  ↓
Life at Milton
  ↓
Activities / Facilities
  ↓
Admissions
  ↓
Gallery
  ↓
Contact
  ↓
Footer

The order can be refined as development progresses.

8. Current Homepage Components

Current Home structure:

<main>
  <Hero />
  <AboutPreview />
  <AcademicsPreview />
  <Statistics />
</main>

9. Hero Requirements

Use the supplied school building photograph as the Hero background.

Keep the building recognizable on desktop and mobile.

Avoid excessive cropping that hides important Kannada signage.

Maintain readable white hero text with an appropriate overlay.

Display the complete school identity clearly.

Follow the blue/white/red brand system.

Current image:

public/images/school-building.png

10. About School

Current section content:

Eyebrow: About Our School

Heading: A Place to Learn, Grow and Progress

Description: Milton Public School Manvi is an English Medium school
following the Karnataka State Board curriculum, providing education from
Baby Class to 10th Standard.

Current highlights:

Karnataka State Board

School Hours: 9:30 AM -- 4:15 PM

Current tags:

English Medium

Baby Class -- 10th Standard

Current image:

/images/school-building.png

The full building image should remain visible without unnecessary
cropping.

11. Academics

The Academics section introduces the school's academic stages.

Current heading:

Learning at Every Stage

Current confirmed information:

English Medium

Karnataka State Board

Baby Class to 10th Standard

Current visual cards:

Baby Class

Primary School

Middle School

High School

Important: Primary, Middle and High School are currently visual
groupings. Confirm the school's official class divisions before
presenting these as formal institutional classifications.

Do not invent subjects, teaching methods, student numbers, academic
achievements or other unsupported claims.

The section should use:

White cards

Blue tones

Light blue backgrounds

Small red accents

Soft shadows

Rounded corners

Responsive layouts

Subtle hover interaction

12. Life at Milton

This section will showcase the school's real student experience beyond
the normal classroom.

Classroom

Show:

Teachers teaching

Students learning

Classroom environment

Target: 5--8 strong photographs.

Digital Classroom

The school currently has one digital classroom.

Do not claim multiple digital classrooms.

Target: 5--8 photographs where available.

Sports & Large Ground

Show:

Large school ground

Students playing

Outdoor sports

Sports activities

Target: 5--8 photographs.

Karate Club

The school has an ongoing Karate Club.

Target: 5--8 photographs.

NCC Club

The school has an NCC Club.

Target: 5--8 photographs.

Cultural & Dance

Show:

Cultural activities

Dance events

Stage performances

Student participation

Target: 5--8 photographs.

Events & Community

This category may include:

School exhibitions

Police officers attending as guests

Community interaction

Awareness programmes

Social-awareness activities

If police officers specifically conducted an awareness programme, it may
be presented as Community Awareness. If they were simply guests at an
exhibition, classify the media as Events & Community / Exhibition.

Target: 5--8 photographs.

Student Life

Show:

Lunch break

Students sitting together

Friends interacting

Recreation on the large ground

Target: 5--8 photographs.

Educational Trips

Trips should be their own category.

Suggested folder:

educational-trips/

If there are different trips, separate them by destination/event.

Target: 5--8 strong photographs per trip where enough media exists.

13. Independence Day

Independence Day is August 15.

Before the event, the website may reserve a clean celebration feature
without inventing a schedule, guests or programme details.

Possible wording:

15 August
Happy Independence Day
Celebrating the spirit of freedom, unity and our nation.

After the event, update the section with actual school photographs.

Suggested folder:

public/images/independence-day/

14. Media Management

Original school/client media should be kept outside the production
website project.

Recommended structure:

C:\SK_Projects├── milton-public-school│   └── public│       └── images└── Milton_School_Media    └── originals```

Original media must remain untouched.

Website-ready media should be:

```text
Original
  ↓
Select
  ↓
Enhance
  ↓
Resize
  ↓
Convert to WebP
  ↓
Copy optimized versions into public/images

Recommended WebP targets:

General photography: quality 82--88, max width around 1920px

Card images: quality 82--85, max width around 1200px

Thumbnails: quality 80--82, max width around 800px

15. Media Naming

Use lowercase, descriptive, hyphenated names.

Examples:

classroom-01.webp
digital-classroom-01.webp
sports-ground-01.webp
sports-activity-01.webp
karate-01.webp
ncc-01.webp
cultural-01.webp
dance-01.webp
exhibition-01.webp
police-guest-01.webp
awareness-program-01.webp
student-life-01.webp
lunch-break-01.webp
trip-01.webp

Avoid random production names such as IMG_1234.jpg or
WhatsApp Image....

16. Gallery

The Gallery will eventually provide deeper exploration of school media.

Planned categories:

Classroom

Digital Classroom

Sports

Karate Club

NCC Club

Cultural & Dance

Events & Community

Student Life

Educational Trips

Independence Day

The homepage should use selected previews rather than loading the
complete media library at once.

17. Responsive Requirements

Test at:

1440px

1280px

1024px

768px

425px

375px

320px

Requirements:

No horizontal overflow.

No overlapping content.

Images remain meaningful.

Buttons remain tappable.

Cards stack correctly.

Mobile navigation works.

Hero text remains readable.

Important information remains visible.

18. UI/UX Direction

The website should feel:

Professional

Educational

Trustworthy

Modern

Welcoming

Clean

Family-friendly

Avoid:

Excessive animation

Excessive red

Overly dark sections

Generic stock imagery when real school media exists

Crowded layouts

Tiny text

Excessive gradients

Unnecessary popups

19. Animation

Use subtle Framer Motion effects:

Fade-in

Slight upward reveal

Slight horizontal reveal

Gentle card hover

Image reveal

Avoid excessive movement or effects that hurt readability or mobile
usability.

20. Technical Stack

Current stack:

React

Vite

JavaScript / JSX

CSS

Framer Motion

Lucide React

React Router

Project:

C:\SK_Projects\milton-public-school

21. Current Important Assets

public/images/milton-public-school-logo.png
public/images/school-building.png

22. GitHub

Repository:

https://github.com/balaravi444/milton-public-school.git

Use Git checkpoints after stable sections.

Typical workflow:

git status
git add .
git commit -m "descriptive checkpoint"
git push origin main

23. Content Accuracy Rules

This is a real client website.

Never invent:

Facilities

Number of classrooms

Number of digital classrooms

Student numbers

Faculty numbers

Fees

Admissions deadlines

Awards

Exam results

Guest names

Event schedules

Infrastructure claims

Certifications

Academic achievements

Use only information supplied or confirmed by the school.

24. Development Workflow

Work one section at a time:

Build
 ↓
Desktop check
 ↓
Tablet check
 ↓
Mobile check
 ↓
Content check
 ↓
Lock section
 ↓
GitHub checkpoint
 ↓
Next section

Avoid changing already-approved sections without a specific reason.

25. Definition of Done

A section is complete only when:

JSX compiles without errors.

CSS loads correctly.

Desktop is correct.

Tablet is correct.

Mobile is correct.

No horizontal overflow exists.

Images load correctly.

Text is readable.

Links work.

Animations are appropriate.

Branding is consistent.

Content is factually supported.

The stable version is committed to GitHub.

26. Project Philosophy

The Milton Public School website should not feel like a generic
template.

It should communicate:

A real school, with real students, real teachers, real activities,
and a real community.

The school's own identity, photographs and confirmed information should
be the foundation of the final website.

The website should represent the quality and professionalism of SK
TECH SOLUTIONS.
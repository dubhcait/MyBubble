This was built as a prototype as a part of a COVID19 Hackathon

# MyBubble

The game where it's good to 'live in a bubble' -- MyBubble makes social distancing fun by earning rewards for keeping social distance, encouraging others, and staying positive!

## Inspiration

Humans are social creatures, and with social distancing staying apart, staying out of groups, and staying at home is completely unnatural to us! This is even harder for younger folks the ones who feel invincible, get easily bored, and have a penchant for ignoring the rules. But in these times rebelling against social distancing can lead to catching COVID-19 themselves or unwittingly becoming community transmitters. We created MyBubble - the game that makes social distancing fun as a combination of technology, behavioural economics (gamification), and positivity all rolled into one!

## Our track

Given the societal challenge that social distancing has posed to all of us, we see this as well-aligned with Second-Order Societal Impacts. Such a disruption is unprecedented in recent memory with social isolation raising new challenges to our mental health, introducing new ways of working, and having major impacts to all industries.

Further, given one of our team member's experience in healthcare strategy and behavioural economics, it's clear that gamification, done right in conjunction with technology, can help nudge us to better overall health and lifestyle choices. This is a great case study for helping people achieve something against the grain of human nature!

## What is the dream

[![demo video](http://img.youtube.com/vi/N5Ke9tYGZuQ/0.jpg)](http://www.youtube.com/watch?v=N5Ke9tYGZuQ "My Bubble App")

Each week, players in our app will get a new challenge to keep themselves busy and engaged i.e. signup for an online course, go outside for personal exercise, or schedule daily video chats. Along with 3 bubbles, which are 3 chances to survive the week without bursting your social distance bubble, detected using smart phone

### functions like:

- Bluetooth, so you keep a safe 6-foot bubble around you,

- Sensing devices nearby, to warn when you’re around a group of 3 or more,

- And geofencing -- to remind you not to leave the house unless it’s absolutely necessary!

We provide users the opportunity to also redeem themselves should they falter by learning more about COVID-19, phoning a loved one, or sharing a positive message via social media. If they're able to make it to the end of the week with their bubbles in tact -- can share how they fulfilled their social distancing duty with MyBubble badges, post their scores to the community leaderboard, and get rewarded with Suds -- MyBubble’s point system which can be converted for discounts and credits with local businesses and national sponsors to keep the economy engaged.

## How we built it

The initial design was built together in Figma;![](https://i.imgur.com/qIRAOcz.png)

The final app would use Bluetooth LE Advertising and beacon technology to detect other nearby phones and, thus, the people using them. In normal beacon applications, the phone acts solely as a scanning device. MyBubble modifies the beacon paradigm to make the phone both a beacon broadcasting its presence and a scanner looking for other phones. Phones that do not include the app can still be discovered provided they have Bluetooth enabled, just not with much proximity accuracy. We expect that when two phones are both running the app, they will be able to determine when they are approximately 2 meters apart;the typical distance encouraged for safe social distancing but this needs further experimentation.

## How far we got

The app element was built with a javascript framework, currently it is a PWA so can be installed to android or ios devices. It currently queries the geolocation API, it can calculate distance between 2 points but will need some added display functionality to make use of this, work in progress, the idea would be setting a location for your home so you can get rewarded for staying within 2 km of it.

## Challenges we ran into

#### Determining how to balance user compliance with adoption:

we put a lot of thinking and anecdotal user validation to determine people's social distancing habits and how to best measure/incentivize/nudge users

#### Exploring Bluetooth's capabilities:

All other Bluetooth packages are built around particular pkgs so more for app development so a react native app would work for this. Time and effort was put into determining just how accurate Bluetooth beacon technology currently is and can be.

#### Working across 3 very different time zones!

## Accomplishments that we're proud of

#### Came up with an intriguing concept (validation):

we shared the idea with multiple people also in stay-in-place or self-isolation contexts, and they really liked the idea! They thought it's a great way to keep on track with the right practices in social distancing, and they appreciated that it was some form of recognition for their efforts in social distancing. Many teens and older really wanted to download it!

#### The technology:

Getting a Bluetooth beacon and beacon scanning native Android app up-and-running very quickly. The Android app was already available as open source, but the beacon required some bit-level hacking to get the right data advertised. It pays to keep old dev boards lying around the garage!

#### International collaboration:

our team has 8 hours apart end-to-end, but we managed to work together thanks to a lot of Google Hangouts, an active Slack workstream, and a lot of patience!

#### Had fun! Only wish we had more time!

## What we learned

##### Focus first:

we had a lot of ideas about features and ways the app could work, thought out many scenarios of how to "game the system", and what ways to prevent community transmission eventually we were able to focus on the core problem, and on a core market (younger people who may be less compliant than most people with social distancing rules)

#### Build a multidisciplinary team:

our venn diagram had slight overlaps, but we found that our skillsets really complemented each other!

#### Pushed our boundaries:

each of us learned something new whether it was a new program, pushed the bounds of our current understanding, or new ways of working!

## What's next for MyBubble

#### Put it all together, and polish!:

get the components (UI/backend/etc.) put together into a cohesive product

#### Potentially build an API for location:

to really harness the geolocation, it would be best to build a API that could receive the users location and send back how many they overlap with for groups more so that social distancing as bluetooth is more accurate.

#### Expand the team:

we need as much help as we get especially in building the app, improving the UI/UX, and refining the technology

#### Refine the Bluetooth tech:

Investigate ideas for improving distance measurement accuracy when both phones are using our app and operating as both beacons and scanners; Investigate ideas for distance calculations based solely on Bluetooth Advertising packets when the peer device is not operating as a beacon (e.g. is not using our app)

#### Find partner-sponsors:

Recruit potential partners (e-tailers, and for city-versions local businesses to help get them support); also find potential partners for challenges (e.g., online classes that can be linked into challenges, content/video, etc.)

#### Flesh out the tokenomics and rules:

to prevent "gaming" the system and ensuring best compliance with social distancing

#### Marketing:

once it's ready for launch -- we'd like to connect with our target audience by leveraging social media and influencers who can help share encouragement to keep up their duty in social distancing, and show how they're using it to keep themselves honest too

## Our team

#### Randall Baran-Chong (Canada):

Randall is a global healthcare strategist with a keen interest in technology and human behaviour. He likes to combine the 3 to help connect the healthcare ecosystem, improve health outcomes, and empower people to own their health.

#### Kate O'Brien (Ireland):

Kate is a former doctor-turned-full-stack javascript developer. Kate has experience also with node.js, react, and a keen interest in cybersecurity, DevOps, and getting involved in the community!

#### Chris White (USA): Chris is an audio/software/embedded

systems technologist currently doing R&D on next-generation Bluetooth audio. Motivated by his Christian faith, he is always looking for ways to apply his skills and resources to love others through his work.

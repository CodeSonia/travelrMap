# TravelrMap
![travelerMap logo](assets/images/travelrmap_logo.png)
### _Your ultimate travel companion. Discover unfamiliar surrondings in new places._
[Back To Top](#travelrmap)

# Table of Contents
- [UX](#ux)
- [Strategy](#strategy)
  * [Goals](#goals)
    * [External User Goal:](#external-user-goal)
    * [Product Owner Goal:](#product-owner-goal)
  * [Purpose](#purpose)
    * [Why](#why)
  * [Buyer Personas](#buyer-personas)
    * [User Interview 1](#user-interview-1)
    * [User Interview 2](#user-interview-2)
    * [User Interview 3](#user-interview-3)
  * [User Pain Points](#user-pain-points)
    * [Disintegrated planning and booking](#disintegrated-planning-and-booking)
    * [Mobile Booking](#mobile-booking)
    * [Not having the right information](#not-having-the-right-information)
  * [User Expectations](#user-expectations)
  * [Business Solution](#business-solution)
  * [Values](#values)
    * [Value for the User](#value-for-the-user)
    * [Value for TravelrMap](#value-for-travelrmap)
  * [User Stories](#user-stories)
  * [Strategy Table](#strategy-table)
- [Scope](#scope)
  * [Functional Specifications](#functional-specifications)
  * [Content Requirements](#content-requirements)
  * [Release 1: (Informative Stage)](#release-1-informative-stage)
  * [Release 2: (Extra Functionality)](#release-2-extra-functionality)
  * [Release 3: (End Product)](#release-3-end-product)
- [Structure](#structure)
  * [Consistency](#consistency)
  * [Visible](#visible)
  * [Learnable](#learnable)
  * [Feedback](#feedback)
  * [Information Architecture](#information-architecture)
- [Skeleton](#skeleton)
  * [Mobile](#mobile)
    * [Mobile Wireframe: Home](#mobile-wireframe-home)
    * [Mobile Wireframe: About](#mobile-wireframe-about)
    * [Mobile Wireframe: TravelrMap Feature](#mobile-wireframe-travelrmap-feature)
    * [Mobile Wireframe: Things to Do](#mobile-wireframe-things-to-do)
    * [Mobile Wireframe: Quiz](#mobile-wireframe-quiz)
    * [Mobile Wireframe: Footer](#mobile-wireframe-footer)
  * [Tablet](#tablet)
    * [Tablet Wireframe: Home](#tablet-wireframe-home)
    * [Tablet Wireframe: About](#tablet-wireframe-about)
    * [Tablet Wireframe: TravelrMap Feature](#tablet-wireframe-travelrmap-feature)
    * [Tablet Wireframe: Things to Do](#tablet-wireframe-things-to-do)
    * [Tablet Wireframe: Quiz](#tablet-wireframe-quiz)
    * [Tablet Wireframe: Footer](#tablet-wireframe-footer)
  * [Desktop](#desktop)
    * [Desktop Wireframe: Home](#desktop-wireframe-home)
    * [Desktop Wireframe: About](#desktop-wireframe-about)
    * [Desktop Wireframe: TravelrMap Feature](#desktop-wireframe-travelrmap-feature)
    * [Desktop Wireframe: Things To Do](#desktop-wireframe-things-to-do)
    * [Desktop Wireframe: Attractions](#desktop-wireframe-attractions)
    * [Desktop Wireframe: Quiz](#desktop-wireframe-quiz)
    * [Desktop Wireframe: Contact](#desktop-wireframe-contact)
    * [Desktop Wireframe: Footer](#desktop-wireframe-footer)
- [Surface](#surface)
- [Features](#features)
  * [Existing Features](#existing-features)
  * [Features Left to Implement](#features-left-to-implement)
- [Technologies Used](#technologies-used)
- [Testing](#testing)
  * [Automated Testing](#automated-testing)
  * [Manual Testing](#manual-testing)
- [Deployment](#deployment)
- [Credits](#credits)
- [Research Credits](#research-credits)

# UX

Before writing any code, I conducted user research and used Jesse James Garrett's User-Centred Design process to help ensure TravelrMap is useful, useable and provides value to both users and site owner.

[Back To Top](#travelrmap)
# Strategy

## Goals
A travel web application for travellers to create a lifetime experience for themselves and others with less hassle. The website allows users to find their site of attraction conveniently and efficiently, by providing useful information and/or suggestions on places to visit based on the user's interests. Perfect for those who are looking to visit an unfamiliar city and enable them to _learn, discover, find new adventures and explore new cultures._

### External User Goal:
- Find the most suitable holiday destination to fulfil their needs.

### Product Owner Goal:
- Allow users to find places of attractions from TravelrMap so the website becomes a popular site in exploring new destinations. 

## Purpose
The project's purpose is to help increase the love of travelling by **removing the hassle of using multiple sources** to plan a trip and increase positive user experience, **by aiding their travel search with providing the right information at the right time**. 

![travel made easy with travelrMap](assets/readme_images/travel_made_easy.png)

Users should find the website application eliciting a positive emotional response, as it is intuitive, simple and most importantly fun to use!

_TravelrMap is an online application that allows users to easily find interesting places. This enables users to help plan their next trip by finding all of their information on one site._

### Why?

**TravelrMap will help change the way people think about travelling**

Why not inspire yourself with sites of attractions listed from the most exclusive locations, and help plan your trip! 

[Back To Strategy](#strategy)

[Back To Top](#travelrmap)

## Buyer Personas

Before jumping to developing my wireframes and begin coding, I decided to do a bit of user research to help feed my user stories. I interviewed a couple of friends and family to identify their goals and expectations when they travel.

### User Interview 1: 
![User Interview 1](assets/readme_images/user_interview_1.png)

### User Interview 2: 
![User Interview 2](assets/readme_images/user_interview_2.png)

### User Interview 3: 
![User Interview 3](assets/readme_images/user_interview_3.png)

To summarise:

## User Pain Points:

### Disintegrated planning and booking
<details><summary></summary> 

The internet has vast amount of information in how people can easily plan and book their travel. However, as travel sites and information has increased, so has the complexity of planning and booking a trip.

- It takes too much time and hassle to find points of interests when planning trips. As a user they'll have to visit various websites or applications to find their required details to make an informed choice.
- Feeling overwhelmed from having to navigate multiple pages and having to keep many tabs open, adding complexity to make a decision. This creates a negative experience for a user, as travel _should_ be a fun thing to do!
  - Nielson [1] research has found that:
    >Travelers spent an average of 53 days visiting 28 different websites over a period of 76 online sessions. 

That is a lot of time and effort for the average person to find their right travel plans. This can be further negative/painful for someone who is trying to plan an itinerary alongside a full-time career and family commitments. 
</details>

#### Mobile Booking
<details><summary></summary>
70% of millennials book travel activities on mobile sevices. Research from Google Consumer Insights find that more than half of South Korean and Japanese smartphone users research, book and plan their trips on their mobile devices! [2]

- If applications and websites do not operate on mobile, then user experience will thus decrease. Therefore, it is imperative to ensure TravelrMap is fulfilling this need.
</details>

### Not having the right information
<details><summary></summary>
As users can become quite overwhelmed, as pointed earlier, not having the right information at once can impair user experience when travelling - organisation of travelling should be fun, not hard work. 

Users like to ensure that they're accumulating the right information, i.e. weather, location, travel and, other's experiences and so on. 

It also means, that users would like to know someone else had an enjoyable experience, before making the choice. According to Tnooz [3], 95% of consumers read reviews before booking. This means if this information is not presented, value is not provided to the user.
</details>

[Back To Buyer Personas](#buyer-personas)

[Back To Strategy](#strategy)

[Back To Top](#travelrmap)

## User Expectations:

- Mobile-friendly
- Display points of interests in a visual manner
- Easy navigation so the user are aware where they are on the website and purpose of each page.
- Minimal content and beautiful imagery
- Catchy and compelling headlines
- Design is unique and stands out
- Dark mode
- Minimal amount of steps when making a purchase or booking
- Emotional triggers - feeling that the application gives the consumer sense of belonging (branding)
- Various types of content: video tutorials/white papers/blogs/testimonials/FAQ's/webinars
- 404 error to inform users that a page does not exist
- User feedback when user makes an error

[Back To Strategy](#strategy)

[Back To Top](#travelrmap)

## Business Solution:

- Build an informative website application which provides useful information for the users when planning to travel or wanting to feel inspired for their next trip.
- Allow users to share their points of interests with their friends or families.
- Instant adventure - modern travellers look for more flexibility when they're quite spontaneous while travelling, meaning being influences by weather or mood. TravelrMap will allow users to find points of attractions while on their trip to aid this. 

[Back To Strategy](#strategy)

[Back To Top](#travelrmap)

## Values:

### Value for the User:
- Maximum time saved on finding and discovering places to go with reduced amount of hassle.
- Able to easily navigate pre-travel and during travel plans.
- Creating a sense of community of those who love travelling and who are planning a trip together. 

### Value for TravelrMap: 
- Increased brand awareness as a one-stop shop.
- Lead nurtuting.
- Be able to include a features booking whereby users are able to directly purchase when searching.
- Able to build strategic partnerships with booking.com, AirBnB, SkySkanner, hotel.com and so on.
- With increased traffic, can look to commercialise the website by selling advertising space. Also, devise partnership schems with attractions/hotels/restaurants to illustrate accurate information such as prices, promotional offers and booking availability.

_Please note, some of these values are more aligned for long-term goals for TravelrMap, as it will not be feasible to develop all of this at once. Please see below Strategy Table and Scope for more context._

[Back To Strategy](#strategy)

[Back To Top](#travelrmap)

## User Stories

As a Product Owner...

- I want to be able to provide users with relevant information regarding an attraction in Turkey, Morocco & UK, so that the users are able to find what they're looking for.
- I want the site to provide a positive user experience, so that users can come back to the website for another purpose in the future.
- I want to be able to use the website myself, if I was looking or discovering a new place for a new adventure.
- I want to be able to be contactable, so I can listen to user feedback or help my users.
- I want to be able to provide user feedback, so that my users are able to rectify their mistake by TravelrMap being helpful in identifying user error.
- I want to be able to increase the number of trips booked by users, so that I can meet the business financial goals.

As a User...

- I want to casually browse and want to be able to feel inspired, so that I could book a trip in the future.
- I want to be able to find destinations, so that I can see a variety of choices before making a decision.
- I want to be able to see reviews made from previous travellers, so that I know I am making the right choice.
- I want to be able to find details of the point of attraction, so I can learn more about the place of interest.
- I want to be able to find nearby attractions, restaurants, things to do, so that I can make the most of my trip.
- I want to be able to be kept up with the latest news, updates and promotions, so that I can keep up-to-date with TravelrMap.
- I want to be able to easily navigate the webiste so that I can find the content I am looking for. 
- I want to be able to find the best locations in Turkey, UK & Morocco. 
- I want to be able to contact TravlerMap regarding any query.
- I want to be able to access social media accounts, so I can be part of TravelrMap's community.
- I want to be able to switch to a dark mode version of the website, so that when I am browsing in the night or evening, it will help reduce eye strain.

[Back To Strategy](#strategy)

[Back To Top](#travelrmap)

## Strategy Table

Opportunity/Problem/Feature | Importance | Viability
--------------------------- | ---------- | ---------
Navbar -  Referring to interaction design, allowing the user to clearly identify where they are on a website | 5 | 5
Plan an itinerary/trip - select destinations and start scheduling details and points of interests | 4 | 1
About/How to Use | 5 | 5
Share & Connect using social media and connect with travel lovers around the world | 5 | 5
Quiz - "What do you love most about travelling" to make travelling fun and exciting and get recommendations | 5 | 4
Micro interaction using animation - AOM scroll/animate.js/hamburger icon/landing page animation | 4 | 2
TravelrMap | 5 | 4
Search & Filter - users should be able to search for tips according to preferences. It helps the user find their next trip adventure and include suggestions to remind, guide and stimulate users to perform a certain action. When a user is searching, it should also prompt the user what they could search for | 5| 3
Enable location services - ask the user if we can use their location details | 5 | 3
Favourite a place of interest | 4 | 2
Recommendations for you | 5 | 3
Places of interest's details - shows a picture of place, information, temperature, map picker, reviews, nearby attractions. | 5 | 3
404 Error | 5 | 3
Gamification | 3 | 1
Contact Form | 5 | 5
Newsletter Sign-up | 5 | 3
Dark Mode | 4 | 2
Mobile Friendly | 5 | 4
Social media links | 5 | 5
AI to help users make decisions | 3 | 1
Total | 92 | 64

[Back To Strategy](#strategy)

[Back To Top](#travelrmap)

# Scope 
As identified from the strategy table, it is not feasible to create every feature during the first development. As a result, I have listed 3 phases and identified what the minimum viable product is. This means, Phase 1 should be enough to satisfy TravelrMap's users and will have the opportunity to gather user feedback. 

This will also allow TravlerMap to excite users when new features are developed - it is an on-going process! Especially with AI and automation being at the forefront of technology it would be cool to develop the project further one day using AI and algorithms to help users make effective decisions when organising travel and exploring what destination should be next.

### Functional Specifications:
- TravelrMap (map feature)
- Contact Form
- Trip Details

### Content Requirements: 
This is important since "__Content is King!"__ which implies that the reasoning as to why people revisit your website again, if it is useful, relevant, accessible and digestible. 

- Mixed content such as imagery and text
- Minimal content 
- Large imagery/beautiful visuals
- Eye-catching slogans and tag-lines
- Creative design - illustration and animation the landing page will captivate users.

## Release 1: (Informative Stage)
- Navbar
- About
- Quiz
- Micro Animation 
- TravelrMap (map feature)
- Contact Form
- Mobile Friendly 
- Social media links 

## Release 2: (Extra Functionality)
- Filter 
- Enable Location Services
- Favourite 
- 404 Error Page
- Dark Mode

## Release 3: (End Product)
- Create an itinerary and finding an itinerary 
- Share & Connect 
- Registration/Dashboard
- Gamification
- Bookings 

The great thing about having a MVP and planned releases enables me to create a "WOW" effect. Therefore, as I unfold new features, new user experiences are created for the future. Thus, surprising users with incremental changes that have meaningful values.

[Back To Scope](#scope)

[Back To Top](#travelrmap)

## Structure 
To leverage user's prior behaviour and experience, I incorporated interaction design. This means that I took advantage of design patterns and sequences that provide options to the user i.e. navigation or order of menu items.

I also incorporated information architecture, which meant that the organisation, arrangement and priority of content were considered. For example, when users read a navbar they tend to read from the left to right, thus, the top priority of information were displayed on the left with diminishing priority.

### Consistency 
<details><summary></summary>

- Navbar Elements
  - Users expect the logo identifying the site to be on the top-left corner and the primary navigation to be across the top or down the left-side.
- Follow conventions - elements are located and behave the way users expect. Using Jakob's Law, users prefer a website application to work the same way as all the other sites they already know. Therefore, when considering structure, and to make my site easy to use, I followed the following standardised design patterns:
  - Visual Hierarchy
  - Pages are broken up into clearly defined areas
  - A link is obvious that it is clickable
  - Eliminating distractions
  - Format content to support scanning i.e. golden ratio or z-rule
- Elements and interactive features are consistent, both in coding and theme.
- Leveraging upon user's prior experience.
- Labels/buttons/terms are consistent throughout the design.
- Content and imagery have a stable and consistent style
  - Incorporating both visual imagery and illustrations
</details>

### Visible
<details> <summary></summary>

- All elements are discoverable and easy to find & use.
- Incorporate content hinting, where partial elements are revealed
  - i.e. partially reveal the next section of the page, just above the fold so that users are encouraged to scroll. This helps with TravelrMap being intuitive.
</details>

### Learnable
<details><summary></summary>

- Provide a strong sense of place i.e. indication of which page a user is on or page title.
- Users expect that when hovering their mouse over a nav-link, they'll be revealed through sub-menus.
</details>

### Feedback 
<details><summary></summary>

- Clearly visit change in state i.e. color change
- Clear feedback if inputting a form incorrectly
- Instructional design providing user feedback in the case of user error i.e. broken link or 404 error.
</details>

### Information Architecture
<details><summary></summary>

- Create visual hierarchies
  - It influences the order in which our eye chooses to look at elements
  - Appearance of elements on the page (visual cues) accurately portray the relationship between the things on the page
    - which things are most important
    - which things are smaller
    - which things are part of other things
  - Typography Scale
    - Majority of the interface will be occupied by text.
      - The most important element is more prominent.
        - Larger, bolder and distinctive color or closer to the top of the page.
      - Things that are related logically are related visually 
      - Nesting 
  </details>

[Back To Structure](#structure)

[Back To Top](#travelrmap)

## Skeleton
I wanted to ensure the flow and functionality is seamless for the users before development stage. As I have features releasing in phase 2 and 3, I intend the website to evolve as a platform where users are able to book their destination. 

In addition, it'll also encompass different continents and regions such as Europe, Middle Eastern, Africa and so on. 

Please find below snapshots of the wireframes below:

### Mobile:

#### Mobile Wireframe: Home - 
<details><summary></summary>

![Mobile Wireframe: Home](assets/wireframes/mobile/mobile_home_wireframe.png)
</details>

#### Mobile Wireframe: About - 
<details><summary></summary>

![Mobile Wireframe: About](assets/wireframes/mobile/mobile_about_wireframe.png)
</details>

#### Mobile Wireframe: TravelrMap Feature - 
<details><summary></summary>

![Mobile Wireframe: TravelrMap](assets/wireframes/mobile/mobile_map_wireframe.png)
</details>

#### Mobile Wireframe: Things to Do - 
<details><summary></summary>

![Mobile Wireframe: Things to Do](assets/wireframes/mobile/mobile_things_to_do_wireframe.png)

</details>

#### Mobile Wireframe: Quiz -
<details><summary></summary>

![Mobile Wireframe: Quiz](assets/wireframes/mobile/mobile_quiz_wireframe.png)
</details>

#### Mobile Wireframe: Contact - 
<details><summary></summary>

![Mobile Wireframe: Contact](assets/wireframes/mobile/mobile_contact_wireframe.png)
</details>

#### Mobile Wireframe: Footer - 
<details><summary></summary>

![Mobile Wireframe: Footer](assets/wireframes/mobile/mobile_footer_wireframe.png)
</details>

[Back To Skeleton](#skeleton)

[Back To Top](#travelrmap)

### Tablet:

#### Tablet Wireframe: Home - 
<details><summary></summary>

![Tablet Wireframe: Home](assets/wireframes/tablet/tablet_home_wireframe.png)
</details>

#### Tablet Wireframe: About - 
<details><summary></summary>

![Tablet Wireframe: About](assets/wireframes/tablet/tablet_about_wireframe.png)
</details>

#### Tablet Wireframe: TravelrMap Feature -
<details><summary></summary>

![Tablet Wireframe: TravelrMap Feature](assets/wireframes/tablet/tablet_map_wireframe.png)
</details>

#### Tablet Wireframe: Location - 
<details><summary></summary>

![Tablet Wireframe: Location](assets/wireframes/tablet/tablet_location_wireframe.png)
</details>

#### Tablet Wireframe: Quiz - 
<details><summary></summary>

![Tablet Wireframe: Quiz](assets/wireframes/tablet/tablet_quiz_wireframe.png)
</details>

#### Tablet Wireframe: Contact - 
<details><summary></summary>

![Tablet Wireframe: Contact](assets/wireframes/tablet/tablet_contact_wireframe.png)
</details>

#### Tablet Wireframe: Footer - 
<details><summary></summary>

![Tablet Wireframe: Footer](assets/wireframes/tablet/tablet_footer_wireframe.png)
</details>

[Back To Skeleton](#skeleton)

[Back To Top](#travelrmap)

### Desktop:

#### Desktop Wireframe: Home - 
<details><summary></summary>

![Desktop Wireframe: Home](assets/wireframes/desktop/desktop_home_wireframe.png)
</details>

#### Desktop Wireframe: About - 
<details><summary></summary>

![Desktop Wireframe: About](assets/wireframes/desktop/desktop_about_wireframe.png)
</details>

#### Desktop Wireframe: TravelrMap Feature - 
<details><summary></summary>

![Desktop Wireframe: TravelrMap Feature](assets/wireframes/desktop/desktop_map_wireframe.png)
</details>

#### Desktop Wireframe: Things To Do - 
<details><summary></summary>

![Desktop Wireframe: Things To Do](assets/wireframes/desktop/desktop_things_todo_wireframe.png)
</details>

#### Desktop Wireframe: Attractions - 
<details><summary></summary>

![Desktop Wireframe: Attractions](assets/wireframes/desktop/desktop_attractions_wireframe.png)
</details>

#### Desktop Wireframe: Quiz - 
<details><summary></summary>

![Desktop Wireframe: Quiz](assets/wireframes/desktop/desktop_quiz_wireframe.png)
</details>

#### Desktop Wireframe: Contact - 
<details><summary></summary>

![Desktop Wireframe: Contact](assets/wireframes/desktop/desktop_contact_wireframe.png)
</details>

#### Desktop Wireframe: Footer - 
<details><summary></summary>

![Desktop Wireframe: Footer](assets/wireframes/desktop/desktop_footer_wireframe.png)
</details>

[Back To Skeleton](#skeleton)

[Back To Top](#travelrmap)

# Surface
(Colors, Typography)

# Features

## Existing Features

## Features Left To Implement

# Technologies Used
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
  - used to structure the website and create the essential elements of my site. 
- [CSS](https://www.w3.org/Style/CSS/Overview.en.html) 
  - used to style the markup and create custom styling. 
- [JavaScript](https://www.javascript.com/) 
  - used to manipulate the Document Object Model (DOM) elements while adding interactivity via functions, event listeners and so on.
- [JQuery](https://jquery.com)
    - used jQuery library to extend JavaScript functionality and help speed up the process.
- [Bootstrap](https://getbootstrap.com/)
  - used as the core structure of the website and make my site responsive. It also includes pre-built plugins such as jQuery. 
- [Google Developer tools](https://developers.google.com/web/tools/chrome-devtools/) 
  - to help solve a bug and help style my elements before writing code. 
- [EmailJS](https://www.emailjs.com/)
  - API used to enable users to send an email to site owner
- [Google Fonts](https://fonts.google.com/) 
  - used to import the font style and help create a unique brand. 
- [GitPod](https://www.gitpod.io/) 
  - used as the development environment to help write my code. 
- [Git](https://git-scm.com/) 
  - to enable version control and help commit changes to my site. 
- [GitHub](https://github.com/) 
  - used to store the source code and repository. 
- [GitHub Pages](https://pages.github.com/) 
  - used to deploy my website.
- [AutoPrefixer](https://autoprefixer.github.io/)
  - used to help parses your CSS and adds vendor prefixes
- [Balsamiq](https://balsamiq.com/) 
  - used to help create my wireframes. 
- [TinyPanda](https://tinypng.com/)
  - used to help compress the sizes of the images. 
- [Affinity Photo](https://affinity.serif.com/en-gb/photo/) 
  - used to help edit my photos and create my graphics. 
- [Affinity Designer](https://affinity.serif.com/en-gb/designer/) 
  - used to to help edit and create my graphics. 
- [Grammarly](https://app.grammarly.com/)
    - used to rectify any grammar errors. 
# Testing

## Automated Testing

## Manual Testing

# Deployment

# Credits

# Research Credits:
1. https://www.mdgadvertising.com/marketing-insights/7-travel-marketing-trends-worth-exploring-in-2017/
2. https://www.thinkwithgoogle.com/consumer-insights/consumer-journey/consumer-travel-smartphone-usage/
3. https://www.rezdy.com/resource/travel-statistics-for-tour-operators/ 


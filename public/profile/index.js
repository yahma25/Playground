const content = `
<img alt="mhkim_profile" src="https://drive.google.com/uc?export=view&id=1gwNwZOXMzAC9sGDEYB7q6GI3CcvJVH_4" width="300px"/>

🏠 Seoul, South Korea
📧 yahma25@gmail.com
<a target="_blank" href="https://github.com/yahma25"><img alt="github" src="https://camo.githubusercontent.com/4133dc1cd4511d4a292b84ce10e52e4ed92569fb2a8165381c9c47be5edc2796/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f706e672f6769746875622e706e67" width="30px"/></a> <a target="_blank" href="https://www.linkedin.com/in/yahma25"><img alt="linkein" src="https://camo.githubusercontent.com/c8a9c5b414cd812ad6a97a46c29af67239ddaeae08c41724ff7d945fb4c047e5/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f6c696e6b6564696e2e737667" width="30px"/></a>

# MyoungHo Kim (Front-end Developer)

> Become a person who improves more than yesterday.
> "If you make a goal, you just go for it to achieve. You can't afford to be afraid of failure."

I have been working as a developer for +4 years.
* Front-end +3 years
* Windows programming 1.5 years

In the past, I had worked as a game designer who designs a game system and a game concept for 4 years.

# Skill
### Commercial experience
* HTML
* CSS/SASS(SCSS)
* JavaScript, TypeScript
* React
* Delphi

### Self studying
* Webpack
* Node.js
* AWS

# Experience
### MIRIDIH | Seoul, Korea | 2016.11 - present
* SPA Design Editor service, Junior Front-end Developer, 3 years
* Windows Design Editor service, Junior Software Developer, 1.5 year

### GamesLab | Seoul, Korea | 2012.01 - 2016.01
* Online/Mobile Game service, Junior Game Designer, 4 years

# Project
### Enterprising service | 2021.01 - present
* Contributing to providing a design feedback system for people who discuss between team members about their design.

<br/>

### Printing service | 2019.11 - 2020.12
* Developed printing features(ex. Page mask, Pre-flight) that need for over 15 products while managing teammates' issues as the main developer.
* Collaborated with the product order service team, made the first revenue by linking two services where users can design on their own in the design editor and order their designs. ($50,000 weekly)

<br/>

### SPA Design Editor service | 2018.07 - 2019.10
* Joined SPA service team based on Typescript, developed a few core features(ex. photo crop, background library, design download) of the editor that users can design on their own.
* Contributed to become the service that has users over 600k and to rank in a higher list in the design editor service industry in Korea.

<br/>

### Windows Design Editor service | 2016.11 - 2018.06
* Solved many errors and technical debt that was accumulated by analyzing a log parser(EurekaLog Parse) I created in person.
* Achieved to reduce the maximum error rate by 9.06% → 1.70% based on an average of 280k executions per month.

# Education
* M.A. Media. Soongsil University Graduate School of Information Science, Korea 2014
* BS. Computer Science. National Institute for Lifelong Education, Korea 2008
`;

new toastui.Editor({
  el: document.querySelector('#viewer'),
  initialValue: content
});

# Full Stack Code Test: 'Factoid Cards'

*Please read this whole README before starting.*

Welcome to the test engineer code test! This will be a test of your:
1. Ability to use standard full stack tools
2. Ability to troubleshoot challenging issues
3. Capability to organize, prioritize, and execute

The point of this test is to understand how you approach a technical problem. The way you code is just as important as your solution.

We expect this test to take you about *6 - 10 hours*. Given that most people are busy, We want to hear back from you *within 72 hours of starting this test*.

## Overall Requirements
Create an application to feature one of your extracurricular interests. Select an interest that has items of alike members (Stamps, Books, Songs, etc). Please use this as a chance to showcase your personality by selecting a category of things you really enjoy, perhaps things you do for fun.

The application should have a frontend for a web browser and a backend in NodeJs, use whatever libraries you are most familiar with otherwise.

#### As soon as you begin:
* [ ] Fork this repository into a public repository on your gitlab/etc account

#### While working on this, please:
* [ ] Commit early and often. I'll likely be following along with your progress.

#### Upon completing this, please email to us:
* [ ] A link to your git repository such that we may view your code.
* [ ] A link to somewhere where we may interact with a demo of your finished product

## Front End Requirements

The User Interface should be made out of a MVVM or MVC style frontend technology, using an asynchronous transport technology to talk to your backend.

#### The user interface should present a card like entry containing
* [ ] A small picture of the item
* [ ] A description of the item
* [ ] A fun factoid for the item

#### Interactions
* [ ] The user should be able to dismiss the currently presented card, making it disappear and presenting the next card in the stack. (Think of swiping in Tinder)
* [ ] The user should be able to create their own factoid to be added to the fact stack.
* [ ] The user should be able to remove a factoid from the fact stack.

## Backend Requirements

The Backend should be NodeJs with whatever middleware(s) you'd like to use.

#### Interactions to support
* [ ] Please provide a RESTful backend for the CRUDL of factoids
* [ ] Factoids should be transported to the UI via JSON
* [ ] Factoids should be stored in some sort of SQL/NoSQL/Flat File on the backend

## BONUS

Consider adding some improvements to what you've made to really showcase your strengths.

### Suggestions for improvements
* [ ] Integrate this with an external Service or API (Pokemon API FTW)
* [ ] Make it work on Mobile device sizes.
* [ ] Write a test or two for your code.
* [ ] Add a lint file and make sure your code is linted.
* [ ] Add CD/CI to your project to auto-deploy it
* [ ] Add Restful backend for facts and items: Allow image upload as well
* [ ] Seed the database with some sample Data
* [ ] Edit this ReadMe with new suggestions for how to improve this code test

## Closing Thoughts

Every developer on our team has completed this code challenge or one of the other code challenges here, so show us what you can do! We're excited to see what kind of contributions you could make to our team.

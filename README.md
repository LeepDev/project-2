# Project 2 - Golf Tournament Team Tracker

My friends and I like to build a team of pro golfers (sorta like fantasy golf) and put money on the line to see which team will come out on top. Unfortunately the websites I have used were not up to par (:D). My app will allow users to login through google and build a team of golfers as well as their total scores for their tournament round. It will also set certain rules such as if a golfer withdraws/can't play, a substitute golfer may be placed in seamlessly. It will also let you set a max number of golfers per team and have a posting board for everyone to throw comments/jabs at one another.

## ERD (Entity Relational Diagram)
Stretch Goals are marked with dotted lines

![ERD](https://i.imgur.com/WEnlHoP.png)

## Restful Routing Chart
| VERB   | URL pattern           | Action (CRUD)    | Description |
| ----   | -----------           | -------------    | ----------- |
| GET    | /teams                | Index (Read)     | lists all teams |
| GET    | /tournaments/:id/teams/new | New (Read)       | shows a form to make a new team |
| POST   | /tournaments/:id/teams | Create (Create)  | creates a team with the POST payload (form) data |
| GET    | /teams/:id            | Show (Read)      | shows a specific team |
| GET    | /teams/:id/edit       | Edit (Read)      | shows a form for editing a specific team |
| PUT    | /teams/:id            | Update (Update)  | updates the data for specific team |
| DELETE | /teams/:id            | Destroy (Delete) | deletes the team |
| | | |
| GET    | /tournaments          | Index (Read)     | lists all tournaments |
| GET    | /tournaments/new      | New (Read)       | shows a form to make a new tournament |
| POST   | /tournaments          | Create (Create)  | creates a tournament with the POST payload (form) data |
| GET    | /tournaments/:id      | Show (Read)      | shows a specific tournament |
| GET    | /tournaments/:id/edit | Edit (Read)      | shows a form for editing a specific tournament |
| PUT    | /tournaments/:id      | Update (Update)  | updates the data for specific tournament |
| DELETE | /tournaments/:id      | Destroy (Delete) | deletes the tournament |

## User Stories
### User
* AAU, I want to be able to add/remove golfers (from sportsdata.io) to my team
* AAU, I want to be able to see all teams on the dashboard
* AAU, I want to not be able to change other teams that are not mine

## User Story Stretch Goals
### User
* AAU, I want to be able to comment on the dashboard
* AAU, I want to be able to see the projected winnings so that I can prepare myself mentally to win/lose money

### Admin (Tournament Manager)
* As an Admin, I want to be able to setup a tournament with the tournament name and max number of players per team and the betting amount per TM
* As an Admin, I want to be able to move TMs from from one tournament to another so that if someone is misplaced, they can be adjusted easily

## Wireframes
![Landing Page](https://i.imgur.com/E6iLL7r.png)

![All Tourney](https://i.imgur.com/QsWzCXm.png)

![All Teams](https://i.imgur.com/vrqGVn3.png)

![Edit Team](https://i.imgur.com/0NGoiBq.png)

## Technology Used
* JS
* HTML
* CSS
* sportsdata.io api (players and tournaments routes for now)
[sportsdata.io](https://sportsdata.io/developers/api-documentation/golf#/sports-data-feed)

## Getting Started

* Login using google credentials
* Click create team
* Add golfers

## MVP
* Create MVC for project
    * Model/View/Controllers
        * Users
        * Teams
* Create Routes for project
    * Routes
        * Users
        * Teams
* Create oAuth
* CRUD for Users and Teams
    * Create
    * Edit
    * Read
    * Delete
* Make administration based on ownership
    * prevent other owners from editing non-owned teams
    * allow viewing all teams
* Seed DB with player data

## Next Steps/Stretch Goals
* Create connect to sportsdata.io
    * pull golfers to seed
* Add MVC/CRUD for:
    * Chat
    * Tournaments
    * Golf Pros
    * Golf Rounds
* Add User Roles (aka: admin or team manager or etc)
* Add more sportsdata.io routes to the api (player stats/tournament stats/tournament schedules/etc)
* Add logic for betting/viewing standings
* View history win/loss
* Look at the team dashboard and comment on who's winning/losing and always make fun of the losing team
# Project 2 - Golf Tournament Team Tracker

My friends and I like to build a team of pro golfers (sorta like fantasy golf) and put money on the line to see which team will come out on top. Unfortunately the websites I have used were not up to par (:D). My app will allow users to login through google and build a team of golfers as well as their total scores for their tournament round. It will also set certain rules such as if a golfer withdraws/can't play, a substitute golfer may be placed in seamlessly. It will also let you set a max number of golfers per team and have a posting board for everyone to throw comments/jabs at one another.

## ERD (Entity Relational Diagram)
![ERD](https://i.imgur.com/WlORTox.png)

## Restful Routing Chart
| VERB   | URL pattern           | Action (CRUD)    | Description |
| ----   | -----------           | -------------    | ----------- |
| GET    | /teams                | Index (Read)     | lists all teams |
| GET    | /teams/new            | New (Read)       | shows a form to make a new team |
| POST   | /teams                | Create (Create)  | creates a team with the POST payload (form) data |
| GET    | /teams/:id            | Show (Read)      | shows a specific player on the team |
| GET    | /teams/edit/:id       | Edit (Read)      | shows a form for editing a specific player |
| PUT    | /teams/:id            | Update (Update)  | updates the data for specific player |
| DELETE | /teams/:id            | Destroy (Delete) | deletes the player |
| | | |
| GET    | /tournaments          | Index (Read)     | lists all tournaments |
| GET    | /tournaments/new      | New (Read)       | shows a form to make a new tournament |
| POST   | /tournaments          | Create (Create)  | creates a tournament with the POST payload (form) data |
| GET    | /tournaments/:id      | Show (Read)      | shows a specific team in the tournament |
| GET    | /tournaments/edit/:id | Edit (Read)      | shows a form for editing a specific team |
| PUT    | /tournaments/:id      | Update (Update)  | updates the data for specific team |
| DELETE | /tournaments/:id      | Destroy (Delete) | deletes the team |

## User Stories
### Team Manager
* As a TM, I want to be able to add/remove golfers to my team so that I can put my team up against the rest
* As a TM, I want to be able to comment on the dashboard
* As a TM, I want to be able to see all teams on the dashboard
* As a TM, I want to be able to see the projected winnings so that I can prepare myself mentally to win/lose money

### Admin (Tournament Manager)
* As an Admin, I want to be able to setup a tournament with the tournament name and max number of players per team and the betting amount per TM
* As an Admin, I want to be able to move TMs from from one tournament to another so that if someone is misplaced, they can be adjusted easily

## Wireframes
![Dashboard](https://i.imgur.com/QlIqNIf.png)
![Team Edit](https://i.imgur.com/VhRjKCE.jpg)

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
* Hit Done
* Look at the team dashboard and comment on who's winning/losing and always make fun of the losing team

## Next Steps/Stretch Goals
* Add more sportsdata.io routes to the api (player stats/tournament stats/tournament schedules/etc)
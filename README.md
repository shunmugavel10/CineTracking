# CineTracking
Movies Search app
To Start:
Install necessary packages by run the following command in Terminal
 - npm install

Then Run project by 
 - npx expo start
 - Select option from the list displayed to run in iOS or android or web.

Screens:

Login:
  Contains fields to enter Username and Password. User can enter and login.
 
Tabs:
- Home Screen
- Favorite
- Profile

Home Screen:
 Contains:
 'Popular Movies' - horizontal scroll showing list of popular movies with movie posters fetched from API.
 'Top Rated Movies' - horizontal scroll showing list of top rated movies with movie thumbnails fetched from API.
 'Search' - search bar, can search for any movies like 'Actions', 'Thriller' etc and it will return list of movies fetched from API.

Search List Screen:
  Shows list of movies fetched from API based on the search made. 
  Each movie contains a favorite icon. Clicking on it will add it to favorite list and saved locally using AsyncStorage.

Favorite Screen:
  Fetch list of movies user marked as favourite. This will be fetched from AsyncStorage locally saved. So user can view their favorite       movies offline.

Profile:
  Logged in User email will be displayed.

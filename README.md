# testserver
testing basic server on localhost

Index file didnt come with coursea course I added this to the public folder ... and changed the links to the css file and javascript file that i also added to their respective folder within the public folder

One of the lines I added to the app.js file was app.use(express.static('public')); this then used my index and picked up the need for the css and the javascript file.

when you look at api.js you will see a lot of routes which are not used when this is running ... i created a drink route and added it ... so only that route is actually used .... this was just for practice and also only needed to test one route.
so main things i added were app.use(express.static('public')) for loading index css javascript ... created a var for drinkrouter and added a app.use for drink route.
there is also a small section used for crossorigion not in coursea course. not required .... was having a problem and thought this might fix it ... but i had this problem when i was using another webpage to try access api eg was using a webpage on localhost:3010 and i was gettin cross origin problems .... will check out if i still require this section

The MOST IMPORTANT change I made was to the drinkrouter.js page .... this change is REQUIRED or post dosent work properly ... you can see the changes at lines 27 - 33 in the drinkrouter.js file

if you do the coursea course and want to try using a web page to send the post requests and delete and get feel free to add these to the folder you will have created doing the course.

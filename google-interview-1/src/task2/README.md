In the data file you can find the representation of different build runs. Each boolean value represents the build health for one time unit. True means the build is healthy, false means the build got broken.
Each row in in the main array represent one broken build sequence. The build has been healthy for some time, and ggot broken.
After the build got broken, eventually someone needs to fix it. As soon as someone has fixed the build, we start a new row with healthy build state (true). Which can get broken, starting the whole cycle from the beginning.
Each row has its percentage of how long it has been healthy:
- [true, false] was healthy in 50% of the time
- [true, true, false] was healthy in 66.666% of the time
- [true, false, false, false, false] was healthy in 20% of the time

Question.
Find the greatest number of CONSECUTIVE build runs that have a strictly decreasing health percentage from the data.
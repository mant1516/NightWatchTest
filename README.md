# NightWatchTest


Pre-equiremnets to install the set up
1.In your Terminal run the command npm init this will create a package.json file.
2.Press Enter for all questions.
3.Now we will install nightwatch using npm
4.Run command in terminal — npm install nightwatch —- save
5.Make new folders — mkdir pages tests lib
/pages
/tests
/lib
6. Download the latest version of Selenium Standalone —
 From SeleniumHQ — http://www.seleniumhq.org/download/
 7.Download the latest version of Chrome Driver — For window Make sure to download chromedriver.exe
 8.From Downloaded folder, move both files — Selenium-Standalone-3.x.x. jar and chromedriver to /lib directory on your project.
 9.Set path for selenium and chrome driver in nightwatch.json.
 


pre -requiremnet to run the test 
 
1. Pull the branch  
2. qatesting.js ( consists of the actual test)
3.All the others files are required to run them
4.to tun the test use this command "node nightwatch -e chrome -a qatesting "



**Imporvements *
1.We can try to find the  element is better way 
2.I have purposely used two steps One to click on the element and other one to send the data
3.There is no valid submission as in the step we are clickin on the send button
4.I still used the Assetion to verify the page.



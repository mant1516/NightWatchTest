module.exports = {
    tags: ['qatesting'],
    'Technical test QAWorks' : function (browser) {
         browser 
         .url('http://www.qaworks.com/') // Go to a url
         .waitForElementVisible('body', 1000) // wait till page loads
         .assert.title('QAWorks Limited - Software Quality & Delivery Experts') // Make sure Site title matches
         .click('#menu-item-18894 > a') // Click on the contact us page
         .setValue('input[type=text]', 'j.Bloggs') // send values to the name field
         .click('#qaworks-contact-us > p:nth-child(3) > label > span > input') // click on Email text box
         .setValue('input[type=email]', 'j.Bloggs@qaworks.com') // send value to the emal field
         .click('#qaworks-contact-us > p:nth-child(4) > label > span > input') // click on the Subject field
         .setValue('input[name=your-company]', 'test automation') //Send vlue to the Subject
         .click('#qaworks-contact-us > p:nth-child(5) > label > span > textarea') //click on the message field
         .setValue('textarea[name=your-message]', 'Please contact me I want to find out more')  //Send values to the Message field
         .pause(1000)
         .end();
       }
     };
 
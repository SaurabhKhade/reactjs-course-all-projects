# reactjs-course-all-projects

this is description of each react app above in sequence as they are uploaded.

each project is developed on developement server created with create-react-app. but when uploading here i have use cdn links for 'react' and 'react-dom' to save the space which will be wasted because of node_modules.

1. Dynamic Greeting App:

   my first project in rectjs learning journey
   
   a simple dynamic greeting app which greets as per the the time in local system as given below
   
   => 'Good Morning' in between 3AM to 12PM in color (rgb(243,148,0))
   
   => 'Good Afternoon' in between 12 PM to 4PM in color rgb(255,196,38))
   
   => 'Good Evening in between 4PM to 12AM in color rgb(164,255,234))
   
   => 'Good Night' in between 12AM to 3AM in color rgb(255,170,236))
   

2. Netflix Series:

   my second project in reactjs learning journey
   
   a simple app which shows six netflix series and there posters. This project is just to learn about react components. And only thing i want to mention about it is the button below each card just redirect you to https://www.google.com/ and not to the actual series.
   
3. Netflix Serieses Updated:

   it is just a updated version of previous project which is Netflix Serieses. In this i have used flat arrow functions wherever i can. and also improved the style (css) and yes, now description of each series is real and also button redirect you to appropriate series on netflix.
   
   But the main reason to upload this as another project is, now i have learned how to use the loops in react while using JSX. so which i have hardcoded in previous project, is now rendered using loop.
   
4. Slot Machine:
 
   my third 4th project (basically its 3rd but i am considering both Netflix Serieses as separate) in reactjs learning journey.

   it is just a hardcoded slot machine. It is hardcoded because i have created it only to practice if-else statements in react. And in next projects i will update it to fully functional slot machine :)

5. Get Current Time:

   its my 5th project (mini mini project).
 
   This is just a very very simple react app which shows current time of device when clicked on Get Time named button. Main reason behind this app is it is introduction to hooks (useState hook) in reactjs. I have used useState hook to show the current time when clicked on Get Time button.
   
6. Digital Clock:
 
   its 6th project in react js learning path

   This is a digital clock in react which shows the current time of device. difference between this project and previous one is this updates time automatically every second and similarity is it is also a project for practice of reactjs hooks. 
   
7. Reactjs Events:

   its my seventh project in reactsjs learning path.
   
   This is React app for introduction of how to handle events related to react components. Basically in this app 2 events which are onMouseOver and onMouseLeave are handled. in app when we drag mouse inside inner box, the background color and text changes and again when we drag mouse outside that box, it changes again which is handled by useState hook.
   
8. Intro to Forms:

   its my 8th project in reactjs learning path.
   
   This is a simple react app which when clicked on give button render the value of input field next to hello heading. it is just for practice of event handling and also it is my first introduction to how to handle forms and various form attributes in reactjs.
   
9. MultiField Form:

   its my 9th project in reactjs learning path.
   
   This is a next step from Intro to Forms. Intro to forms is a very simple app with only one input field and also it is handled in very raw way. But this app which is MultiField Form is app with total 4 input fields. and this field are handled by using objects with useState Hook. You have to enter your full name, email address, phone number and one message for me. and as you press enter, this information eill be rendered below the form.

10. MultiField Form Final:

    actually its not a project, its a improvement, it is to show how i was doing task by writing excess of lines and now i can do same task in just 2 or 3 lines.
   
    This is exactly same app as MultiField Form but only thing is dozens of lines of code are wrapped up in only 2 line. First trick is by just updating value of oldData object (which is just a callback object of function returned by useState) and then spreading it in new object and other is just spreading oldData object in new object and then updating previous value with square bracket syntax inside object. I know i have confused you, but the conclusion is i have reduced dozens of lines of code to just 2 lines by using spread (...) operator.

11. ToDo List:

    First time i can say that i have created a mega project. because this is best react app i have created ever.
    
    This is ToDo list created in reactjs and it is non responsive, developed only for mobile. we have to add the item in input field, and as clicked on + button, the item will be get added on the top of list. items will be from new to old sequence. if we press on x button related to that item, only that particular item will be get removed from list. its the best react app till now in my journey of learning reactjs.
    
12. Counter:

    my 11th project (mini project) in reactjs, which is a simple counter created for practice of useState hook.
    
    This is a counter app, in which we can increament or decreament the given number with help of incr (increament button) and dcr (decreament button). we can't decrease counter below zero, it will alert you if you tried to decrease it below zero.
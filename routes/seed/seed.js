const mongoose = require("mongoose");
const Question = require('./../../models/Question');
require('dotenv').config();



const questions = [ { questionType: 'webdev',
question: 'Which of these selectors is the most specific?',
rightAnswer: '#news h1',
wrongAnswer1: '.news h2',
wrongAnswer2: '#news',
wrongAnswer3: 'h1',
photoUrl: 'https://internetingishard.com/html-and-css/css-selectors/css-selectors-1f0064.png',
created_by: '5df241030d13316631e8161d',
difficulty: 'hard' },
{ questionType: 'webdev',
question: 'Which one of these is NOT a semantic HTML tag?',
rightAnswer: 'div',
wrongAnswer1: 'main',
wrongAnswer2: 'nav',
wrongAnswer3: 'article',
photoUrl: 'https://pbs.twimg.com/media/D9VNUMYX4AA-KiC.jpg:medium',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'webdev',
question: 'What is not ES6',
rightAnswer: 'console.log(dogs + out)',
wrongAnswer1: 'let dogsOut = true',
wrongAnswer2: "()=>console.log('who let the dogs out)'",
wrongAnswer3: "[...dogs + '']",
photoUrl: "https://www.templatemonster.com/bwp-content/uploads/2016/10/Friday-Fun.jpg",
created_by: '5df241030d13316631e8161d' },
{ questionType: 'webdev',
question: 'Which is the correct syntax to declare a variable in JavaScript?',
rightAnswer: 'var myName = "Tom";',
wrongAnswer1: 'myName === "Tom";',
wrongAnswer2: 'String myName = "Tom"',
wrongAnswer3: 'var "Tom" = myName;',
photoUrl: 'http://www.michaeljarrett-webdev.com/images/home.jpg',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'webdev',
question: 'Which one of these conditionals will cause the real Slim Shady to Stand up?',
rightAnswer: 'realSlimShady ? standUp() : null',
wrongAnswer1: 'if(!realSlimShady){ standUp(); } else { return null }',
wrongAnswer2: 'if(realSlimShady){ standUp();} else { return null }',
wrongAnswer3: 'if(realSlimShady === true) { return null } else{ standUp() }',
photoUrl: 'https://townsquare.media/site/482/files/2019/07/Eminem-The-Real-Slim-Shady.png',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'webdev',
question: 'Which is the correct way of declaring a function?',
rightAnswer: 'function ironBeers() { drinkBeers(); }',
wrongAnswer1: 'function ironBeers { drinkBeers(); }',
wrongAnswer2: 'var ironBeers() { drinkBeers(); }',
wrongAnswer3: 'function var = i = () { drinkBeers(); }',
photoUrl: 'https://ihaveapc.com/wp-content/uploads/2013/10/webdev.jpg',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'webdev',
question: 'Which of these array methods returns a new array?',
rightAnswer: 'Map',
wrongAnswer1: 'forEach',
wrongAnswer2: 'Reduce',
wrongAnswer3: 'Push',
photoUrl: 'https://ih0.redbubble.net/image.373247614.3610/mp,840x830,matte,f8f8f8,t-pad,750x1000,f8f8f8.u1.jpg',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'webdev',
question: 'True or False, a request "get" must have a body?',
rightAnswer: 'False',
wrongAnswer1: 'True',
wrongAnswer2: 'What is get?',
wrongAnswer3: 'What is body?',
photoUrl: 'https://pbs.twimg.com/media/D-SF67zU8AAlEmQ.jpg:medium',
created_by: '5df241030d13316631e8161d',
difficulty: 'hard' },
{ questionType: 'webdev',
question: 'Why do we use the routes out of the file app.js?',
rightAnswer: 'To have a cleaner code',
wrongAnswer1: 'console.log(things)',
wrongAnswer2: 'to make the developers cry',
wrongAnswer3: 'no idea',
photoUrl: "https://i.pinimg.com/originals/cf/c4/d9/cfc4d97121a4d9b4f764fb85b9d6c322.jpg",
created_by: '5df241030d13316631e8161d' },
{ questionType: 'webdev',
question: 'What list of terms is related to mongoose?',
rightAnswer: 'Schema, Documents, Model, Connection',
wrongAnswer1: 'Documents, Relational, Connection',
wrongAnswer2: 'Headache, Explosion, Nightmare',
wrongAnswer3: 'Choose me! I am correct!',
photoUrl: 'https://www.javascriptstuff.com/prettier-8513f72fbcebfb6312ce3bc70511c374.gif',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'webdev',
question: 'Which one is a correct fetch?',
rightAnswer: 'console.log("Pablo is the best Ta ";))',
wrongAnswer1: 'fetch{ (/theBestTA).then((chloe)=>console.log(chloe))}',
wrongAnswer2: 'fetch.then((marce)=> console.log(marce))',
wrongAnswer3: 'fetch(/theBestTA).then((pablo)=> console.log(pablo))',
photoUrl: 'https://people.ucsc.edu/~abanglee/webdev.jpg',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'webdev',
question: 'Which one is the correct way to insert partial in handlebars?',
rightAnswer: '{{> navbar this}}',
wrongAnswer1: '{{navbar>}}',
wrongAnswer2: '(>navbar this)',
wrongAnswer3: '{{navbar this}}',
photoUrl: 'https://tutorialzine.com/media/2018/04/coding-in-code.jpg',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'webdev',
question: 'What is the correct syntax to require a package?',
rightAnswer: "'var express = require('express')'",
wrongAnswer1: "'express.require('express')'",
wrongAnswer2: "'var express = import('express')'",
wrongAnswer3: 'require.beers.because.friday.plz',
photoUrl: 'https://pbs.twimg.com/media/DrPoeHVXgAA5PJF.jpg',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'webdev',
question: 'What does NPM mean?',
rightAnswer: 'Node Package Manager',
wrongAnswer1: 'New Package Maintenance',
wrongAnswer2: 'Naranja Pingüino Moda',
wrongAnswer3: 'Node.js Package Maintenance',
photoUrl: 'https://images-na.ssl-images-amazon.com/images/I/61F6xrMMrkL._SX569_.jpg',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'webdev',
question: 'If you want to return updated data, you have to add it inside a mongoose Update',
rightAnswer: "'We haven't done it yet'",
wrongAnswer1: '{giveMeTheData: true}',
wrongAnswer2: '{new: false}',
wrongAnswer3: '{new: true}',
photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOQ9vfQiwj3cc7t3udxC4DuJoNOkv_MKcQ0kKVmAqaC_cVvoE8',
created_by: '5df241030d13316631e8161d',
difficulty: 'hard' },
{ questionType: 'webdev',
question: 'You have 10 sec !!! What is the correct answer ? let car = "2" && "3";console.log(car);',
rightAnswer: '"3"',
wrongAnswer1: '"2"',
wrongAnswer2: '"5"',
wrongAnswer3: 'Qué dices tío!!',
photoUrl: 'http://screeneggs.com/wp-content/uploads/2019/08/9qzMi8A5YFwAzKpG1jp5bzCb8PaSA4pZewxD3d2y368.jpg',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'webdev',
question: 'In cascade StyleSheets, which one of the following are adjacent siblings?',
rightAnswer: 'A + B',
wrongAnswer1: 'A ~ B',
wrongAnswer2: 'A > B',
wrongAnswer3: 'A B',
photoUrl: 'https://p1.pxfuel.com/preview/386/749/243/programming-html-code-coding.jpg',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'webdev',
question: 'We are in a party, there is an array of girls and an array of guys. How can we join them for the party?',
rightAnswer: 'girls.concat(guys)',
wrongAnswer1: 'gentlemen.join[ladies]',
wrongAnswer2: 'badBoys.classList = loser',
wrongAnswer3: 'guys.shift(girls)',
photoUrl: 'https://ih0.redbubble.net/image.449530851.2811/poster%2C210x230%2Cf8f8f8-pad%2C210x230%2Cf8f8f8.u2.jpg',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'webdev',
question: 'What IIFE stands for?',
rightAnswer: 'Immediately Invoked Function Expression',
wrongAnswer1: 'Instant Invocation Function Expression',
wrongAnswer2: 'If In For Expression',
wrongAnswer3: 'Lolololololololololo',
photoUrl: 'https://wpart.org/wp-content/uploads/2016/10/talk-is-cheap-show-me-the-code.-linus-torvalds.jpg',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'data',
question: 'Which of these is not a Python datatype',
rightAnswer: 'Decimal',
wrongAnswer1: 'int',
wrongAnswer2: 'long',
wrongAnswer3: 'float',
photoUrl: 'https://i.pinimg.com/originals/94/f5/cf/94f5cf75ae570e4b022663b2a9b9e93b.jpg',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'data',
question: 'Does python support object-oriented programming?',
rightAnswer: "Yes",
wrongAnswer1: 'No',
wrongAnswer2: 'Only for blue objects',
wrongAnswer3: 'It supports snake oriented programming',
photoUrl: 'https://s3.amazonaws.com/lowres.cartoonstock.com/business-commerce-foresight-forecasts-economic_forecasts-data_analyst-beggar-jcen1450_low.jpg',
created_by: '5df241030d13316631e8161d',
difficulty: 'hard' },
{ questionType: 'data',
question: 'Which one is not a legal variable name?',
rightAnswer: 'my-var',
wrongAnswer1: 'my_var',
wrongAnswer2: 'MYVAR',
wrongAnswer3: '_myvar',
photoUrl: 'https://i.pinimg.com/originals/6a/b2/8a/6ab28a29c9462c472b76e904ced946c6.gif',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'data',
question: 'What does SQL stand for?',
rightAnswer: 'Structured Query Language',
wrongAnswer1: 'Strong Query Language',
wrongAnswer2: 'Standard Query Language',
wrongAnswer3: 'Snakes Like cheese',
photoUrl: 'https://s3.amazonaws.com/lowres.cartoonstock.com/business-commerce-data_analytics-data_chart-presentation-big_data-graphs-jcen1308_low.jpg',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'data',
question: 'With SQL, how do you select a column named "FirstName" from a table named "Persons"?',
rightAnswer: 'SELECT FirstName FROM Persons',
wrongAnswer1: 'SELECT Person FROM FirstNames',
wrongAnswer2: 'SELECT Persons.FirstName',
wrongAnswer3: 'SELECT Antonio FROM Persons',
photoUrl: 'https://s3.amazonaws.com/lowres.cartoonstock.com/business-commerce-simplify-simplified-analyse-condensed-quarterly_reports-cwln4480_low.jpg',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'data',
question: 'Select all records from table "Persons" where the value of column "FirstName" is not "Peter"',
rightAnswer: 'SELECT * FROM Persons WHERE FirstName <> "Peter"',
wrongAnswer1: 'SELECT * FROM Persons WHERE FirstName =! ‘Peter’',
wrongAnswer2: 'SELECT * FROM Persons WHERE FirstName NOT ‘Peter’',
wrongAnswer3: 'SELECT [all] FROM Persons WHERE FirstName != ‘Peter’',
photoUrl: 'https://raw.githubusercontent.com/qingkaikong/blog/master/2017_12_machine_learning_funny_pictures/figures/figure_3.png',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'data',
question: 'Which SQL statement is used to return a set of unique values?',
rightAnswer: 'SELECT DISTINCT',
wrongAnswer1: 'SELECT UNIQUE',
wrongAnswer2: 'SELECT DIFFERENT',
wrongAnswer3: 'SELECT SOLE',
photoUrl: 'https://s3.amazonaws.com/lowres.cartoonstock.com/technology-watch-smart_watch-smartwatch-data-data_analysis-jcen1057_low.jpg',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'data',
question: 'In waht format are most API responses given?',
rightAnswer: 'JSON',
wrongAnswer1: 'HTML',
wrongAnswer2: 'List',
wrongAnswer3: 'Dictionary',
photoUrl: 'https://images-na.ssl-images-amazon.com/images/I/51jR7sxCTUL._SX425_.jpg',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'data',
question: 'When can we use Logistic Regression?',
rightAnswer: 'When dependent variable is binary',
wrongAnswer1: 'When the dependent variable is continuous',
wrongAnswer2: 'None of the answers are correct',
wrongAnswer3: 'When the dependent variable is either binary or continuous',
photoUrl: 'photoUrl data 28',
created_by: '5df241030d13316631e8161d',
difficulty: 'hard' },
{ questionType: 'data',
question: 'What is the cardinal of {1,2,3,4}?',
rightAnswer: '4',
wrongAnswer1: '2',
wrongAnswer2: '3',
wrongAnswer3: 'Infinite',
photoUrl: 'photoUrl data 29',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'data',
question: 'What is the cardinal of {1,2,3,4,...}',
rightAnswer: 'Infinite',
wrongAnswer1: '2',
wrongAnswer2: '3',
wrongAnswer3: '4',
photoUrl: 'photoUrl data 30',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'data',
question: 'Is this a bijective function: f(x) = x + 1',
rightAnswer: 'Yes',
wrongAnswer1: 'No',
wrongAnswer2: 'Partially',
wrongAnswer3: 'Only  when the inputs have negative values',
photoUrl: 'photoUrl data 31',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'data',
question: 'Can the points of the dispersion diagram always be modeled with a function?',
rightAnswer: 'Yes',
wrongAnswer1: 'No',
wrongAnswer2: 'It depends',
wrongAnswer3: 'Webdev is the best bootcamp',
photoUrl: 'photoUrl data 32',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'data',
question: 'Is the probability function independent from the x taken?',
rightAnswer: 'It depends',
wrongAnswer1: 'Yes',
wrongAnswer2: 'No',
wrongAnswer3: 'Rafa',
photoUrl: 'photoUrl data 33',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'data',
question: 'Splitting data into gropus without knowing their labelis called...',
rightAnswer: 'Clustering',
wrongAnswer1: 'Classification',
wrongAnswer2: 'Regression',
wrongAnswer3: 'PCA',
photoUrl: 'photoUrl data 34',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'data',
question: 'Finding the equation that fits the data points is called...',
rightAnswer: 'Regression',
wrongAnswer1: 'Classification',
wrongAnswer2: 'Clustering',
wrongAnswer3: 'PCA',
photoUrl: 'photoUrl data 35',
created_by: '5df241030d13316631e8161d',
difficulty: 'hard' },
{ questionType: 'data',
question: 'What is the meaning of the word unsupervised when we describe an algorithm?',
rightAnswer: 'No need of target variable',
wrongAnswer1: 'No need of intervention from the analyst',
wrongAnswer2: 'No need of result cross-validation',
wrongAnswer3: 'No need of structured datasets',
photoUrl: 'photoUrl data 36',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'data',
question: 'Which of the following algorithms is an unsupervised one?',
rightAnswer: 'K-means',
wrongAnswer1: 'Decision Trees',
wrongAnswer2: 'K-Nearest Neighbors',
wrongAnswer3: 'SVM',
photoUrl: 'photoUrl data 37',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'data',
question: 'Which of the following algorithms is not used for clustering purposes?',
rightAnswer: 'K-Nearest Neighbors',
wrongAnswer1: 'DBScan',
wrongAnswer2: 'K-means',
wrongAnswer3: 'Mean-shift',
photoUrl: 'photoUrl data 38',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'ux',
question: 'When is usability testing useful?',
rightAnswer: 'All the others',
wrongAnswer1: 'To identify problems in a product already exists',
wrongAnswer2: 'To test new ideas or features',
wrongAnswer3: 'Wrong Answer 3 webdev40', //aqui
photoUrl: 'https://miro.medium.com/max/800/1*7QPHbCALsHL2AZt9fV-XbA.jpeg',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'ux',
    question: 'The back button in Material design uses tags to make their function clear',
    rightAnswer: 'False',
    wrongAnswer1: 'True',
    wrongAnswer2: 'Visça el Barça',
    wrongAnswer3: 'Sometimes',
    photoUrl: 'https://i.pinimg.com/originals/be/7a/34/be7a348abf9adf2f5c95098e664387df.jpg',
    created_by: '5df241030d13316631e8161d' },
  { questionType: 'ux',
    question: 'Who has more neck vertebrae?',
    rightAnswer: 'Both have the same',
    wrongAnswer1: 'A giraffe',
    wrongAnswer2: 'A human',
    wrongAnswer3: 'vertebrae do not exist',
    photoUrl: 'https://miro.medium.com/max/1426/1*c1R2v79GShOJ78_3UJEJdA.png',
    created_by: '5df241030d13316631e8161d',
    difficulty: 'hard' },
  { questionType: 'ux',
    question: 'You can only do usability testing with low-fidelity prototypes',
    rightAnswer: 'False',
    wrongAnswer1: 'True',
    wrongAnswer2: 'Testing is for chickens',
    wrongAnswer3: 'Bulbasur',
    photoUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    created_by: '5df241030d13316631e8161d' },
  { questionType: 'ux',
    question: 'What kind of competitive analysis is made comparing lists of features?',
    rightAnswer: 'Feature comparison',
    wrongAnswer1: 'Heuristic analysis',
    wrongAnswer2: 'UI analysis',
    wrongAnswer3: 'Affinity diagram',
    photoUrl: 'https://i.pinimg.com/originals/38/43/d3/3843d3cc16155e919d964d8dfba0aaf0.jpg',
    created_by: '5df241030d13316631e8161d' },
  { questionType: 'ux',
    question: 'If during a usability test the user does something that you did not expet, we should...',
    rightAnswer: 'Let the user be right and take notes about it',
    wrongAnswer1: 'Immediately redirect them',
    wrongAnswer2: 'Explain how the app really works from the beginning',
    wrongAnswer3: 'Offer a hot beverage',
    photoUrl: 'https://i.imgur.com/ImWcn1X.png',
    created_by: '5df241030d13316631e8161d' },
  { questionType: 'ux',
    question: 'What is the most populated city in Europe?',
    rightAnswer: 'Istambul',
    wrongAnswer1: 'London',
    wrongAnswer2: 'Berlin',
    wrongAnswer3: 'Moscow',
    photoUrl: 'https://image.slidesharecdn.com/ux-humor-jokes-150618094415-lva1-app6892/95/ux-humor-jokes-and-funny-quotes-11-638.jpg?cb=1434645035',
    created_by: '5df241030d13316631e8161d' },
  { questionType: 'ux',
    question: "'(iOS)Tab bar buttons should not be used to perform actions they're used strictly for navigation'",
    rightAnswer: 'True',
    wrongAnswer1: 'False',
    wrongAnswer2: 'A little bit true',
    wrongAnswer3: 'Crocodile',
    photoUrl: 'https://i.pinimg.com/originals/de/79/69/de7969372ebd40a7aa000bb67ad963c8.jpg',
    created_by: '5df241030d13316631e8161d' },
  { questionType: 'ux',
    question: 'What is the objective of Rapid Sketching(crazy 8)?',
    rightAnswer: 'Ideate possible solutions',
    wrongAnswer1: 'Drive Nevan crazy 8 times',
    wrongAnswer2: 'Practice your sketching skill',
    wrongAnswer3: "'Understand what your users' needs'",
    photoUrl: 'https://image.slidesharecdn.com/ux-humor-jokes-150618094415-lva1-app6892/95/ux-humor-jokes-and-funny-quotes-5-638.jpg?cb=1434645035',
    created_by: '5df241030d13316631e8161d' },
  { questionType: 'ux',
    question: "'What's the A on CRAP?'",
    rightAnswer: 'Alignment',
    wrongAnswer1: 'Affinity',
    wrongAnswer2: 'Alumni',
    wrongAnswer3: 'Axure',
    photoUrl: 'http://www.satukyrolainen.com/wp-content/uploads/2013/06/senior-ux-designers.png',
    created_by: '5df241030d13316631e8161d',
    difficulty: 'hard' },
  { questionType: 'ux',
    question: 'In a UI flow, items written above the bar indicate...',
    rightAnswer: 'What the user sees',
    wrongAnswer1: 'What the user does',
    wrongAnswer2: 'What the user is thinking',
    wrongAnswer3: 'Nothing. It is useless information',
    photoUrl: 'https://trozellidesign.com/wp-content/uploads/2014/07/1607089_734555493223276_299453565_n.jpg',
    created_by: '5df241030d13316631e8161d' },
  { questionType: 'ux',
    question: 'In a UI flow, it is possible to have two arrows pointing out from one interaction',
    rightAnswer: 'True',
    wrongAnswer1: 'False',
    wrongAnswer2: 'Sometimes',
    wrongAnswer3: 'Charizard',
    photoUrl: 'https://public-media.interaction-design.org/images/ux-daily/5806e38eeceae.jpg',
    created_by: '5df241030d13316631e8161d' },
  { questionType: 'ux',
    question: 'A user Persona should be',
    rightAnswer: 'Specific to the design objective',
    wrongAnswer1: 'A real person',
    wrongAnswer2: 'Totally made up',
    wrongAnswer3: 'As broad as possible',
    photoUrl: 'https://public-media.interaction-design.org/images/ux-daily/73f838d421cc8782066f2d28de29e46a.png',
    created_by: '5df241030d13316631e8161d' },
  { questionType: 'ux',
    question: 'Teams that use Personas succesfully',
    rightAnswer: 'Do their own research',
    wrongAnswer1: 'Use pictures of famous people to remember then',
    wrongAnswer2: 'Write as much information as possible',
    wrongAnswer3: 'Eat vegetables every day',
    photoUrl: 'https://image.slidesharecdn.com/ux-humor-jokes-150618094415-lva1-app6892/95/ux-humor-jokes-and-funny-quotes-4-638.jpg?cb=1434645035',
    created_by: '5df241030d13316631e8161d' },
  { questionType: 'ux',
    question: "What comes first? affinity diagram or User Persona?",
    rightAnswer: 'Affinity Diagram',
    wrongAnswer1: 'User Persona',
    wrongAnswer2: 'All the others',
    wrongAnswer3: 'None',
    photoUrl: 'https://i.pinimg.com/originals/0a/63/72/0a6372ed55adf15c25084b6abe04111b.png',
    created_by: '5df241030d13316631e8161d' },
  { questionType: 'ux',
    question: 'Generally, when doing a heuristic analysis you put a user in front of a webpage and you observe',
    rightAnswer: 'False',
    wrongAnswer1: 'True',
    wrongAnswer2: 'I wish',
    wrongAnswer3: 'No',
    photoUrl: 'https://s3.amazonaws.com/lowres.cartoonstock.com/computers-ux-user_experience_design-hci-website-dungeon-llan1943_low.jpg',
    created_by: '5df241030d13316631e8161d' },
  { questionType: 'ux',
    question: 'In the LEMERsS heuristics, what is the learnability?',
    rightAnswer: 'How easy is to accomplish basic tasks the first time',
    wrongAnswer1: 'How quickly can they perform tasks',
    wrongAnswer2: 'Easy to remember how it worked',
    wrongAnswer3: 'How easily can they recover from errors',
    photoUrl: 'https://i.pinimg.com/originals/70/42/9e/70429e2a41e0a7450e0419aeb23a92d1.jpg',
    created_by: '5df241030d13316631e8161d',
    difficulty: 'hard' },
  { questionType: 'ux',
    question: 'Which of the following is NOT a key part of a user story?',
    rightAnswer: 'What tool is he/she going to use',
    wrongAnswer1: 'Who the user is',
    wrongAnswer2: 'What does the user want',
    wrongAnswer3: 'Why does the user want to do this',
    photoUrl: 'https://dq1eylutsoz4u.cloudfront.net/2014/09/HumorInDesign.png',
    created_by: '5df241030d13316631e8161d' }, 
{ questionType: 'ux',
    question: 'What heuristic from the LEMErS can be tested by the number of steps a user have to take?',
    rightAnswer: 'Efficiency',
    wrongAnswer1: 'Learnability',
    wrongAnswer2: 'Memorability',
    wrongAnswer3: 'Satisfaction',
    photoUrl: 'https://image.slidesharecdn.com/uxd-160112100121-160220201014/95/user-experience-design-its-as-easy-as-pie-15-638.jpg?cb=1455999030',
    created_by: '5df241030d13316631e8161d' }]

mongoose
  .connect(process.env.MONGODB_URI, {
    keepAlive: true,
    useNewUrlParser: true,
    reconnectTries: Number.MAX_VALUE,
  })
  .then( () => {
    console.log(`Connected to database`);
    Question.collection.drop();
    Question.insertMany(questions)
      .then(_=>{
        console.log('Questions seeded');
        mongoose.connection.close();
      })
      .catch(err => console.log(err));
  })
  .catch( (err) => console.error(err));
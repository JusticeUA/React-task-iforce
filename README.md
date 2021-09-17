# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

Написати программу яка виводить список продуктів.

Має бути 2 сторінки: 
  #1 Сторінка загального списку продуктів
  #2 Сторінка деталей окремого продукту

====Сторінка загального списку продуктів====
Кожен продукт в загальному списку повинен містити: 
 Фото, назва, короткий опис, кількість одиниць даного продукта в наявності, та перехід на сторінку деталів.

На загальній сторінці продукти можна сортувати по назві, та по кількості даного продукта в наявності.
Є можливість видалення продукту, з підтвердженням.

Також повинна бути можливість створення нового продукту з загальної сторінки усіх продуктів. 
При натисканні на кнопку "New Product" відкривається модальне вікно з формою та кнопками "Add" і "Cancel" .


====Сторінка деталей окремого  продукту====
 - фото
 - опис 
 - властивості (кількість таких продуктів в наявності, колір, розміри, вага)
 - коментарі (список коментарів, та можливість добавити/видалити коментар, коментарі тільки ті які належать даному продукту)
 - Кнопка редагувати продук "Edit", після чого відкривається модальне вікно з описом продукта у формі, де можливо змінити опис та властивості. Можна зберегти, або відмінити збереження.


====Додаткові умови====
- код має бути коментованним на англійській мові
- данні треба брати з віддаленної бази данних (Firebase, some other mocked api, docker, local storage etc.), а не з файлу з проектом
- інпути повинні мати валідацію 
- не повинно бути помилок в консолі (chrome dev tools)
- (optional)завдання треба задеплоїти на будь-яких хостінг на вибір (github-pages, versel, heroku, ...)
- час - 5 годин

====Стек технологій==== 
- React
- Redux
- React with Typescript
- Angular
- Можна використовувати будь-які Ui бібліотеки (material-ui, bootstrap, styled-components etc )



Моделі:

Product : {
	id: 1,
	imageUrl: 'some url here',
	name: 'Product name',
	count: 4,
	size: {
		width: 200,
		height: 200
	},
	weight: '200g',
	comments: [Comment, Comment]
}


Comment: {
	id: 3,
	productId: 1,
	description: 'some text here',
	date: 14:00 22.08.2021
}

http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}


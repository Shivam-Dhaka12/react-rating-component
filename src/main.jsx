import React from 'react';
import ReactDOM from 'react-dom/client';
import StarRating from './Components/StarRating';
// import App from './App.jsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{
			/* <App /> */ <StarRating
				maxRating={5}
				color="seagreen"
				size={50}
			></StarRating>
		}
	</React.StrictMode>
);

import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import background from './img/fonk.png';

const App = () => {
	const [scheme, setScheme] = useState('bright_light')
	const [activePanel, setActivePanel] = useState('home');
	const [friends, setFriends] = useState([]);
	const [our_tegs, setTegs] = useState([])
	//const [fetchedUser, setUser] = useState(null);
	//const [popout, setPopout] = useState(null);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				setScheme(data.scheme)
			}
		});

		async function fetchFriends() { //Artyoma's API
			const token = await bridge.send("VKWebAppGetAuthToken", { 
				"app_id": 51438734, 
				"scope": "friends,status"
			  });
			  
			  const data = await bridge.send("VKWebAppCallAPIMethod", {
				method: "friends.get",
				request_id: "getFriends",
				params: {order: "random", count: "3", fields:'photo_200_orig', v:"5.131", access_token: token.access_token},
			});
				setFriends(data.response.items)
				return data.response.items
		}
		// fetchFriends();

		async function submit() { // Roma's API

			let link = `https://kostil74.herokuapp.com/` 
			let link_2 = await fetchFriends()
			for(let i = 0; i < 3; i++){}
			let response = await fetch(link, {mode: 'no-cors'}) //+ link_2[0].photo_200_orig + '/article/fetch/post/image', {
			//   method: 'POST',
			//   body: new Blob()
			// });
			// let response = await fetch(link + link_2[0].photo_200_orig)
			console.log(response)
		
			// сервер ответит подтверждением и размером изображения
			let result = await response.json();
			alert(result.message);
			setTegs(result.message) // <- add methods
		}

		// friends.addEventListener('load', event => {console.log("Gone! Done!")})

		submit()
		
		

		// async function fetch_2 () {
		// 	let response = await fetch()
		// }

	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<ConfigProvider scheme={scheme}>
			<AdaptivityProvider>
				<AppRoot>
					<SplitLayout>
						<SplitCol>
							<View activePanel={activePanel} style={{ backgroundImage: `url(${background})` }}>
								<Home id='home' friends = {friends} tegs = {our_tegs}/>
							</View>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;

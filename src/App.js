import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';

const App = () => {
	const [scheme, setScheme] = useState('bright_light')
	const [activePanel, setActivePanel] = useState('home');
	const [friends, setFriends] = useState([]);
	//const [fetchedUser, setUser] = useState(null);
	//const [popout, setPopout] = useState(null);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				setScheme(data.scheme)
			}
		});

		async function fetchFriends() {
			const token = await bridge.send("VKWebAppGetAuthToken", { 
				"app_id": 51438734, 
				"scope": "friends,status"
			  });
			  
			  const data = await bridge.send("VKWebAppCallAPIMethod", {
				method: "friends.get",
				request_id: "getFriends",
				params: {order: "hints", fields:'photo_100', v:"5.131", access_token:token.access_token}});
				setFriends(data.response.items)
				console.log(data.response.items)
		}
		fetchFriends()
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
							<View activePanel={activePanel}>
								<Home id='home' go={go} />
								{/* <Persik id='persik' go={go} /> */}
							</View>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;

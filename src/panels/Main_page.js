import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader} from '@vkontakte/vkui';
import 'css/style.css'

const Main_page = ({ id}) => (
	<Panel id={id}>
		<Panel className="body">
			<Panel className="items_container">
				<Panel className="photo_container">
					<Panel className="photo">
						<Panel className="photo_button">
							<Panel className="camera_button_text">Add your photo</Panel>
							<Svg className="camera_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{/*<!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->*/}<path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 384c-53 0-96-43-96-96s43-96 96-96s96 43 96 96s-43 96-96 96z"/></Svg>
						</Panel>
					</Panel>
				</Panel>
			</Panel>
		</Panel>

		{/* {fetchedUser &&
		<Group header={<Header mode="secondary">User Data Fetched with VK Bridge</Header>}>
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>} */}

		{/* <Group header={<Header mode="secondary">Navigation Example</Header>}>
			<Div>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="persik">
					Show me the Persik, please
				</Button>
			</Div>
		</Group> */}
	</Panel>
);

Main_page.propTypes = {
	id: PropTypes.string.isRequired,
	// go: PropTypes.func.isRequired,
	// fetchedUser: PropTypes.shape({
	// 	photo_200: PropTypes.string,
	// 	first_name: PropTypes.string,
	// 	last_name: PropTypes.string,
	// 	city: PropTypes.shape({
	// 		title: PropTypes.string,
	// 	}),
	// }),
};

export default Main_page;

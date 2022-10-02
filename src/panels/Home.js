import React from 'react';
import PropTypes from 'prop-types';

// import {HandySvg} from 'handy-svg';
// import Path from 'react-svg-path';
import { Header, Gallery, Group, Div, Panel, PanelHeader} from '@vkontakte/vkui';
import './style.css'
import camera from '../img/camera.png';
const demo = [
	"Это он сожрал хлеб в ларьке",
	"Это кто вообще?",
	"Этот пользователь думал, что выиграет на \n ТОМ САМОМ ХАКАТОНЕ",
	"Зашквар города Нижний Волочок",
	"15",
	"Продаю гараж",
	"Верстальщик, работает в Nexign 3 дня ЫААА, без зарплаты ЫАААА",
	"<text>",
	""
]


// async function submit() {
// 	let response = await fetch('/article/fetch/post/image', {
// 	  method: 'POST',
// 	  body: Blob
// 	});

// 	// сервер ответит подтверждением и размером изображения
// 	let result = await response.json();
// 	alert(result.message);
//   }

const Home = ({id, friends, tegs}) => (
	
	<div id={id} friends = {friends} className = "panell">
		<Group header={<Header mode="secondary">ТОТ САМЫЙ ХАКАТОН</Header>}>
      		<Gallery
        		slideWidth="100%"
        		style={{ height: 700 }}
        		// bullets="dark"
        		showArrows
      		>	
        
		<div className="body">
			<div className="items_container">
				<div className="photo_container">
					<div className="photo" style={{ backgroundImage: `url(${friends[0]?friends[0].photo_200_orig:camera})` }}>
						
							{/* <img className="photo_icon" src={friends[0]?friends[0].photo_200_orig:camera} alt="CameraPic"/> */}
						
					</div>
				</div>
			</div>
			<div className='podpis'>ТЫ НЕГР</div>
		</div>
		<div className="body">
			<div className="items_container">
				<div className="photo_container">
					<div className="photo" style={{ backgroundImage: `url(${friends[1]?friends[1].photo_200_orig:camera})` }}>
						
							{/* <img className="photo_icon" src={friends[0]?friends[0].photo_200_orig:camera} alt="CameraPic"/> */}
						
					</div>
				</div>
			</div>
			<div className='podpis'>{demo[6]}</div>
		</div>
		<div className="body">
			<div className="items_container">
				<div className="photo_container">
					<div className="photo" style={{ backgroundImage: `url(${friends[2]?friends[2].photo_200_orig:camera})` }}>
						
							{/* <img className="photo_icon" src={friends[0]?friends[0].photo_200_orig:camera} alt="CameraPic"/> */}
						
					</div>
				</div>
			</div>
			<div className='podpis'>{demo[2]}</div>
		</div>
		
			{/* <div className="items_container">
				<div className="photo_container">
					<div className="photo" style={{ backgroundImage: `url(${friends[1]?friends[1].photo_200_orig:camera})` }}>
						
							<img className="photo_icon" src={friends[1]?friends[1].photo_200_orig:camera} alt="CameraPic"/>
						
					</div>
				</div>
			</div> */}
		
		
		{/* <div className="body">
		<div className="items_container_1">
            <div className="background_photo" style={{ backgroundImage: friends[1]?friends[1].photo_200_orig:camera }}>
                <div className="blur">
                    <div className="photo" style={{ backgroundImage: `url(${friends[1]?friends[1].photo_200_orig:camera})` }}></div>
                </div>
            </div>                
        </div>
		</div> */}
		
		{/* <div className="body">
			<div className="items_container">
				<Panel className="photo_container">
					
						<Panel className="photo_button">
							<Panel className="camera_button_text">Add your photo</Panel>
							<img className="camera_icon" src={camera} alt="CameraPic"/>
						</Panel>
					
				</Panel>
			</div>
		</div> */}
		
      </Gallery>
	  
    </Group>
	</div>
	
);

Home.propTypes = {
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

export default Home;

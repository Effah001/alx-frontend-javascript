import ClassRoom from './0-classroom.js'

export default function initializeRooms(){
		const rooms = [];

		rooms.push(new ClassRoom(19));
		rooms.push(new ClassRoom(20));
		rooms.push(new ClassROom(34));

		return rooms;
	}

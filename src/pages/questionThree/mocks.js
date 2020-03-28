import AcUnit from "@material-ui/icons/AcUnit";
import UUID from "uuid/v4";

/*
* Please do not add all the mock data statically here.
* While you would solve the problem, you would not be solving the bug ;)
* */

const defaultMock = {
	species: 'Human',
	name : 'Jon Snow',
	icon: AcUnit,
	description: 'You know nothing, Jon Snow.'
};

const createRowData = ({name, species, Icon, description}) => {
	let rowData = {...defaultMock};

	rowData.id = UUID();
	rowData.name = name ? name: rowData.name;
	rowData.species = species ? species: rowData.species;
	rowData.icon = Icon ? Icon : rowData.icon;
	rowData.description = description ? description : rowData.description;
	
	return rowData
}


export { createRowData }

import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({course, allAuthors, onSave, onChange, saving, errors}) => {
	return (
		<form>
			<h1>Manage Course</h1>
			<TextInput
				name="title"
				label="Title"
				value={course.title}
				onChange={onChange}
				error={errors.title}/>

			<SelectInput
				name="authorId"
				label="Author"
				value={course.authorId}
				defaultOption="SelectAuthor"
				options={allAuthors}
				onChange={onChange}
				error={errors.authorId}/>
			<input
				type="submit"
				disabled={saving}
				value={saving ? 'Saving...' : 'Save'}
				className="btn btn-primary"
				onClick={onSave}/>
		</form>
	);
};

CourseForm.propTypes = {
	course: React.PropTypes.object,
	allAuthors: React.PropTypes.array,
	onSave: React.PropTypes.func,
	onChange: React.PropTypes.func,
	saving: React.PropTypes.bool, 
	errors: React.PropTypes.object
};

export default CourseForm;

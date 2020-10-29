//functions

//for a single className
export const Linear = (def, ref, val) => {
	if (!ref) return def;
	return `${def} ${val}`;
};

//for multiple class names
export const Multiple = (def, ref, val) => {
	if (ref.length < 1) return def;
	for (let i = 0; i < ref.length; i++) {
		def = Linear(def, ref[i], val[i]);
	}
	return def;
};

//for single or multiple alternate class names
const FindAltClass = (val, obj) => {
	let className = '';
	Object.keys(obj).forEach(key => {
		if (key === val) className = obj[key];
	});
	return className;
};

export const Alternate = (props, obj) => {
	let className = '';
	for (let i = 0; i < obj.length; i++)
		className = className + ' ' + FindAltClass(Object.keys(props)[i], obj[i]);
	return className.trim();
};

//for all the properties in a single object
const FindAlterClass = (val, obj) => {
	let className = '';
	Object.keys(obj).forEach(key => {
		if (key === val) className = obj[key];
	});
	return className;
};

export const Alter = (props, obj) => {
	let className = '';
	Object.keys(props).forEach(
		prop => (className = className + ' ' + FindAlterClass(prop, obj))
	);
	const finalString = className.trim().replace(/  +/g, ' ');
	if (finalString.length < 1) return obj.default;
	return finalString;
};

//for the style object
export const Style = props => {
	if (!props.style) return null;
	return props.style;
};

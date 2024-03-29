import classNames from 'classnames';
import './button.css';

const Button = ({ onClick, type, children, size = 's' }) => {
	const btnClass = classNames({
		'btn': true,
		'btn-secondary': type === 'secondary',
		'btn-primary': type === 'primary',
		'btn-small': size === 's',
		'btn-medium': size === 'm',
	});

	return <button onClick={onClick} className={btnClass}>{children}</button>;
};

export default Button;

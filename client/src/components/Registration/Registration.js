import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {registerUser} from '../../actions/authActions';
import classnames from 'classnames';

class Registration extends Component {
    constructor() {
        super();
        this.state = {
            first_name: '',
            middle_name: '',
            last_name: '',
            contact_number: '',
            email: '',
            password: '',
            password2: '',
            errors: {}
        };
    }

    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onChange = e => {
        this.setState({[e.target.id]: e.target.value});
    };

    onSubmit = e => {
        e.preventDefault();

        const newUser = {
            first_name: this.state.first_name,
            middle_name: this.state.middle_name,
            last_name: this.state.last_name,
            contact_number: this.state.contact_number,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };

        this.props.registerUser(newUser, this.props.history);
    };

    render() {
        const {errors} = this.state;

        return (
            <div className='container'>
                <div className='row'>
                    <div className='col s8 offset-s2'>
                        <Link to='/' className='btn-flat waves-effect'>
                            <i className='material-icons left'>keyboard_backspace</i> Back to
                            home
                        </Link>
                        <div className='col s12' style={{paddingLeft: '11.250px'}}>
                            <h4>
                                <b>Register</b> below
                            </h4>
                        </div>
                        <form noValidate onSubmit={this.onSubmit}>


                            <div className='input-field col s12'>
                                <input
                                    onChange={this.onChange}
                                    value={this.state.first_name}
                                    error={errors.first_name}
                                    id='first_name'
                                    type='text'
                                    className={classnames('', {
                                        invalid: errors.first_name
                                    })}
                                />
                                <label htmlFor='first_name'>First Name</label>
                                <span className='red-text'>{errors.first_name}</span>
                            </div>

                            <div className='input-field col s12'>
                                <input
                                    onChange={this.onChange}
                                    value={this.state.middle_name}
                                    error={errors.middle_name}
                                    id='middle_name'
                                    type='text'
                                    className={classnames('', {
                                        invalid: errors.middle_name
                                    })}
                                />
                                <label htmlFor='middle_name'>Middle Name</label>
                                <span className='red-text'>{errors.middle_name}</span>
                            </div>

                            <div className='input-field col s12'>
                                <input
                                    onChange={this.onChange}
                                    value={this.state.last_name}
                                    error={errors.last_name}
                                    id='last_name'
                                    type='text'
                                    className={classnames('', {
                                        invalid: errors.last_name
                                    })}
                                />
                                <label htmlFor='last_name'>Last Name</label>
                                <span className='red-text'>{errors.last_name}</span>
                            </div>


                            <div className='input-field col s12'>
                                <input
                                    onChange={this.onChange}
                                    value={this.state.contact_number}
                                    error={errors.contact_number}
                                    id='contact_number'
                                    type='text'
                                    className={classnames('', {
                                        invalid: errors.contact_number
                                    })}
                                />
                                <label htmlFor='contact_number'>Contact Number</label>
                                <span className='red-text'>{errors.contact_number}</span>
                            </div>


                            <div className='input-field col s12'>
                                <input
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    error={errors.email}
                                    id='email'
                                    type='email'
                                    className={classnames('', {
                                        invalid: errors.email
                                    })}
                                />
                                <label htmlFor='email'>Email</label>
                                <span className='red-text'>{errors.email}</span>
                            </div>


                            <div className='input-field col s12'>
                                <input
                                    onChange={this.onChange}
                                    value={this.state.password}
                                    error={errors.password}
                                    id='password'
                                    type='password'
                                    className={classnames('', {
                                        invalid: errors.password
                                    })}
                                />
                                <label htmlFor='password'>Password</label>
                                <span className='red-text'>{errors.password}</span>
                            </div>


                            <div className='input-field col s12'>
                                <input
                                    onChange={this.onChange}
                                    value={this.state.password2}
                                    error={errors.password2}
                                    id='password2'
                                    type='password'
                                    className={classnames('', {
                                        invalid: errors.password2
                                    })}
                                />
                                <label htmlFor='password2'>Confirm Password</label>
                                <span className='red-text'>{errors.password2}</span>
                            </div>
                            <div className='col s12' style={{paddingLeft: '11.250px'}}>
                                <button
                                    style={{
                                        width: '150px',
                                        borderRadius: '3px',
                                        letterSpacing: '1.5px',
                                        marginTop: '1rem'
                                    }}
                                    type='submit'
                                    className='btn btn-large waves-effect waves-light hoverable blue accent-3'
                                >
                                    Sign up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

Registration.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    {registerUser}
)(withRouter(Registration));

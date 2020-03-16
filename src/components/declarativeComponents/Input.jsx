import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FILLED } from './Button';

export const CHECKBOX = styled.input`

	${ ({ stringstyle }) => (stringstyle)}
`;

export const DATE = styled.input`

	${ ({ stringstyle }) => (stringstyle)}
`;

export const TIME = styled.input`

	${ ({ stringstyle }) => (stringstyle)}
`;

export const TEXT = styled.input`
    border: 1px solid #CCCCDD;
    padding: 1.6rem 1.4rem;
    font-size: 1.8rem;
    border-radius: 0.4rem;
    color: ${({ theme }) => theme.textPrimary || '#40405A'};
    &::placeholder {
        color: #CCCCDD;
    }
	${({ label }) => (label ? 'margin-bottom: 0.6rem !important' : '')};
	${({ stringstyle }) => (stringstyle)}
`;

export const RADIO = styled.input`

	${({ stringstyle }) => (stringstyle)}
`;

export const FILE = styled.input`

	${({ stringstyle }) => (stringstyle)}
`;

export const SUBMIT = styled.input`

	${({ stringstyle }) => (stringstyle)}
`;

export const LABEL = styled.label`
    font-size: 1.4rem;
    color: ${({ theme }) => theme.textPrimary || '#40405A'};
	${({ labelstringstyle }) => (labelstringstyle)}
`;

export function Input({ type, label, value, children, ...other }) {
    const INPUT = () => {
        switch (type) {
            case 'checkbox':
                return (
                    <CHECKBOX
                        type={type}
                        label={label}
                        id={label ? label : null}
                        {...other}
                    />
                )
            case 'submit':
                return (
                    <FILLED
                        type={type}
                        label={label}
                        {...other}
                    >
                        {value || children || ''}
                    </FILLED>
                )
            case 'date':
                return (
                    <DATE
                        type={type}
                        label={label}
                        id={label ? label : null}
                        {...other}
                    />
                )
            case 'time':
                return (
                    <TIME
                        type={type}
                        label={label}
                        id={label ? label : null}
                        {...other}
                    />
                )
            case 'text':
            case 'password':
            case 'email':
                return (
                    <TEXT
                        type={type}
                        label={label}
                        id={label ? label : null}
                        {...other}
                    />
                )
            case 'radio':
                return (
                    <RADIO
                        type={type}
                        label={label} labelstringstyle
                        id={label ? label : null}
                        {...other}
                    />
                )
            case 'file':
                return (
                    <FILE
                        type={type}
                        label={label}
                        id={label ? label : null}
                        {...other}
                    />
                )
            default:
                return null;
        };
    };

    return (<>
        <INPUT />
        {label ?
            <LABEL htmlFor={label} {...other}>
                {value || children || label}
            </LABEL>
            : null
        }
    </>);

};

Input.defaultProps = {
    type: 'grid',
    naked: false,
    stringstyle: '',
    labelstringstyle: '',
    childSpacing: '',
};

Input.propTypes = {
    type: PropTypes.oneOf(['checkbox', 'date', 'time', 'text', 'radio', 'email', 'file', 'password', 'submit']),
    naked: PropTypes.bool,
    stringstyle: PropTypes.string,
    labelstringstyle: PropTypes.string,
    childSpacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    childrenSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
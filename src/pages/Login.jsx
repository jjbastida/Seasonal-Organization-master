import React from 'react';
import { namedColors } from '../theme/colours';
import {TypedContent} from '../components/singularComponents/Typography'
import { PageHelm } from '../components/singularComponents/PageHelm';

export function Login() {
      const pageData={
		title: 'Login',
		description: 'Login page.',
	};
      return (
            <>
                  <PageHelm pageData={pageData}/>
                  <TypedContent type='h2'>
                        Login
                  </TypedContent>
            </>
      )
}

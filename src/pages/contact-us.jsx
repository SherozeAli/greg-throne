import React from 'react';
import Layout from '../components/Layout/index';
import SEO from '../components/SEO/index';
import ContactUs from '../components/ContactUs';

const Contact = () => {
	return (
		<Layout>
			<SEO title="Contact Us" />
			<ContactUs />
		</Layout>
	);
};

export default Contact;

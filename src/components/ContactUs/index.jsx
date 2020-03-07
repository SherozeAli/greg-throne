import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import './index.css'
import {
	Parallax, ContentCol, ContactForm, WhyHire,
} from './components'

const ContactUs = () => (
	<>
		<Parallax />
		<Container fluid>
			<Row className="px-5 my-5">
				<Col md="8">
					<ContentCol />
				</Col>
				<Col md="4">
					<ContactForm />
				</Col>
			</Row>
		</Container>
		<Container fluid style={{ backgroundColor: '#CD3A28' }} className="pt-4">
			<Row>
				<Col>
					<WhyHire />
				</Col>
			</Row>
		</Container>
	</>
)

export default ContactUs

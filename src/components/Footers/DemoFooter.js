import React from 'react';

// reactstrap components
import { Button, Row, Container } from 'reactstrap';

function DemoFooter() {
	return (
		<footer className="footer footer-black footer-white">
			<Container>
				<Row>
					<div className="credits ml-auto">
						<span className="copyright">
							© {new Date().getFullYear()}, made with <i className="fa fa-heart heart" /> by{' '}
							<a href="https://cypher-resume.herokuapp.com">Cypher</a>
						</span>
					</div>
				</Row>
			</Container>
		</footer>
	);
}

export default DemoFooter;

import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Particle from "./Particle";

function MyAudits() {
  const [pdfs, setPdfs] = useState([]);

  // Fetch PDFs dynamically from the "Audits" folder
  useEffect(() => {
    const fetchPdfs = async () => {
      const context = require.context("../Assets/Audits", false, /\.pdf$/);
      const pdfPaths = context.keys().map(context);
      setPdfs(pdfPaths);
    };

    fetchPdfs();
  }, []);

  return (
    <Container fluid className="my-audits-section">
      <Particle /> {/* Adds the starry background */}
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Audit Reports</strong>
        </h1>
        <p style={{ color: "white" }}>
          Below are the audit reports I have completed for various projects.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {pdfs.map((pdf, index) => (
            <Col md={4} key={index} className="project-card">
              <Card>
                <Card.Body>
                  <embed
                    src={pdf}
                    type="application/pdf"
                    width="100%"
                    height="300px"
                  />
                  <Button
                    variant="primary"
                    href={pdf}
                    target="_blank"
                    className="mt-3 w-100"
                  >
                    View Full Report
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default MyAudits;
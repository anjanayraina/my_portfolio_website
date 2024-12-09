import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function MyAudits() {
  const [pdfs, setPdfs] = useState([]);

  // Fetch the list of PDFs from the "Audits" folder
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
      <Container>
        <h1 className="purple" style={{ textAlign: "center", marginBottom: "20px" }}>
          My <span className="purple">Audits</span>
        </h1>
        <p style={{ textAlign: "center", marginBottom: "30px" }}>
          Below are the audit reports I have completed for various projects. Click to view or download.
        </p>
        <Row>
          {pdfs.map((pdf, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card>
                <Card.Body>
                  <embed
                    src={pdf}
                    type="application/pdf"
                    width="100%"
                    height="300px"
                  />
                  <Button
                    variant="secondary"
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

import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Particle from "./Particle";

function MyAudits() {
  const [pdfs, setPdfs] = useState([]);

  useEffect(() => {
    // Fetch PDFs dynamically from the "Audits" folder
    const fetchPdfs = async () => {
      const context = require.context("../Assets/Audits", false, /\.pdf$/);
      const pdfPaths = context.keys().map(context);
      setPdfs(pdfPaths);
    };

    fetchPdfs();
  }, []);

  // Predefined descriptions for each report
  const descriptions = [
    "WyvernX Security Review.",
    "Zus Security Review",
    "Moonvera Solutions Security Review",
    "DAV Token Security Review",
    "EmpowerCoin Security Review",
    "Kendu NFT Marketplace Security Review",
    "Kendu NFT Marketplace Mitigation Report",
    "Zus NFT Storage Security Review",
    "QIE Domain Security Review",


  ];

  return (
    <Container fluid className="my-audits-section">
      <Particle /> {/* Adds the starry background */}
      <Container>
        <h1 className="project-heading" style={{ color: "#ffffff" }}>
          My <strong className="purple">Audit Reports</strong>
        </h1>
        <p style={{ color: "#b0b0b0" }}>
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
                    style={{
                      backgroundColor: "#6C63FF",
                      borderColor: "#6C63FF",
                      color: "#ffffff",
                    }}
                  >
                    View Full Report
                  </Button>
                </Card.Body>
              </Card>
              {/* Add descriptive text as a separate element */}
              <p
                style={{
                  marginTop: "10px",
                  fontSize: "0.9rem",
                  color: "#b0b0b0",
                  textAlign: "center",
                }}
              >
                {descriptions[index] || "Detailed findings and recommendations for this audit."}
              </p>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default MyAudits;

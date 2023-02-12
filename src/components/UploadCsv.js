import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { parseCsv } from "../utils/functions/parseCsv";

export default function UploadCsv({ setParsedJson }) {
  const [csvFile, setCsvFile] = useState(null);

  const handleSubmit = () => {
    parseCsv(csvFile, setParsedJson);
  };

  return (
    <Card className="my-5">
      <Card.Header className="text-center">
        Welcome to NRI Inventory
      </Card.Header>
      <Card.Body>
        <Card.Text>
          Please upload a <code>.csv</code> file received from an auctioneer
        </Card.Text>
        <div style={{ width: "500px" }}>
          <InputGroup className="mb-3">
            <Form.Control
              type="file"
              onChange={(e) => setCsvFile(e.target.files[0])}
            />
            <Button
              variant="outline-secondary"
              id="button-addon2"
              onClick={handleSubmit}
            >
              Button
            </Button>
          </InputGroup>
        </div>
      </Card.Body>
    </Card>
  );
}

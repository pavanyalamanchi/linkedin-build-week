import { useState } from "react";
import { Form } from "react-bootstrap";

const AddForm = () => {
  const [form, setForm] = useState({
    title: "",
    employmentType: "",
    company: "",
    location: "",
    start: { month: "", year: "" },
    end: { month: "", year: "" },
    industry: "",
    headline: "",
    description: "",
  });
  const [working, setWorking] = useState(false);
  const [headline, setHeadline] = useState(false);

  const handleInput = (key, value) => {
    setForm({
      ...form,
      [key]: value,
    });
  };

  return (
    <>
      <div className="container-form">
        <Form.Group className="w-100">
          <Form.Label>Title *</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ex. Retail Sales Manager"
            value={form.title}
            onChange={(e) => {
              handleInput("title", e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Employment type</Form.Label> <br />
          <select
            className="w-100"
            value={form.employmentType}
            onChange={(e) => {
              handleInput("employmentType", e.target.value);
            }}
          >
            <option>-</option>
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Self-employed</option>
            <option>Freelance</option>
            <option>Contract</option>
            <option>Internship</option>
            <option>Seasonal</option>
          </select>
          <p className="under-text">Country-specific employment types</p>
          <p className="learn-more">Learn More</p>
        </Form.Group>

        <Form.Group className="w-100">
          <Form.Label>Company *</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ex. Microsoft"
            value={form.company}
            onChange={(e) => {
              handleInput("company", e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="w-100">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ex. London, United Kingdom"
            value={form.location}
            onChange={(e) => {
              handleInput("location", e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="I am currently working in this role"
            onClick={() => {
              setWorking(!working);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Start Date *</Form.Label>
          <select
            value={form.start.month}
            onChange={(e) => {
              setForm({
                ...form,
                start: { ...form.start, month: e.target.value },
              });
            }}
          >
            <option>Month</option>
            <option>January</option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
            <option>May</option>
            <option>June</option>
            <option>July</option>
            <option>August</option>
            <option>September</option>
            <option>October</option>
            <option>November</option>
            <option>December</option>
          </select>

          <select
            value={form.start.year}
            onChange={(e) => {
              setForm({
                ...form,
                start: { ...form.start, year: e.target.value },
              });
            }}
          >
            <option>Year</option>
            <option>2021</option>
            <option>2020</option>
            <option>2019</option>
            <option>2018</option>
            <option>2017</option>
            <option>2016</option>
            <option>2015</option>
            <option>2014</option>
            <option>2013</option>
            <option>2012</option>
            <option>2011</option>
            <option>2010</option>
            <option>2009</option>
            <option>2008</option>
            <option>2007</option>
            <option>2006</option>
            <option>2005</option>
            <option>2004</option>
            <option>2003</option>
            <option>2002</option>
            <option>2001</option>
            <option>2000</option>
          </select>

          <Form.Label>End Date</Form.Label>
          {working ? (
            <span>Present</span>
          ) : (
            <>
              <select
                value={form.end.month}
                onChange={(e) => {
                  setForm({
                    ...form,
                    end: { ...form.end, month: e.target.value },
                  });
                }}
              >
                <option>Month</option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
              <select
                value={form.end.year}
                onChange={(e) => {
                  setForm({
                    ...form,
                    end: { ...form.end, year: e.target.value },
                  });
                }}
              >
                <option>Year</option>
                <option>2021</option>
                <option>2020</option>
                <option>2019</option>
                <option>2018</option>
                <option>2017</option>
                <option>2016</option>
                <option>2015</option>
                <option>2014</option>
                <option>2013</option>
                <option>2012</option>
                <option>2011</option>
                <option>2010</option>
                <option>2009</option>
                <option>2008</option>
                <option>2007</option>
                <option>2006</option>
                <option>2005</option>
                <option>2004</option>
                <option>2003</option>
                <option>2002</option>
                <option>2001</option>
                <option>2000</option>
              </select>
            </>
          )}
        </Form.Group>

        <Form.Group>
          <Form.Label>Industry *</Form.Label> <br />
          <select
            className="w-100"
            value={form.industry}
            onChange={(e) => {
              handleInput("industry", e.target.value);
            }}
          >
            <option>Choose an industry...</option>
            <option>Accounting</option>
            <option>Arts & Crafts</option>
            <option>Business</option>
            <option>Design</option>
            <option>E-learning</option>
            <option>Farming</option>
            <option>...</option>
          </select>
        </Form.Group>

        <Form.Group>
          <Form.Check
            type="checkbox"
            label="Update my headline"
            onClick={() => {
              setHeadline(!headline);
            }}
          />
        </Form.Group>

        <Form.Group className={headline ? "w-100" : "d-none"}>
          <Form.Label>Headline *</Form.Label>
          <Form.Control
            type="text"
            value={form.headline}
            onChange={(e) => {
              handleInput("headline", e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={form.description}
            onChange={(e) => {
              handleInput("description", e.target.value);
            }}
          />
        </Form.Group>
        {console.log(form)}
      </div>
    </>
  );
};

export default AddForm;

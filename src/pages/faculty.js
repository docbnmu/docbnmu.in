import React from "react"
import Table from "react-bootstrap/Table"
import Layout from "../components/layout"
import SEO from "../components/seo"
import DrKK from "../../static/documents/faculty/DrKK.jpg"
import DrAKY1 from "../../static/documents/faculty/DrAKY1.jpg"
import DrAKY from "../../static/documents/faculty/DrAKY.jpg"
import DrNK from "../../static/documents/faculty/DrNK.jpg"
import DrMKG from "../../static/documents/faculty/DrMKG.jpg"
import DrAK from "../../static/documents/faculty/DrAK.jpg"
const Faculty = () => (
  <Layout pageInfo={{ pageName: "Faculty" }}>
    <SEO title="Faculty" />
    <div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>
              <strong>Name</strong>
            </th>
            <th>
              <strong>Designation</strong>
            </th>
            <th>
              <strong>Photo</strong>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dr. Kameshwar Kumar</td>
            <td>Head &amp; Associate Professor (Physical Chemistry)</td>
            <td>
              <img src={DrKK} class="img-fluid" alt="Dr. Kameshwar Kumar" />
            </td>
          </tr>
          <tr>
            <td>Dr. Ashok Kumar Yadav</td>
            <td>University Professor (Inorganic Chemistry)</td>
            <td>
              <img src={DrAKY1} class="img-fluid" alt="Dr. Ashok Kumar Yadav" />
            </td>
          </tr>
          <tr>
            <td>Dr. Arun Kumar Yadav</td>
            <td>University Professor (Organic Chemistry)</td>
            <td>
              <img src={DrAKY} class="img-fluid" alt="Dr. Arun Kumar Yadav" />
            </td>
          </tr>
          <tr>
            <td>Dr. Naresh Kumar</td>
            <td>University Professor (Inorganic Chemistry)</td>
            <td>
              <img src={DrNK} class="img-fluid" alt="Dr. Naresh Kumar" />
            </td>
          </tr>
          <tr>
            <td>Dr. Mohit Kumar Ghosh</td>
            <td>Associate Professor (Inorganic Chemistry)</td>
            <td>
              <img src={DrMKG} class="img-fluid" alt="Dr. Mohit Kumar Ghosh" />
            </td>
          </tr>
          <tr>
            <td>Dr. Anil Kumar</td>
            <td>Associate Professor (Organic Chemistry)</td>
            <td>
              <img src={DrAK} class="img-fluid" alt="Dr. Anil Kumar" />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
    <br></br>
    <hr></hr>
    <h3>Former HoDs</h3>

    <div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Former HODs</th>
            <th></th>
            <th>Tenure</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Prof. B. N. Prasad</td>
            <td></td>
            <td>1992-2008</td>
          </tr>
          <tr>
            <td>Prof. R. N. Kumar</td>
            <td></td>
            <td>2008-2010</td>
          </tr>
          <tr>
            <td>Dr. Naresh Kumar</td>
            <td></td>
            <td>2010-2011</td>
          </tr>
          <tr>
            <td>Dr. B. N. Prasad</td>
            <td></td>
            <td>2011-2012</td>
          </tr>
          <tr>
            <td>Dr. Kaushlandra Kumar</td>
            <td></td>
            <td>2012-2013</td>
          </tr>
          <tr>
            <td>Dr. B. N. Prasad</td>
            <td></td>
            <td>2013</td>
          </tr>
          <tr>
            <td>Dr. C. K. Yadav</td>
            <td></td>
            <td>2013-</td>
          </tr>
          <tr>
            <td>Dr. Kameshwar Kumar</td>
            <td></td>
            <td>-till date</td>
          </tr>
        </tbody>
      </Table>
    </div>
  </Layout>
)

export default Faculty
